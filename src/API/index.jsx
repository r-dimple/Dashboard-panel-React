export const getComment= ()=>{
    return fetch('https://dummyjson.com/users')
    .then(res => res.json())
 };