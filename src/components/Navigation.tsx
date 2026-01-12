import Link from 'next/link';

interface NavigationProps {
  onLinkClick?: () => void;
}

export default function Navigation({ onLinkClick }: NavigationProps) {
  const navItems = [
    { href: '/', label: 'About' },
    { href: '/ai-x-labor', label: 'AI x Labor' },
    { href: '/clips', label: 'Clips' },
    { href: '/appearances', label: 'Appearances' },
  ];

  return (
    <nav className="flex flex-col md:flex-row gap-4 md:gap-8">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          onClick={onLinkClick}
          className="text-lg md:text-xl text-white hover:opacity-80 transition-opacity font-serif"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}

