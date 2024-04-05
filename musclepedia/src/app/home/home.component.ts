import { Component, OnInit } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { AnkleComponent } from '../body_content/ankle/ankle.component';
import { GastrocnemiusSoleusComponent } from '../body_content/gastrocnemius_soleus/gastrocnemius_soleus.component';
import { KneeComponent } from '../body_content/knee/knee.component';
import { ITBandComponent } from '../body_content/it_band/it_band.component';
import { HamstringsComponent } from '../body_content/hamstrings/hamstrings.component';
import { QuadricepsComponent } from '../body_content/quadriceps/quadriceps.component';
import { HipFlexorsComponent } from '../body_content/hip_flexors/hip_flexors.component';
import { ErectorSpinaeComponent } from '../body_content/erector_spinae/erector_spinae.component';
import { PectoralsComponent } from '../body_content/pectorals/pectorals.component';
import { ShouldersComponent } from '../body_content/shoulders/shoulders.component';
import { NeckComponent } from '../body_content/neck/neck.component';
import { AbdominalComponent } from '../body_content/abdominal/abdominal.component';

declare const display3DModel: () => void;

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    AnkleComponent,
    GastrocnemiusSoleusComponent,
    KneeComponent,
    ITBandComponent,
    HamstringsComponent,
    QuadricepsComponent,
    HipFlexorsComponent,
    ErectorSpinaeComponent,
    PectoralsComponent,
    ShouldersComponent,
    NeckComponent,
    AbdominalComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    display3DModel();
  }
}