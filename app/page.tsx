'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-cyber-blue/10 rounded-full blur-3xl -top-48 -left-48 animate-float" />
          <div className="absolute w-96 h-96 bg-cyber-purple/10 rounded-full blur-3xl -bottom-48 -right-48 animate-float" style={{ animationDelay: '1s' }} />
        </div>

        <motion.div
          className="container mx-auto text-center relative z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-6 text-gradient"
          >
            Damien Mougenot
          </motion.h1>
          
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-300 mb-4"
          >
            Étudiant en Expert informatique - Bachelor 3
          </motion.p>
          
          <motion.p
            variants={itemVariants}
            className="text-lg text-cyber-blue mb-8"
          >
            Sophia Ynov Campus
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <Link
              href="/contact"
              className="px-8 py-3 bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-lg font-semibold hover:scale-105 transition-transform shadow-lg hover:shadow-cyber-blue/50"
            >
              Découvrir mon stage
            </Link>
            <Link
              href="/blog"
              className="px-8 py-3 border border-cyber-blue text-cyber-blue rounded-lg font-semibold hover:bg-cyber-blue/10 transition-all"
            >
              Lire les articles
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Présentation */}
      <section className="py-20 px-4 bg-dark-card/30">
        <motion.div
          className="container mx-auto max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-8 text-center">
            <span className="text-gradient">À propos de moi</span>
          </h2>
          
          <div className="bg-dark-card p-8 rounded-xl card-glow transition-all">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Étudiant en Expert informatique en Bachelor 3 à Sophia Ynov Campus, je suis passionné par le développement web et les infrastructures réseau. Mon parcours m'a permis d'acquérir des compétences variées en programmation, gestion de systèmes et bases de données.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              J'ai effectué mon stage chez <span className="text-cyber-blue font-semibold">Game Over VR</span>, un salon de réalité virtuelle à Villeneuve-Loubet, où j'ai contribué à la création de l'infrastructure réseau complète de l'établissement et accompagné les clients dans leurs expériences VR.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Ce blog retrace mon expérience de stage, mes missions techniques (infrastructure réseau, accueil clients) et mon ressenti sur cette expérience professionnelle enrichissante dans l'univers du gaming et de la réalité virtuelle.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href="/cv.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-lg font-semibold hover:scale-105 transition-transform shadow-lg hover:shadow-cyber-blue/50"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1M8 12l4 4m0 0l4-4m-4 4V4" />
                </svg>
                Télécharger mon CV
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* CV Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            className="text-4xl font-bold mb-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <span className="text-gradient">Curriculum Vitae</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Formation */}
            <motion.div
              className="bg-dark-card p-6 rounded-xl card-glow"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6 text-cyber-blue flex items-center gap-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                Formation
              </h3>
              <div className="space-y-4">
                <div className="border-l-2 border-cyber-purple pl-4">
                  <p className="text-sm text-gray-400">2026</p>
                  <p className="font-semibold text-white">Bachelor Informatique 3</p>
                  <p className="text-sm text-gray-300">Sophia Ynov Campus</p>
                </div>
                <div className="border-l-2 border-cyber-purple pl-4">
                  <p className="text-sm text-gray-400">2025</p>
                  <p className="font-semibold text-white">Bachelor Informatique 2</p>
                  <p className="text-sm text-gray-300">Sophia Ynov Campus</p>
                </div>
                <div className="border-l-2 border-cyber-purple pl-4">
                  <p className="text-sm text-gray-400">2024</p>
                  <p className="font-semibold text-white">Bachelor Informatique 1</p>
                  <p className="text-sm text-gray-300">Sophia Ynov Campus</p>
                </div>
                <div className="border-l-2 border-cyber-purple pl-4">
                  <p className="text-sm text-gray-400">2023</p>
                  <p className="font-semibold text-white">Bac STI2D</p>
                  <p className="text-sm text-gray-300">Spécialité informatique - Lycée Léonard de Vinci</p>
                </div>
              </div>
            </motion.div>

            {/* Compétences Techniques */}
            <motion.div
              className="bg-dark-card p-6 rounded-xl card-glow"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6 text-cyber-blue flex items-center gap-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                Compétences Techniques
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-400 mb-2">Langages de programmation</p>
                  <div className="flex flex-wrap gap-2">
                    {['Golang', 'Java'].map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-cyber-blue/10 text-cyber-blue rounded-full text-sm border border-cyber-blue/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-2">Script & Web</p>
                  <div className="flex flex-wrap gap-2">
                    {['Python', 'PHP', 'JavaScript', 'HTML', 'CSS'].map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-cyber-purple/10 text-cyber-purple rounded-full text-sm border border-cyber-purple/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-2">Systèmes & BDD</p>
                  <div className="flex flex-wrap gap-2">
                    {['Windows', 'Linux', 'SQL'].map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-neon-green/10 text-neon-green rounded-full text-sm border border-neon-green/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Projets */}
            <motion.div
              className="bg-dark-card p-6 rounded-xl card-glow"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6 text-cyber-blue flex items-center gap-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Expériences
              </h3>
              <ul className="space-y-4 text-gray-300">
                <li className="border-l-2 border-cyber-blue pl-4">
                  <p className="text-sm text-gray-400">10/01/2025 - 20/04/2025</p>
                  <p className="font-semibold text-white">Stage - Game Over VR</p>
                  <p className="text-sm">Villeneuve-Loubet</p>
                  <p className="text-sm mt-1">Infrastructure réseau, accueil clients VR</p>
                </li>
                <li className="border-l-2 border-cyber-purple pl-4">
                  <p className="text-sm text-gray-400">11/10/2023 - 15/05/2024</p>
                  <p className="font-semibold text-white">Projet de groupe</p>
                  <p className="text-sm">Sophia Antipolis</p>
                  <p className="text-sm mt-1">Gestion du Front End en développement web</p>
                </li>
                <li className="border-l-2 border-neon-green pl-4">
                  <p className="text-sm text-gray-400">04/11/2019 - 08/11/2019</p>
                  <p className="font-semibold text-white">Stage d'observation - MOPA</p>
                  <p className="text-sm">Arles</p>
                  <p className="text-sm mt-1">Rigging et modeling 3D (Maya)</p>
                </li>
              </ul>
            </motion.div>

            {/* Expertise */}
            <motion.div
              className="bg-dark-card p-6 rounded-xl card-glow"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6 text-cyber-blue flex items-center gap-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                Compétences Complémentaires
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-cyber-purple mt-1">▹</span>
                  <span>Développement Web Front End (HTML/CSS)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyber-purple mt-1">▹</span>
                  <span>Gestion de systèmes Windows et Linux</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyber-purple mt-1">▹</span>
                  <span>Rédaction de documentation technique</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyber-purple mt-1">▹</span>
                  <span>Gestion de base de données SQL</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyber-purple mt-1">▹</span>
                  <span>Infrastructure réseau et routage</span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* LinkedIn */}
          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <a
              href="https://www.linkedin.com/in/damien-mougenot-537a68332"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-lg font-semibold hover:scale-105 transition-transform shadow-lg"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              Voir mon profil LinkedIn
            </a>
          </motion.div>
        </div>
      </section>

      {/* Langues */}
      <section className="py-20 px-4 bg-dark-card/30">
        <div className="container mx-auto max-w-4xl">
          <motion.h2
            className="text-4xl font-bold mb-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <span className="text-gradient">Langues</span>
          </motion.h2>

          <motion.div
            className="grid md:grid-cols-2 gap-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-dark-card p-6 rounded-xl card-glow text-center">
              <div className="text-4xl mb-4">🇫🇷</div>
              <h3 className="text-xl font-semibold text-cyber-blue mb-2">Français</h3>
              <p className="text-gray-300">Langue natale</p>
            </div>
            <div className="bg-dark-card p-6 rounded-xl card-glow text-center">
              <div className="text-4xl mb-4">🇬🇧</div>
              <h3 className="text-xl font-semibold text-cyber-blue mb-2">Anglais</h3>
              <p className="text-gray-300">Niveau B2</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
