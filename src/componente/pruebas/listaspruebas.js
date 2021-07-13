import React, { useState, useEffect } from 'react'

// mi componente principal <Lista>
const Lista = () => {
  // guardo el estado list de valor inicial la lista que tengo
  const [list, setList] = useState([
    { nombre: 'juan', edad: 50 },
    { nombre: 'alberto', edad: 40 },
    { nombre: 'aragor', edad: 2000 },
  ])

  // utilizo useEffect para ejecutar este código sólo una vez
  useEffect(() => {
    // copio la lista con [...list] y la ordeno con sort()
    const sortedList = [...list].sort((a, b) => (a.edad > b.edad ? 1 : a.edad < b.edad ? -1 : 0))
    // actualizo el estado con la nueva lista ya ordenada
    setList(sortedList)
  }, [])

  // vuelco el contenido del estado `list`
  return (
    <>
      {/* Aquí pongo el botón para reordenar la lista */}
      <button
        onClick={() => {
          let newSortedList = [...list].sort((a, b) => (a.edad > b.edad ? 1 : a.edad < b.edad ? -1 : 0))
          // si la lista después de ordenarla tiene el mismo primer elemento, lo repito a la inversa
          // (claro que esto es ineficiente, lo suyo sería habilitar otro estado para guardar el tipo de ordenamiento que hemos hecho)
          if (newSortedList[0] === list[0])
            newSortedList = [...list].sort((b, a) => (a.edad > b.edad ? 1 : a.edad < b.edad ? -1 : 0))
          setList(newSortedList)
        }}
      >
        Ordenar
      </button>

      {/* Y aquí la lista, cada vez que el estado cambie este componente se va a repintar y a actualizar la vista */}
      <ul>
        {list.map(el => (
          <li>
            {el.nombre}: {el.edad}
          </li>
        ))}
      </ul>
    </>
  )
}

export default Lista