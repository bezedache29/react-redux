import React from 'react'
import Card from "../components/Card"
import phone from '../assets/img/phone.jpeg'
import { Provider } from 'react-redux'
import store from '../redux/store'

function App() {
  return (
    <Provider store={store}>

      <div className="container">

        <h1 className="my-5">Mon Application</h1>

        <div className="row">

          <Card item="phone" src={phone} />

        </div>

      </div>

    </Provider>
  )
}

export default App
