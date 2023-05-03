import { Navigate, Route, Routes } from "react-router-dom"
// import { Login } from "../auth"
// import { HeroeRoutes } from "../heroes"
import { Navbar } from "../Navbar/Navbar"
import { HomePage, AboutMe, Projects, Stacks, ProfileView } from "../views"
// import { AboutMeRouter } from "../views/AboutMe/routes/aboutMeRouter"




export const AppRouter = () => {
    console.log('RENDER')
    return (
        <>
            <Navbar />

            <Routes>
                <Route path="home" element={<HomePage />} />
                <Route path="profile/*" element={<ProfileView />}>
                    <Route index element={<Navigate to='/profile/aboutMe' />} />
                    <Route path="aboutMe" element={<AboutMe />} />
                    <Route path="stack" element={<Stacks />} />
                    <Route path="*" element={<AboutMe />} />
                </Route>

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
