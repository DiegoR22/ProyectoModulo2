
import Header from '../Headers/header-home'
import auth from '../auth/auth'
import { useHistory } from 'react-router-dom'
import '../home&login/home.login.css'

function validar(e, history){
    if (document.getElementById("input-email").value.length > 0
       && document.getElementById("input-pass").value.length > 0){ 
       auth.login(() => {
         history.push("/playlistblank")
       })
    }
  
    else {
      e.preventDefault()
      alert("Rellenar los campos")
  
    }
  }

function Home() {
  const history = useHistory();
    return (
        <div>
          <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Righteous&display=swap%27);
          @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap%22);
         </style>
         <Header/>
         <div className="container">
        <img
          className="candado-home"
          alt="candado"
          src="https://www.figma.com/file/nMX6u7H0w9PIUBqC9RzZJc/image/8a71e35f9cf8575bf66c5dde51aedb438d4de70b?fuid=967493902892911714"
        ></img>
        <h1 >Ingresar</h1>
        <form onSubmit={(e) => validar(e, history)} name="form" id="form">
          <input
            id="input-email"
            type="text"
            name="email"
            
            placeholder="Correo Electronico"
          ></input>
          <input
            id="input-pass"
            type="text"
            name="pass"
            
            placeholder="Contraseña"
          ></input>
          <button
            className="botonhome"
            
            type="submit"
          >
            COMENZAR A CREAR PLAYLISTS
          </button>
          <a className="olvpass" >
            ¿Has OLVIDADO LA CONTRASEÑA?
          </a>

          <div className="linea-home">
          <a className="notcount" >
            ¿NO TIENES CUENTA?
          </a>
          <a className="register" >
            REGISTRATE
          </a> 
          </div>
        </form>
      </div>   
        </div>
    )
}

export default Home
