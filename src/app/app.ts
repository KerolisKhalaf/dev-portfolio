import { Component } from '@angular/core';
import { NavbarComponent } from './shared/components/navbar/navbar';
import { HeroComponent } from './features/hero/hero';
import { AboutComponent } from './features/about/about';
import { ExperienceComponent } from './features/experience/experience';
import { ProjectsComponent } from './features/projects/projects';
import { CertificationsComponent } from './features/certifications/certifications';
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
    SkillsComponent,
    FooterComponent,
  ],
  template: `
    <app-navbar></app-navbar>
    <main class="container">
      <app-hero></app-hero>
      <app-about></app-about>
      <app-experience></app-experience>
      <app-projects></app-projects>
      <app-certifications></app-certifications>
      <app-skills></app-skills>
      <app-footer></app-footer>
    </main>
  `,
  styles: [`
    .container { max-width: 1100px; margin: 0 auto; padding: 0 20px; }
  `],
})
export class AppComponent {}