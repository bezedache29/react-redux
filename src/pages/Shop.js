import React from 'react'
import Card from '../components/Card'
import phone from '../assets/img/phone.jpeg'

const Shop = () => {
  return (
    <div className="container">

      <h1 className="my-5">Mon Application</h1>

      <div className="row">

        <Card item="phone" src={phone} />

      </div>

    </div>
  )
}

export default Shop