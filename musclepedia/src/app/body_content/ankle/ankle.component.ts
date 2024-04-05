import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ankle',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './ankle.component.html',
  styleUrl: './ankle.component.scss'
})
export class AnkleComponent {
  isOpen = false;

  togglePanel() {
    this.isOpen = !this.isOpen;
  }
}
