import { Component, h, State, Prop, Watch } from '@stencil/core';
import { Loader } from '@googlemaps/js-api-loader';
import { MassLegendItemType } from '../mass-legend/mass-legend';
import Wifi from '../mass-icon/icons/wifi.svg';

@Component({
  tag: 'mass-google-map',
  styleUrl: 'mass-google-map.scss',
  shadow: true,
})
export class GoogleMap {
  @State() map: google.maps.Map;
  @State() markers: google.maps.Marker[] = [];
  @Prop() center: { lat: number; lng: number } = { lat: -40.055429867763834, lng: -83.04729663229006 };
  @Prop() coordinates: { lat: number; lng: number; isDC?: number; isCELL?: number; isPOP?: number; wirelessReady?: number; fiberReady?: number }[] = [];
  @Prop() legend: MassLegendItemType[] = [];
  @Prop() zoom?: number;

  mapElement: HTMLElement;

  async componentDidLoad() {
    const loader = new Loader({
      apiKey: process.env.REACT_APP_GOOGLE_MAPS_API,
      version: 'weekly',
    });

    await loader.load().catch(error => {
      console.error(error);
    });

    this.map = new google.maps.Map(this.mapElement, {
      center: this.center,
      zoom: 7,
    });

    this.coordinates.forEach(coord => this.addMarker(coord));
  }

  addMarker({
    lat,
    lng,
    isDC,
    isCELL,
    isPOP,
    wirelessReady,
    fiberReady,
  }: {
    lat: number;
    lng: number;
    isDC?: number;
    isCELL?: number;
    isPOP?: number;
    wirelessReady?: number;
    fiberReady?: number;
  }){
    let icon;
    if (isDC == 1) {
      icon = { url: 'http://maps.google.com/mapfiles/kml/paddle/grn-circle-lv.png', size: new google.maps.Size(20, 20) };
    } else if (isCELL == 1) {
      icon = { url: 'http://maps.google.com/mapfiles/kml/paddle/ylw-circle-lv.png', size: new google.maps.Size(20, 20) };
    } else if (isPOP == 1) {
      icon = { url: 'http://maps.google.com/mapfiles/kml/paddle/red-circle-lv.png', size: new google.maps.Size(20, 20) };
    } else if (wirelessReady == 1 && fiberReady == 0) {
      icon = { url: Wifi, size: new google.maps.Size(20, 20) };
    } else {
      icon = { url: 'http://maps.google.com/mapfiles/kml/paddle/blu-circle-lv.png', size: new google.maps.Size(20, 20) };
    }
    const marker = new google.maps.Marker({
      position: { lat, lng },
      map: this.map,
      icon,
    });
    this.markers.push(marker);
  };

  @Watch('coordinates')
  coordinatesChanged(newValue: { lat: number; lng: number }[], oldValue: { lat: number; lng: number }[]) {
    if (newValue !== oldValue) {
      this.updateMapMarkers(newValue);
    }
  }

  @Watch('center')
  centerChanged(newCenter: { lat: number; lng: number }) {
    if (this.map && newCenter) {
      this.map.setCenter(new google.maps.LatLng(newCenter.lat, newCenter.lng));
    }
  }

  @Watch('zoom')
  zoomChanged(newZoom: number) {
    if (this.map && typeof newZoom === 'number') {
      this.map.setZoom(this.calculateZoomLevel(newZoom));
    }
  }

  calculateZoomLevel(radius: number): number {
    switch (radius) {
      case 200: return 7;
      case 20: return 11;
      case 10: return 12;
      case 5: return 13;
      case 1: return 15;
      case 0.5: return 16;
      case 0.3: return 17;
      default: return 8; 
    }
  }

  updateMapMarkers(newCoordinates) {
    // Clear existing markers
    this.markers.forEach(marker => marker.setMap(null));
    this.markers = [];

    // Add new markers
    newCoordinates.forEach(coord => this.addMarker(coord));
  }

  render() {
    return (
      <div>
        {this.legend.length > 0 && <mass-legend items={this.legend} />}
        <div id="map" ref={el => (this.mapElement = el as HTMLElement)} />
      </div>
    );
  }
}
