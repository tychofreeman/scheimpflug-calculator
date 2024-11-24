import './App.css'
import React, {useState} from "react";


function App() {
    const [focalPlaneValue, setFocalPlaneValue] = useState(0);
    const [focalLengthValue, setFocalLengthValue] = useState(0);
    const angleOfFocus = calculateAngleOfFocus();

    function calculateAngleOfFocus() {
        if (focalLengthValue === 0 || focalPlaneValue === 0) return ''
        return '90';
    }

    function handleChange(event: React.ChangeEvent<HTMLInputElement>, setter: React.Dispatch<React.SetStateAction<number>>) {
        setter(Number.parseInt(event.target.value));
    }

    function handleFocalPlaneChange(event: React.ChangeEvent<HTMLInputElement>) {
        console.log(`Changing focal plane to ${event.target.value}`)
        handleChange(event, setFocalPlaneValue);
    }
    function handleFocalLengthChange(event: React.ChangeEvent<HTMLInputElement>) {
        console.log(`Changing focal length to ${event.target.value}`)
        handleChange(event, setFocalLengthValue);
    }


    return (
    <>
      <h1>Scheimpflug Calculator</h1>
      <div className="card">
          <label htmlFor="focal_plane">Focal Plane</label>
          <input type="text" id="focal_plane" value={focalPlaneValue} onChange={handleFocalPlaneChange}/>
          <label htmlFor="focal_length">Focal Length</label>
          <input type="text" id="focal_length" value={focalLengthValue} onChange={handleFocalLengthChange}/>
          <div role='status' aria-label='Angle of Focus'>{angleOfFocus}</div>
      </div>
    </>
  )
}

export default App
