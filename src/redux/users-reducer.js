const toggleFollowing = "toggle-following";
const setUsers = "set-users";
const setCurrentPage = "set-current-page";
const toggleFetching = "toggle-fetching";

const initialState = {
  users: [],
  pageSize: 5,
  totalUsersAmount: 25,
  currentPage: 1,
  isFetching: true,
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
      console.log(item);
      return {
        ...state,
        users: [...state.users],
      };
    case setUsers:
      return {
        ...state,
        users: [...action.users],
      };
    case setCurrentPage:
      return {
        ...state,
        currentPage: action.page,
      };
    case toggleFetching:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    default:
      return state;
  }
};

const toggleFollowingAction = (id) => {
  return { type: toggleFollowing, id: id };
};

const setUsersAction = (users) => {
  return { type: setUsers, users: users };
};

const setCurrentPageAction = (page) => {
  return { type: setCurrentPage, page: page };
};

const toggleFetchingAction = (isFetching) => {
  return { type: toggleFetching, isFetching: isFetching };
};

export {
  usersReducer,
  toggleFollowingAction,
  setUsersAction,
  setCurrentPageAction,
  toggleFetchingAction,
};
