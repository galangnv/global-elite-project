import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-abdominal',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './abdominal.component.html',
  styleUrl: './abdominal.component.scss'
})
export class AbdominalComponent {
  isOpen = false;

  togglePanel() {
    this.isOpen = !this.isOpen;
  }
}
