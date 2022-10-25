import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './layout/Root';
import Home from './components/Home';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root/>,
      children: [
        {
          path: '/',
          element: <Home />,
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
