document.addEventListener('DOMContentLoaded', () => {
    
    fetch('dogs.json')
        .then(response => response.json())
        .then(data => {
            const dogList = document.getElementById('dog-list');
            data.forEach(dog => {
                const dogInfo = document.createElement('div');
                dogInfo.innerHTML = `
                    <h2>${dog.Breed}</h2>
                    <p><strong>Color:</strong> ${dog.Color}</p>
                    <p><strong>Country:</strong> ${dog.Country}</p>
                `;
                dogList.appendChild(dogInfo);
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});
