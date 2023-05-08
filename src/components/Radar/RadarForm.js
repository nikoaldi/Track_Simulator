// import  Axios  from "axios"
// import React, { useEffect, useState } from "react"
import './RadarForm.css';

const FormRadar = (props) => {

return (
    <div>
        <div id="radar-list-info">
        <h5 className="title">Radar List Info</h5>
        <form className="formradarlist">
            <table className="table" border={2}>
                <tr>
                    <th>No</th>
                    <th>Track Id</th>
                    <th>Environment</th>
                    <th>Start Time</th>
                    <th>End Time</th>
                    <th>Last Update</th>
                    <th>Status</th>
                    <th>Action</th>
                    <th>Select All</th>
                </tr>
            </table>
        </form>
    </div>

    <div id="data-setting">
        <h5 className="title">Data Setting</h5>
            <form className="formdatasetting">
                <table className="table" border={2}>
                    <tr>
                        <td></td>
                        <td><label >Track Mode</label></td>
                        <td>
                            <select  name="track-mode-radio" id="tmr">
                                <option value="land">-- Pilih --</option>
                                <option value="Manual">Manual</option>
                                <option value="Automatic">Automatic</option>
                            </select>
                        </td>
                        <td><label>Track Input</label></td>
                        <td>             
                            <select name="environment-radio" id="er" >
                                <option value="land">-- Pilih --</option>
                                <option value="air">Single</option>
                                <option value="surface">Multi</option>
                                <option value="subsurface">Import</option>
                            </select>
                        </td>
                        <td>Count</td>
                        <td>
                            <input 
                            type="number" 
                            id="count"
                            name="count"
                            placeholder="count">
                            </input>
                        </td>
                    </tr>

                    <tr>
                        <td></td>
                        <td><label>Environment</label></td>
                        <td>             
                            <select name="environment-radio" id="er" >
                                <option value="land">-- Pilih --</option>
                                <option value="air">Air</option>
                                <option value="surface">Surface</option>
                                <option value="subsurface">Subsurface</option>
                                <option value="land">land</option>
                            </select>
                        </td>
                        <td><label >Start Time</label></td>
                        <td>
                            <input 
                            type="datetime-local" 
                            id="start-time-input" 
                            name="input-start">
                            </input>
                        </td>
                        <td><label >End Time</label></td>
                        <td>
                            <input 
                            type="datetime-local" 
                            id="end-time-input" 
                            name="input-end">
                            </input>
                        </td>  
                    </tr>

                    <tr>
                        <td></td>
                        <td>Course Variation</td>
                        <td></td>
                        <td>Speed Variation</td>
                        <td></td>
                        <td>Altitude  Variation</td>
                        <td></td>
                    </tr>
         
                    <tr>
                        <td></td>
                        <td><label >Course Range</label></td>
                        <td >
                            <input 
                            type="number" 
                            className="input-range"
                            id="course-range-min" 
                            name="course-range-min" 
                            placeholder="Min"
                            size={200}>
                            </input>
                            &nbsp;
                            To
                            &nbsp;
                            <input 
                            type="number" 
                            className="input-range"
                            id="course-range-max" 
                            name="course-range-max" 
                            placeholder="Max"
                            size={5}>
                            </input>
                        </td> 
                        <td><label >Speed Range</label></td>
                        <td>
                            <input 
                            type="number" 
                            className="input-range"
                            id="speed-range-min" 
                            name="speed-range-min" 
                            placeholder="Min"
                            size={5}>
                            </input>
                            &nbsp;
                            To
                            &nbsp;
                            <input 
                            type="number" 
                            className="input-range"
                            id="speed-range-max" 
                            name="speed-range-max" 
                            placeholder="Max"
                            size={5}>
                            </input>
                        </td>  
                        <td><label >Altitude Range</label></td>
                        <td>
                            <input 
                            type="number" 
                            className="input-range"
                            id="altitude-range-min" 
                            name="altitude-range-min" 
                            placeholder="Min"
                            size={5}>
                            </input>
                            &nbsp;
                            To
                            &nbsp;
                            <input 
                            type="number" 
                            className="input-range"
                            id="altitude-range-max" 
                            name="altitude-range-max"
                            placeholder="Max" 
                            size={5}>
                            </input>
                        </td>  
                    </tr>   

                    <tr>
                        <td></td>
                        <td><label>Course Increment</label></td>
                        <td>
                            <input 
                            type="number" 
                            id="course-increment"
                            name="course-increment"
                            placeholder="Course Increment">
                            </input>
                        </td>
                        <td><label >Speed Increment</label></td>
                        <td>
                            <input 
                            type="number" 
                            id="speed-increment"
                            name="speed-increment"
                            placeholder="Speed Increment">
                            </input>
                        </td>
                        <td><label>Altitude Increment</label></td>
                        <td>
                            <input 
                            type="number" 
                            id="altitude-increment"
                            name="altitude-increment"
                            placeholder="Altitude Increment">
                            </input>
                        </td>
                    </tr>

                    <tr>
                        <td>Radio</td>
                        <td><label>Latitude</label></td>
                        <td>
                            <input 
                            type="number" 
                            id="latitude"
                            name="latitude"
                            placeholder="Latitude">
                            </input>
                        </td>
                        <td><label >Longitude</label></td>
                        <td>
                            <input 
                            type="number" 
                            id="longitude"
                            name="longitude"
                            placeholder="Longitude"> 
                            </input>
                        </td>
                        <td><label>Altitude</label></td>
                        <td>
                            <input 
                            type="number" 
                            id="altitude"
                            name="altitude"
                            placeholder="Altitude" >
                            </input>
                        </td>
                    </tr>

                    <tr>
                        <td>Radio</td>
                        <td><label>Bearing</label></td>
                        <td>
                            <input 
                            type="number" 
                            id="bearing"
                            name="bearing"
                            placeholder="Bearing">
                            </input>
                        </td>
                        <td><label >Distance</label></td>
                        <td>
                            <input 
                            type="number" 
                            id="distance"
                            name="distance"
                            placeholder="Distance"> 
                            </input>
                        </td>
                        <td colSpan={2}></td>
                    </tr>

                    <tr>
                        <td></td>
                        <td>IFF Data</td>
                        <td colSpan={5}></td>
                    </tr>

                    <tr>
                        <td></td>
                        <td><label>Mode I Code</label></td>
                        <td>
                            <input 
                            type="number" 
                            id="mode1"
                            name="mode1"
                            placeholder="Mode I Code">
                            </input>
                        </td>
                        <td><label >Mode III Code</label></td>
                        <td>
                            <input 
                            type="number" 
                            id="mode3"
                            name="mode3"
                            placeholder="Mode III Code"> 
                            </input>
                        </td>
                        <td><label>Mode V Code</label></td>
                        <td colSpan={2}>
                            <input 
                            type="number" 
                            id="mode5"
                            name="mode5"
                            placeholder="Mode V Code">
                            </input>
                        </td>
                    </tr>

                    <tr>
                        <td></td>
                        <td><label>Mode II Code</label></td>
                        <td>
                            <input 
                            type="number" 
                            id="mode2"
                            name="mode2"
                            placeholder="Mode II Code">
                            </input>
                        </td>
                        <td><label >Mode IV Code</label></td>
                        <td>
                            <input 
                            type="number" 
                            id="mode4"
                            name="mode4"
                            placeholder="Mode IV Code"> 
                            </input>
                        </td>
                        <td colSpan={2}></td>
                    </tr>
           
                </table>
                <button type="submit" className="btn" >GET DEFAULT</button>
                <button type="submit" className="btn">SAVE ONLY</button>
                <button type="submit" className="btn">SAVE & SEND</button>
                <button type="submit" className="btn">CANCEL</button>
            </form>
          </div>
   </div>
  );
}

export default FormRadar; 