import Image from 'next/image';
import { getBioContent } from '@/lib/content';
import BioContent from '@/components/BioContent';

export default function Home() {
  const bioContent = getBioContent();

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 py-10 lg:px-12 lg:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Profile Photo - left side */}
          <div className="w-full">
            <div className="relative w-full aspect-[3/4] overflow-hidden">
              <Image
                src="/images/profile-photo.jpg"
                alt="Varsha Bansal"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Bio Content - right side */}
          <div>
            <BioContent content={bioContent} />
          </div>
        </div>
      </div>
    </div>
  );
}

