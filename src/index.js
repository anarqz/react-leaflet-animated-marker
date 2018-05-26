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
    return false;
  }

  componentWillReceiveProps( nextProps: Object ): any {
    try {
      if (
        Utils.areCoordinatesDistantEnough(
          nextProps.position,
          this.props.position
        )
      ){
        Utils.animateMarker(
          this.leafletElement,
          this.props.position,
          nextProps.position
        );
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