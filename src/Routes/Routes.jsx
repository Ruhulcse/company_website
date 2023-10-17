import { createBrowserRouter } from 'react-router-dom'

import Layout from '../Layout/Layout'

export const router = createBrowserRouter([
    {
        path:'/',
        element: <Layout/>,
        children:[
            {
                path:'/',
                element:<HomePage/>
            },
            {
                path:'/foodbar',
                element:<Foodbar/>
            },
            {
                path:'/take-away',
                element:<TakeAway/>
            },
            {
                path:'/foodtrucks',
                element:<FoodTrucks/>
            },
            {
                path:'/events',
                element:<Events/>
            },
            {
                path:'/overons',
                element:<Overones/>
            },
            {
                path:'/contact',
                element:<Contact/>
            },
            {
                path:'/menu',
                element:<PdfViewer/>
            },
            {
                path:'/admin',
                element:<UploadPdf/>
            },
              
        ]
    },
    {
        path:'*',
        element:<NotFound/>
    },
  
]) 