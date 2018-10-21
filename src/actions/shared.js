import {getInitialData} from '../utils/api';
import {receiveUsers} from '../actions/users'
import {receiveQuestions} from '../actions/questions'
import {setAuthedUser} from '../actions/authedUser'

//   hardcoding this value for now but this will be changed 
const AUTHED_ID = tylermcginnis
//   use redux thunk pattern to make async request
export function handleInitialData() {
    return (dispatch) => {
        return getInitialData()
        .then(({users, questions})=> {
            // add users and questions to store
            //   to do that, dispatch a few actions 
            dispatch(receiveUsers(users))
            dispatch(receiveQuestions(questions))
            dispatch(setAuthedUser(AUTHED_ID))
        })
    }

}