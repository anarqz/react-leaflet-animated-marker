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
  isCoordinatesDistantEnough( coord_one: L.LatLng, coord_two: L.LatLng ): boolean {
    return JSON.stringify( coord_one.lat.toString().substring( 8, 3 ) ) !==
      JSON.stringify( coord_two.lat.toString().substring( 8, 3 ) );
  }

}

export default new Utils();