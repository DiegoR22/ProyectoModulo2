import React from 'react'
import { useHistory } from 'react-router-dom'
import auth from '../auth/auth'
import HeaderPlayList from '../Headers/header-playlist'
import '../playlist/playlistblank.css'


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

function PlayListBlank() {
    const history = useHistory()
    return (
        <div>
           <HeaderPlayList/>
           <div className="content-list">
      <form name="listado" onSubmit={(e) => validar(e, history)}>
      <input
        type="text"
        id="input-list"
        placeholder=" Buscar "
        
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
        <p className="sinresultados"><span >No hay resultados</span> utiliza la barra de búsqueda para encontrar canciones</p>
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
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </table>
        
        <div ></div>
        <div >
        <p className="UPS">UPS!, TU PLAYLIST AÚN ESTÁ VACÍA</p>
        <p className="Comienza">Comienza a agregar canciones</p>
        </div>
      </div>
    </div>
        </div>
    )
}

export default PlayListBlank
