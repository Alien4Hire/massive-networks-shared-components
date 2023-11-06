import { Component, h, State, Prop } from '@stencil/core';
import { Loader } from '@googlemaps/js-api-loader';
import { MassLegendItemType } from '../mass-legend/mass-legend';

@Component({
  tag: 'mass-google-map',
  styleUrl: 'mass-google-map.scss',
  shadow: true,
})
export class GoogleMap {
  @State() map: google.maps.Map;
  @State() markers: google.maps.Marker[] = [];
  @Prop() center: { lat: number; lng: number } = { lat: -34.397, lng: 150.644 };
  @Prop() coordinates: { lat: number; lng: number }[] = [];
  @Prop() legend: MassLegendItemType[] = [];

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
      zoom: 8,
    });

    this.coordinates.forEach(coord => this.addMarker(coord.lat, coord.lng));
  }

  addMarker(lat: number, lng: number) {
    const marker = new google.maps.Marker({
      position: { lat, lng },
      map: this.map,
    });
    this.markers.push(marker);
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
