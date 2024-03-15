import { createBrowserRouter } from 'react-router-dom';
import About from '../Components/About/About';
import Home from '../Components/Home/Home';
import Movies from '../Components/Movies/Movies';
import Netowrk from '../Components/Networks/Netowrk';
import Peopl from '../Components/People/Peopl';
import Tv from '../Components/Tv/Tv';
import NotFound from '../Components/NotFound/NotFound';
import MainLayout from '../Layouts/MainLayout';
import ItemDetails from '../Components/ItemDetails/ItemDetails';
import AuthLayout from '../Layouts/AuthLayout';
import Signin from '../Components/Singnin/Signin';
import Signup from '../Components/Signup/Signup';

 let routers=createBrowserRouter([
  {
    path:'/',element:<MainLayout/>,children:[
      {index:true,element:<Home/>},
      {path:'home',element:<Home/>},
      {path:'about',element:<About/>},
      {path:'people',element:<Peopl/>},
      {path:'network',element:<Netowrk/>},
      {path:'tv',element:<Tv/>},
      {path:'movies',element:<Movies/>},
      {path:'details/:id/:type',element:<ItemDetails/>},
      {path:'*',element:<NotFound/>},
    ]
  },
  {
    path:'/',element:<AuthLayout/>,children:[
      {index:true,element:<Signin/>},
      {path:'signin',element:<Signin/>},
      {path:'signup',element:<Signup/>},
    ]
  }
])

  export default routers