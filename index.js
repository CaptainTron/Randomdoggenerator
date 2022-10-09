// Showdog() function will make API call and return a promise
showdogs = () => {
   return fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(json => showdomdogs(json.message))
}
// finally a showdogs() function that will display the response(Image URL)
// We will put it to img tag of src attribute
function showdomdogs(res){
    console.log(res);
    document.getElementById('photoo').src = res
}
// finally we will call the showdogs() function that will display the image first time when the page load
// 'showdogs()' function here
showdogs();