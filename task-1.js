const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true,
  changeUserHobby(newHobby) {
    this.hobby = newHobby;
  },
  changeUserPremium(newPremium) {
    this.premium = newPremium;
  },
  addUserMood(newMood) {
    this.mood = newMood;
  },
};

user.addUserMood("happy");
user.changeUserHobby("skydiving");
user.changeUserPremium("false");

console.log(user);
