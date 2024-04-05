import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-knee',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './knee.component.html',
  styleUrl: './knee.component.scss'
})
export class KneeComponent {
  isOpen = false;

  togglePanel() {
    this.isOpen = !this.isOpen;
  }
}
