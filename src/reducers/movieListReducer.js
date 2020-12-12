import _ from "lodash";

export default (state={},action)=> {
    switch (action.type) {
        case 'FETCH_MOVIES':
            return {..._.mapKeys(action.payload,'_id')}
        default:
            return state
    }
}