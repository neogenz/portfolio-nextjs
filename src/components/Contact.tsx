'use client';

import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    
    // Show success message
    toast({
      title: "Message envoyé",
      description: "Merci de m'avoir contacté. Je vous répondrai bientôt.",
    });
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="section-padding bg-white dark:bg-maxime-dark-bg">
      <div className="container-padding mx-auto">
        {/* Minimal Header */}
        <div className="text-center mb-24">
          <div className="flex items-center justify-center gap-3 mb-4 reveal">
            <span className="w-2 h-2 rounded-full bg-maxime-primary dark:bg-maxime-white"></span>
            <span className="text-sm uppercase tracking-widest text-maxime-secondary dark:text-maxime-white/70">Contact</span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-maxime-primary dark:text-maxime-white reveal" style={{ animationDelay: '0.2s' }}>
            Créons ensemble
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          <div className="reveal">
            <span className="inline-block px-3 py-1 text-sm bg-maxime-tertiary dark:bg-maxime-white text-maxime-primary mb-4">Contact</span>
            <h2 className="section-title text-maxime-primary dark:text-maxime-white">Créons ensemble quelque chose d'extraordinaire</h2>
            <p className="text-maxime-secondary dark:text-maxime-white/80 text-lg">
              Je suis toujours ouvert à de nouveaux projets et collaborations. N'hésitez pas à me contacter
              si vous avez un projet en tête ou simplement pour échanger.
            </p>
            
            <div className="mt-8">
              <p className="mb-2 text-maxime-secondary/60 dark:text-maxime-white/60">Email :</p>
              <a href="mailto:maxime.desogus@gmail.com" className="text-lg text-maxime-primary dark:text-maxime-white hover:text-maxime-primary/80 dark:hover:text-maxime-white/80 transition-colors">maxime.desogus@gmail.com</a>
            </div>
            
            <div className="mt-4">
              <p className="mb-2 text-maxime-secondary/60 dark:text-maxime-white/60">Téléphone :</p>
              <a href="tel:+41764987631" className="text-lg text-maxime-primary dark:text-maxime-white hover:text-maxime-primary/80 dark:hover:text-maxime-white/80 transition-colors">+41 76 498 76 31</a>
            </div>
            
            <div className="mt-4">
              <p className="mb-2 text-maxime-secondary/60 dark:text-maxime-white/60">Localisation :</p>
              <p className="text-lg text-maxime-primary dark:text-maxime-white">Vétroz, Valais, Suisse</p>
            </div>
            
            <div className="mt-6">
              <p className="mb-2 text-maxime-secondary/60 dark:text-maxime-white/60">Me suivre :</p>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/in/maxime-desogus" target="_blank" rel="noopener noreferrer" 
                   className="text-maxime-primary dark:text-maxime-white hover:text-maxime-primary/80 dark:hover:text-maxime-white/70 transition-colors">LinkedIn</a>
              </div>
            </div>
          </div>
          
          <div className="reveal" style={{ animationDelay: '0.2s' }}>
            <form onSubmit={handleSubmit} className="bg-maxime-tertiary dark:bg-zinc-800 p-8 rounded-lg shadow-xs">
              <div className="mb-6">
                <label htmlFor="name" className="text-sm text-maxime-secondary/70 dark:text-zinc-400 mb-2 block">Nom</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-maxime-tertiary dark:bg-zinc-800 border-b border-maxime-secondary/20 dark:border-zinc-700 focus:border-maxime-primary dark:focus:border-zinc-500 py-2 text-maxime-primary dark:text-white placeholder:text-maxime-secondary/40 dark:placeholder:text-zinc-500 outline-hidden transition-colors"
                  placeholder="Votre nom"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="text-sm text-maxime-secondary/70 dark:text-zinc-400 mb-2 block">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-maxime-tertiary dark:bg-zinc-800 border-b border-maxime-secondary/20 dark:border-zinc-700 focus:border-maxime-primary dark:focus:border-zinc-500 py-2 text-maxime-primary dark:text-white placeholder:text-maxime-secondary/40 dark:placeholder:text-zinc-500 outline-hidden transition-colors"
                  placeholder="Votre email"
                />
              </div>
              
              <div className="mb-8">
                <label htmlFor="message" className="text-sm text-maxime-secondary/70 dark:text-zinc-400 mb-2 block">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-maxime-tertiary dark:bg-zinc-800 border-b border-maxime-secondary/20 dark:border-zinc-700 focus:border-maxime-primary dark:focus:border-zinc-500 py-2 text-maxime-primary dark:text-white placeholder:text-maxime-secondary/40 dark:placeholder:text-zinc-500 outline-hidden resize-none transition-colors"
                  placeholder="Votre message"
                ></textarea>
              </div>
              
              <button type="submit" className="px-6 py-3 bg-maxime-primary dark:bg-white text-white dark:text-zinc-900 hover:bg-maxime-primary/90 dark:hover:bg-white/90 inline-flex items-center gap-2 transition-all duration-300">
                Envoyer le message <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
