import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section class="hero">
      <div class="hero-content">
        <div class="hero-text">
          <h1 class="terminal-text">
            <span class="typing-prefix">&gt; whoami</span>
            <span class="cursor" aria-hidden="true">_</span>
          </h1>
          <h2 class="hero-name">{{ name }}</h2>
          <p class="role">{{ role }}</p>
          <p class="description">{{ description }}</p>
          <div class="cta-group">
            <a href="#projects" class="btn btn-primary">View Projects</a>
            <a href="cv.pdf" target="_blank" class="btn btn-outline">Download CV</a>
          </div>
        </div>
        <div class="hero-visual">
          <div class="profile-wrapper">
            <img
              src="profile.png"
              alt="Kerolis Khalaf Shafik"
              class="profile-img"
              width="360"
              height="360"
              loading="eager"
              fetchpriority="high"
            >
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      min-height: 85vh;
      display: flex;
      align-items: center;
      padding: 3rem 0;
      animation: fade-in 0.5s ease-out;
    }

    .hero-content {
      display: flex;
      align-items: center;
      gap: clamp(2rem, 4vw, 4rem);
      width: 100%;
      max-width: 100%;
    }

    .hero-text {
      flex: 1;
      min-width: 0;
    }

    .terminal-text {
      font-family: 'Fira Code', monospace;
      color: var(--accent);
      font-size: clamp(0.95rem, 2vw, 1.15rem);
      margin: 0 0 0.5rem;
      display: flex;
      align-items: center;
      gap: 2px;
    }

    .cursor {
      animation: typing-cursor 1s step-end infinite;
      color: var(--accent);
    }

    .hero-name {
      color: var(--text-primary);
      font-size: clamp(1.5rem, 4vw, 2rem);
      font-weight: 700;
      margin: 0 0 0.5rem;
      letter-spacing: 0.02em;
    }

    .role {
      color: var(--link);
      font-weight: 600;
      font-size: 1rem;
      margin: 0 0 1rem;
    }

    .description {
      color: var(--text-muted);
      line-height: 1.7;
      max-width: 520px;
      margin: 0 0 1.5rem;
      font-size: 0.95rem;
    }

    .cta-group {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
    }

    .btn {
      padding: 0.75rem 1.5rem;
      border-radius: 6px;
      text-decoration: none;
      font-weight: 600;
      font-size: 0.95rem;
      transition: all var(--transition-fast);
    }

    .btn-primary {
      background: var(--accent);
      color: white;
      border: 1px solid transparent;
    }

    .btn-primary:hover {
      background: var(--accent-hover);
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(35, 134, 54, 0.3);
    }

    .btn-outline {
      background: transparent;
      border: 1px solid var(--border-color);
      color: var(--link);
    }

    .btn-outline:hover {
      border-color: var(--accent);
      color: var(--accent);
    }

    .hero-visual {
      flex-shrink: 0;
    }

    .profile-wrapper {
      width: min(360px, 45vw);
      aspect-ratio: 1;
      max-width: 420px;
      border-radius: 50%;
      padding: 5px;
      background: linear-gradient(135deg, var(--neon-green-soft), var(--accent));
      box-shadow: 0 0 20px var(--neon-glow);
      transition: transform var(--transition-fast), box-shadow var(--transition-smooth);
    }

    .profile-wrapper:hover {
      transform: translateY(-4px);
      box-shadow: 0 0 30px var(--neon-glow);
    }

    .profile-img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      object-fit: cover;
      object-position: center;
      aspect-ratio: 1;
    }

    @media (max-width: 1024px) {
      .profile-wrapper {
        width: min(300px, 40vw);
        max-width: 320px;
      }
    }

    @media (max-width: 768px) {
      .hero {
        min-height: auto;
        padding: 2rem 0;
      }

      .hero-content {
        flex-direction: column-reverse;
        text-align: center;
        gap: 2rem;
      }

      .hero-text .description {
        max-width: none;
        margin-left: auto;
        margin-right: auto;
      }

      .cta-group {
        justify-content: center;
      }

      .profile-wrapper {
        width: min(240px, 55vw);
        max-width: 260px;
      }
    }

    @media (max-width: 320px) {
      .profile-wrapper {
        width: 200px;
        max-width: 200px;
      }
    }
  `],
})
export class HeroComponent {
  name = 'KEROLIS KHALAF SHAFIK';
  role = 'Full Stack Developer (MEAN Stack) · Backend Specialist · DevOps Trainee';
  description = 'BSc in Information Technology. IT Support background with experience in data labeling, full-stack development, and infrastructure. Based in Cairo, Egypt.';
}