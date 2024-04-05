import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-erector-spinae',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './erector_spinae.component.html',
  styleUrl: './erector_spinae.component.scss'
})
export class ErectorSpinaeComponent {
  isOpen = false;

  togglePanel() {
    this.isOpen = !this.isOpen;
  }
}
