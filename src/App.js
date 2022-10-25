import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './layout/Root';
import Home from './components/Home';
import Courses from './components/Courses';
import Error from './components/Error';
import Blog from './components/Blog';
import Login from './components/Login';
import Register from './components/Register';

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
          element: <Courses />,
        },
        {
          path: 'blogs',
          element: <Blog />,
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
