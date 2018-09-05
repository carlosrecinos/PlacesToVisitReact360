// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {ReactInstance, Surface} from 'react-360-web';
import SimpleRaycaster from "simple-raycaster";
function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });

  const flatSurface = new Surface(300, 200, "Flat")
  flatSurface.setAngle(Math.PI / 3.4, -Math.PI / 11);
  r360.renderToSurface(
    r360.createRoot('first', {}),
    flatSurface
  );
  const defaultSurface = r360.getDefaultSurface();
  defaultSurface.setShape("Flat")
  defaultSurface.setAngle(0, -Math.PI / 4);

  r360.renderToSurface(
    r360.createRoot('PlaceSelector', {}),
    defaultSurface
  );

  r360.renderToLocation(
    r360.createRoot('letter'),
    r360.getDefaultLocation()
  );

  r360.compositor.setBackground(r360.getAssetURL('machupicchu.jpg'));
  r360.controls.addRaycaster(SimpleRaycaster);
}

window.React360 = {init};
