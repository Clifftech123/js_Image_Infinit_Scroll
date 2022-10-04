const imageContainer = document.getElementById("image-container");
const Loader = document.getElementById("loader");

let photoArray = [];
 
// unsplash api 
const count =50;
const apiKey = 'OJWm1dRC1FqPnJKB-iW3HVdG_lre3-hkAyF2gGn8Ekg'
const apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}&`;


// GET  PHOTO FROM UNSPLASH API 
async function getPhoto(){
    try {
        const response = await fetch (apiURL)
        photoArray = await response.json();
        console.log(photoArray);
    } catch (error) {
        //CATCH ERROR HERE 
    }
}

// ON LOAD
getPhoto();

