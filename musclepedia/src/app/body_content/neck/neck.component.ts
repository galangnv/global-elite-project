import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-neck',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './neck.component.html',
  styleUrl: './neck.component.scss'
})
export class NeckComponent {
  isOpen = false;

  togglePanel() {
    this.isOpen = !this.isOpen;
  }
}
