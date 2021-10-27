import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';

// Mapbox GL
import {
  Map,
  MapboxOptions,
} from 'mapbox-gl';

@Component({
  selector: 'app-no-click-event',
  templateUrl: './no-click-event.page.html',
  styleUrls: ['./no-click-event.page.scss'],
})
export class NoClickEventPage implements AfterViewInit, OnDestroy {
  @ViewChild('mapContainer') mapContainer?: ElementRef<HTMLDivElement>;
  private map?: Map;

  constructor() { }

  ngAfterViewInit(): void {
    console.log(`NoClickEventPage ngAfterViewInit()`);
    this.initMap();
  }

  ngOnDestroy() {
    console.log(`NoClickEventPage ngOnDestroy(), remove map`);
    this.map?.remove();
  }

  private initMap(): void {
    console.log(`NoClickEventPage initMap()`);

    if (this.mapContainer) {
      const options: MapboxOptions = {
        accessToken: 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA',
        container: this.mapContainer.nativeElement,
        style: 'mapbox://styles/mapbox/streets-v11',
      };

      const map = new Map(options);
      console.log(`NoClickEventPage, map created`);
      this.map = map;

      map.on('load', () => {
        console.log(`NoClickEventPage map "load" event`);
        map.resize();
      });

      map.on('resize', () => {
        console.log(`NoClickEventPage map "resize" event`);
      });

      /*map.on('click', (ev) => {
        console.log(`NoClickEventPage map "click" event`, JSON.stringify(ev));
      });*/

      map.on('error', (err) => {
        console.log(`NoClickEventPage map "error" event`, JSON.stringify(err));
      });
    }
  }
}
