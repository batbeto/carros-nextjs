import useSWR from 'swr'
import axios from 'axios'

export default function CarEntity(){
  const {data, error} = useSWR(`http://localhost:8080/cars`,Fetcher)
  
  const deleteCar = async event => {

    event.preventDefault()

    const res = await fetch('http://localhost:8080/delete', {
      body: JSON.stringify({
        chassi: event.target.chassi.value
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'DELETE'
    })
  }

  const searchCar = async event => {

    event.preventDefault()

    const res = await fetch('http://localhost:8080/bymodel', {
      body: JSON.stringify({
        model: event.target.model.value
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    })

    const result = await res.json()

    alert(JSON.stringify(result, null, 2))

  }

  const updateCar = async event => {

    event.preventDefault()

    const res = await fetch('http://localhost:8080/update', {
      body: JSON.stringify({
        chassi: event.target.chassi.value,
        model: event.target.model.value,
        color: event.target.color.value
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'PUT'
    })
  }

  const registerCar = async event => {

    event.preventDefault()

    const res = await fetch('http://localhost:8080/create', {
      body: JSON.stringify({
        chassi: event.target.chassi.value,
        model: event.target.model.value,
        color: event.target.color.value
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    })
  }

  
    return (
      <div>
                  <form onSubmit={searchCar}>
                        <input  type="text" name='model' /> 
                        <button type="submit">Procurar carros</button> 
                    </form>   
        <ul>
        { 
                
                data ? 
                  
                  data.map((c) => 
                    
                    <li key={c.chassi}> 
                      Número do chassi: {c.chassi} <br /> Modelo: {c.model} <br /> Cor: {c.color} 
                    </li> 

                  )
    
                  : <p> Nenhum carro encontrado</p>

              }

         </ul> 
              <form onSubmit={deleteCar}>
                      <input  type="text" name='chassi' placeholder='Digite o chassi' /> 
                      <button type="submit"  placeholder='fodeu'>delete</button>
              </form>
              <form onSubmit={updateCar}>
              <input  type="text" name='chassi' placeholder='Digite o chassi' /> 
                      <button type="submit"  placeholder='VALEU BOI'>update</button>
              </form>                    
               <form onSubmit={registerCar}>
               <input  type="text" name='chassi' placeholder='Digite o chassi' /> 
                      <button type="submit"  placeholder='Mostrar'>register</button>
              </form>       
                      
      </div>
    );


    async function Fetcher(url) {

  const res = await fetch(url)

  const json = await res.json()
  
  return json

}

}




