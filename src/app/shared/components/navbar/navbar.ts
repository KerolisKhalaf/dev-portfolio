import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  template: `
    <nav class="nav-container">
<div class="logo">
  <span class="bracket">{{ '{' }}</span> dev.portfolio <span class="bracket">{{ '}' }}</span>
</div>
      <div class="links">
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#certifications">Certifications</a>
        <a href="#skills">Skills</a>
        <a href="https://github.com/KerolisKhalaf" target="_blank" rel="noopener" class="github-link" aria-label="GitHub">
          <i class="devicon-github-original"></i>
        </a>
        <a href="cv.pdf" target="_blank" class="cv-button">
          <i class="devicon-file-pdf"></i> View CV
        </a>
      </div>
    </nav>
  `,
  styles: [`
    .cv-button {
      background: var(--accent);
      color: white;
      padding: 10px 20px;
      border-radius: 6px;
      text-decoration: none;
      font-weight: bold;
      display: inline-flex;
      align-items: center;
      gap: 8px;
      transition: background 0.3s;
    }
    .cv-button:hover {
      background: var(--accent-hover);
    }
    .nav-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1.5rem 0;
      border-bottom: 1px solid #30363d;
    }
    .logo { font-family: 'Fira Code', monospace; font-weight: bold; font-size: 1.2rem; }
    .bracket { color: var(--accent); }
    .links a {
      margin-left: 20px;
      text-decoration: none;
      color: var(--text-muted);
      transition: color 0.2s;
    }
    .links a:hover { color: var(--link); }
    .github-link { font-size: 1.5rem; vertical-align: middle; }
  `]
  
})
export class NavbarComponent {}