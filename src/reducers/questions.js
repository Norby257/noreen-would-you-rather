import {RECEIVE_QUESTIONS, RECEIVE_QUESTION_ANSWER, ADD_QUESTION} from '../actions/questions'


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
                    //   so for votes we ae getting the authedUser that voted 
                    //   and appending that as integer for adding to votes array(concat)

                    : state[action.id].votes.concat([action.authedUser])
                }
            }
        case ADD_QUESTION: 
            const { question} = action 
            return {
                ...state,
                [action.question.id]: action.question,
                //   whenever we have new question, add it to questions array 
                
                //  logic for votes array go here 
                //   may have to spread votes / answers 
                //   check _DATA.js before proceeding 
                
            }
            default: 
                return state
            
    }
}
