import type { WebsiteCategory } from '@/lib/types';
import {
  Briefcase,
  Film,
  LucideProps,
  MessageSquare,
  Newspaper,
  ShoppingCart,
  ToyBrick,
} from 'lucide-react';

interface CategoryIconProps extends LucideProps {
  category: WebsiteCategory;
}

export function CategoryIcon({ category, ...props }: CategoryIconProps) {
  switch (category) {
    case 'Productivity':
      return <Briefcase {...props} />;
    case 'Entertainment':
      return <Film {...props} />;
    case 'Social Media':
      return <MessageSquare {...props} />;
    case 'News':
      return <Newspaper {...props} />;
    case 'Shopping':
      return <ShoppingCart {...props} />;
    case 'Other':
      return <ToyBrick {...props} />;
    default:
      return <ToyBrick {...props} />;
  }
}
