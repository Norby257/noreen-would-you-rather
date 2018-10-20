//   import DB methods into API 
import {
    _getUsers,
    _getQuestions,
    _saveQuestion,
    _saveQuestionAnswer
}
from './DATA.js'

//   export function that gets 
//   users and questions 

export function getInitialData() {
    return Promise.all([
        _getUsers(),
        _getQuestions(),
    ]).then(([users, questions])=> ({
        users, 
        questions

    }))
}

//  export function that saves questions


//  export function that saves question answers 