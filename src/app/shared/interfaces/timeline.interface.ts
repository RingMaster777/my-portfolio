export interface TimelineItem {
  id: number;
  title: string;
  company?: string;
  institution?: string;
  location: string;
  startDate: Date;
  endDate?: Date;
  current: boolean;
  description: string[];
  type: 'education' | 'experience';
  icon?: string;
}
