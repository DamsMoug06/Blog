'use client';

import { useEffect, useState } from 'react';

interface ReactMarkdownProps {
  content: string;
}

const ReactMarkdown = ({ content }: ReactMarkdownProps) => {
  const [parsedContent, setParsedContent] = useState<string>('');

  useEffect(() => {
    // Simple markdown parser
    let html = content;

    // Headers
    html = html.replace(/^### (.*$)/gim, '<h3 class="text-2xl font-bold mt-8 mb-4 text-cyber-purple">$1</h3>');
    html = html.replace(/^## (.*$)/gim, '<h2 class="text-3xl font-bold mt-10 mb-6 text-cyber-blue">$1</h2>');
    html = html.replace(/^# (.*$)/gim, '<h1 class="text-4xl font-bold mt-12 mb-8 text-gradient">$1</h1>');

    // Bold
    html = html.replace(/\*\*(.*?)\*\*/gim, '<strong class="text-white font-semibold">$1</strong>');

    // Code blocks
    html = html.replace(/```(\w+)?\n([\s\S]*?)```/gim, '<pre class="bg-dark-bg p-4 rounded-lg overflow-x-auto my-4 border border-cyber-blue/20"><code class="text-cyan-300 text-sm">$2</code></pre>');
    
    // Inline code
    html = html.replace(/`([^`]+)`/gim, '<code class="bg-cyber-blue/10 text-cyber-blue px-2 py-1 rounded text-sm">$1</code>');

    // Links
    html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/gim, '<a href="$2" class="text-cyber-blue hover:text-cyber-purple underline" target="_blank" rel="noopener noreferrer">$1</a>');

    // Lists
    html = html.replace(/^\s*-\s+(.*)$/gim, '<li class="ml-6 mb-2 text-gray-300">$1</li>');
    html = html.replace(/(<li[\s\S]*<\/li>)/, '<ul class="list-disc my-4">$1</ul>');

    // Numbered lists
    html = html.replace(/^\s*\d+\.\s+(.*)$/gim, '<li class="ml-6 mb-2 text-gray-300">$1</li>');

    // Paragraphs
    html = html.split('\n\n').map(para => {
      if (para.match(/^<[h|u|o|l|p|d]/)) return para;
      return `<p class="text-gray-300 leading-relaxed mb-4">${para}</p>`;
    }).join('');

    // Checkmarks
    html = html.replace(/✅/g, '<span class="text-neon-green text-xl">✅</span>');
    html = html.replace(/⬆️/g, '<span class="text-cyber-blue text-xl">⬆️</span>');
    html = html.replace(/🔮/g, '<span class="text-cyber-purple text-xl">🔮</span>');
    html = html.replace(/✨/g, '<span class="text-yellow-400 text-xl">✨</span>');
    html = html.replace(/🔍/g, '<span class="text-cyber-blue text-xl">🔍</span>');

    setParsedContent(html);
  }, [content]);

  return <div className="markdown-content" dangerouslySetInnerHTML={{ __html: parsedContent }} />;
};

export default ReactMarkdown;
