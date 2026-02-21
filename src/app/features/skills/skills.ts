import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  template: `
    <section id="skills" class="fade-in">
      <h2 class="section-title">> cd /skills/competencies</h2>
      <div class="skills-wrapper">
        <div class="skill-category hover-up">
          <h3>Backend & DevOps</h3>
          <div class="icons">
            <i class="devicon-nodejs-plain colored" title="Node.js"></i>
            <i class="devicon-docker-plain colored" title="Docker"></i>
            <i class="devicon-kubernetes-plain colored" title="K8s"></i>
            <i class="devicon-terraform-plain colored" title="Terraform"></i>
          </div>
        </div>
        <div class="skill-category hover-up">
          <h3>Frontend</h3>
          <div class="icons">
            <i class="devicon-angularjs-plain colored" title="Angular"></i>
            <i class="devicon-typescript-plain colored" title="TypeScript"></i>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .skills-wrapper { display: flex; gap: 2.5rem; flex-wrap: wrap; margin-top: 1.5rem; }
    .icons { font-size: 3rem; display: flex; gap: 1.25rem; }
    .skill-category h3 {
      color: var(--text-muted);
      font-size: 1rem;
      margin-bottom: 1rem;
      border-bottom: 1px solid var(--border-color);
      display: inline-block;
    }
  `],
})
export class SkillsComponent {}