import React from 'react'

const Card = ({ src, item, nb, initNb, buy, changeNb }) => {

  return (
    <div className="col-4">
      <div className="card m-1">
        <img src={src} className="card-img-top" alt={item} />
        <div className="card-body">
          <h5 className="card-title">Disponibilité : {nb}</h5>
          <input type="tel" className="card-text my-1 w-100" value={initNb} onChange={changeNb} />
          <button className="btn btn-primary" onClick={buy}>Acheter</button>
        </div>
      </div>
    </div>
  )
}

export default Card