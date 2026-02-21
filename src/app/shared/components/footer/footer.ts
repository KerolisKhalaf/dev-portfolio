import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="footer-cta">
      <h3>Let's Connect</h3>
      <p>Open to opportunities in Software & DevOps</p>
      <div class="cta-links">
        <a href="https://www.linkedin.com/in/keroliskhalaf" target="_blank" rel="noopener" class="cta-btn" aria-label="LinkedIn">
          <i class="devicon-linkedin-plain"></i>
          LinkedIn
        </a>
        <a href="https://github.com/KerolisKhalaf" target="_blank" rel="noopener" class="cta-btn" aria-label="GitHub">
          <i class="devicon-github-original"></i>
          GitHub
        </a>
        <a href="https://www.credly.com/users/kerolis-khalaf" target="_blank" rel="noopener" class="cta-btn" aria-label="Credly">
          <i class="credly-icon">◇</i>
          Credly
        </a>
      </div>
      <p class="copyright">© {{ year }} Kerolis Khalaf. Built with Angular.</p>
    </footer>
  `,
  styles: [`
    .footer-cta {
      margin-top: 5rem;
      padding: 3rem 0 2rem;
      border-top: 1px solid var(--border-color);
      text-align: center;
    }
    .footer-cta h3 {
      color: var(--text-primary);
      margin-bottom: 0.5rem;
    }
    .footer-cta > p {
      color: var(--text-muted);
      margin-bottom: 1.5rem;
    }
    .cta-links {
      display: flex;
      justify-content: center;
      gap: 1.5rem;
      flex-wrap: wrap;
      margin-bottom: 2rem;
    }
    .cta-btn {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 12px 24px;
      background: var(--bg-secondary);
      border: 1px solid var(--border-color);
      border-radius: 8px;
      color: var(--link);
      text-decoration: none;
      font-weight: 600;
      transition: all 0.2s;
    }
    .cta-btn:hover {
      background: var(--accent);
      border-color: var(--accent);
      color: white;
      transform: translateY(-2px);
    }
    .cta-btn i, .cta-btn .credly-icon {
      font-size: 1.2rem;
    }
    .credly-icon { font-family: serif; }
    .copyright {
      color: var(--text-muted);
      font-size: 0.85rem;
    }
  `],
})
export class FooterComponent {
  year = new Date().getFullYear();
}
