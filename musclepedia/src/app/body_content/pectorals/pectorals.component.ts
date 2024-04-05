import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pectorals',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './pectorals.component.html',
  styleUrl: './pectorals.component.scss'
})
export class PectoralsComponent {
  isOpen = false;

  togglePanel() {
    this.isOpen = !this.isOpen;
  }
}
