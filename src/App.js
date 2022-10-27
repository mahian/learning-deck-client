import './App.css';
import { createBrowserRouter, RouterProvider, useParams } from 'react-router-dom';
import Root from './layout/Root';
import Home from './components/Home';
import Courses from './components/Courses';
import Error from './components/Error';
import Blog from './components/Blog';
import Login from './components/Login';
import Register from './components/Register';
import PrivetRoute from './privet-route/PrivetRoute';
import Faq from './components/Faq';
import CourseDetail from './components/CourseDetail';
import CheckOut from './components/CheckOut';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root/>,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: 'courses',
          element: <PrivetRoute><Courses /></PrivetRoute>,
        },
        {
          path: 'courses/course-detail/:id',
          loader: ({params})=> fetch(`https://learning-deck-server.vercel.app/courses/${params.id}`),
          element: <PrivetRoute><CourseDetail /></PrivetRoute>,
        },
        {
          path: 'courses/checkout/:id',
          loader: ({params})=> fetch(`https://learning-deck-server.vercel.app/courses/${params.id}`),
          element: <PrivetRoute><CheckOut /></PrivetRoute>,
        },
        {
          path: 'blogs',
          element: <Blog />,
        },
        {
          path: 'faq',
          element: <Faq />,
        },
        {
          path: 'login',
          element: <Login />,
        },
        {
          path: 'register',
          element: <Register />,
        },
        {
          path: '*',
          element: <Error />,
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
