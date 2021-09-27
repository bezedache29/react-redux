import React from 'react'
import { Provider } from 'react-redux'
import Shop from './pages/Shop'
import store from './redux/store'

function App() {
  return (
    <Provider store={store}>

      <Shop />

    </Provider>
  )
}

export default App
