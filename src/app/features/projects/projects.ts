import { Component, inject } from '@angular/core';
import { GithubService, ReposState } from '../../core/services/github.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-projects',
  standalone: true,
  template: `
    <section id="projects" class="fade-in">
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
            <a [href]="repo.html_url" target="_blank" rel="noopener" class="project-card hover-up">
              <div class="card-header">
                <i class="devicon-github-original"></i>
                <span class="stars">⭐ {{ repo.stargazers_count }}</span>
              </div>
              <h3>{{ repo.name }}</h3>
              <p>{{ repo.description || 'No description.' }}</p>
              @if (repo.language) {
                <span class="tech-tag">{{ repo.language }}</span>
              }
            </a>
          }
        }
      </div>
    </section>
  `,
  styles: [`
    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 1.25rem;
      margin-top: 1.5rem;
    }
    .project-card {
      background: var(--bg-secondary);
      border: 1px solid var(--border-color);
      padding: 1.25rem;
      border-radius: 8px;
      text-decoration: none;
      color: inherit;
      transition: all 0.2s ease;
      display: block;
    }
    .project-card:hover {
      border-color: var(--accent);
      box-shadow: 0 8px 20px rgba(0,0,0,0.4);
    }
    .project-card h3 { color: var(--link); margin: 10px 0 8px; font-size: 1rem; }
    .project-card p { font-size: 0.9rem; color: var(--text-muted); height: 48px; overflow: hidden; margin: 0 0 10px; }
    .tech-tag {
      font-family: 'Fira Code', monospace;
      font-size: 0.8rem;
      color: var(--accent);
      background: rgba(35, 134, 54, 0.15);
      padding: 2px 8px;
      border-radius: 4px;
    }
    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .stars { font-size: 0.85rem; color: var(--text-muted); }
    .loading-state, .empty-state {
      grid-column: 1 / -1;
      text-align: center;
      padding: 3rem;
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
    .empty-state i { font-size: 3rem; color: var(--text-muted); display: block; margin-bottom: 1rem; }
    .empty-state a { color: var(--link); }
  `],
})
export class ProjectsComponent {
  private githubService = inject(GithubService);
  state = toSignal(this.githubService.getRepos(), { initialValue: { loading: true, data: [] } as ReposState });
}