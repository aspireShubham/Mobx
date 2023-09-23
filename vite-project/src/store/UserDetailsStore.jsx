import { action, computed, makeObservable, observable } from "mobx";
import axios from "axios";



export default class UserDetailsStore { 
    userDetails                            // state
    rootStore;

    constructor (rootStore) {
        makeObservable(this,{
            userDetails : observable,
            fetchUserDetails : action,
            getUserDetails : computed,
        })
         this.rootStore = rootStore;
    }

    async fetchUserDetails(username) {
        try {
            const response = await axios.get(
              `https://api.github.com/users/aspireShubham`
              );
              this.userDetails =response.data ;
              console.log(this.userDetails)
        
      }  catch (error) {
        console.log(error,'error')
      }
    }
    // fetchUserDetails

    get getUserDetails () {
        return this.userDetails;
    }
}
