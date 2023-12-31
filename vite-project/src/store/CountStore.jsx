
import {action, computed, makeObservable, observable } from 'mobx'

export class CountStore  {

    count = 1;
    rootStore;

    constructor (rootStore) {

        makeObservable (this,{
          count : observable,
          increment : action,
          decrement: action,
          getCountValue : computed

        });
        this.rootStore = rootStore;

    }

    increment = () => {
        this.count++;
    }

    decrement = () => {
        this.count--;
    }

    get getCountValue () {
        return this.count ;
    }
}