import {saveQuestionAnswer} from '../utils/api'
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const RECEIVE_QUESTION_ANSWER = 'RECEIVE_QUESTION_ANSWER'

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS, 
        questions,
    }

}
// action creator here 

export function receiveQuestionAnswer({id, authedUser, votes, hasVoted}) {
    return {
        type: RECEIVE_QUESTION_ANSWER,
        id,
        authedUser,
        votes,
        hasVoted
    }
}

//  this is the Async call, currying pattern
export function handleReceiveQuestionAnswer(info) {
    return (dispatch) => {
        dispatch(receiveQuestionAnswer(info))

        return receiveQuestionAnswer(info)
        .catch((e)=> {
            console.warn('Error in save question answer ')
            alert('there was an error voting, try again')
        })
    }


}