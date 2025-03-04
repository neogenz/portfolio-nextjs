import { RateLimiter } from 'limiter';

// Stockage des limiteurs de taux par IP
const limiters: Map<string, RateLimiter> = new Map();

// Stockage des timestamps pour chaque IP
const resetTimestamps: Map<string, number> = new Map();

// Configuration: 2 requêtes maximum par adresse IP dans une fenêtre de 15 minutes (900 secondes)
const REQUESTS_PER_WINDOW = 2;
const WINDOW_SIZE_IN_SECONDS = 900;

/**
 * Vérifie si une IP a dépassé la limite de requêtes autorisées
 * @param ip L'adresse IP à vérifier
 * @returns Un objet indiquant si la requête est autorisée et le temps d'attente si applicable
 */
export async function rateLimit(ip: string): Promise<{ 
  success: boolean; 
  limit: number;
  remaining: number;
  retryAfter?: number;
}> {
  // Créer un nouveau limiteur pour cette IP s'il n'existe pas déjà
  if (!limiters.has(ip)) {
    const newRateLimiter = new RateLimiter({
      tokensPerInterval: REQUESTS_PER_WINDOW,
      interval: WINDOW_SIZE_IN_SECONDS * 1000, // en millisecondes
    });
    
    limiters.set(ip, newRateLimiter);
    // Initialiser le timestamp de réinitialisation
    resetTimestamps.set(ip, Date.now() + WINDOW_SIZE_IN_SECONDS * 1000);
  }
  
  const limiter = limiters.get(ip)!;
  const remainingRequests = limiter.getTokensRemaining();
  
  // Vérifier si des tokens sont disponibles
  if (remainingRequests < 1) {
    // Calculer le temps à attendre avant de pouvoir réessayer
    const resetTime = resetTimestamps.get(ip) || 0;
    const waitTimeInSeconds = Math.max(0, Math.ceil((resetTime - Date.now()) / 1000));
    
    return {
      success: false,
      limit: REQUESTS_PER_WINDOW,
      remaining: 0,
      retryAfter: Math.max(1, waitTimeInSeconds)
    };
  }
  
  // Consommer un token
  await limiter.removeTokens(1);
  
  return { 
    success: true,
    limit: REQUESTS_PER_WINDOW,
    remaining: limiter.getTokensRemaining()
  };
}

/**
 * Obtient une adresse IP fiable à partir d'une requête
 * Prend en compte les en-têtes spécifiques des proxys
 */
export function getClientIp(request: Request): string {
  const headers = request.headers;
  const forwardedFor = headers.get('x-forwarded-for');
  
  if (forwardedFor) {
    // Le premier IP dans la liste est généralement l'IP d'origine du client
    const ips = forwardedFor.split(',');
    return ips[0].trim();
  }
  
  const realIp = headers.get('x-real-ip');
  if (realIp) {
    return realIp;
  }
  
  // Fallback: utiliser une valeur par défaut si aucune IP n'est trouvée
  // En production, il est rare que nous arrivions ici
  return '127.0.0.1';
} 