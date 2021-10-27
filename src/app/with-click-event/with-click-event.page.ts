import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';

// Mapbox GL
import {
  Map,
  MapboxOptions,
} from 'mapbox-gl';

@Component({
  selector: 'app-with-click-event',
  templateUrl: './with-click-event.page.html',
  styleUrls: ['./with-click-event.page.scss'],
})
export class WithClickEventPage implements AfterViewInit, OnDestroy {
  @ViewChild('mapContainer') mapContainer?: ElementRef<HTMLDivElement>;
  private map?: Map;

  constructor() { }

  ngAfterViewInit(): void {
    console.log(`WithClickEventPage ngAfterViewInit()`);
    this.initMap();
  }

  ngOnDestroy() {
    console.log(`WithClickEventPage ngOnDestroy(), remove map`);
    this.map?.remove();
  }

  private initMap(): void {
    console.log(`WithClickEventPage initMap()`);

    if (this.mapContainer) {
      const options: MapboxOptions = {
        accessToken: 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA',
        container: this.mapContainer.nativeElement,
        style: 'mapbox://styles/mapbox/streets-v11',
      };

      const map = new Map(options);
      console.log(`WithClickEventPage, map created`);
      this.map = map;

      map.on('load', () => {
        console.log(`WithClickEventPage map "load" event`);
        map.resize();
      });

      map.on('resize', () => {
        console.log(`WithClickEventPage map "resize" event`);
      });

      map.on('click', (ev) => {
        console.log(`WithClickEventPage map "click" event`, JSON.stringify(ev));
      });

      map.on('error', (err) => {
        console.log(`WithClickEventPage map "error" event`, JSON.stringify(err));
      });
    }
  }
}
