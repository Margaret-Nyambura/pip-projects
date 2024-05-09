class FollowersApp {
    constructor(){
        this.followers = {};
    }

    addUsers(user){
        this.followers[user] = [];

    }
    followers(user, followers){

    this.followers[user].push(followers);
    }

    addFollowers(user){
        return this.followers[user];
    }
}

const socialApp = new FollowersApp();
socialApp.addUsers("Mary");
socialApp.addFollowers("Njeri", "Ann");

console.log(socialApp.FollowersApp);
