import {action, makeAutoObservable, observable} from "mobx"

class PageStore {
  menuOpen = false;
  videoLink = 'https://www.youtube.com/watch?v=JlI5j37sbIE&list=PLC3y8-rFHvwh-K9mDlrrcDywl7CeVL2rO&index=14&ab_channel=Codevolution';
  title = "GATE";
  centralHeaderButtons = [
        'Home',
        'Market',
        'Trade',
        'FAQ'
    ];
    
    rightHeaderButtons = [
        {
          title: 'Join',
          variant: 'text',
          href: "https://t.me/thegatetest_bot"
        },
        {
          title: 'Market',
          variant: 'contained',
          color: 'white'
        }
    ];
    
    constructor() {
        makeAutoObservable(this, {
          menuOpen: observable,
          setMenuOpen: action
        })
    }
    
     setMenuOpen = (val) => {
       this.menuOpen = val;
     }
    
    
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new PageStore()