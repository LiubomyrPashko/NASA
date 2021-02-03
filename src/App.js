import MainContent from './components/mainContent'
import './app.css'
import clip from './assets/Mars.mp4'

function App() {
  return (
    <>
      <video id='background-video' autoPlay loop muted>
        <source src={clip} type='video/mp4' />
        <source src={clip} type='video/ogg' />
      </video>
      <MainContent />
    </>
  )
}

export default App
