import { For, Show, createResource } from 'solid-js'

const fetchData = async () => {
  const response = await fetch('http://localhost:5016/api/Profile/profile');

  return response.json();
}

function App() {

  const [profileData] = createResource(fetchData)

  return (
  <Show when={profileData()} fallback={<h3>Cargando...</h3>}>
    <div className='container'>
      <div className='row mt-4'>
        <div className='col-md-12 text-center'>
          <h1>{profileData().name} {profileData().lastname} <img src="./src/assets/small-flag.jpg" style="max-width: 40px"></img> </h1>
          <img src="./src/assets/solid.svg" style="max-width: 40px"></img> <img src="./src/assets/Microsoft_.NET_logo.svg" style="max-width: 40px"></img> 
        </div>
        <div className='col-md-12 mt-4'>
          <p>{profileData().summary}</p>
        </div>
        <h4>Datos Personales</h4>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'>Edad: {profileData().age} años</li>
          <li className='list-group-item'>Ciudad de origen: {profileData().city}</li>
          <li className='list-group-item'>Correo electrónico: {profileData().email}</li>
        </ul>
        <h4 className='mt-4'>Gustos y pasatiempo</h4>
        <ol className='list-group list-group-numbered'>
          <For each={profileData().hobbies}>
            {(hobby) => (
              <li className='list-group-item'>Practicar {hobby.hobbyName}</li>
            )}
          </For>
          
        </ol>
      </div>
      <div className='container'>
        <table className='table table-hover mt-4'>
            <thead>
              <tr>
                <th>Framework</th>
                <th>Fecha inicial de aprendizaje</th>
                <th>¿Aprendido por completo?</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{profileData().frameworks[4].frameworkName}</td>
                <td>{profileData().frameworks[4].frameworkDate}</td>
                <td>{profileData().frameworks[4].isLearned}</td>
              </tr>
              <tr>
                <td>{profileData().frameworks[0].frameworkName}</td>
                <td>{profileData().frameworks[0].frameworkDate}</td>
                <td>{profileData().frameworks[0].isLearned}</td>
              </tr>
              <tr>
                <td>{profileData().frameworks[3].frameworkName}</td>
                <td>{profileData().frameworks[3].frameworkDate}</td>
                <td>{profileData().frameworks[3].isLearned}</td>
              </tr>
              <tr>
                <td>{profileData().frameworks[2].frameworkName}</td>
                <td>{profileData().frameworks[2].frameworkDate}</td>
                <td>{profileData().frameworks[2].isLearned}</td>
              </tr>
              <tr>
                <td>{profileData().frameworks[1].frameworkName}</td>
                <td>{profileData().frameworks[1].frameworkDate}</td>
                <td>{profileData().frameworks[1].isLearned}</td>
              </tr>
            </tbody>
        </table>
        <div className='mt-4'>
          <div className='progress mt-4' role='progressbar' aria-label='Success example' aria-valuenow='25' aria-valuemin="0" aria-valuemax="100">
              <div className='progress-bar bg-success' style="width: 27%">
                  {profileData().frameworks[4].frameworkName} 27%
              </div>
          </div>
          <div className='progress mt-4' role='progressbar' aria-label='Danger example' aria-valuenow='100' aria-valuemin="0" aria-valuemax="100">
              <div className='progress-bar bg-danger' style="width: 13%">
                  {profileData().frameworks[0].frameworkName} 13%
              </div>
          </div>
          <div className='progress mt-4' role='progressbar' aria-label='info example' aria-valuenow='50' aria-valuemin="0" aria-valuemax="100">
              <div className='progress-bar bg-info text-dark' style="width: 30%">
                  {profileData().frameworks[3].frameworkName} 30%
              </div>
          </div>
          <div className='progress mt-4' role='progressbar' aria-label='warning example' aria-valuenow='75' aria-valuemin="0" aria-valuemax="100">
              <div className='progress-bar bg-warning text-dark' style="width: 9%">
                  {profileData().frameworks[2].frameworkName} 9%
              </div>
          </div>
          <div className='progress mt-4' role='progressbar' aria-label='success example' aria-valuenow='75' aria-valuemin="0" aria-valuemax="100">
              <div className='progress-bar bg-success' style="width: 14%">
                  {profileData().frameworks[1].frameworkName} 14%
              </div>
          </div>
        </div>
      </div>
    </div>

  </Show>)
}

export default App
