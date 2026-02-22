import { Component } from '@angular/core';

interface SkillItem {
  name: string;
  icon: string;
}

interface SkillCategory {
  title: string;
  skills: SkillItem[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  template: `
    <section id="skills" class="skills-section fade-in">
      <h2 class="section-title">> cd /skills/competencies</h2>
      <div class="skills-grid">
        @for (category of categories; track category.title) {
          <div class="skill-category">
            <h3 class="category-title">{{ category.title }}</h3>
            <div class="skills-list">
              @for (skill of category.skills; track skill.name) {
                <div class="skill-item">
                  <div class="skill-icon-wrapper">
                    <i [class]="'devicon-' + skill.icon + ' colored'" [title]="skill.name"></i>
                  </div>
                  <span class="skill-name">{{ skill.name }}</span>
                </div>
              }
            </div>
          </div>
        }
      </div>
    </section>
  `,
  styles: [`
    .skills-section {
      padding-top: var(--section-spacing);
    }

    .skills-grid {
      display: grid;
      gap: 2rem;
      margin-top: 1.5rem;
    }

    .skill-category {
      background: var(--bg-card);
      border: 1px solid var(--border-color);
      border-radius: 8px;
      padding: 1.5rem;
      transition: border-color var(--transition-smooth), box-shadow var(--transition-smooth);
    }

    .skill-category:hover {
      border-color: rgba(57, 255, 20, 0.2);
      box-shadow: 0 0 20px rgba(57, 255, 20, 0.05);
    }

    .category-title {
      color: var(--accent);
      font-family: 'Fira Code', monospace;
      font-size: 0.9rem;
      margin: 0 0 1.25rem;
      padding-bottom: 0.75rem;
      border-bottom: 1px solid var(--border-color);
      font-weight: 500;
    }

    .skills-list {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
      gap: 1rem;
    }

    .skill-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
      padding: 0.75rem;
      border-radius: 6px;
      transition: transform var(--transition-fast), box-shadow var(--transition-smooth);
    }

    .skill-item:hover {
      transform: scale(1.05);
      box-shadow: 0 0 15px var(--neon-glow);
    }

    .skill-icon-wrapper {
      width: 48px;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .skill-icon-wrapper i {
      font-size: 2rem;
      line-height: 1;
    }

    .skill-name {
      font-size: 0.75rem;
      color: var(--text-muted);
      text-align: center;
      font-weight: 500;
    }

    @media (min-width: 768px) {
      .skills-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (min-width: 1024px) {
      .skills-grid {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    @media (max-width: 480px) {
      .skills-list {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  `],
})
export class SkillsComponent {
  categories: SkillCategory[] = [
    {
      title: 'Frontend',
      skills: [
        { name: 'Angular', icon: 'angularjs-plain' },
        { name: 'React', icon: 'react-original' },
        { name: 'HTML5', icon: 'html5-plain' },
        { name: 'CSS3', icon: 'css3-plain' },
        { name: 'Bootstrap', icon: 'bootstrap-plain' },
        { name: 'JavaScript', icon: 'javascript-plain' },
        { name: 'TypeScript', icon: 'typescript-plain' },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', icon: 'nodejs-plain' },
        { name: 'Express', icon: 'express-original' },
        { name: 'Java', icon: 'java-plain' },
        { name: 'Spring Boot', icon: 'spring-plain' },
        { name: 'PHP', icon: 'php-plain' },
        { name: 'Python', icon: 'python-plain' },
      ],
    },
    {
      title: 'Database',
      skills: [
        { name: 'MongoDB', icon: 'mongodb-plain' },
        { name: 'MySQL', icon: 'mysql-plain' },
        { name: 'SQL Server', icon: 'microsoftsqlserver-plain' },
      ],
    },
    {
      title: 'DevOps',
      skills: [
        { name: 'Docker', icon: 'docker-plain' },
        { name: 'Git', icon: 'git-plain' },
        { name: 'GitHub', icon: 'github-original' },
        { name: 'Linux', icon: 'linux-plain' },
        { name: 'Bash', icon: 'bash-plain' },
        { name: 'Nginx', icon: 'nginx-original' },
      ],
    },
    {
      title: 'IT & Networking',
      skills: [
        { name: 'CCNA', icon: 'cisco-plain' },
        { name: 'Troubleshooting', icon: 'linux-plain' },
        { name: 'Windows Server', icon: 'windows11-original' },
      ],
    },
  ];
}
