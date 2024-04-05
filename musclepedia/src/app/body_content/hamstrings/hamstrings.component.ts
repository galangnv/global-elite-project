import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hamstrings',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './hamstrings.component.html',
  styleUrl: './hamstrings.component.scss'
})
export class HamstringsComponent {
  isOpen = false;

  togglePanel() {
    this.isOpen = !this.isOpen;
  }
}
