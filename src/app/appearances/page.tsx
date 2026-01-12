import { getAppearances } from '@/lib/content';

export default function Appearances() {
  const appearances = getAppearances();

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-8 md:py-12 lg:py-16">
        <div className="flex flex-col md:flex-row md:gap-12">
          {/* Image - on top for mobile, right side for desktop */}
          <div className="md:w-64 lg:w-72 xl:w-80 md:flex-shrink-0 md:order-2 mb-8 md:mb-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/appearance/appearance-img.webp"
              alt="Varsha Bansal speaking"
              className="w-full max-w-sm mx-auto md:max-w-none h-auto object-cover rounded-lg md:sticky md:top-8"
            />
          </div>
          
          {/* Bullet point list - below image on mobile, left side on desktop */}
          <div className="md:flex-1 md:order-1">
            <ul className="space-y-4 list-disc list-outside pl-5">
              {appearances.length > 0 ? (
                appearances.map((appearance: any, index: number) => (
                  <li 
                    key={index} 
                    className="text-base md:text-lg leading-relaxed text-gray-800 [&_a]:underline [&_a]:hover:opacity-70"
                    dangerouslySetInnerHTML={{ __html: appearance.html }}
                  />
                ))
              ) : (
                <li className="text-gray-600">No appearances listed yet.</li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
