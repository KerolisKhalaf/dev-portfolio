import { Component } from '@angular/core';
import { NavbarComponent } from './shared/components/navbar/navbar';
import { HeroComponent } from './features/hero/hero';
import { AboutComponent } from './features/about/about';
import { ExperienceComponent } from './features/experience/experience';
import { ProjectsComponent } from './features/projects/projects';
import { CertificationsComponent } from './features/certifications/certifications';
import { DevOpsComponent } from './features/devops/devops';
import { SkillsComponent } from './features/skills/skills';
import { FooterComponent } from './shared/components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    ExperienceComponent,
    ProjectsComponent,
    CertificationsComponent,
    DevOpsComponent,
    SkillsComponent,
    FooterComponent,
  ],
  template: `
    <app-navbar></app-navbar>
    <main class="main-content">
      <app-hero></app-hero>
      <app-about></app-about>
      <app-experience></app-experience>
      <app-projects></app-projects>
      <app-certifications></app-certifications>
      <app-devops></app-devops>
      <app-skills></app-skills>
      <app-footer></app-footer>
    </main>
  `,
  styles: [`
    .main-content {
      max-width: var(--container-max);
      margin: 0 auto;
      padding: 0 1.25rem;
      width: 100%;
      overflow-x: hidden;
    }
    @media (min-width: 768px) {
      .main-content { padding: 0 1.5rem; }
    }
    @media (min-width: 1024px) {
      .main-content { padding: 0 2rem; }
    }
  `],
})
export class AppComponent {}