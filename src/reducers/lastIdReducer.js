export default (state='000000000000000000000000',action)=> {
    switch (action.type) {
        case 'LAST_ID':
            return action.payload
        default:
            return state
    }
}