import React from 'react'
import { connect } from 'react-redux'
import Card from '../components/Card'
import phone from '../assets/img/phone.jpeg'
import { buyPhone } from '../redux/phone/actionPhone'


const Shop = (props) => {

  console.log(props)

  const decrementPhone = () => {
    props.buyPhone()
  }

  return (
    <div className="container">

      <h1 className="my-5">Mon Application</h1>

      <div className="row">

        <Card item="phone" nb={props.phones} src={phone} buy={decrementPhone} />

      </div>

    </div>
  )
}

// Permet de recupérer le store
const mapStateToProps = (state) => {
  return { phones: state.phones }
}

// Permet de dispatch dans le store
const mapDispatchToProps = (disptach) => {
  return { 
    buyPhone: () => disptach(buyPhone())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Shop)