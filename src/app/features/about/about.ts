import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <section id="about" class="about-section fade-in">
      <h2 class="section-title">> cat about_me.txt</h2>
      <div class="bio-card">
        <p>IT undergraduate at <strong>Egyptian E-Learning University (EELU)</strong>, specialized in Software Engineering and DevOps/Cloud.</p>
        <div class="metrics">
          <span>GPA: 3.24</span>
          <span>Data Labeling Accuracy: 99.3%</span>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .bio-card {
      background: var(--bg-secondary);
      border: 1px solid var(--border-color);
      border-radius: 8px;
      padding: 1.5rem 2rem;
      margin-top: 1.5rem;
    }
    .bio-card p { color: var(--text-primary); line-height: 1.6; }
    .metrics {
      display: flex;
      gap: 2rem;
      margin-top: 1rem;
    }
    .metrics span {
      color: var(--accent);
      font-weight: 600;
    }
  `],
})
export class AboutComponent {}