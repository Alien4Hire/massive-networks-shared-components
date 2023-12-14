import { Component, h, State, Prop, Watch } from '@stencil/core';
import { Loader } from '@googlemaps/js-api-loader';
import { MassLegendItemType } from '../mass-legend/mass-legend';

export type MapMarker = {
  id?: string,
  lat: number;
  lng: number;
  isDC?: number;
  isCELL?: number;
  isPOP?: number;
  wirelessReady?: number;
  fiberReady?: number;
  target?: string;
  CID?: string;
  address?: string;
  distance?: string;
  paths?: number;
  ethernetReady?: number;
  coaxReady?: number;
};
@Component({
  tag: 'mass-google-map',
  styleUrl: 'mass-google-map.scss',
  shadow: true,
})
export class GoogleMap {
  @State() map: google.maps.Map;
  @State() markers: google.maps.Marker[] = [];
  @Prop() center: { lat: number; lng: number } = { lat: 37.9277412, lng: -122.0589753 };
  @Prop() searchResults: MapMarker[] = [];
  @State() previousCenterMarker: google.maps.Marker = null;
  @State() previousOpenedMarker: google.maps.InfoWindow = null;
  @State() customMapStyles = [
    {
      "featureType": "poi",
      "stylers": [{ "visibility": "off" }]
    },
    {
      "featureType": "transit",
      "stylers": [{ "visibility": "off" }]
    }
  ];
  @Prop() legend: MassLegendItemType[] = [];
  @Prop() zoom?: number;
  @Prop() handleGetQuote?: (detail: any) => void;


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
      zoom: 4,
      styles: this.customMapStyles
    });
    const { lat, lng } = this.center;
    if (this.searchResults.length) {
      new google.maps.Marker({
        position: new google.maps.LatLng(lat, lng),
        map: this.map,
        icon: {
          url: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
          size: new google.maps.Size(64, 64),
        },
      });
    }



    this.searchResults.forEach(coord => this.addMarker(coord));

    document.addEventListener('get-quote-clicked', (event: any) => {
      if (this.handleGetQuote) {
        this.handleGetQuote(event.detail);
      }
    });
  }




  formatMarkerData({ id, address, lat, lng, CID, target, distance, paths, fiberReady, ethernetReady, coaxReady, wirelessReady, isDC, isCELL, isPOP }: MapMarker) {
    const footage = parseInt(distance) * 3280.839895;
    const feet = Math.round((footage + 0.00001) * 100) / 100;
    let servicetype = 'Delivery Options:<br>';
    const fiber = ` <mass-icon icon-name="markerPurple"></mass-icon> - Fiber - Building`;
    const wireless = ` <mass-icon icon-name="wifi" ></mass-icon>- Fiber - WireLess`;
    const ethernet = ` <mass-icon icon-name="markerWhite" ></mass-icon> - Ethernet - Coax`;
    const coax = ` <mass-icon icon-name="coax" ></mass-icon> - Cable/Coax`;
    const dc = ` <mass-icon icon-name="markerGreen" ></mass-icon> - Fiber - Datacenter`;
    const cell = ` <mass-icon icon-name="markerOrange" ></mass-icon> - Fiber - Cell Site`;
    const pop = ` <mass-icon icon-name="markerRed" ></mass-icon> - Fiber - POP`
    if (fiberReady == 1) {
      servicetype = servicetype + fiber + '<br />';
    }
    if (ethernetReady == 1) {
      servicetype = servicetype + ethernet + '<br />';
    }
    if (coaxReady == 1) {
      servicetype = servicetype + coax + '<br />';
    }
    if (wirelessReady == 1) {
      servicetype = servicetype + wireless + '<br />';
    }
    if (isDC == 1) {
      servicetype = servicetype + dc + '<br />';
    }
    if (isCELL == 1) {
      servicetype = servicetype + cell + '<br />';
    }
    if (isPOP == 1) {
      servicetype = servicetype + pop + '<br />';

    }
    const content = `
      <img src="https://res.cloudinary.com/dghsmwkfq/image/upload/v1702289962/aykvrxst0co4fmupzhx1.png" style="width: 85px; height: 33px;" /> <br/>
      <b>${address}</b> <br/> 
      <b>Distance: </b> ${feet} feet <br /><br /> 
      <b>${paths} Paths Available</b> <br /><br />
      ${servicetype} <br /> 
      <button onclick="document.dispatchEvent(new CustomEvent('get-quote-clicked', {
        detail: {
          address: '${address}',
          lat: '${lat}',
          lng: '${lng}',
          CID: '${CID}',
          target: '${target}',
          distance: '${distance}',
          paths: '${paths}',
          fiberReady: '${fiberReady}',
          ethernetReady: '${ethernetReady}',
          coaxReady: '${coaxReady}',
          wirelessReady: '${wirelessReady}',
          id: '${id}'
        }
      }))">Get A Quote Now</button> <br />
  `;

    const div = document.createElement('div');
    div.innerHTML = content;

    return div;
  }

  addMarker(result: MapMarker) {
    const { lat, lng, isDC, isCELL, isPOP, wirelessReady, fiberReady, coaxReady } = result;
    let icon;
    if (isDC == 1) {
      icon = { url: 'http://maps.google.com/mapfiles/kml/paddle/grn-circle-lv.png', size: new google.maps.Size(20, 20) };
    } else if (isCELL == 1) {
      icon = { url: 'http://maps.google.com/mapfiles/kml/paddle/ylw-circle-lv.png', size: new google.maps.Size(20, 20) };
    } else if (isPOP == 1) {
      icon = { url: 'http://maps.google.com/mapfiles/kml/paddle/red-circle-lv.png', size: new google.maps.Size(20, 20) };
    } else if (wirelessReady == 1 && fiberReady == 0) {
      icon = { url: 'https://maps.massivenetworks.com/images/wifi.png', size: new google.maps.Size(20, 20) };
    } else if (fiberReady == 1) {
      icon = { url: 'http://maps.google.com/mapfiles/kml/paddle/blu-circle-lv.png', size: new google.maps.Size(20, 20) };
    } else if (coaxReady == 1) {
      icon = { url: 'https://maps.massivenetworks.com/images/wht-circle-lv.png', size: new google.maps.Size(20, 20) };
    } else {
      icon = { url: 'http://maps.google.com/mapfiles/kml/paddle/blu-circle-lv.png', size: new google.maps.Size(20, 20) };
    }
    const marker = new google.maps.Marker({
      position: { lat, lng },
      map: this.map,
      icon,
    });
    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: this.formatMarkerData(result),
      });
      if (this.previousOpenedMarker?.close)
        this.previousOpenedMarker.close()
      this.previousOpenedMarker = infoWindow;
      infoWindow.open(this.map, marker);
    });
    this.markers.push(marker);
  }

  @Watch('searchResults')
  searchResultsChanged(newValue: { lat: number; lng: number }[], oldValue: { lat: number; lng: number }[]) {
    console.log(newValue)
    if (newValue !== oldValue) {
      this.updateMapMarkers(newValue);
    }
  }

  @Watch('center')
  centerChanged(newCenter: { lat: number; lng: number }) {
    console.log(newCenter.lat, newCenter.lng, "center");

    if (this.map && newCenter.lat != null && newCenter.lng != null) {
      this.map.setCenter(new google.maps.LatLng(newCenter.lat, newCenter.lng));

      if (this.previousCenterMarker) {
        this.previousCenterMarker.setMap(null);
      }

      const centerMarker = new google.maps.Marker({
        position: new google.maps.LatLng(newCenter.lat, newCenter.lng),
        map: this.map,
        icon: {
          url: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
          size: new google.maps.Size(64, 64),
        },
      });

      this.previousCenterMarker = centerMarker;
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
      case 200:
        return 7;
      case 20:
        return 11;
      case 10:
        return 12;
      case 5:
        return 13;
      case 1:
        return 15;
      case 0.5:
        return 16;
      case 0.3:
        return 17;
      default:
        return 8;
    }
  }

  updateMapMarkers(newsearchResults) {
    // Clear existing markers
    this.markers.forEach(marker => marker.setMap(null));
    this.markers = [];

    // Add new markers
    newsearchResults.forEach(coord => this.addMarker(coord));
  }
  public updateCenter(newCenter: { lat: number; lng: number }) {
    this.center = newCenter;
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
