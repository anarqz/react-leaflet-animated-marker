# React Leaflet Animated Marker

A wrapper for the PaulLeCam/react-leaflet Marker that smoothly animated itself when coordinate prop changes.

[![Code Climate](https://codeclimate.com/github/alcmoraes/react-leaflet-animated-marker/badges/gpa.svg)](https://codeclimate.com/github/alcmoraes/react-leaflet-animated-marker)

## Usage

This marker just adds a small trick in order to smoothly animate the marker everytime the `position` prop changes.
This means the usage doesn't change in nothing from the original [react-leaflet marker component](https://react-leaflet.js.org/docs/en/components.html#marker).

```
...
import { L } from 'leaflet';
import { Map, TileLayer } from 'react-leaflet';
import Marker from 'react-leaflet-animated-marker';

...

render() {
  return (
    ...
    <Map>
      <Marker position={this.state.position}/>
    </Map>
    ...
  )
}
...
```
