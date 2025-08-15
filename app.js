// This code uses axios to fetch data from the TVmaze API based on a search term entered in a form. It then displays images of the shows returned by the API.


const form = document.querySelector('#search-form');
const imgContainer = document.createElement('div');
imgContainer.id = 'img-container';
document.body.append(imgContainer);

form.addEventListener('submit',  async function (e) { // Add an event listener for the form submission
    e.preventDefault();  // Prevent the default form submission
    const searchTerm = form.elements.query.value; // Get the value from the input field
    const config = { params : { q: searchTerm , isFunny:'uday'} }; // Create a config object for the request
    const res = await axios.get(`https://api.tvmaze.com/search/shows`,config); // Make an API request using axios
    clearImages(); // Clear previous images
    makeImages(res.data); // Log the response data
});

const clearImages =  () => {
    imgContainer.innerHTML = ''; // Clear the image container 
}
    
const makeImages = (shows) => {
    for(let result of shows) { // Iterate over each show in the response
        if (result.show.image) {
            const img = document.createElement('IMG'); // Create an image element
            img.src = result.show.image.medium; // Set the image source to the show's image
            imgContainer.append(img); // Append the image to the body of the document
        }
    }
}
