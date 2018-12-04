import {EventEmitter} from "events";
import dispatcher from '../store/dispatcher';

class Storehome extends EventEmitter{
	constructor(){
		super();
		this.userlist = [
			{id:1,name:"jitendra patel",email:''}
		]
	}
	getuserlist(){
		return this.userlist;
	}
	createUserlist(name){
		const id = Date.now();
		//const email = "sdfdsf@gmail.com";
		this.userlist.push({id,name});
		this.emit("change");
	}
	deleteUser(id){
		window.alert("delete user function",id);
	}

	handleRegister(action){
		debugger;
		switch(action.type){
			case "CREATEUSER" :{
				this.createUserlist(action.name);
			}
			break;
			case "DELETEUSER" : {
				this.deleteUser(action.id);
			}
			break;
		}
	}
}

const storehome = new Storehome;
dispatcher.register(storehome.handleRegister.bind(storehome));
window.dispatcher = dispatcher;
export default storehome;