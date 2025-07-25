import { ButtonComponent } from './components/button/button.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { SkillBarComponent } from './components/skill-bar/skill-bar.component';
import { TimelineItemComponent } from './components/timeline-item/timeline-item.component';
import { RevealOnScrollDirective } from './directives/reveal-on-scroll.directive';

// Export all shared components
export { ButtonComponent } from './components/button/button.component';
export { ContactFormComponent } from './components/contact-form/contact-form.component';
export { ProjectCardComponent } from './components/project-card/project-card.component';
export { SkillBarComponent } from './components/skill-bar/skill-bar.component';
export { TimelineItemComponent } from './components/timeline-item/timeline-item.component';
export { RevealOnScrollDirective } from './directives/reveal-on-scroll.directive';

// Convenience array for common imports
export const SHARED_COMPONENTS = [
  ButtonComponent,
  ProjectCardComponent,
  SkillBarComponent,
  TimelineItemComponent,
  ContactFormComponent,
  RevealOnScrollDirective,
] as const;
