import 'babel-polyfill';
import L from 'leaflet';
/**
 * A utility class, nothing to see here, keep moving.
 * 2018
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 *
 * @author Alexandre Moraes | github.com/alcmoraes
 * @flow
 */
class Utils {

  /**
   * Compare two coordinates and determine if they're
   * distant enough to trigger the animation routine
   *
   * @param {L.LatLng} coord_one The first coordinate
   * @param {L.LatLng} coord_two The coordinate to compare
   * @return {boolean}
   */
  areCoordinatesDistantEnough( coord_one: L.LatLng, coord_two: L.LatLng ): boolean {
    return JSON.stringify( coord_one.lat.toString().substring( 8, 3 ) ) !==
      JSON.stringify( coord_two.lat.toString().substring( 8, 3 ) );
  }

  /**
   * Animate a leaflet element marker between two coordinates
   *
   * @param {L} leafletElement The leaflet element from marker
   * @param {L.LatLng} coordFrom The coordinate to go from
   * @param {L.LatLng} coordTo The coordinate to go to
   */
  animateMarker( leafletElement: any, coordFrom: L.LatLng, coordTo: L.LatLng ): void {
    let position;
    let movingInterval;
    let curLat = coordFrom.lat;
    let curLng = coordFrom.lng;
    let newLat = coordTo.lat;
    let newLng = coordTo.lng;
    let threshold = 0.01;
    movingInterval = setInterval( () => {
      if ( threshold >= 1 ) clearInterval( movingInterval );
      position = new L.LatLng(
        ( curLat + ( newLat - curLat ) * threshold ),
        ( curLng + ( newLng - curLng ) * threshold )
      );
      leafletElement.setLatLng( position );
      threshold += 0.1;
    }, 400 );
  }

}

export default new Utils();