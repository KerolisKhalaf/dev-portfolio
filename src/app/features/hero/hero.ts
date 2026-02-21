import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section class="hero">
      <div class="hero-text">
        <h1 class="terminal-text">> whoami</h1>
        <h2>{{ name }}</h2>
        <p class="role">IT Student | Software, Systems & DevOps Oriented</p>
        <p class="description">
          IT undergraduate at Egyptian E-Learning University (EELU).
          GPA 3.24. Specialized in software development, data-driven systems,
          and Linux-based environments.
        </p>
        <div class="cta-group">
          <a href="#projects" class="btn">View Projects</a>
          <a href="cv.pdf" target="_blank" class="btn btn-outline">Download CV</a>
        </div>
      </div>
      <div class="hero-visual">
        <img src="profile.png" alt="Kerolis Khalaf" class="profile-img">
      </div>
    </section>
  `,
  styles: [`
    .hero {
      display: flex;
      align-items: center;
      gap: 3rem;
      min-height: 70vh;
      animation: fade-in 0.5s ease-out;
    }
    .hero-text h2 { color: var(--text-primary); margin: 10px 0; }
    .terminal-text { font-family: 'Fira Code', monospace; color: var(--accent); font-size: 1.2rem; }
    .role { color: var(--link); font-weight: 500; }
    .description { color: var(--text-muted); line-height: 1.6; max-width: 500px; }
    .cta-group { display: flex; gap: 1rem; margin-top: 1.5rem; }
    .btn {
      padding: 10px 20px;
      border-radius: 6px;
      text-decoration: none;
      font-weight: 600;
      transition: all 0.2s;
    }
    .btn { background: var(--accent); color: white; }
    .btn:hover { background: var(--accent-hover); transform: translateY(-2px); }
    .btn-outline { background: transparent; border: 1px solid var(--border-color); color: var(--link); }
    .btn-outline:hover { border-color: var(--accent); color: var(--accent); }
    .profile-img {
      width: 220px;
      height: 220px;
      border-radius: 50%;
      border: 3px solid var(--border-color);
      transition: transform 0.2s;
    }
    .profile-img:hover { transform: translateY(-4px); }
    @media (max-width: 768px) {
      .hero { flex-direction: column; text-align: center; }
      .hero-text .description { max-width: none; }
      .cta-group { justify-content: center; }
    }
  `]
})
export class HeroComponent {
  name = 'KEROLIS KHALAF SHAFIK';
}