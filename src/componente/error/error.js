import React from 'react'
import Header from '../Headers/header-home'
import '../error/error.css'


function Error() {
    return (
        <div>
           <Header/>
           <div className="content">
          <img className="imagen-candado" alt="candado" src="https://www.figma.com/file/nMX6u7H0w9PIUBqC9RzZJc/image/8a71e35f9cf8575bf66c5dde51aedb438d4de70b?fuid=967493902892911714"></img>
          <div >
          <h1 ><span >Mmm...</span> algo no salió bien</h1>
          <p className="error">Debes estar autenticado para acceder a esta pagina</p>
          </div>
      </div>
        </div>
    )
}

export default Error
