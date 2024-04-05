import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shoulders',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './shoulders.component.html',
  styleUrl: './shoulders.component.scss'
})
export class ShouldersComponent {
  isOpen = false;

  togglePanel() {
    this.isOpen = !this.isOpen;
  }
}
