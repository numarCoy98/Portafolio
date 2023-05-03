import { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

const nextPathName = { "/profile/aboutMe": '/profile/stack', '/profile/stack': "/profile/aboutMe" }

export const ProfileView = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const onChangeView = () => {
        navigate(nextPathName[location.pathname], {
            replace: false
        })
    }
    useEffect(() => {
        const timer = setTimeout(() => {
            navigate(nextPathName[location.pathname], {
                replace: false
            })
        }, 4000);
        return () => clearTimeout(timer);
    }, [location.pathname]);
    return (
        <>
            <div className='grid grid-cols-12 gap-4 bg-white'>
                <div onClick={onChangeView} className='flex justify-center items-center hover:bg-gray-dark opacity-50'>
                    <i className='bx bxs-left-arrow text-white hover:text-gray'></i>
                </div>
                <div className='col-span-10'>
                    <Outlet />
                </div>
                <div onClick={onChangeView} className='flex justify-center items-center hover:bg-gray-dark opacity-50'>
                    <i className='bx bxs-right-arrow text-white hover:text-gray'></i>
                </div>
            </div>

        </>
    )
}
