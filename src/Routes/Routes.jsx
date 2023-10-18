import { createBrowserRouter } from 'react-router-dom'

import Layout from '../Layout/Layout'
import AboutUs from '../pages/Aboutus/AboutUs'
import Careers from '../pages/Careers/Careers'
import ContactUs from '../pages/ContactUs/ContactUs'
import Home from '../pages/Home/Home'
import MobileDev from '../pages/Services/MobileDev/MobileDev'
import Quality from '../pages/Services/Quality/Quality'
import Services from '../pages/Services/Services'
import SoftDev from '../pages/Services/SoftDev/SoftDev'
import WebDev from '../pages/Services/WebDev/WebDev'

export const router = createBrowserRouter([
    {
        path:'/',
        element: <Layout/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/about-us',
                element:<AboutUs/>
            },
            {
                path:'/services',
                element:<Services/>
            },
            {
                path:'/services/dev',
                element:<SoftDev/>
            },
            {
                path:'/services/web',
                element:<WebDev/>
            },
            {
                path:'/services/mobile',
                element:<MobileDev/>
            },
            {
                path:'/services/quality',
                element:<Quality/>
            },
            {
                path:'/careers',
                element:<Careers/>
            },
            {
                path:'/contact-us',
                element:<ContactUs/>
            },
              
        ]
    }
  
]) 