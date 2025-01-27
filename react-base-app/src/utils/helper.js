const isAdminLoggedIn = () => {
    let isLoggedIn = false;
    const token = localStorage.getItem('authToken');
    if(token!=null) {
        isLoggedIn = true;
    }
    return isLoggedIn;
};
const isAdminLoggedInToken = () => {
    const token = localStorage.getItem('authToken');
    return token;
};
export  {isAdminLoggedIn,isAdminLoggedInToken};