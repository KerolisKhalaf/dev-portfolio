import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <section id="about" class="about-section fade-in">
      <h2 class="section-title">> cat about_me.txt</h2>
      <div class="about-card">
        <div class="about-grid">
          <div class="about-main">
            <p class="bio">
              <strong>Kerolis Khalaf Shafik</strong> — Full Stack Developer specializing in the MEAN stack,
              with a strong backend focus and growing DevOps skills. Currently pursuing a
              <strong>BSc in Information Technology</strong> (2022–2026) at Egyptian E-Learning University (EELU).
            </p>
            <p class="bio">
              Based in <strong>Cairo, Egypt</strong>. Background in IT Support, data labeling,
              and full-stack development. Actively learning Docker, CI/CD, and infrastructure automation.
            </p>
          </div>
          <div class="about-metrics">
            <div class="metric">
              <span class="metric-value">3.24</span>
              <span class="metric-label">GPA</span>
            </div>
            <div class="metric">
              <span class="metric-value">99.3%</span>
              <span class="metric-label">Data Labeling Accuracy</span>
            </div>
            <div class="metric">
              <span class="metric-value">Cairo</span>
              <span class="metric-label">Location</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .about-section {
      padding-top: var(--section-spacing);
    }

    .about-card {
      background: var(--bg-card);
      border: 1px solid var(--border-color);
      border-radius: 8px;
      padding: 2rem;
      margin-top: 1rem;
    }

    .about-grid {
      display: grid;
      gap: 2rem;
    }

    .bio {
      color: var(--text-primary);
      line-height: 1.7;
      margin: 0 0 1rem;
    }

    .bio:last-child {
      margin-bottom: 0;
    }

    .about-metrics {
      display: flex;
      flex-wrap: wrap;
      gap: 1.5rem;
    }

    .metric {
      display: flex;
      flex-direction: column;
      padding: 1rem 1.5rem;
      background: rgba(35, 134, 54, 0.1);
      border: 1px solid rgba(35, 134, 54, 0.3);
      border-radius: 6px;
      min-width: 120px;
    }

    .metric-value {
      color: var(--accent);
      font-weight: 700;
      font-size: 1.25rem;
    }

    .metric-label {
      color: var(--text-muted);
      font-size: 0.8rem;
      margin-top: 0.25rem;
    }

    @media (min-width: 768px) {
      .about-grid {
        grid-template-columns: 1fr auto;
      }

      .about-metrics {
        flex-direction: column;
      }
    }
  `],
})
export class AboutComponent {}
