import { useMapEvents} from 'react-leaflet';
import React, { useEffect, useState } from "react"
import RightClick from './RightClick';
import { Dropdown, Menu } from "antd";
import { render } from '@testing-library/react';



var lat = 0;
var lng = 0;


const menu = <Menu 
items={[{
    label:lat,
    key:lat,

}]}>
</Menu>



const Coordinate = () => {
  const [koodinat, setKoordinat] = useState("");
    useMapEvents({
      click(e) {
        // setState your coords here
        // coords exist in "e.latlng.lat" and "e.latlng.lng"
        
        lat = e.latlng.lat;
        lng = e.latlng.lng;
        
        console.log("lat =" +lat);
        console.log("long =" +lng);
        alert(`${lat}`+" dan "+`${lng}`);
            
        render(
            <div>
              <table>
                <tr>dsadasd</tr>
                <td>dasds</td>
              </table>
              

              <RightClick lat={lat} lng={lng} />
              
            </div>
            
          
        )
      },
    });
    return false;
}

export default Coordinate;