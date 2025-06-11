import { Badge } from '../ui/badge';
import SlideInFromBottom from './slide-in-from-bottom';

export default function SectionHeader({ section, title, description }) {
  return (
    <div className="space-y-4 mb-10">
      <SlideInFromBottom>
        <Badge variant="secondary">{section}</Badge>
      </SlideInFromBottom>

      <SlideInFromBottom delay={0.4}>
        <h2 className="text-4xl md:text-5xl font-bold">{title}</h2>
      </SlideInFromBottom>

      <SlideInFromBottom delay={0.5}>
        <p className="text-muted-foreground">{description}</p>
      </SlideInFromBottom>
    </div>
  );
}
