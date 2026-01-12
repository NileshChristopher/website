interface BioContentProps {
  content: string;
}

export default function BioContent({ content }: BioContentProps) {
  // Simple markdown-like parsing for links and formatting
  const parseContent = (text: string) => {
    // Split by paragraphs
    const paragraphs = text.split('\n\n').filter(p => p.trim());
    
    return paragraphs.map((para, idx) => {
      // Skip the first line if it's a heading
      if (para.startsWith('# ')) {
        return null;
      }
      
      // Parse links [text](url)
      let processed = para;
      const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
      processed = processed.replace(linkRegex, (match, text, url) => {
        return `<a href="${url}" target="_blank" rel="noopener noreferrer" class="underline hover:opacity-80">${text}</a>`;
      });
      
      // Parse bold **text**
      processed = processed.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
      
      // Parse italic _text_
      processed = processed.replace(/_([^_]+)_/g, '<em>$1</em>');
      
      return (
        <p 
          key={idx} 
          className="mb-4 md:mb-6 text-lg md:text-xl leading-relaxed text-gray-900"
          dangerouslySetInnerHTML={{ __html: processed }}
        />
      );
    }).filter(Boolean);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 md:py-12">
      {parseContent(content)}
    </div>
  );
}

