const toggleFollowing = "toggle-following";

const initialState = {
  users: [
    {
      id: 877,
      name: "Jane Smith",
      address: "Minsk, Belarus",
      avatar: "https://picsum.photos/id/237/200/300",
      status:
        "Vis ei civibus noluisse aliquando. Pri quas adhuc ex, ne sed augue delicatissimi. Ornatus legendos sea an. Justo erant te has, delenit legendos cu mei, vix an vivendum facilisi. Pro an etiam pertinacia, per cu vero nemore persius, populo denique ut nam.",
      following: false,
    },
    {
      id: 564,
      name: "Brian Tool",
      address: "Homel, Belarus",
      avatar: "https://picsum.photos/id/238/200/300",
      status:
        "Eam an sumo epicuri mandamus, vix sonet noster an. Ad pri quem possim. Case corpora percipit ei cum, dicant propriae gubergren qui ei. Mea ex sumo soluta. No electram elaboraret vim. Usu duis bonorum perfecto an.",
      following: false,
    },
    {
      id: 125,
      name: "Alexa Vang",
      address: "Moscow, Russia",
      avatar: "https://picsum.photos/id/239/200/300",
      status:
        "Ut vim atqui inciderint. In eam dicant homero semper, eirmod epicuri definitiones no ius. Mel quidam petentium assentior an.",
      following: false,
    },
    {
      id: 432,
      name: "Kit Lint",
      address: "St. Petersburg, Russia",
      avatar: "https://picsum.photos/id/1005/200/300",
      status:
        "Convenire voluptatibus eu nec. Ei sea movet abhorreant, aeque nobis equidem eam ne. Ne cum sumo populo conceptam. Ius at reprimique? Et delenit lobortis laboramus his, errem dolorem nec ea.",
      following: false,
    },
  ],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case toggleFollowing:
      const newState = {
        ...state,
        users: [...state.users],
      };
      const item = newState.users.filter((user) => user.id === action.id)[0];
      item.following = !item.following;
      return {
        ...state,
        users: [...state.users],
      };
    default:
      return state;
  }
};

const toggleFollowingAction = (id) => {
  return { type: toggleFollowing, id: id };
};

export { usersReducer, toggleFollowingAction };
