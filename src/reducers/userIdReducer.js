export default (state=null,action)=> {
    switch (action.type) {
        case 'USER_SIGNUP':
            return action.payload.count
        case 'USER_LOGIN':
            return action.payload
        default:
            return state
    }
}