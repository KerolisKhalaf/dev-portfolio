import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="footer">
      <div class="footer-content">
        <h3 class="footer-title">Let's Connect</h3>
        <p class="footer-tagline">Open to opportunities in Software, Backend & DevOps</p>
        <div class="footer-links">
          <a
            href="https://www.linkedin.com/in/keroliskhalaf"
            target="_blank"
            rel="noopener"
            class="footer-link"
            aria-label="LinkedIn"
          >
            <i class="devicon-linkedin-plain"></i>
            LinkedIn
          </a>
          <a
            href="https://github.com/KerolisKhalaf"
            target="_blank"
            rel="noopener"
            class="footer-link"
            aria-label="GitHub"
          >
            <i class="devicon-github-original"></i>
            GitHub
          </a>
          <a
            href="mailto:contact&#64;keroliskhalaf.dev"
            class="footer-link"
            aria-label="Email"
          >
            <svg class="email-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
            Email
          </a>
        </div>
        <p class="copyright">© {{ year }} Kerolis Khalaf Shafik. Built with Angular.</p>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      margin-top: 5rem;
      padding: 3rem 0 2rem;
      border-top: 1px solid var(--border-color);
    }

    .footer-content {
      text-align: center;
      max-width: 600px;
      margin: 0 auto;
    }

    .footer-title {
      color: var(--text-primary);
      font-size: 1.25rem;
      margin: 0 0 0.5rem;
      font-weight: 600;
    }

    .footer-tagline {
      color: var(--text-muted);
      font-size: 0.95rem;
      margin: 0 0 2rem;
    }

    .footer-links {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 1rem;
      margin-bottom: 2rem;
    }

    .footer-link {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.75rem 1.25rem;
      background: var(--bg-card);
      border: 1px solid var(--border-color);
      border-radius: 8px;
      color: var(--link);
      text-decoration: none;
      font-weight: 500;
      font-size: 0.95rem;
      transition: all var(--transition-fast);
    }

    .footer-link:hover {
      border-color: var(--accent);
      color: var(--accent);
      box-shadow: 0 0 12px var(--neon-glow);
    }

    .footer-link i,
    .email-icon {
      font-size: 1.2rem;
      width: 1.2rem;
      height: 1.2rem;
    }

    .copyright {
      color: var(--text-muted);
      font-size: 0.85rem;
      margin: 0;
    }
  `],
})
export class FooterComponent {
  year = new Date().getFullYear();
}
