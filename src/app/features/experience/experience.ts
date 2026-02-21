import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  template: `
    <section id="experience" class="exp-section fade-in">
      <h2 class="section-title">> ls /experience</h2>
      <div class="timeline">
        <div class="exp-item hover-up">
          <h3>Data Labeling Specialist @ AT-Micro Engineering</h3>
          <span class="date">2022 - Present</span>
          <p>Maintained 99.3% accuracy in autonomous vehicle data labeling projects.</p>
        </div>
        <div class="exp-item hover-up">
          <h3>Database Assistant @ Dar Elfouad Lab</h3>
          <span class="date">Feb 2024 - Aug 2024</span>
          <p>Managed patient data using MySQL and provided helpdesk support.</p>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .timeline { margin-top: 1.5rem; }
    .exp-item {
      background: var(--bg-secondary);
      border: 1px solid var(--border-color);
      border-left: 3px solid var(--accent);
      border-radius: 8px;
      padding: 1.25rem 1.5rem;
      margin-bottom: 1rem;
      transition: transform 0.2s;
    }
    .exp-item h3 { color: var(--link); margin: 0 0 0.25rem; font-size: 1rem; }
    .date { color: var(--text-muted); font-size: 0.85rem; }
    .exp-item p { margin: 0.5rem 0 0; color: var(--text-muted); font-size: 0.95rem; }
  `],
})
export class ExperienceComponent {}