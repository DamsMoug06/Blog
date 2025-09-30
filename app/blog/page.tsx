/* eslint-disable react/no-unescaped-entities */
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { blogPosts } from '@/data/blogPosts';

export default function Blog() {
  const categories = Array.from(new Set(blogPosts.map(post => post.category)));

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Articles de Stage</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Découvrez mon expérience chez Game Over VR à travers ces articles détaillant mes missions, mes apprentissages et mon ressenti.
          </p>
        </motion.div>

        {/* Categories */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <span
              key={category}
              className="px-4 py-2 bg-dark-card border border-cyber-blue/30 rounded-full text-sm text-gray-300"
            >
              {category}
            </span>
          ))}
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/blog/${post.id}`}>
                <article className="bg-dark-card p-6 rounded-xl card-glow h-full flex flex-col hover:scale-105 transition-all duration-300 cursor-pointer group">
                  {/* Icon */}
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                    {post.icon}
                  </div>

                  {/* Category & Date */}
                  <div className="flex items-center justify-between mb-3 text-sm">
                    <span className="text-cyber-blue">{post.category}</span>
                    <span className="text-gray-500">{new Date(post.date).toLocaleDateString('fr-FR')}</span>
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl font-bold mb-3 text-white group-hover:text-cyber-blue transition-colors">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-gray-400 mb-4 flex-grow leading-relaxed">
                    {post.excerpt}
                  </p>

                  {/* Read More */}
                  <div className="flex items-center gap-2 text-cyber-purple group-hover:gap-4 transition-all">
                    <span className="font-semibold">Lire l'article</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </article>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          className="mt-20 grid md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="bg-dark-card p-6 rounded-xl card-glow text-center">
            <div className="text-4xl font-bold text-gradient mb-2">{blogPosts.length}</div>
            <div className="text-gray-400">Articles</div>
          </div>
          <div className="bg-dark-card p-6 rounded-xl card-glow text-center">
            <div className="text-4xl font-bold text-gradient mb-2">{categories.length}</div>
            <div className="text-gray-400">Catégories</div>
          </div>
          <div className="bg-dark-card p-6 rounded-xl card-glow text-center">
            <div className="text-4xl font-bold text-gradient mb-2">3</div>
            <div className="text-gray-400">Mois de stage</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
