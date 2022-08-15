import reactLogo from './assets/react.svg'
import './App.css'
import Main from './components/MainBody'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="container">
      <Navbar />
      <Main />
    </div>
  )
}

export default App