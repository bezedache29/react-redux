import React from 'react'

const Card = ({ src, item, nb, buy }) => {
  return (
    <div className="col-4">
      <div className="card m-1">
        <img src={src} className="card-img-top" alt={item} />
        <div className="card-body">
          <h5 className="card-title">Disponibilité : {nb}</h5>
          <button className="btn btn-primary" onClick={buy}>Acheter</button>
        </div>
      </div>
    </div>
  )
}

export default Card