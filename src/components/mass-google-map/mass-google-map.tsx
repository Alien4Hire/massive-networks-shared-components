import { Component, h, State } from '@stencil/core';
import { Loader } from '@googlemaps/js-api-loader';

@Component({
  tag: 'mass-google-map',
  styleUrl: 'mass-google-map.scss',
  shadow: true
})
export class GoogleMap {
  @State() map: google.maps.Map;
  mapElement: HTMLElement;

  async componentDidLoad() {
    const loader = new Loader({
      apiKey: process.env.REACT_APP_GOOGLE_MAPS_API,
      version: "weekly"
    });

    await loader.load().catch(error => {
      console.error(error);
    });

    this.map = new google.maps.Map(this.mapElement, {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8
    });
  }

  render() {
    return (
      <div id='map' ref={(el) => (this.mapElement = el as HTMLElement)}></div>
    );
  }
}
