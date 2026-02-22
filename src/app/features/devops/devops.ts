import { Component } from '@angular/core';

@Component({
  selector: 'app-devops',
  standalone: true,
  template: `
    <section id="devops" class="devops-section fade-in">
      <h2 class="section-title">> cat devops_mindset.txt</h2>
      <div class="devops-card">
        <div class="devops-grid">
          <div class="devops-item">
            <span class="devops-icon">📦</span>
            <h3>Dockerized Applications</h3>
            <p>Containerizing apps for consistent deployment across environments.</p>
          </div>
          <div class="devops-item">
            <span class="devops-icon">🚀</span>
            <h3>Deployment Workflows</h3>
            <p>Streamlined build, test, and deploy pipelines.</p>
          </div>
          <div class="devops-item">
            <span class="devops-icon">🌿</span>
            <h3>Git Branching Strategy</h3>
            <p>Feature branches, main/production flows, and clean merge practices.</p>
          </div>
          <div class="devops-item">
            <span class="devops-icon">⚙️</span>
            <h3>CI/CD Basics</h3>
            <p>Automated testing and deployment with GitHub Actions.</p>
          </div>
          <div class="devops-item">
            <span class="devops-icon">🐧</span>
            <h3>Linux Environment</h3>
            <p>Daily Linux usage, bash scripting, and server administration.</p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .devops-section {
      padding-top: var(--section-spacing);
    }

    .devops-card {
      background: var(--bg-card);
      border: 1px solid var(--border-color);
      border-radius: 8px;
      padding: 2rem;
      margin-top: 1rem;
      transition: border-color var(--transition-smooth);
    }

    .devops-card:hover {
      border-color: rgba(57, 255, 20, 0.2);
    }

    .devops-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1.5rem;
    }

    .devops-item {
      padding: 1rem;
      border-left: 2px solid var(--accent);
      transition: transform var(--transition-fast);
    }

    .devops-item:hover {
      transform: translateX(4px);
    }

    .devops-icon {
      font-size: 1.5rem;
      display: block;
      margin-bottom: 0.5rem;
    }

    .devops-item h3 {
      color: var(--text-primary);
      font-size: 0.95rem;
      margin: 0 0 0.5rem;
      font-weight: 600;
    }

    .devops-item p {
      color: var(--text-muted);
      font-size: 0.875rem;
      margin: 0;
      line-height: 1.5;
    }

    @media (max-width: 480px) {
      .devops-grid {
        grid-template-columns: 1fr;
      }
    }
  `],
})
export class DevOpsComponent {}
