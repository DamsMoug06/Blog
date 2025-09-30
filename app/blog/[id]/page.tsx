'use client';

import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { blogPosts } from '@/data/blogPosts';
import ReactMarkdown from '@/components/ReactMarkdown';

export default function BlogPost() {
  const params = useParams();
  const post = blogPosts.find(p => p.id === params.id);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-gradient">Article non trouvé</h1>
          <Link href="/blog" className="text-cyber-blue hover:text-cyber-purple transition-colors">
            Retour aux articles
          </Link>
        </div>
      </div>
    );
  }

  // Get related posts (exclude current)
  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id && p.category === post.category)
    .slice(0, 2);

  return (
    <div className="min-h-screen py-20 px-4">
      <article className="container mx-auto max-w-4xl">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-cyber-blue hover:text-cyber-purple transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Retour aux articles
          </Link>
        </motion.div>

        {/* Header */}
        <motion.header
          className="mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="text-6xl">{post.icon}</div>
            <div>
              <div className="flex items-center gap-4 mb-2 text-sm">
                <span className="px-3 py-1 bg-cyber-blue/10 text-cyber-blue rounded-full border border-cyber-blue/30">
                  {post.category}
                </span>
                <span className="text-gray-400">
                  {new Date(post.date).toLocaleDateString('fr-FR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gradient">
                {post.title}
              </h1>
            </div>
          </div>
          <p className="text-xl text-gray-300 leading-relaxed border-l-4 border-cyber-purple pl-6">
            {post.excerpt}
          </p>
        </motion.header>

        {/* Content */}
        <motion.div
          className="prose prose-invert prose-lg max-w-none mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-dark-card/50 p-8 rounded-xl">
            <ReactMarkdown content={post.content} />
          </div>
        </motion.div>

        {/* Author Info */}
        <motion.div
          className="bg-dark-card p-8 rounded-xl card-glow mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 rounded-full overflow-hidden ring-2 ring-cyber-blue/40">
              <Image
                src="/photo.jpg"
                alt="Photo de profil"
                width={80}
                height={80}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-1">Damien Mougenot</h3>
              <p className="text-gray-400 mb-2">Développeur en formation - Bachelor Informatique</p>
              <p className="text-sm text-gray-500">Stage effectué chez Game Over VR</p>
            </div>
          </div>
        </motion.div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center">
              <span className="text-gradient">Articles Similaires</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link key={relatedPost.id} href={`/blog/${relatedPost.id}`}>
                  <div className="bg-dark-card p-6 rounded-xl card-glow hover:scale-105 transition-transform cursor-pointer group">
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                      {relatedPost.icon}
                    </div>
                    <div className="text-sm text-cyber-blue mb-2">{relatedPost.category}</div>
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyber-blue transition-colors">
                      {relatedPost.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">{relatedPost.excerpt}</p>
                    <div className="flex items-center gap-2 text-cyber-purple">
                      <span className="text-sm font-semibold">Lire l'article</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </motion.section>
        )}
      </article>
    </div>
  );
}
