import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Airports from './views/airports';
import Details from './views/details';
import Stadiums from './views/stadiums';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Airports />,
  },
  {
    path: '/airports',
    element: <Airports />,
  },
  {
    path: '/stadiums',
    element: <Stadiums />,
  },
  {
    path: '/details',
    element: <Details />,
  }
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
