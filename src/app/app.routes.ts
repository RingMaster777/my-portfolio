import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./features/home/home.component').then((m) => m.HomeComponent),
    title: 'John Doe - Full Stack Developer',
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./features/about/about.component').then((m) => m.AboutComponent),
    title: 'About Me - John Doe',
  },
  {
    path: 'projects',
    loadComponent: () =>
      import('./features/projects/projects.component').then(
        (m) => m.ProjectsComponent
      ),
    title: 'Projects - John Doe',
  },
  {
    path: 'resume',
    loadComponent: () =>
      import('./features/resume/resume.component').then(
        (m) => m.ResumeComponent
      ),
    title: 'Resume - John Doe',
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./features/contact/contact.component').then(
        (m) => m.ContactComponent
      ),
    title: 'Contact - John Doe',
  },
  {
    path: '**',
    redirectTo: '/home',
  },
];
