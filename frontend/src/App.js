import React from 'react'
import Routers from './components/Topbar/Routers'
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import store from './Redux/Store';

function App() {
  return (
    <div>
      <Provider store={store}>

    
      <Routers/>
      </Provider>
    </div>
  )
}

export default App


