export function getUserFromLocalStronge () {
    try{
        return JSON.parse(window.localStorage.getItem('user'));
    }catch  (error) {
        return null;
    }
}