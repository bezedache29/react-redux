import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { apiCall } from '../redux/comments/actionComments'

const CommentsContainer = ({ comments, apiComments }) => {

  console.log(apiComments)

  useEffect(() => {
    apiComments()
  }, [apiComments])

  const displayComments = apiComments.isLoading ? ( 
    <p>Loading ...</p> 
  )
  : apiComments.error ? (
    <p>{apiComments.error}</p>
  )
  : (
    comments.comments.map(comment => (
      <p key={comment.id}>{ comment.body }</p>
    ))
  )


  return (
    <div className="mt-3">
      <h2>Commentaires</h2>
      <hr />
      { displayComments }
    </div>
  )
}

// Permet de recupérer le store
const mapStateToProps = (state) => {
  return { 
    comments: state.comments
  }
}

// Permet de dispatch dans le store
const mapDispatchToProps = (disptach) => {
  return { 
    apiComments: function() {
      disptach(apiCall())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentsContainer)