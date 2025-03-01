'use client';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-white text-maxime-black dark:bg-maxime-dark-bg dark:text-maxime-white border-t border-maxime-black/10 dark:border-maxime-white/10">
      <div className="container-padding mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-xl font-bold">Maxime De Sogus</span>
          </div>
          
          <div className="text-maxime-black/70 dark:text-maxime-white/70">
            © {currentYear} All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
