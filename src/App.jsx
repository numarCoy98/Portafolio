
import { AppRouter } from "./router/AppRouter"

function App() {

  const imageUrl = '/background.JPEG'

  return (
    <>
      <div className="bg-blue-dark bg-cover bg-no-repeat"
        style={{ background: ` linear-gradient( rgba(0, 27, 72, 0.9), rgba(0, 27, 72, 0.9) ), url(${imageUrl})` }}
      >

        <AppRouter />
      </div>
      {/* <header className="h-24 bg-blue-dark">
        <Navbar />
      </header>
      <h1>
        Hola mundo
      </h1> */}
    </>
  )
}

export default App
