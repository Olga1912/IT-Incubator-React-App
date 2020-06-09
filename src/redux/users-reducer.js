const toggleFollowing = "toggle-following";
const setUsers = "set-users";

const initialState = {
  users: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case toggleFollowing:
      const newState = {
        ...state,
        users: [...state.users],
      };
      const item = newState.users.filter((user) => user.id === action.id)[0];
      item.followed = !item.followed;
      console.log(item)
      return {
        ...state,
        users: [...state.users],
      };
    case setUsers:
      return {
        ...state,
        users: [...action.users]
      };
    default:
      return state;
  }
};

const toggleFollowingAction = (id) => {
  return { type: toggleFollowing, id: id };
};

const setUsersAction = (users) => {
  return { type: setUsers, users: users}
}

export { usersReducer, toggleFollowingAction, setUsersAction };
