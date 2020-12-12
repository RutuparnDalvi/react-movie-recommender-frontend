import _ from 'lodash'

export default (state= {}, action)=>{
    switch (action.type) {
        case 'FETCH_RATINGS':
            return {...state, ..._.mapKeys(action.payload.ratings_new,'_id')}
        case 'CREATE_RATING':
            return {...state, [action.payload._id]:action.payload }
        case 'EDIT_RATING':
            return {...state, [action.payload._id]:action.payload}
        default:
            return state
    }
}