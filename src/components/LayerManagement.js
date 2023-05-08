
import {
    LayersControl,
    Marker,
    LayerGroup,
    Popup,
    Circle,
    FeatureGroup,
    Rectangle,
    rectangle,
    WMSTileLayer

} from 'react-leaflet';



function LayerManagement() {

    const center = [51.505, -0.09]
const rectangle = [
  [51.49, -0.08],
  [51.5, -0.06],
]
    return(
    <LayersControl position="topright">
       <LayersControl.Overlay name="Jawa Roads">
        <WMSTileLayer
            layers={'latihangeo:jawa_roads'}
            url="http://localhost:8080/geoserver/latihangeo/wms?"
            format= {"image/png"}
            transparent = {true}
        />
      </LayersControl.Overlay>
      <LayersControl.Overlay name="Jawa Transport">

        <WMSTileLayer
            layers={'latihangeo:jawa_transport'}
            url="http://localhost:8080/geoserver/latihangeo/wms?"
            format= {"image/png"}
            transparent = {true}
        />
      </LayersControl.Overlay>
     
      <LayersControl.Overlay name="Jawa Railways">
        <WMSTileLayer
            layers={'latihangeo:jawa_railways'}
            url="http://localhost:8080/geoserver/latihangeo/wms?"
            format= {"image/png"}
            transparent = {true}
        />
      </LayersControl.Overlay>


    </LayersControl>
    );
}
export default LayerManagement;

