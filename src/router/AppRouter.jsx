import { Navigate, Route, Routes } from "react-router-dom"
// import { Login } from "../auth"
// import { HeroeRoutes } from "../heroes"
import { Navbar } from "../Navbar/Navbar"
import { HomePage, AboutMe, Projects } from "../views"




export const AppRouter = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="home" element={<HomePage />} />
                <Route path="aboutMe" element={<AboutMe />} />
                <Route path="projects" element={<Projects />} />
                <Route path="/*" element={<Navigate to='/home' />} />
                {/* <Route path="education" element={<EducationPage />} />
                <Route path="experience" element={<ExperiencePage />} />
                <Route path="projects" element={<ProjectsPage />} />
                <Route path="contact" element={<ContactRoutes />} /> */}
            </Routes>

        </>
    )
}
