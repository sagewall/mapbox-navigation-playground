import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import mapboxgl from 'mapbox-gl';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit {

  @ViewChild('mapNode') mapNodeElementRef: ElementRef;
  private map: mapboxgl.Map;
  private style: string;
  private longitude: number;
  private latitude: number;
  private zoom: number;

  constructor() {
    mapboxgl.accessToken = environment.mapboxPublicToken;
    this.style = 'mapbox://styles/mapbox/streets-v9';
    this.longitude = -105.25;
    this.latitude = 39.75;
    this.zoom = 10;
  }

  ngAfterViewInit(): void {
    this.map = new mapboxgl.Map({
      container: this.mapNodeElementRef.nativeElement,
      style: this.style,
      center: [this.longitude, this.latitude],
      zoom: this.zoom
    });

  }

}
