import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-it-band',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './it_band.component.html',
  styleUrl: './it_band.component.scss'
})
export class ITBandComponent {
  isOpen = false;

  togglePanel() {
    this.isOpen = !this.isOpen;
  }
}
