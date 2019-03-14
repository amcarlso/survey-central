const initialState = {
  user: {}
}

const UPDATE_USER = 'UPDATE_USER';
const LOGOUT_USER = 'LOGOUT_USER';

export function updateUser(user) {
  return {
      type: UPDATE_USER,
      payload: user
  }
}

export function logoutUser() {
  return {
    type: LOGOUT_USER
  }
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_USER: return {...state, user: action.payload}
    case LOGOUT_USER: return {...state, user: {}}
    default: return state;
  }
}