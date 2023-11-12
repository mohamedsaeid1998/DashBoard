import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { Home, Login, Product, Products, User, Users } from "./Pages"
import Layout from "./Layout/Layout"


function App() {

const routes = createBrowserRouter([
  {path:'',element:<Layout/>,children:[
    {index:true,element:<Home/> },
    {path:'products',element:<Products/> },
    {path:'users',element:<Users/> },
    {path:'users/:id',element:<User/> },
    {path:'products/:id',element:<Product/> },
  ]},
  {path:'login',element:<Login/> },

])

  return <>
<RouterProvider router={routes}/>
  </>
}

export default App
