import { useMapEvents} from 'react-leaflet';
import { Dropdown, Menu } from "antd";
import RightClick from './RightClick';

var lat = 0;
var lng = 0;



var menu = <Menu 
    items={[{
        label:"Tambah Plot",
        key:"tambahplot",

    }]}>

    </Menu>

const Coordinate = (props) => {
    useMapEvents({
      click(e) {
        // setState your coords here
        // coords exist in "e.latlng.lat" and "e.latlng.lng"
        
        lat = e.latlng.lat;
        lng = e.latlng.lng;


        console.log("lat =" +lat);
        console.log("long =" +lng);
      },

      
      
    });
    return (
        <div className="RightClick">
            <Dropdown overlay={menu} trigger={["contextMenu"]}>
         
            <div
            
                style={{
                    width :"100",
                    height:"100vh",
                    backgroundColor: "lightgray",
                    border: "1px dashed red"
                }}>
                    
             

            </div>

           

            </Dropdown>
        </div>
    );
}

export default Coordinate;