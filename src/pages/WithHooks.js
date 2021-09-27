import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyPhone } from '../redux/phone/actionPhone'
import phone from '../assets/img/phone.jpeg'
import Card from '../components/Card'
import Navbar from '../partials/Navbar'

const WithHooks = () => {

  // Permet de recupérer le store
  const phones = useSelector( state => state.phones )

  // Permet de dispatch dans le store
  const dispatch = useDispatch()
  const decrementPhone = () => {
    dispatch(buyPhone())
  }

  return (
    <>
      <Navbar />

      <div className="container">

        <h1 className="my-5">Avec les Hooks useSelector et useDispatch</h1>

        <div className="row">

          <Card item="phone" nb={phones} src={phone} buy={decrementPhone} />

        </div>

      </div>
    </>
  )
}

export default WithHooks