import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { rateLimit, getClientIp } from '@/lib/rate-limiter';

export async function POST(request: Request) {
  try {
    // Obtenir l'adresse IP du client
    const ip = getClientIp(request);
    
    // Vérifier si l'IP n'a pas dépassé sa limite de requêtes
    const rateLimitResult = await rateLimit(ip);
    
    // Si la limite est dépassée, renvoyer une erreur 429 (Too Many Requests)
    if (!rateLimitResult.success) {
      return NextResponse.json(
        { 
          error: 'Trop de demandes. Veuillez réessayer plus tard.'
        },
        { 
          status: 429,
          headers: {
            'Retry-After': `${rateLimitResult.retryAfter}`
          }
        }
      );
    }
    
    // Récupérer les données du formulaire
    const { name, email, message } = await request.json();

    // Vérifier que toutes les données nécessaires sont présentes
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Tous les champs sont requis' },
        { status: 400 }
      );
    }

    // Effectuer une validation supplémentaire des données
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Adresse email invalide' },
        { status: 400 }
      );
    }

    // Vérifier la longueur des champs
    if (name.length > 100 || email.length > 100 || message.length > 5000) {
      return NextResponse.json(
        { error: 'Un ou plusieurs champs dépassent la longueur maximale autorisée' },
        { status: 400 }
      );
    }

    // Configurer le transporteur d'emails
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Configurer les options d'email
    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER, // Envoi à soi-même
      replyTo: email,
      subject: `Nouveau message de ${name} via portfolio`,
      text: `
        Nom: ${name}
        Email: ${email}
        
        Message:
        ${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 5px;">
          <h2 style="color: #333; border-bottom: 1px solid #eaeaea; padding-bottom: 10px;">Nouveau message du formulaire de contact</h2>
          
          <p><strong>Nom:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #f9f9f9; border-radius: 4px;">
            <h3 style="margin-top: 0; color: #555;">Message:</h3>
            <p style="white-space: pre-line;">${message}</p>
          </div>
          
          <p style="margin-top: 30px; font-size: 12px; color: #999; text-align: center;">
            Ce message a été envoyé depuis le formulaire de contact de votre portfolio
          </p>
        </div>
      `,
    };

    // Envoyer l'email
    await transporter.sendMail(mailOptions);

    // Répondre avec succès
    return NextResponse.json({ 
      success: true
    }, { status: 200 });
  } catch (error) {
    console.error('Erreur d\'envoi d\'email:', error);
    return NextResponse.json(
      { error: 'Erreur lors de l\'envoi du message' },
      { status: 500 }
    );
  }
} 