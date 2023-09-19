document.addEventListener("DOMContentLoaded", () => {
    const fetchButton = document.getElementById("fetch-button");
    const dogImage = document.getElementById("dog-image");
  
    fetchButton.addEventListener("click", fetchRandomDogImage);
  
    function fetchRandomDogImage() {
      fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then(data => {
          dogImage.src = data.message;
        })
        .catch(error => {
          console.log("An error occurred:", error);
        });
    }
  
    fetchRandomDogImage(); 
  });
  