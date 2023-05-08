
import { RedSocialIcons } from "./views/components"
import { HomePage, AboutMe, Projects, Stacks } from "./views"
import { Navbar } from "./Navbar/Navbar"
import { Contact } from "./views/Contact"

const redSocialIcons = [
  { key: 1, name: 'linkedin', classNameIcon: 'bx bxl-linkedin', url: 'https://www.linkedin.com/in/stiven-coy/' },
  { key: 2, name: 'github', classNameIcon: 'bx bxl-github', url: 'https://github.com/numarCoy98' },
  { key: 3, name: 'instagram', classNameIcon: 'bx bxl-instagram', url: 'https://www.instagram.com/numarcoy3/' }
]

function App() {

  const imageUrl = '/background.JPEG'

  return (
    <>
      <div className="bg-blue-dark bg-cover bg-no-repeat"
        style={{
          background: `linear-gradient( rgba(0, 27, 72, 0.92), rgba(0, 27, 72, 0.92) ), url(${imageUrl}) no-repeat`,
          backgroundSize: "cover"
        }}
      >
        <Navbar />
        <HomePage />
        <AboutMe />
        <Stacks />
        <Contact />
        <footer className="bg-[black]">
          <p className="text-white text-center"> Hecho por: Numar Stiven Coy Paez</p>
          <div className="text-white  text-lg flex justify-center">
            <RedSocialIcons />
          </div>
        </footer>
      </div>
    </>
  )
}

export default App
