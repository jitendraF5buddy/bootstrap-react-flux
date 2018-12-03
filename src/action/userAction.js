import Dispatcher from '../store/dispatcher';

export function createUser(type,name){
	Dispatcher.dispatch({type: type,name});
}

