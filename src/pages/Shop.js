import React from 'react'
import { connect } from 'react-redux'
import Card from '../components/Card'
import phone from '../assets/img/phone.jpeg'


const Shop = (props) => {

  console.log(props)

  return (
    <div className="container">

      <h1 className="my-5">Mon Application</h1>

      <div className="row">

        <Card item="phone" nb={props.phones} src={phone} />

      </div>

    </div>
  )
}

const mapStateToProps = (state) => {
  return { phones: state.phones }
}

export default connect(mapStateToProps)(Shop)