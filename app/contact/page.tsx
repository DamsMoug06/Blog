/* eslint-disable react/no-unescaped-entities */
'use client';

import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Mon Stage</span>
          </h1>
          <p className="text-xl text-gray-300">
            Découvrez Game Over VR et le contexte de mon stage
          </p>
        </motion.div>

        {/* Game Over VR Presentation */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-dark-card p-8 rounded-xl card-glow">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-cyber-blue to-cyber-purple rounded-lg flex items-center justify-center text-3xl">
                🎮
              </div>
              <div>
                <h2 className="text-3xl font-bold text-cyber-blue">Game Over VR</h2>
                <p className="text-gray-400">Salon de Réalité Virtuelle</p>
              </div>
            </div>

            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p className="text-lg">
                <span className="text-cyber-blue font-semibold">Game Over VR</span> est un salon innovant de réalité virtuelle situé à Villeneuve-Loubet, offrant une expérience immersive unique dans l'univers du gaming et de la VR.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-dark-bg/50 p-5 rounded-lg border border-cyber-blue/20">
                  <h3 className="text-cyber-blue font-semibold mb-2 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Localisation
                  </h3>
                  <p>Villeneuve-Loubet, Alpes-Maritimes</p>
                </div>
                
                <div className="bg-dark-bg/50 p-5 rounded-lg border border-cyber-purple/20">
                  <h3 className="text-cyber-purple font-semibold mb-2 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Secteur
                  </h3>
                  <p>Divertissement & Technologies VR</p>
                </div>
              </div>

              <p>
                L'établissement propose une large gamme d'expériences en réalité virtuelle, allant des jeux d'action aux simulations immersives, en passant par des expériences collaboratives. C'est dans ce cadre technologique et innovant que j'ai effectué mon stage de fin d'année.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Stage Context */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="text-gradient">Contexte du Stage</span>
          </h2>

          <div className="bg-dark-card p-8 rounded-xl card-glow">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-cyber-blue mb-3 flex items-center gap-2">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  Missions Principales
                </h3>
                <ul className="space-y-3 text-gray-300 ml-8">
                  <li className="flex items-start gap-3">
                    <span className="text-cyber-blue mt-1">▹</span>
                    <div>
                      <span className="font-semibold text-white">Architecture Réseau :</span> Conception et mise en place de l'infrastructure réseau du bâtiment
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyber-blue mt-1">▹</span>
                    <div>
                      <span className="font-semibold text-white">Développement Web :</span> Refonte complète du site internet de l'entreprise
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyber-blue mt-1">▹</span>
                    <div>
                      <span className="font-semibold text-white">Développement Unity :</span> Création et intégration d'un système de quiz pour le salon VR
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyber-blue mt-1">▹</span>
                    <div>
                      <span className="font-semibold text-white">Participation commerciale :</span> Contact direct avec la clientèle et découverte du commerce
                    </div>
                  </li>
                </ul>
              </div>

              <div className="border-t border-cyber-blue/20 pt-6">
                <h3 className="text-xl font-semibold text-cyber-purple mb-3 flex items-center gap-2">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Environnement de Travail
                </h3>
                <p className="text-gray-300 ml-8">
                  J'ai eu la chance d'évoluer dans un environnement dynamique et technologique, au cœur d'un salon VR moderne. L'ambiance de travail était excellente, marquée par une bonne cohésion d'équipe et une approche collaborative. J'ai particulièrement apprécié la possibilité de travailler directement avec les clients, ce qui m'a permis de développer mes compétences relationnelles et ma compréhension des besoins utilisateurs.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Encadrants */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="text-gradient">Mes Encadrants</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Olivier Adam */}
            <div className="bg-dark-card p-8 rounded-xl card-glow hover:scale-105 transition-transform">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-cyber-blue to-cyber-purple rounded-full flex items-center justify-center text-2xl">
                  👨‍💼
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Olivier Adam</h3>
                  <p className="text-cyber-blue">Maître de stage et directeur</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Olivier m'a accompagné tout au long de mon stage avec professionnalisme et bienveillance. Son expertise technique et sa pédagogie m'ont permis de progresser rapidement sur les différentes missions qui m'ont été confiées.
              </p>
            </div>

            {/* Julien Margot */}
            <div className="bg-dark-card p-8 rounded-xl card-glow hover:scale-105 transition-transform">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-cyber-purple to-cyber-pink rounded-full flex items-center justify-center text-2xl">
                  👨‍💼
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Julien Margot</h3>
                  <p className="text-cyber-purple">Employé</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Julien a su créer un environnement de travail stimulant et m'a fait confiance pour mener à bien des projets techniques importants. Sa vision du secteur VR/gaming m'a beaucoup apporté.
              </p>
            </div>
          </div>
        </motion.section>

        {/* CTA to Articles */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-gray-300 mb-6 text-lg">
            Découvrez en détail mes missions et mon expérience dans mes articles
          </p>
          <a
            href="/blog"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-lg font-semibold hover:scale-105 transition-transform shadow-lg"
          >
            Lire les articles
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </motion.div>
      </div>
    </div>
  );
}
