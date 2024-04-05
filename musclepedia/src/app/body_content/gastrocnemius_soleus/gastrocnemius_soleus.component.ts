import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gastrocnemius-soleus',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './gastrocnemius_soleus.component.html',
  styleUrl: './gastrocnemius_soleus.component.scss'
})
export class GastrocnemiusSoleusComponent {
  isOpen = false;

  togglePanel() {
    this.isOpen = !this.isOpen;
  }
}
