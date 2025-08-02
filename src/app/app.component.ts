import { Component } from '@angular/core';
import { PlanetViewerComponent } from "./components/planet-viewer/planet-viewer.component";

@Component({
  selector: 'app-root',
  imports: [PlanetViewerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'solar-system';
}
