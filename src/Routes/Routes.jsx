import { createBrowserRouter } from 'react-router-dom'

import Layout from '../Layout/Layout'
import ScrollTop from '../components/shared/ScrollTop/ScrollTop'
import AboutUs from '../pages/Aboutus/AboutUs'
import Careers from '../pages/Careers/Careers'
import ContactUs from '../pages/ContactUs/ContactUs'
import Home from '../pages/Home/Home'
import DigitalMarketing from '../pages/Services/DigitalMarketing/DigitalMarketing'
import MobileDev from '../pages/Services/MobileDev/MobileDev'
import Services from '../pages/Services/Services'
import SoftDev from '../pages/Services/SoftDev/SoftDev'
import WebDev from '../pages/Services/WebDev/WebDev'

export const router = createBrowserRouter([
    {
        path:'/',
        element: <>
        <ScrollTop/>
        <Layout/>
        </>,
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
                path:'/services/digital-marketing',
                element:<DigitalMarketing/>
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