import { getClips } from '@/lib/content';
import ArticleCard from '@/components/ArticleCard';

export default function Clips() {
  const clips = getClips();

  // Group clips by year
  const clipsByYear = clips.reduce((acc: { [key: number]: any[] }, clip: any) => {
    if (clip.date) {
      const year = new Date(clip.date).getFullYear();
      if (!acc[year]) {
        acc[year] = [];
      }
      acc[year].push(clip);
    }
    return acc;
  }, {});

  // Sort years descending (newest first)
  const years = Object.keys(clipsByYear)
    .map(Number)
    .sort((a, b) => b - a);

  // Sort clips within each year by date (newest first)
  years.forEach(year => {
    clipsByYear[year].sort((a: any, b: any) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return dateB - dateA;
    });
  });

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-8 md:py-12 lg:py-16">
        <div className="space-y-8">
          {years.length > 0 ? (
            years.map((year, yearIndex) => (
              <div key={year}>
                <h2 className="text-2xl md:text-3xl font-serif mb-6 text-gray-900">{year}</h2>
                <ul className="space-y-3 list-disc list-outside pl-5">
                  {clipsByYear[year].map((clip: any, index: number) => (
                    <ArticleCard
                      key={`${year}-${index}`}
                      title={clip.title}
                      publication={clip.publication}
                      url={clip.url}
                      date={clip.date}
                    />
                  ))}
                </ul>
                {/* Horizontal line between year sections */}
                {yearIndex < years.length - 1 && (
                  <hr className="mt-8 border-gray-300" />
                )}
              </div>
            ))
          ) : (
            <p className="text-gray-600">No clips available yet.</p>
          )}
        </div>
      </div>
    </div>
  );
}
