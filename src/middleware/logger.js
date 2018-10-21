//   all middleware follows a currying pattern 

const logger = (store) => (next) => (action) => {
    //  shpw us action that is dispatched 
    //   and 
    console.group(action.type)
    console.log('The action: ', action)
    const returnValue = next(action)
    console.log('The new state', store.getState())
    console.groupEnd();
    return returnValue

}

export default logger; 