import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hip-flexors',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './hip_flexors.component.html',
  styleUrl: './hip_flexors.component.scss'
})
export class HipFlexorsComponent {
  isOpen = false;

  togglePanel() {
    this.isOpen = !this.isOpen;
  }
}
