import './App.css'
import { Link } from 'react-router-dom'

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <Link to="/practice">
          <button type="button">
            GO!
          </button>
        </Link>
      </div>
    </>
  )
}

export default App
