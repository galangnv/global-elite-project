import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quadriceps',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './quadriceps.component.html',
  styleUrl: './quadriceps.component.scss'
})
export class QuadricepsComponent {
  isOpen = false;

  togglePanel() {
    this.isOpen = !this.isOpen;
  }
}
