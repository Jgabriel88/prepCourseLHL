let facebookProfile = {
  name: "Gabriel",
  friends: 723,
  messages: ['Hey, how are you?', 'Long time don\'t see you!', 'Wow!!! That was awesome!'],
  postMessage: function newMessage(message) {
    facebookProfile.messages.push(message)
  },
  deleteMessage: function remMessage(index) {
    facebookProfile.messages.splice(index, 1)
    return facebookProfile.messages
  },
  addFriend: function newFriend() {
    facebookProfile.friends += 1
    return facebookProfile.friends
  },
  removeFriend: function remFriend() {
    facebookProfile.friends -= 1
    return facebookProfile.friends
  }

}
