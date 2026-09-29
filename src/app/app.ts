import { AfterViewInit, Component, HostListener, OnDestroy } from '@angular/core';
import { NavbarComponent } from './shared/components/navbar/navbar';
import { HeroComponent } from './features/hero/hero';
import { AboutComponent } from './features/about/about';
import { ExperienceComponent } from './features/experience/experience';
import { ProjectsComponent } from './features/projects/projects';
import { CertificationsComponent } from './features/certifications/certifications';
import { DevOpsComponent } from './features/devops/devops';
import { SkillsComponent } from './features/skills/skills';
import { FooterComponent } from './shared/components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    ExperienceComponent,
    ProjectsComponent,
    CertificationsComponent,
    DevOpsComponent,
    SkillsComponent,
    FooterComponent,
  ],
  template: `
    <canvas class="grid-canvas" aria-hidden="true"></canvas>
    <app-navbar></app-navbar>
    <main class="main-content">
      <app-hero></app-hero>
      <app-about></app-about>
      <app-experience></app-experience>
      <app-projects></app-projects>
      <app-certifications></app-certifications>
      <app-devops></app-devops>
      <app-skills></app-skills>
      <app-footer></app-footer>
    </main>
  `,
  styles: [`
    .main-content {
      max-width: var(--container-max);
      margin: 0 auto;
      margin-top: 70px;
      padding: 0 1.25rem;
      width: 100%;
      overflow-x: hidden;
    }
    @media (min-width: 768px) {
      .main-content { 
        padding: 0 1.5rem;
        margin-top: 70px;
      }
    }
    @media (min-width: 1024px) {
      .main-content { padding: 0 2rem; }
    }
  `],
})
export class AppComponent implements AfterViewInit, OnDestroy {
  private animationFrame: number | null = null;
  private readonly reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  private readonly touchDevice = window.matchMedia('(hover: none), (pointer: coarse)');
  private observer?: IntersectionObserver;
  private canvas?: HTMLCanvasElement;
  private context?: CanvasRenderingContext2D;
  private resizeHandler?: () => void;
  private targetX = -1000;
  private targetY = -1000;
  private currentX = -1000;
  private currentY = -1000;
  private gridFrame: number | null = null;

  @HostListener('window:mousemove', ['$event'])
  onPointerMove(event: MouseEvent): void {
    if (this.reducedMotion.matches || this.touchDevice.matches) {
      return;
    }

    const x = `${event.clientX}px`;
    const y = `${event.clientY}px`;
    this.targetX = event.clientX;
    this.targetY = event.clientY;

    if (this.animationFrame !== null) {
      cancelAnimationFrame(this.animationFrame);
    }

    this.animationFrame = requestAnimationFrame(() => {
      document.documentElement.style.setProperty('--mouse-x', x);
      document.documentElement.style.setProperty('--mouse-y', y);
      document.documentElement.style.setProperty(
        '--grid-shift-x',
        `${(event.clientX / window.innerWidth - 0.5) * 42}px`,
      );
      document.documentElement.style.setProperty(
        '--grid-shift-y',
        `${(event.clientY / window.innerHeight - 0.5) * 42}px`,
      );
      this.animationFrame = null;
    });
  }

  ngAfterViewInit(): void {
    this.canvas = document.querySelector('.grid-canvas') ?? undefined;
    if (!this.reducedMotion.matches && !this.touchDevice.matches) {
      this.setupGridCanvas();
    }

    if (this.reducedMotion.matches || typeof IntersectionObserver === 'undefined') {
      document.querySelectorAll('.fade-in').forEach((element) => element.classList.add('is-visible'));
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            this.observer?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    document.querySelectorAll('.fade-in').forEach((element) => this.observer?.observe(element));
  }

  ngOnDestroy(): void {
    if (this.animationFrame !== null) {
      cancelAnimationFrame(this.animationFrame);
    }
    this.observer?.disconnect();
    if (this.gridFrame !== null) {
      cancelAnimationFrame(this.gridFrame);
    }
    if (this.resizeHandler) {
      window.removeEventListener('resize', this.resizeHandler);
    }
  }

  private setupGridCanvas(): void {
    if (!this.canvas) return;
    this.context = this.canvas.getContext('2d') ?? undefined;
    if (!this.context) return;

    this.resizeHandler = () => this.resizeGridCanvas();
    this.resizeHandler();
    this.drawGrid();
  }

  private resizeGridCanvas(): void {
    if (!this.canvas || !this.context) return;
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    this.canvas.width = Math.ceil(window.innerWidth * ratio);
    this.canvas.height = Math.ceil(window.innerHeight * ratio);
    this.canvas.style.width = `${window.innerWidth}px`;
    this.canvas.style.height = `${window.innerHeight}px`;
    this.context.setTransform(ratio, 0, 0, ratio, 0, 0);
  }

  private drawGrid(): void {
    if (!this.canvas || !this.context) return;

    this.currentX += (this.targetX - this.currentX) * 0.075;
    this.currentY += (this.targetY - this.currentY) * 0.075;

    const width = window.innerWidth;
    const height = window.innerHeight;
    const spacing = 70;
    const padding = spacing * 3;
    const range = 360;
    const strength = 62;
    const context = this.context;

    context.clearRect(0, 0, width, height);
    if (this.currentX > 0 && this.currentY > 0) {
      const cursorLight = context.createRadialGradient(
        this.currentX,
        this.currentY,
        0,
        this.currentX,
        this.currentY,
        420,
      );
      cursorLight.addColorStop(0, 'rgba(34, 197, 94, 0.13)');
      cursorLight.addColorStop(0.38, 'rgba(34, 211, 238, 0.07)');
      cursorLight.addColorStop(1, 'rgba(34, 211, 238, 0)');
      context.fillStyle = cursorLight;
      context.fillRect(0, 0, width, height);
    }
    context.lineWidth = 1;
    context.strokeStyle = 'rgba(34, 211, 238, 0.14)';

    const warp = (x: number, y: number): [number, number] => {
      const deltaX = x - this.currentX;
      const deltaY = y - this.currentY;
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      const influence = Math.exp(-(distance * distance) / (range * range));
      return [
        x + deltaX * influence * (strength / range),
        y + deltaY * influence * (strength / range),
      ];
    };

    for (let y = -padding; y <= height + padding; y += spacing) {
      context.beginPath();
      for (let x = -padding; x <= width + padding; x += 10) {
        const [warpedX, warpedY] = warp(x, y);
        if (x === -padding) context.moveTo(warpedX, warpedY);
        else context.lineTo(warpedX, warpedY);
      }
      context.stroke();
    }

    for (let x = -padding; x <= width + padding; x += spacing) {
      context.beginPath();
      for (let y = -padding; y <= height + padding; y += 10) {
        const [warpedX, warpedY] = warp(x, y);
        if (y === -padding) context.moveTo(warpedX, warpedY);
        else context.lineTo(warpedX, warpedY);
      }
      context.stroke();
    }

    this.gridFrame = requestAnimationFrame(() => this.drawGrid());
  }
}