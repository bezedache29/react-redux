import React from 'react'
import { connect } from 'react-redux'
import Card from '../components/Card'
import phone from '../assets/img/phone.jpeg'
import tv from '../assets/img/tv.jpg'
import { buyPhone } from '../redux/phone/actionPhone'
import { buyTv } from '../redux/tv/actionTv'
import Navbar from '../partials/Navbar'


const WithoutHooks = (props) => {

  console.log(props)

  const decrementPhone = () => {
    props.buyPhone()
  }

  const decrementTv = () => {
    props.buyTv()
  }

  return (
    <>

      <Navbar />

      <div className="container">

        <h1 className="my-5">Avec mapStateToProps et mapDispatchToProps (HOC)</h1>

        <div className="row">

          <Card item="phone" nb={props.phones} src={phone} buy={decrementPhone} />

          <Card item="tv" nb={props.tv} src={tv} buy={decrementTv} />

        </div>

      </div>

    </>
  )
}

// Permet de recupérer le store
const mapStateToProps = (state) => {
  return { 
    // phones: state.phones
    phones: state.phone.phones,
    tv: state.tv.tv
  }
}

// Permet de dispatch dans le store
const mapDispatchToProps = (disptach) => {
  return { 
    // buyPhone: () => disptach(buyPhone())
    buyPhone: function() {
      disptach(buyPhone())
    },
    buyTv: function() {
      disptach(buyTv())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WithoutHooks)