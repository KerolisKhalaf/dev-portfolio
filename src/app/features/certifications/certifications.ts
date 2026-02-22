import { Component, inject, signal, computed } from '@angular/core';
import { CredlyService } from '../../core/services/credly.service';
import { toSignal } from '@angular/core/rxjs-interop';
import {
  Certification,
  CertificationCategory,
  CATEGORIES,
} from '../../core/data/certifications.data';

const BADGE_PLACEHOLDER =
  'data:image/svg+xml,' +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="45" fill="%23238636" opacity="0.2"/><circle cx="50" cy="50" r="35" fill="none" stroke="%23238636" stroke-width="2"/><path d="M50 25 L55 40 L70 40 L58 50 L63 65 L50 55 L37 65 L42 50 L30 40 L45 40 Z" fill="%23238636"/></svg>'
  );

@Component({
  selector: 'app-certifications',
  standalone: true,
  template: `
    <section id="certifications" class="certs-section fade-in">
      <h2 class="section-title">> ls ./certifications-and-professional-badges</h2>
      <div class="filter-bar">
        @for (cat of filterCategories; track cat) {
          <button
            type="button"
            class="filter-btn"
            [class.active]="activeFilter() === cat"
            (click)="setFilter(cat)"
          >
            {{ cat }}
          </button>
        }
      </div>
      <div class="badges-grid">
        @for (cert of filteredCerts(); track cert.id) {
          <article class="badge-card" [class.verified]="cert.verified">
            <span class="category-tag">{{ cert.category }}</span>
            @if (cert.verified) {
              <span class="verified-badge" aria-label="Verified">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
                Verified
              </span>
            } @else {
              <span class="in-progress-tag">In Progress</span>
            }
            <div class="badge-image-wrapper">
              <img
                [src]="cert.imageUrl || badgePlaceholder"
                [alt]="cert.title"
                loading="lazy"
                class="badge-image"
                (error)="onBadgeImageError($event)"
              >
            </div>
            <div class="badge-content">
              <h3 class="badge-title">{{ cert.title }}</h3>
              <span class="badge-issuer">{{ cert.issuer }}</span>
              <span class="badge-date">{{ cert.issueDate }}</span>
              @if (cert.verified) {
                <a
                  [href]="cert.credentialUrl"
                  target="_blank"
                  rel="noopener"
                  class="view-credential-btn"
                >
                  View Credential →
                </a>
              }
            </div>
          </article>
        }
      </div>
    </section>
  `,
  styles: [`
    .certs-section {
      padding-top: var(--section-spacing);
    }

    .filter-bar {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-bottom: 1.5rem;
    }

    .filter-btn {
      padding: 0.5rem 1rem;
      font-size: 0.875rem;
      font-weight: 500;
      font-family: inherit;
      color: var(--text-muted);
      background: var(--bg-card);
      border: 1px solid var(--border-color);
      border-radius: 6px;
      cursor: pointer;
      transition: all var(--transition-fast);
    }

    .filter-btn:hover {
      color: var(--link);
      border-color: var(--border-color);
    }

    .filter-btn.active {
      color: var(--accent);
      border-color: var(--accent);
      box-shadow: 0 0 12px var(--neon-glow);
    }

    .badges-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(min(100%, 280px), 1fr));
      gap: 1.5rem;
    }

    .badge-card {
      position: relative;
      display: flex;
      flex-direction: column;
      background: var(--bg-card);
      border: 1px solid var(--border-color);
      border-radius: 8px;
      overflow: hidden;
      min-height: 320px;
      transition: all var(--transition-smooth);
    }

    .badge-card:hover {
      border-color: rgba(57, 255, 20, 0.3);
      box-shadow: 0 0 20px var(--neon-glow);
      transform: scale(1.02);
    }

    .badge-card.verified .verified-badge {
      animation: verified-pulse 4s ease-in-out infinite;
    }

    .category-tag {
      position: absolute;
      top: 0.75rem;
      right: 0.75rem;
      font-size: 0.7rem;
      font-weight: 600;
      color: var(--accent);
      background: rgba(35, 134, 54, 0.15);
      padding: 0.25rem 0.5rem;
      border-radius: 4px;
      z-index: 1;
    }

    .verified-badge {
      position: absolute;
      top: 0.75rem;
      left: 0.75rem;
      display: inline-flex;
      align-items: center;
      gap: 0.35rem;
      font-size: 0.75rem;
      font-weight: 600;
      color: var(--accent);
      z-index: 1;
    }

    .verified-badge svg {
      width: 14px;
      height: 14px;
    }

    .in-progress-tag {
      position: absolute;
      top: 0.75rem;
      left: 0.75rem;
      font-size: 0.75rem;
      font-weight: 500;
      color: var(--text-muted);
      background: rgba(139, 148, 158, 0.2);
      padding: 0.25rem 0.5rem;
      border-radius: 4px;
      z-index: 1;
    }

    .badge-image-wrapper {
      flex-shrink: 0;
      height: 140px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1.5rem;
      background: rgba(0, 0, 0, 0.2);
    }

    .badge-image {
      width: 100px;
      height: 100px;
      object-fit: contain;
    }

    .badge-content {
      flex: 1;
      display: flex;
      flex-direction: column;
      padding: 1.25rem;
      gap: 0.4rem;
    }

    .badge-title {
      color: var(--text-primary);
      font-size: 0.95rem;
      font-weight: 600;
      margin: 0;
      line-height: 1.4;
    }

    .badge-issuer {
      color: var(--text-muted);
      font-size: 0.85rem;
    }

    .badge-date {
      color: var(--text-muted);
      font-size: 0.8rem;
      flex: 1;
    }

    .view-credential-btn {
      display: inline-block;
      margin-top: 0.5rem;
      font-size: 0.9rem;
      font-weight: 500;
      color: var(--accent);
      transition: color var(--transition-fast);
    }

    .view-credential-btn:hover {
      color: var(--neon-green);
    }

    @media (min-width: 768px) {
      .badges-grid {
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      }
    }
  `],
})
export class CertificationsComponent {
  private credlyService = inject(CredlyService);
  badgePlaceholder = BADGE_PLACEHOLDER;

  activeFilter = signal<CertificationCategory>('All');
  filterCategories = CATEGORIES;

  certifications = toSignal(this.credlyService.getCertifications(), {
    initialValue: [] as Certification[],
  });

  filteredCerts = computed(() => {
    const filter = this.activeFilter();
    const certs = this.certifications();
    if (filter === 'All') return certs;
    return certs.filter((c) => c.category === filter);
  });

  setFilter(cat: CertificationCategory): void {
    this.activeFilter.set(cat);
  }

  onBadgeImageError(e: Event): void {
    const img = e.target as HTMLImageElement;
    if (img) img.src = this.badgePlaceholder;
  }
}
