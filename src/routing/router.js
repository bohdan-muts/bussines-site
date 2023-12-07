import { createBrowserRouter} from "react-router-dom";
import { Layout } from "../components/layout";
import MainPage from "../pages/mainpage";
import About from "../pages/about";
import Work from "../pages/work";
import Team from "../pages/team";
import Contact from "../pages/contact";
import ProjectPage from "../pages/project-page";
export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children:[
            {
                path: '/',
                element: <MainPage/>,
            },
            {
              path: '/about',
              element: <About/>,
            },
            {
              path: '/work',
              element: <Work/>,
            },
            {
                path: '/project/:id',
                element: <ProjectPage/>,
            },
            {
              path: '/team',
              element: <Team/>,
            },
            {
              path: '/contact',
              element: <Contact/>,
            }
        ],
    },
])