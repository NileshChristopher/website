import Image from 'next/image';
import Link from 'next/link';

interface AiLaborArticleCardProps {
  title: string;
  publication: string;
  url: string;
  date?: string;
  imagePath?: string;
}

export default function AiLaborArticleCard({ 
  title, 
  publication, 
  url, 
  date,
  imagePath 
}: AiLaborArticleCardProps) {
  const formattedDate = date ? new Date(date).toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  }) : null;

  return (
    <article className="group">
      <Link 
        href={url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block"
      >
        {/* Image placeholder */}
        <div className="relative w-full aspect-[4/3] mb-4 bg-gray-200 overflow-hidden">
          {imagePath ? (
            <Image
              src={imagePath}
              alt={title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-100">
              <span className="text-gray-400 text-sm">Image placeholder</span>
            </div>
          )}
        </div>
        
        {/* Title */}
        <h3 className="text-lg md:text-xl font-serif mb-2 text-gray-900 group-hover:underline">
          {title}
        </h3>
        
        {/* Publication and date */}
        <div className="text-sm text-gray-600">
          <span className="font-medium">{publication}</span>
          {formattedDate && <span className="ml-2">• {formattedDate}</span>}
        </div>
      </Link>
    </article>
  );
}

