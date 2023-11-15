import { createResource } from 'solid-js'
import './App.css'

const fetchData = () => {
  await (fetch("http://localhost:5016/api/Profile/profile"))
}



function App() {

  const [Profile] = createResource(fetchData);

  return (
    <>
      <div className='container'>
        <div className='row mt-4'>
          <div className='col-md-12 text-center'>
            <h1>{Profile.nombre}</h1>
          </div>
          <div className='col-md-12'>
            <p>{Profile.summary}</p>
          </div>
          <h4>Datos Personales</h4>
          <ul className='list-group list-group-flush'>
            
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
