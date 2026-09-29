import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section class="hero">
      <div class="hero-content">
        <div class="hero-text">
          <h1 class="terminal-text hero-reveal reveal-1">
            <span class="typing-prefix">&gt; whoami</span>
            <span class="cursor" aria-hidden="true">_</span>
          </h1>
          <h2 class="hero-name hero-reveal reveal-2">{{ name }}</h2>
          <p class="role hero-reveal reveal-3">{{ role }}</p>
          <p class="description hero-reveal reveal-4">{{ description }}</p>
          <div class="cta-group hero-reveal reveal-5">
            <a href="#projects" class="btn btn-primary">View Projects</a>
            <a href="cv.pdf" target="_blank" class="btn btn-outline">Download CV</a>
          </div>
        </div>
        <div class="hero-visual hero-reveal reveal-6">
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
      padding: clamp(1.25rem, 3vw, 2rem);
      border-radius: 16px;
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

    .hero-reveal {
      opacity: 0;
      transform: translateY(14px);
      filter: blur(2px);
      animation: hero-enter 600ms ease-out forwards;
      animation-delay: calc(var(--reveal-order, 0) * 90ms);
    }

    .reveal-1 { --reveal-order: 0; }
    .reveal-2 { --reveal-order: 1; }
    .reveal-3 { --reveal-order: 2; }
    .reveal-4 { --reveal-order: 3; }
    .reveal-5 { --reveal-order: 4; }
    .reveal-6 { --reveal-order: 5; }

    .cursor {
      animation: typing-cursor 1s step-end infinite;
      color: var(--accent);
    }

    .hero-name {
      color: #f1f5f9;
      font-size: clamp(1.5rem, 4vw, 2rem);
      font-weight: 700;
      margin: 0 0 0.5rem;
      letter-spacing: 0.02em;
    }

    .role {
      color: #38bdf8;
      font-weight: 600;
      font-size: 1rem;
      margin: 0 0 1rem;
    }

    .description {
      color: #b8c4d0;
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
      background: #22c55e;
      color: white;
      border: 1px solid transparent;
    }

    .btn-primary:hover {
      background: var(--accent-hover);
      transform: translateY(-2px);
      box-shadow: 0 6px 22px rgba(34, 197, 94, 0.38);
    }

    .btn-outline {
      background: rgba(8, 18, 28, 0.34);
      border: 1px solid rgba(56, 189, 248, 0.4);
      color: #38bdf8;
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.08);
    }

    .btn-outline:hover {
      border-color: var(--accent);
      color: var(--accent);
    }

    .hero-visual {
      flex-shrink: 0;
      position: relative;
      z-index: 1;
    }

    .hero-visual::before {
      content: '';
      position: absolute;
      inset: 8%;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(57, 255, 20, 0.15), rgba(88, 166, 255, 0.06) 48%, transparent 72%);
      filter: blur(24px);
      z-index: -1;
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
      animation: profile-float 6s ease-in-out 1.2s infinite;
      position: relative;
      z-index: 2;
    }

    .profile-wrapper:hover {
      transform: translateY(-4px);
      box-shadow: 0 0 25px rgba(34, 197, 94, 0.48), 0 0 60px rgba(34, 197, 94, 0.2);
    }

    .profile-img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      object-fit: cover;
      object-position: center;
      aspect-ratio: 1;
      position: relative;
      z-index: 1;
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
        flex-direction: column;
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

    @keyframes hero-enter {
      to {
        opacity: 1;
        transform: translateY(0);
        filter: blur(0);
      }
    }

    @keyframes profile-float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-5px); }
    }

    @media (prefers-reduced-motion: reduce) {
      .hero-reveal {
        opacity: 1;
        transform: none;
        filter: none;
        animation: none;
      }

      .profile-wrapper {
        animation: none;
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