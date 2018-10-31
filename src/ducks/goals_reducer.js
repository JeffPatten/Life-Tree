const initialState = {
    user: {},
    goals: []

}

// types
const UPDATE_USER = 'UPDATE_USER';
const UPDATE_GOALS = 'UPDATE_GOALS';

// action creators
export function updateUser(data) {
    return {
        type: UPDATE_USER,
        payload: data
    }
}

export function updateGoals(goals) {
    return {
        type: UPDATE_GOALS,
        payload: goals
    }
}

// reducer
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_USER:
            return Object.assign({}, state, { user: action.payload }) //state is taking everything off of state and dumping it into the new object. payload from action creator is updating user on the object
        case UPDATE_GOALS:
            return Object.assign({}, state, {goals: action.payload})
            default:
            return state;
    }
}