import React, {Component} from 'react' 
import {connect} from 'react-redux'
import {handleReceiveQuestionAnswer} from '../actions/questions' 
class Question extends Component {
  handleVote = (e) => {
    e.preventDefault()

    const {dispatch, question, authedUser} = this.props 

    dispatch(handleReceiveQuestionAnswer({
      id: question.id, 
      hasVoted: question.hasVoted, 
      authedUser
    }))
  }

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
    questions,
    
    
  }
}
export default connect(mapStateToProps)(Question)