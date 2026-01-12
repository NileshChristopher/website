interface ArticleCardProps {
  title: string;
  publication: string;
  url: string;
  date?: string;
}

export default function ArticleCard({ title, publication, url }: ArticleCardProps) {
  return (
    <li className="text-base md:text-lg leading-relaxed text-gray-900">
      <a 
        href={url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="hover:underline"
      >
        {title}
      </a>
      {' '}— {publication}
    </li>
  );
}
