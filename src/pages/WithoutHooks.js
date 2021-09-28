import React, { useState } from 'react'
import { connect } from 'react-redux'
import Card from '../components/Card'
import phone from '../assets/img/phone.jpeg'
import tv from '../assets/img/tv.jpg'
import { buyPhone } from '../redux/phone/actionPhone'
import { buyTv } from '../redux/tv/actionTv'
import Navbar from '../partials/Navbar'


const WithoutHooks = (props) => {

  // console.log(props)

  const [numberPhone, setNumberPhone] = useState(1)

  const changeNumberPhone = (e) => {
    setNumberPhone(e.target.value)
  }

  const decrementPhone = () => {
    props.buyPhone(numberPhone)
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

          <Card item="phone" nb={props.phones} src={phone} buy={decrementPhone} initNb={numberPhone} changeNb={changeNumberPhone} />

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
    buyPhone: function(numberPhone) {
      disptach(buyPhone(numberPhone))
    },
    buyTv: function() {
      disptach(buyTv())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WithoutHooks)