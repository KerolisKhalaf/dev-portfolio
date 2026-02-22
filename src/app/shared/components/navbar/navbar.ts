import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  template: `
    <nav class="nav-container">
      <a href="#" class="logo">
        <span class="bracket">{{ '{' }}</span> dev.portfolio <span class="bracket">{{ '}' }}</span>
      </a>
      <button
        class="nav-toggle"
        (click)="toggleMenu()"
        [attr.aria-expanded]="isOpen()"
        aria-label="Toggle menu"
      >
        <span class="hamburger" [class.open]="isOpen()"></span>
        <span class="hamburger" [class.open]="isOpen()"></span>
        <span class="hamburger" [class.open]="isOpen()"></span>
      </button>
      <div class="links" [class.open]="isOpen()">
        <a href="#about" (click)="closeMenu()">About</a>
        <a href="#experience" (click)="closeMenu()">Experience</a>
        <a href="#projects" (click)="closeMenu()">Projects</a>
        <a href="#devops" (click)="closeMenu()">DevOps</a>
        <a href="#certifications" (click)="closeMenu()">Certifications</a>
        <a href="#skills" (click)="closeMenu()">Skills</a>
        <a href="https://github.com/KerolisKhalaf" target="_blank" rel="noopener" class="github-link" aria-label="GitHub">
          <i class="devicon-github-original"></i>
        </a>
        <a href="cv.pdf" target="_blank" download class="btn-primary cv-button" (click)="closeMenu()">
          <svg class="cv-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          View CV
        </a>
      </div>
    </nav>
  `,
  styles: [`
    .nav-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 1.25rem;
      border-bottom: 1px solid var(--border-color);
      background: rgba(10, 14, 20, 0.95);
      position: sticky;
      top: 0;
      z-index: 100;
      max-width: 100vw;
      overflow-x: hidden;
    }

    .logo {
      font-family: 'Fira Code', monospace;
      font-weight: 600;
      font-size: 1.1rem;
      color: var(--text-primary);
      text-decoration: none;
    }

    .bracket {
      color: var(--accent);
    }

    .nav-toggle {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 5px;
      width: 40px;
      height: 40px;
      background: transparent;
      border: 1px solid var(--border-color);
      border-radius: 6px;
      cursor: pointer;
      padding: 8px;
    }

    .hamburger {
      display: block;
      width: 100%;
      height: 2px;
      background: var(--text-primary);
      border-radius: 1px;
      transition: transform 0.3s, opacity 0.3s;
    }

    .hamburger:nth-child(1).open {
      transform: translateY(7px) rotate(45deg);
    }

    .hamburger:nth-child(2).open {
      opacity: 0;
    }

    .hamburger:nth-child(3).open {
      transform: translateY(-7px) rotate(-45deg);
    }

    .links {
      display: none;
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background: var(--bg-secondary);
      border-bottom: 1px solid var(--border-color);
      flex-direction: column;
      padding: 1rem;
      gap: 0.5rem;
    }

    .links.open {
      display: flex;
    }

    .links a {
      padding: 0.75rem 1rem;
      color: var(--text-muted);
      text-decoration: none;
      transition: color var(--transition-fast);
      border-radius: 6px;
    }

    .links a:hover {
      color: var(--link);
      background: rgba(255, 255, 255, 0.03);
    }

    .github-link {
      font-size: 1.25rem;
    }

    .cv-button {
      margin-top: 0.5rem;
    }

    .cv-icon {
      width: 16px;
      height: 16px;
      flex-shrink: 0;
    }

    @media (min-width: 769px) {
      .nav-toggle {
        display: none;
      }

      .links {
        display: flex;
        position: static;
        flex-direction: row;
        align-items: center;
        border: none;
        padding: 0;
        background: transparent;
      }

      .links a {
        padding: 0;
        margin-left: 1.5rem;
        border-radius: 0;
      }

      .links a:hover {
        background: transparent;
      }

      .cv-button {
        margin-top: 0;
        margin-left: 1rem;
      }
    }
  `],
})
export class NavbarComponent {
  isOpen = signal(false);

  toggleMenu(): void {
    this.isOpen.update((v) => !v);
  }

  closeMenu(): void {
    this.isOpen.set(false);
  }
}
