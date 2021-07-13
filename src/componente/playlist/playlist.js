import React from 'react'
import { useHistory } from 'react-router-dom'
import auth from '../auth/auth'
import HeaderPlayList from '../Headers/header-playlist'
import { useState, useEffect} from 'react';
import '../playlist/playlist.css'



function validar(e, history){
    if (document.getElementById("input-list").value.length > 0){ 
       auth.login(() => {
         history.push("/playlist")
       })
    }
  
    else {
      e.preventDefault()
      alert("Rellenar los campos")
  
    }
  }

  
    

function PlayList() {
    const history = useHistory()
   
    const [list, setList] = useState([
      {
        id: "can1",
        name:'A las nueve',
        artista: 'NTVG',
        duracion: '3:24',
        votos: 0,
      },
      {
        id: "can2",
        name:'Maldicion',
        artista: 'Once tiros',
        duracion: '3:04',
        votos: 0,
      },
      {
        id: "can3",
        name: 'Cancion para uno',
        artista: 'La Vela Puerca',
        duracion: '2:53',
        votos: 0,
      },
      {
        id: "can4",
        name: 'Mi Revolucion',
        artista: 'Cuatro Pesos de Propina',
        duracion: '3:24',
        votos: 0,
      },
      {
        id: "can5",
        name: 'Lo mas simple de las cosas',
        artista: 'Hereford',
        duracion: '3:17',
        votos: 0,
      }
      
    ]);
  
  
    const updateVote = (editVote) => {
      const changeVote = list.map(listas => (
        listas.id === editVote.id 
        ? editVote 
        : listas
      ))
      setList(changeVote)
      
    }
  
  
    const sortedList = [...list].sort((b, a) => (a.votos > b.votos ? 1 : a.votos < b.votos ? -1 : 0))
  
    return (
        <div>
           <HeaderPlayList/>
           <div className="content-list">
      <form name="listado" onSubmit={(e) => validar(e, history)}>
      <input
        type="text"
        id="input-list"
        placeholder="  Buscar "
        
      ></input>
      
      </form>

      <div >
        <table>
          <p className="resultado">Resultados</p>
          <tr >
            <th className="nombre">Nombre</th>
            <th className="artista">Artista</th>
            <th className="album">Álbum</th>
            <th className="duracion">Duración</th>
            <th className="agregar">Agregar</th>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </table>
        <div ></div>
        
      </div>

      <div >
        <table >
          <p className="tuplaylist">Tu Playlist</p>
          <tr>
            <th className="Nombre">Nombre</th>
            <th className="Artista">Artista</th>
            <th className="Duracion">Duración</th>
            <th className="Cantvoto">Cant.Votos</th>
            <th className="Votar">Votar</th>
          </tr>
          {sortedList.map(Lists => (
              <tr>
                <td>{Lists.name}</td>
                <td>{Lists.artista}</td>
                <td >{Lists.duracion}</td>
                <td  >{Lists.votos}</td>
                <button  className="mas"  
                onClick={() => updateVote ({id: Lists.id, name: Lists.name,
               artista: Lists.artista,duracion: Lists.duracion, votos: Lists.votos +1  })}>  </button> 
                <button className="menos"                
                onClick={() => updateVote ({id: Lists.id, name: Lists.name,
               artista: Lists.artista, duracion: Lists.duracion, votos: Lists.votos -1  })}></button>
              </tr> 
          ))
          } 
        </table>
        
        <div ></div>
        <div >
        
        </div>
      </div>
    </div>
        </div>
    )
}

export default PlayList
