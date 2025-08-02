import { Component, Input } from '@angular/core';
import { Planet } from '../../data/planet';

@Component({
  selector: 'app-planet-card',
  imports: [],
  templateUrl: './planet-card.component.html',
  styleUrl: './planet-card.component.scss'
})
export class PlanetCardComponent {
 @Input() planet!: Planet;
}
