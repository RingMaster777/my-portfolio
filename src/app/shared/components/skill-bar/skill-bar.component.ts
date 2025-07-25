import { CommonModule } from '@angular/common';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Skill } from '../../interfaces/skill.interface';

@Component({
  selector: 'app-skill-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skill-bar.component.html',
})
export class SkillBarComponent implements OnInit, OnDestroy {
  @Input() skill!: Skill;
  @Input() animate: boolean = true;

  animatedLevel = 0;
  private animationFrame?: number;

  ngOnInit(): void {
    if (this.animate) {
      this.animateProgress();
    } else {
      this.animatedLevel = this.skill.level;
    }
  }

  ngOnDestroy(): void {
    if (this.animationFrame) {
      cancelAnimationFrame(this.animationFrame);
    }
  }

  private animateProgress(): void {
    const duration = 1500; // 1.5 seconds
    const startTime = performance.now();
    const targetLevel = this.skill.level;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      this.animatedLevel = Math.round(targetLevel * easeOutCubic);

      if (progress < 1) {
        this.animationFrame = requestAnimationFrame(animate);
      }
    };

    this.animationFrame = requestAnimationFrame(animate);
  }
}
