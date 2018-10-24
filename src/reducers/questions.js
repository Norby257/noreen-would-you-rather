import {RECEIVE_QUESTIONS, RECEIVE_QUESTION_ANSWER} from '../actions/questions'
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
            default: 
                return state
            
    }
}
