import './App.css'

function App() {
    return (
    <>
      <h1>Scheimpflug Calculator</h1>
      <div className="card">
          <label htmlFor="focal_plane">Focal Plane</label>
          <input type="text" id="focal_plane" />
          <label htmlFor="focal_length">Focal Length</label>
          <input type="text" id="focal_length" />
        <button>Calculate</button>
      </div>
    </>
  )
}

export default App
