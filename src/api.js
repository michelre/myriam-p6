export const getTitles = (page) => {
    return fetch(`http://127.0.0.1:8000/api/v1/titles/?page=${page}`)
        .then(res => res.json())  
}