import { AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  ViewChildren, } from '@angular/core';
import { PLANETS, Planet } from '../../data/planet';
import { PlanetCardComponent } from "../planet-card/planet-card.component";

@Component({
  selector: 'app-planet-viewer',
  imports: [PlanetCardComponent],
  templateUrl: './planet-viewer.component.html',
  styleUrl: './planet-viewer.component.scss'
})
export class PlanetViewerComponent {
  planets: Planet[] = PLANETS;
  activeIndex = 0;

   @ViewChildren('sectionRef') sections!: QueryList<ElementRef>;

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      (entries) => {
        for (let entry of entries) {
          const index = this.sections.toArray().findIndex(
            (el) => el.nativeElement === entry.target
          );
          if (entry.isIntersecting) {
            this.activeIndex = index;
          }
        }
      },
      {
        threshold: 0.6,
      }
    );

    this.sections.forEach((section) => {
      observer.observe(section.nativeElement);
    });
  }
}
