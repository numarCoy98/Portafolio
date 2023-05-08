
import { RedSocialIcons } from "./views/components"
import { HomePage, AboutMe, Projects, Stacks } from "./views"
import { Navbar } from "./Navbar/Navbar"
import { Contact } from "./views/Contact"
import { useRef } from 'react';

function App() {

  const imageUrl = '/background.JPEG'

  // const homeRef = useRef(null);
  // const profileRef = useRef(null);
  // const contactRef = useRef(null);

  // const scrollToBottom = () => {
  //   contactRef.current?.scrollIntoView({ behavior: "smooth", block: 'end' })
  // }

  return (
    <>
      <div className="bg-blue-dark bg-cover bg-no-repeat"
        style={{
          background: `linear-gradient( rgba(0, 27, 72, 0.92), rgba(0, 27, 72, 0.92) ), url(${imageUrl}) no-repeat`,
          backgroundSize: "cover"
        }}
      >
        <Navbar />
        <div id="home">
          <HomePage />
        </div>
        <div id="profile">
          <AboutMe />
        </div>
        <div id="habilities">
          <Stacks />
        </div>
        <div id="contact">
          <Contact />
        </div>
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
