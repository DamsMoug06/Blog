const Footer = () => {
  return (
    <footer className="bg-dark-card/50 border-t border-cyber-purple/20 py-8 mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-gray-400">
              © 2025 Damien Mougenot - Rapport de Stage
            </p>
            <p className="text-sm text-gray-500 mt-1">
              Stage effectué chez Game Over VR - Villeneuve-Loubet
            </p>
          </div>
          
          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/in/damien-mougenot-537a68332"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyber-blue hover:text-cyber-purple transition-colors flex items-center gap-2"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              LinkedIn
            </a>
            <a
              href="/cv.pdf"
              download
              className="text-cyber-blue hover:text-cyber-purple transition-colors flex items-center gap-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1M8 12l4 4m0 0l4-4m-4 4V4" />
              </svg>
              Télécharger le CV
            </a>
            <a
              href="https://github.com/DamsMoug06"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyber-blue hover:text-cyber-purple transition-colors flex items-center gap-2"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.05-.02-2.06-3.34.73-4.04-1.61-4.04-1.61-.55-1.38-1.34-1.75-1.34-1.75-1.09-.75.08-.74.08-.74 1.2.08 1.84 1.23 1.84 1.23 1.07 1.84 2.81 1.31 3.49 1 .11-.78.42-1.31.76-1.61-2.66-.3-5.46-1.33-5.46-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23.96-.27 1.98-.4 3-.41 1.02.01 2.04.14 3 .41 2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.25 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.63-5.47 5.93.43.37.81 1.1.81 2.22 0 1.6-.01 2.89-.01 3.29 0 .32.21.7.83.58C20.56 21.8 24 17.3 24 12 24 5.37 18.63 0 12 0z" clipRule="evenodd" />
              </svg>
              GitHub
            </a>
          </div>
        </div>
        
        <div className="mt-6 text-center text-xs text-gray-500">
          <p>Conçu avec Next.js & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
