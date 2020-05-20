const state = {
  messagesPage: {
    users : [
      {
        key: 1,
        id: 23,
        name: "Jane Smith",
        url: "Jane_Smith",
        avatar: "https://picsum.photos/id/237/200/300",
      },
      {
        key: 2,
        id: 245,
        name: "Brian Tool",
        url: "Brian_Tool",
        avatar: "https://picsum.photos/id/238/200/300",
      },
      {
        key: 3,
        id: 876,
        name: "Alexa Vang",
        url: "Alexa_Vang",
        avatar: "https://picsum.photos/id/239/200/300",
      },
    ],
    messages : [
      { id: 1, title: "Hello!" },
      { id: 2, title: "How are you?" },
      { id: 3, title: "Guys and I are going to the BAR tonight. R U with us?" },
    ],
  },
   profilePage: {
    posts : [
      { id: 1, title: "Once upon a time", body: "It was a long time ago..." },
      { id: 2, title: "Today I had a dream", body: "It wasa nightmare" },
    ],
   }
  
  
}
export {state};
