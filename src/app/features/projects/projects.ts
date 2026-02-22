import { Component, inject } from '@angular/core';
import { GithubService, ReposState } from '../../core/services/github.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-projects',
  standalone: true,
  template: `
    <section id="projects" class="projects-section fade-in">
      <h2 class="section-title">> ls ./my-work</h2>
      <div class="projects-grid">
        @if (state().loading) {
          <div class="loading-state">
            <div class="spinner"></div>
            <p>Fetching repos from GitHub...</p>
          </div>
        } @else if (state().data.length === 0) {
          <div class="empty-state">
            <i class="devicon-github-original"></i>
            <p>No public repositories found</p>
            <a href="https://github.com/KerolisKhalaf" target="_blank" rel="noopener">View on GitHub</a>
          </div>
        } @else {
          @for (repo of state().data; track repo.name) {
            <article class="project-card">
              <div class="card-content">
                <h3 class="card-title">{{ formatName(repo.name) }}</h3>
                <p class="card-description">{{ repo.description || 'No description.' }}</p>
                <div class="tech-badges">
                  @if (repo.language) {
                    <span class="tech-tag">{{ repo.language }}</span>
                  }
                  @for (topic of (repo.topics || []).slice(0, 3); track topic) {
                    <span class="tech-tag">{{ topic }}</span>
                  }
                </div>
                <div class="card-links">
                  <a
                    [href]="repo.html_url"
                    target="_blank"
                    rel="noopener"
                    class="link-btn"
                    aria-label="View on GitHub"
                  >
                    <i class="devicon-github-original"></i>
                    GitHub
                  </a>
                  @if (repo.homepage && repo.homepage.trim()) {
                    <a
                      [href]="repo.homepage"
                      target="_blank"
                      rel="noopener"
                      class="link-btn link-demo"
                      aria-label="Live demo"
                    >
                      Live Demo
                    </a>
                  }
                </div>
              </div>
            </article>
          }
        }
      </div>
    </section>
  `,
  styles: [`
    .projects-section {
      padding-top: var(--section-spacing);
    }

    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(min(100%, 300px), 1fr));
      gap: 1.5rem;
      margin-top: 1.5rem;
    }

    .project-card {
      background: var(--bg-card);
      border: 1px solid var(--border-color);
      border-radius: 8px;
      overflow: hidden;
      transition: all var(--transition-smooth);
    }

    .project-card:hover {
      border-color: rgba(57, 255, 20, 0.3);
      transform: translateY(-4px);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
    }

    .card-content {
      padding: 1.5rem;
    }

    .card-title {
      color: var(--link);
      font-size: 1.05rem;
      font-weight: 600;
      margin: 0 0 0.5rem;
    }

    .card-description {
      font-size: 0.9rem;
      color: var(--text-muted);
      line-height: 1.5;
      margin: 0 0 1rem;
      min-height: 2.8em;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .tech-badges {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-bottom: 1rem;
    }

    .tech-tag {
      font-family: 'Fira Code', monospace;
      font-size: 0.75rem;
      color: var(--accent);
      background: rgba(35, 134, 54, 0.15);
      padding: 0.25rem 0.5rem;
      border-radius: 4px;
    }

    .card-links {
      display: flex;
      flex-wrap: wrap;
      gap: 0.75rem;
    }

    .link-btn {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      font-size: 0.9rem;
      color: var(--link);
      font-weight: 500;
      transition: color var(--transition-fast);
    }

    .link-btn:hover {
      color: var(--accent);
    }

    .link-btn i {
      font-size: 1.1rem;
    }

    .loading-state,
    .empty-state {
      grid-column: 1 / -1;
      text-align: center;
      padding: 3rem;
      color: var(--text-muted);
    }

    .spinner {
      width: 40px;
      height: 40px;
      margin: 0 auto 1rem;
      border: 3px solid var(--border-color);
      border-top-color: var(--accent);
      border-radius: 50%;
      animation: spin 0.8s linear infinite;
    }

    .empty-state i {
      font-size: 3rem;
      display: block;
      margin-bottom: 1rem;
      color: var(--text-muted);
    }

    .empty-state a {
      color: var(--link);
    }
  `],
})
export class ProjectsComponent {
  private githubService = inject(GithubService);
  state = toSignal(this.githubService.getRepos(), {
    initialValue: { loading: true, data: [] } as ReposState,
  });

  formatName(name: string): string {
    return name.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
  }
}
