import { Component } from '@angular/core';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string;
  highlight?: boolean;
}

@Component({
  selector: 'app-experience',
  standalone: true,
  template: `
    <section id="experience" class="experience-section fade-in">
      <h2 class="section-title">> ls /experience</h2>
      <div class="timeline">
        @for (item of experiences; track item.title; let i = $index) {
          <div class="timeline-item" [class.highlight]="item.highlight">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <h3 class="exp-title">{{ item.title }} {{ item.company }}</h3>
              <span class="exp-period">{{ item.period }}</span>
              <p class="exp-description">{{ item.description }}</p>
            </div>
          </div>
        }
      </div>
    </section>
  `,
  styles: [`
    .experience-section {
      padding-top: var(--section-spacing);
    }

    .timeline {
      margin-top: 1.5rem;
      position: relative;
      padding-left: 1.5rem;
      border-left: 2px solid var(--border-color);
      margin-left: 0.5rem;
    }

    .timeline-item {
      position: relative;
      padding-bottom: 2rem;
    }

    .timeline-item:last-child {
      padding-bottom: 0;
    }

    .timeline-marker {
      position: absolute;
      left: -1.625rem;
      top: 0.25rem;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: var(--accent);
      border: 2px solid var(--bg-primary);
      box-shadow: 0 0 0 2px var(--accent);
    }

    .timeline-item.highlight .timeline-marker {
      box-shadow: 0 0 12px var(--neon-glow);
    }

    .timeline-content {
      background: var(--bg-card);
      border: 1px solid var(--border-color);
      border-radius: 8px;
      padding: 1.25rem 1.5rem;
      margin-left: 0.5rem;
      transition: all var(--transition-smooth);
    }

    .timeline-content:hover {
      border-color: rgba(57, 255, 20, 0.2);
      transform: translateX(4px);
    }

    .timeline-item.highlight .timeline-content {
      border-left: 3px solid var(--accent);
    }

    .exp-title {
      color: var(--link);
      font-size: 1rem;
      font-weight: 600;
      margin: 0 0 0.25rem;
    }

    .exp-period {
      color: var(--text-muted);
      font-size: 0.85rem;
      display: block;
      margin-bottom: 0.5rem;
    }

    .exp-description {
      margin: 0;
      color: var(--text-muted);
      font-size: 0.95rem;
      line-height: 1.6;
    }

    @media (min-width: 768px) {
      .timeline {
        padding-left: 2rem;
        margin-left: 0;
      }

      .timeline-marker {
        left: -2.125rem;
      }

      .timeline-content {
        margin-left: 0;
      }
    }
  `],
})
export class ExperienceComponent {
  experiences: ExperienceItem[] = [
    {
      title: 'Data Labeling Specialist',
      company: '@ AT-Micro Engineering',
      period: '2022 – Present',
      description:
        'Maintained 99.3% accuracy in autonomous vehicle data labeling projects. High attention to detail and quality assurance.',
      highlight: true,
    },
    {
      title: 'Database Assistant',
      company: '@ Dar Elfouad Lab',
      period: 'Feb 2024 – Aug 2024',
      description:
        'Managed patient data using MySQL. Provided IT helpdesk support and technical assistance.',
    },
    {
      title: 'Front-End Developer',
      company: '@ Microsoft Student Club',
      period: '2023 – 2024',
      description: 'Developed front-end features and collaborated on club projects. Contributed to web applications.',
      highlight: true,
    },
    {
      title: 'DevOps Trainee',
      company: '– Digital Egypt Pioneers Initiative (DEPI)',
      period: 'Ongoing',
      description:
        'Officially enrolled as a DEPI trainee. Hands-on practice with Docker, Linux environments, Git workflows, and CI/CD pipelines. Building and containerizing applications.',
      highlight: true,
    },
    {
      title: 'IT Helpdesk / Technical Support',
      company: 'Various',
      period: 'Experience',
      description:
        'Troubleshooting, user support, and system maintenance. Strong problem-solving and customer service skills.',
      highlight: true,
    },
  ];
}
