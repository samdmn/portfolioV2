import { Routes } from '@angular/router';
import { HomePage } from './pages/Home/home.page';
import { ProjectsPage } from './pages/Projects/projects.page';
import { ExperiencesPage } from './pages/Experiences/experiences.page';
import { ContactPage } from './pages/Contact/contact.page';

export const routes: Routes = [
  {
    path: '',
    component : HomePage
  },
  {
    path: 'projects',
    component : ProjectsPage
  },
  {
    path: 'experiences',
    component : ExperiencesPage
  },
  {
    path: 'contact',
    component : ContactPage
  }
];
