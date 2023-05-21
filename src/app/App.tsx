import React from 'react';
import './App.css';
import { Home } from './modules/features/home/home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Todo from './modules/features/todo/Todo';

const routes = createBrowserRouter([
  {
    path: '',
    element: <Home></Home>
  },

  {
    path: 'todos',
    element: <Todo></Todo>
  }
])

const App = () => <RouterProvider router={routes} />

export default App;
