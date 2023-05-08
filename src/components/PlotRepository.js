import  Axios  from "axios"
import React, { useEffect, useState } from "react"
import Plots from "./Plots";




const App = (props) => {
  const [identifier, setIndentifier] = useState();
  
  const [plots, setPlot] = useState([]);
  const [plots1, setPlot1] = useState([]);
  const [plots2, setPlot2] = useState([]);

  
  const [nama, setNama] = useState("");
  const [warna, setWarna] = useState("");
  const [koordinatX, setKoordinatX] = useState("");
  const [koordinatY, setKoordinatY] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [message, setMessage] = useState("");

  const [idUpdate, setIdUpdate] = useState();
  const [namaUpdate, setNamaUpdate] = useState("");
  const [warnaUpdate, setWarnaUpdate] = useState("");
  const [kordinatUpdateX, setKoordinatUpdateX] = useState();
  const [kordinatUpdateY, setKoordinatUpdateY] = useState();
  const [deskripsiUpdate, setDeskripsiUpdate] = useState("");
  const [messageUpdate, setMessageUpdate] = useState("");


  const [idDelete, setIdDelete] = useState();






  

//// REQUEST GET

  const getPlot = async () => {
    try{
      let response = await Axios.get('http://localhost:9000/plotss')
      setPlot(response.data)
    } catch(e){
      console.log(e.message)
    }
  }

  useEffect(() => {
      getPlot();
  }, [])

 

//   //// REQUEST GET UPDATE PLOT

//   const getUpdatePlot = async () => {
//     try{
//       let response = await Axios.get(`http://localhost:9000/plotss/${idUpdate}`)
//       setPlot1(response.data)
//     } catch(e){
//       console.log(e.message)
//     }
//   }

//   useEffect(() => {
//     getUpdatePlot();
//   }, [ idUpdate ])


//     //// REQUEST GET DELETE PLOT

//     const getDeletePlot = async () => {
//       try{
//         let response = await Axios.get(`http://localhost:9000/plotss/${idUpdate}`)
//         setPlot2(response.data)
//       } catch(e){
//         console.log(e.message)
//       }
//     }
  
//     useEffect(() => {
//       getUpdatePlot();
//     }, [ idUpdate ])




  
// //// REQUEST POST

//   let handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       let res = await fetch("http://localhost:9000/plotss", {
//         method: "POST",
//         body: JSON.stringify({
//           nama: nama,
//           warna: warna,
//           koordinatX: koordinatX,
//           koordinatY: koordinatY,
//           deskripsi: deskripsi,
//         }),
//         headers: {
//           'Content-type': 'application/json; charset=UTF-8',
//         },
//       });
//       let resJson = await res.json();
//       if (res.status === 201) {
//         setNama("");
//         setWarna("");
//         setKoordinatX("");
//         setKoordinatY("");
//         setDeskripsi("");
//         setMessage("Plot created successfully");
//       } else {
//         setMessage("Some error occured");
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   };

    
// //// REQUEST UPDATE

// let handleUpdate = async (e) => {
//   e.preventDefault();
//   try {
//     let res1 = await fetch(`http://localhost:9000/plotss/${idUpdate}`, {
//       method: "PUT",
//       body: JSON.stringify({
//         nama: namaUpdate,
//           warna: warnaUpdate,
//           koordinatX: kordinatUpdateX,
//           koordinatY: kordinatUpdateY,
//           deskripsi: deskripsiUpdate,
//       }),
//       headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//       },
//     });
//     let resJson1 = await res1.json();
//     if (res1.status === 200) {
//       setNama("");
//       setWarna("");
//       setKoordinatX("");
//       setKoordinatY("");
//       setMessage("Plot update successfully");
//     } else {
//       setMessage("Some error occured");
//     }
//   } catch (err) {
//     console.log(err);
//   }
// };

// //// REQUEST DELETE

// let handleDelete = async (e) => {
//   e.preventDefault();
//   try {
//     let res2 = await fetch(`http://localhost:9000/plotss/${idDelete}`, {
//       method: "DELETE",
//       headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//       },
//     });
//     let resJson2 = await res2.json();
//     if (res2.status === 201) {
//       setIdUpdate("");
//       setMessage("Plot deleted successfully");
//     } else {
//       setMessage("Some error occured");
//     }
//   } catch (err) {
//     console.log(err);
//   }
// };



  return (
   
    <div className="py-5">
       <div className="container">
         <div className="row justfy-content-center">
          <div className="col-md-8">
            <h1>TAMPIL PLOT</h1>
            
     
            <table className="table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nama</th>
                  <th>Warna</th>
                  <th>Kordinat X</th>
                  <th>Kordinat Y</th>
                  <th>Deskripsi</th>
                </tr>
              </thead>
              <tbody>
                {
                  plots.map((plot, index) => {
                    return (
                      <tr key={index}>
                      <td>{plot.id}</td>
                      <td>{plot.nama}</td>
                      <td>{plot.warna}</td>
                      <td>{plot.koordinatX}</td>
                      <td>{plot.koordinatY}</td>
                      <td>{plot.deskripsi}</td>
                      </tr>
        
                    )
                  })
                }
                

              </tbody>
            </table>
            
          

         <br/>
         <hr/>
          
          {/* <h1>TAMBAH PLOT</h1>

          <form onSubmit={handleSubmit}>
            <table>
              <tr>
              <td><label >Nama</label></td>
              <td>
                <input 
                type="text" 
                name="nama"
                placeholder="Nama"
                onChange={(e) => setNama(e.target.value)}> 
              </input></td>
              </tr>

              <tr>
                <td><label>Warna</label></td>
                <td>
                <input 
                type="text" 
                name="warna"
                placeholder="Warna"
                onChange={(e) => setWarna(e.target.value)}>
              </input>
                </td>
              </tr>

              <tr>
                <td><label>Kordinat X</label></td>
                <td><input 
                type="text" 
                name="kordinatX"
                placeholder="Kordinat X"
                onChange={(e) => setKoordinatX(e.target.value)}>
              </input></td>
              </tr>

              <tr>
                <td><label>Kordinat Y</label></td>
                <td><input 
                type="text" 
                name="kordinatY"
                placeholder="Kordinat Y"
                onChange={(e) => setKoordinatY(e.target.value)}>
              </input></td>
              </tr>

              <tr>
                <td><label>Deskripsi</label></td>
                <td><input 
                type="text" 
                name="deskripsi"
                placeholder="Deskripsi"
                onChange={(e) => setDeskripsi(e.target.value)}>
              </input></td>
              </tr>
              
            </table>

              <button type="submit">TAMBAH</button>
              <div className="message">{message ? <p>{message}</p> : null}</div>
          </form>

          <hr/>
              

  

          <h1>UPDATE  PLOT</h1>
          <form onSubmit={handleUpdate}>
          <label>ID UPDATE</label>
          <input type="text" name="idUpdate" value={idUpdate} onChange={(e) => setIdUpdate(e.target.value)}></input>
          <br/>

          <table>
            <tr>
              <td><label>Nama</label></td>
              <td><input 
                type="text" 
                name="nama"           
                defaultValue={plots1.nama}
                onChange={(e) => setNamaUpdate(e.target.value)}> 
              </input></td>
            </tr>

            <tr>
              <td><label>Warna</label></td>
              <td><input 
                type="text" 
                name="warna"
                defaultValue={plots1.warna}
                onChange={(e) => setWarnaUpdate(e.target.value)}>
              </input></td>
            </tr>

            <tr>
              <td><label>Kordinat X</label></td>
              <td><input 
                type="text" 
                name="kordinatX"
                defaultValue={plots1.koordinatX}
                onChange={(e) => setKoordinatUpdateX(e.target.value)}>
              </input></td>
            </tr>

            <tr>
              <td><label>Kordinat Y</label></td>
              <td><input 
                type="text" 
                name="kordinatY"
                defaultValue={plots1.koordinatY}
                onChange={(e) => setKoordinatUpdateY(e.target.value)}>
              </input></td>
            </tr>

            <tr>
              <td><label>Deskripsi</label></td>
              <td> <input quick start guide
                type="text" 
                name="deskripsi"
                defaultValue={plots1.deskripsi}
                onChange={(e) => setDeskripsiUpdate(e.target.value)}> 
              </input></td>
            </tr>
          </table>
          

              <br/>
              <button type="submit">UPDATE</button>
              <div className="message">{message ? <p>{message}</p> : null}</div>
          </form>

          <br/>


          <h1>DELETE PLOT</h1>
          <form onSubmit={handleDelete}>
            <label>ID DELETE PLot</label>
              <input type="text" 
                name="idDelete" 
                value={idDelete} 
                onChange={(e) => setIdDelete(e.target.value)}>
              </input>
          
              <br/>
              <button type="submit">DELETE</button>
              <div className="message">{message ? <p>{message}</p> : null}</div>
          </form> */}


          

          </div>





         </div>
       </div>
    </div>
  );
}

export default App; 