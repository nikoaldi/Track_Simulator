import { Dropdown, Menu } from "antd";
import Coordinate from "./Coordinate";
import { useMapEvents} from 'react-leaflet';





function RightClick(props){

    var lat = props.lat;
    var lng = props.lng; 

    const menu = <Menu 
    items={[{
        label:"TAMBAH PLOT11",
        key:"tambahplot",

    }]}>
    </Menu>



    return(
        
        <div className="RightClick">
            <Dropdown overlay={menu} trigger={["click"]}>
         
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

export default RightClick;