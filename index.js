// Showdog() function will make API call and return a promise
showdogs = () => {
   return fetch('https://dog.ceo/api/breeds/image/random')
   .then(response => response.json())
//    .then(json=>console.log(json))
   .then(json => showdomdogs(json.message))
}
// finally a showdogs() function that will display the response(Image URL)
// We will put it to img tag of src attribute
function showdomdogs(res){
    console.log(res);
    // This will replace the wanted part of url upto below part
    let getstring = res.replace('https://images.dog.ceo/breeds/','')
    // this will replace the .jpg format to unwanted part
    getstring = getstring.replace('.jpg','')
    // split the resultant part into two array
    let dogname = getstring.split('/')
    // access the first part that is dog name
    dogname = dogname[0]
    dogname = dogname.toUpperCase()

    // console log  that part after converting it into uppercase
    console.log(dogname)
    document.getElementById('kukur').innerHTML = dogname
    document.getElementById('photoo').src = res
}
// finally we will call the showdogs() function that will display the image first time when the page load
// 'showdogs()' function here
showdogs();
function showdog(){
    let name = document.getElementById('enterhere').value 
    console.log(name);
}