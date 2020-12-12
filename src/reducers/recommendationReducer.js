import _ from "lodash";

export default (state={},action)=> {
    switch (action.type) {
        case 'FETCH_RECOMMENDATIONS':
            return {...state,..._.mapKeys(action.payload.movies,'_id')}
        default:
            return state
    }
}