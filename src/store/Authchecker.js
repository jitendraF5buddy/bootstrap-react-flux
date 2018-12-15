import {EventEmitter} from "events";
import dispatcher from '../store/dispatcher';

class Authchecker extends EventEmitter{
	constructor(){
		super();
        this.isLogin = false;
    }
    
	checkLoginAuth(){
         let autoken = localStorage.getItem("usertoken");
         if(autoken){
            this.isLogin = true;
            return this.isLogin ;
         }else{
            this.isLogin = false;
            return this.isLogin ;
         }
    }
    registertoken(){
        
    }
    logout(){
        debugger;
        localStorage.removeItem("usertoken");
        this.isLogin = false;
        return true;
    }

    login(){
        this.isLogin = true;
        return true;
    }
    
    handleRegister(action){
		debugger;
		switch(action.type){
			case "REGISTERTOKEN" :{
				this.registertoken(action.name);
			}
            break;
            case "LOGIN" :{
				this.login(action.name);
			}
			break;
			case "LOGOUT" : {
				this.logout(action.id);
			}
			break;
		}
	}
}

const authchecker = new Authchecker;
dispatcher.register(authchecker.handleRegister.bind(authchecker));
window.dispatcher = dispatcher;
export default authchecker;