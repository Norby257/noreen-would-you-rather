import React, {Component} from 'react' 
import {connect} from 'react-redux'

class Question extends Component {
  render() {
    console.log(this.props)
    return (
      <div className='question'>
      </div> 
    )
  }
}

//   whenever we connect a component to redux state 
//   do we need to format question 
function mapStateToProps({authedUser, users, questions}, {id}) {
  const question = questions[id]
  return {
    authedUser,
    questions
    
  }
}
export default connect(mapStateToProps)(Question)