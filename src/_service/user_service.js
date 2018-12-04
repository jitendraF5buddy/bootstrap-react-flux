
function login(username, password) {
    debugger;

    const requestOptions = {
        method: "post",
        headers : new Headers(),
        body: JSON.stringify({ username, password })
    }

    debugger;   
    return fetch('http://api.pierre.fm/customerapi/login', requestOptions)
        .then(function(response){ 
            debugger;
             return response.json();   
            })
        .then(user => {
            debugger;
            if (user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('user', JSON.stringify(user));
            }
    return user;
    });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}


function handleResponse(response) {
    debugger;
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                //location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}

export  {login,logout,handleResponse}