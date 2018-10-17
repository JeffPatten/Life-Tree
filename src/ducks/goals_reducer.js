// const initialState = {
    
// }

// // types
// const UPDATE_USER = 'UPDATE_USER';

// // action creators
// export function updateUser(data) {
//     return {
//         type: UPDATE_USER,
//         payload: data
//     }
// }

// // reducer
// export default function reducer(state = initialState, action) {
//     switch (action.type) {
//         case UPDATE_USER:
//             return Object.assign({}, state, { user: action.payload }) //state is taking everything off of state and dumping it into the new object. payload from action creator is updating user on the object
//         default:
//             return state;
//     }
// }