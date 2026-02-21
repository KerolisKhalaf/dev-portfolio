import { Component } from '@angular/core';

@Component({
  selector: 'app-certifications',
  standalone: true,
  template: `
    <section id="certifications" class="fade-in">
      <h2 class="section-title">> ls ./certifications</h2>
      <div class="certs-grid">
        <a href="https://www.credly.com" target="_blank" rel="noopener" class="cert-card hover-up">
          <span class="cert-badge">Cisco CCNA</span>
          <p>Network fundamentals & routing</p>
        </a>
        <a href="https://www.credly.com" target="_blank" rel="noopener" class="cert-card hover-up">
          <span class="cert-badge">Microsoft SC-900</span>
          <p>Security, Compliance & Identity</p>
        </a>
        <a href="https://www.credly.com" target="_blank" rel="noopener" class="cert-card hover-up">
          <span class="cert-badge">DEPI DevOps</span>
          <p>DevOps practices & automation</p>
        </a>
      </div>
    </section>
  `,
  styles: [`
    .certs-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
      gap: 1.5rem;
      margin-top: 1.5rem;
    }
    .cert-card {
      background: var(--bg-secondary);
      border: 1px solid var(--border-color);
      border-radius: 8px;
      padding: 1.5rem;
      text-decoration: none;
      color: inherit;
      transition: all 0.2s ease;
    }
    .cert-card:hover {
      border-color: var(--accent);
      box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    }
    .cert-badge {
      display: inline-block;
      background: rgba(35, 134, 54, 0.2);
      color: var(--accent);
      padding: 4px 10px;
      border-radius: 4px;
      font-weight: 600;
      font-size: 0.95rem;
    }
    .cert-card p {
      margin: 10px 0 0;
      color: var(--text-muted);
      font-size: 0.9rem;
    }
  `],
})
export class CertificationsComponent {}
