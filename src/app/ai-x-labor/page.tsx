import { getAiXLaborArticles } from '@/lib/content';
import AiLaborArticleCard from '@/components/AiLaborArticleCard';

export default function AiXLabor() {
  const articles = getAiXLaborArticles();

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12 lg:py-16">
        <div className="mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl font-serif mb-4 text-gray-900">AI x Labor</h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-3xl">
            A selection of stories at the intersection of artificial intelligence and labor—about the people who build these systems, work inside them, and push back against them.
          </p>
        </div>
        
        {/* Grid layout: 3 columns on desktop, 2 on tablet, 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {articles.map((article, index) => (
            <AiLaborArticleCard
              key={index}
              title={article.displayTitle || article.title}
              publication={article.publication}
              url={article.url}
              date={article.date}
              imagePath={article.imagePath}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

