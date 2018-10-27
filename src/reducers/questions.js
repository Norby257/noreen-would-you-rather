import {RECEIVE_QUESTIONS, RECEIVE_QUESTION_ANSWER, ADD_QUESTION} from '../actions/questions'
//   import function here 
//   determine algorithm for keeping track of who voted for what 
//  and then come back and do this 

export default function questions (state = {}, action) {
    switch(action.type) {
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }
        case RECEIVE_QUESTION_ANSWER: 
            return {
                ...state,
                [action.id]: {
                    ...state[action.id],
                    votes: action.hasVoted === true 
                    ? state[action.id].votes.filter((uid)=> uid !== action.authedUser)
                    : state[action.id].votes.concat([action.authedUser])
                }
            }
        case ADD_QUESTION: 
            const { question} = action 
            return {
                ...state,
                [action.question.id]: action.question
                //   whenever we have new question, add it to questions array 
                
                //  logic for vtes array go here 
            }
            default: 
                return state
            
    }
}
