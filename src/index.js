/*
 * 2018
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 *
 * @author Alexandre Moraes | github.com/alcmoraes
 * @flow
 */
import React from 'react';
import { Marker } from 'react-leaflet';
import L from 'leaflet';

import Utils from './utils';

class AnimatedMarker extends Marker {

  componentDidUpdate(): any {
    // Here we return false to prevent the original marker
    // To re-render itself, since we just need to update
    // its position
    return false;
  }

  componentWillReceiveProps( nextProps: Object ): any {
    try {
      // Animate the maker only if there's a considerable
      // distance between previous and current position
      if (
        Utils.isCoordinatesDistantEnough(
          nextProps.position,
          this.props.position
        )
      ){
        let position;
        let movingInterval;
        let curLat = this.props.position.lat;
        let curLng = this.props.position.lng;
        let newLat = nextProps.position.lat;
        let newLng = nextProps.position.lng;
        let threshold = 0.01;
        movingInterval = setInterval( () => {
          if ( threshold >= 1 ) clearInterval( movingInterval );
          position = new L.LatLng(
            ( curLat + ( newLat - curLat ) * threshold ),
            ( curLng + ( newLng - curLng ) * threshold )
          );
          this.leafletElement.setLatLng( position );
          threshold += 0.1;
        }, 400 );
        return false;
      }
    }
    catch ( ERR ) {
      console.error( ERR );
      return false;
    }
  }

}

export default AnimatedMarker;