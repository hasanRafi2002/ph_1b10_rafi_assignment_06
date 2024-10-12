const loadBtnInfo = () => {
    fetch('https://openapi.programming-hero.com/api/peddy/categories')
        .then(res => res.json())
        .then(data => {
            console.log('Categories Data:', data);
            displayBtn(data.categories);
        })
        .catch(err => console.error('Error loading categories:', err));
};

const loadCardInfo = () => {
    fetch('https://openapi.programming-hero.com/api/peddy/pets')
        .then(res => res.json())
        .then(data => {
            console.log('Pets Data:', data);
            displayCards(data.pets);
        })
        .catch(err => console.error('Error loading pets:', err));
};



const filterCards = (category) => {
    fetch('https://openapi.programming-hero.com/api/peddy/pets')
        .then(res => res.json())
        .then(data => displayCards(data.pets.filter(pet => pet.category === category)))
        .catch(err => console.log(err));
};






const displayBtn = (categories) => {
    const btnContainer = document.getElementById('btn-container');
    btnContainer.innerHTML = '';
    
    categories.forEach(category => {
        const button = `
            <button  class="myButton px-10 py-3 rounded-lg gap-3 border border-gray-200 items-center border-2 flex" onclick="filterCards('${category.category}')">
                <img src="${category.category_icon}" alt="${category.category}" class="icon" />
                <span>${category.category}</span>
            </button>
        `;
        btnContainer.innerHTML += button;
    });


    document.getElementsByClassName('myButton')[0].addEventListener('click', function() {
        var div = document.getElementsByClassName('myDiv')[0];
        div.classList.add('loading', 'loading-bars', 'loading-lg', 'block', 'w-[10vw]', 'h-[10%]'  ,'mx-[30vw]');
    
        // Remove the class after 2 seconds
        setTimeout(function() {
            div.classList.remove('loading', 'loading-bars', 'loading-lg' , 'block', 'w-[10vw]', 'h-[10%]', 'mx-[30vw]' );
        }, 2000);
    });


    document.getElementsByClassName('myButton')[1].addEventListener('click', function() {
        var div = document.getElementsByClassName('myDiv')[0];
        div.classList.add('loading', 'loading-bars', 'loading-lg', 'block', 'w-[10vw]', 'h-[10%]'  ,'mx-[30vw]');
    
        // Remove the class after 2 seconds
        setTimeout(function() {
            div.classList.remove('loading', 'loading-bars', 'loading-lg' , 'block', 'w-[10vw]', 'h-[10%]', 'mx-[30vw]' );
        }, 2000);
    });
    
    
    document.getElementsByClassName('myButton')[2].addEventListener('click', function() {
        var div = document.getElementsByClassName('myDiv')[0];
        div.classList.add('loading', 'loading-bars', 'loading-lg', 'block', 'w-[10vw]', 'h-[10%]'  ,'mx-[30vw]');
    
        // Remove the class after 2 seconds
        setTimeout(function() {
            div.classList.remove('loading', 'loading-bars', 'loading-lg' , 'block', 'w-[10vw]', 'h-[10%]', 'mx-[30vw]' );
        }, 2000);
    });



    document.getElementsByClassName('myButton')[3].addEventListener('click', function() {
        var div = document.getElementsByClassName('myDiv')[0];
        div.classList.add('loading', 'loading-bars', 'loading-lg', 'block', 'w-[10vw]', 'h-[10%]'  ,'mx-[30vw]');
    
        // Remove the class after 2 seconds
        setTimeout(function() {
            div.classList.remove('loading', 'loading-bars', 'loading-lg' , 'block', 'w-[10vw]', 'h-[10%]', 'mx-[30vw]' );
        }, 2000);
    });
    
    



};












let pets = [];

// Fetch the pets data from the API
function fetchPets() {
    fetch('https://openapi.programming-hero.com/api/peddy/pets')
        .then(response => response.json())
        .then(data => {
            pets = data.pets; // Store the fetched pets data
            displayPets(pets); // Display pets initially
        })
        .catch(error => {
            console.error('Error fetching pets:', error);
        });
}

// Function to display pets
function displayPets(pets) {
    const cardsContainer = document.getElementById('cards-container');
    cardsContainer.innerHTML = ''; // Clear previous content

    pets.forEach((pet, index) => {
        const petDiv = document.createElement('div');
        petDiv.classList.add('card');

        petDiv.innerHTML = `
            <div class="border border-gray-200 shadow-lg rounded-xl p-5 ">
                <img src="${pet.image}" alt="" class="card-img w-full h-[200px] object-cover rounded-t-xl">
                <div class="card-content mt-3 mb-7">
                    <p class="card-title text-xl font-bold">${pet.pet_name}</p>
                    <p class="card-breed gap-3 flex text-gray-500"><span><img src="images/breed.svg" alt=""></span> Breed: ${pet.breed}</p>
                    <p class="card-age flex gap-3 text-sm text-gray-600"><span><img src="images/birth.svg" alt=""></span> Age: ${pet.date_of_birth}</p>
                    <p class="card-gender gap-3 flex text-sm text-gray-600"> <span><img src="images/gender.svg" alt=""></span> Gender: ${pet.gender}</p>
                    <p class="card-price gap-3 flex text-sm text-gray-600"><span><img src="images/price.svg" alt=""></span> Price: ${pet.price}$</p>
                </div>
                <div class="flex items-center gap-3">
                    <button class="btn1 like-btn btn" id="likeBtn-${index}-1" style="display: inline;" onclick="toggleButtons(${index})">
                        <img class="love w-12" id="love-${index}" src="./love.svg" alt="">
                    </button>
                    <button class="btn1 like-btn btn" id="likeBtn-${index}-2" style="display: none;" onclick="toggleButtons(${index})">
                        <img class="love w-12" id="love1-${index}" src="./love1.svg" alt="">
                    </button>
                    <button class="btn" onclick="my_modal_2.showModal()">Adopt</button>
                    <button class="btn" onclick="showModal(${index})">Details</button>
                </div>
            </div>
        `;
  
        cardsContainer.appendChild(petDiv);
    });
    
}

// Function to sort pets by price in descending order
function sortByPriceDesc() {
    pets.sort((a, b) => b.price - a.price); // Sort in descending order
    displayPets(pets); // Re-display the sorted pets
}

// Function to sort pets by price in ascending order
function sortByPriceAsc() {
    pets.sort((a, b) => a.price - b.price); // Sort in ascending order
    displayPets(pets); // Re-display the sorted pets
}

// Initially fetch and display pets when the page loads
fetchPets();






















const displayCards = (cards) => {
    const cardsContainer = document.getElementById('cards-container');
    cardsContainer.innerHTML = '';

    if (cards.length === 0) {
        cardsContainer.innerHTML = `
             <div class="flex flex-col justify-center items-center text-center bg-slate-50 w-[97.5vw] w-[97.5vw] lg:w-[72vw] min-[1450px]:w-[900px]  h-[600px] p-20">
                <img src="./images/empty.svg" alt="">
                <h2 class="text-4xl font-bold">No Information Available</h2>
                <p class="mt-4">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            </div>
        `;
        return;
    }

    cards.forEach((card, index) => {
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card');
        cardDiv.innerHTML = `
        <div class="border border-gray-200 shadow-lg rounded-xl p-5 ">
            <img src="${card.image}" alt="" class="card-img w-full h-[200px] object-cover rounded-t-xl">
            <div class="card-content mt-3 mb-7">
                <p class="card-title text-xl font-bold">${card.pet_name}</p>
                <p class="card-breed gap-3 flex text-gray-500"><span><img src="images/breed.svg" alt=""></span> Breed: ${card.breed}</p>
                <p class="card-age flex gap-3 text-sm text-gray-600"><span><img src="images/birth.svg" alt=""></span> Age: ${card.date_of_birth}</p>
                <p class="card-gender gap-3 flex text-sm text-gray-600"> <span><img src="images/gender.svg" alt=""></span> Gender: ${card.gender}</p>
                <p class="card-price gap-3 flex text-sm text-gray-600"><span><img src="images/price.svg" alt=""></span> Price: ${card.price}$</p>
            </div>
             <div class="flex items-center gap-3">


                <button class="btn1 like-btn btn" id="likeBtn-${index}-1" style="display: inline;" onclick="toggleButtons('${index}')">
                    <img class="love w-12" id="love-${index}" src="./love.svg" alt="">
                </button>
                <button class="btn1 like-btn btn" id="likeBtn-${index}-2" style="display: none;" onclick="toggleButtons('${index}')">
                    <img class="love w-12" id="love1-${index}" src="./love1.svg" alt="">
                </button>



                <button class="btn" onclick="my_modal_2.showModal()">Adopt</button>


                <button class="btn" onclick="showModal(${index})">Details</button>
                <dialog id="modal-${index}" class="modal">
                <div class="modal-box max-w-lg rounded-lg p-5 bg-white shadow-2xl relative">
                    <button class="absolute top-2 right-2 text-gray-400 hover:text-gray-600" onclick="closeModal(${index})">&times;</button>
                    <img src="${card.image}" alt="${card.pet_name}" class="w-full h-[200px] object-cover rounded-md mb-4">
                    <div class="modal-content">
                    <h3 class="text-xl font-bold">${card.pet_name}</h3>
                        <div class="flex">
                            <div>
                                <p class="py-2"><strong><img src="images/breed.svg" alt=""> Breed:</strong> ${card.breed}</p>
                                <p><strong><img src="images/gender.svg" alt=""> Gender:</strong> ${card.gender}</p>
                                <p><strong>Vaccinated status:</strong> ${card.status}</p>
                            </div>
                            <div>
                                <p><strong><img src="images/birth.svg" alt=""> Age:</strong> ${card.date_of_birth}</p>
                                <p><strong><img src="images/price.svg" alt=""> Price:</strong> ${card.price}$</p>
                            </div>
                        </div>
                        <hr>
                        <p class="mt-4 text-gray-700"><strong>Description:</strong> ${card.pet_details}</p>
                    </div>
                    <div class="modal-action mt-4">
                        <button class="btn btn-primary bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-4 py-2" onclick="closeModal(${index})">Close</button>
                    </div>
                </div>
             </dialog>
             </div>
        </div>
        `;
        
        cardDiv.querySelector('.like-btn').addEventListener('click', () => {
            console.log('Like button clicked for:', card.pet_name);
            addToFavorites(card);
        });

        
        cardsContainer.appendChild(cardDiv);

        
    });
};

const addToFavorites = (card) => {
    const imgContainer = document.getElementById('displayImg');
    const newImgElement = document.createElement('img');
    newImgElement.src = card.image;
    newImgElement.className = "rounded-lg w-auto h-auto";
    imgContainer.appendChild(newImgElement);
};

const showModal = (index) => {
    document.getElementById(`modal-${index}`).showModal();
};

const closeModal = (index) => {
    document.getElementById(`modal-${index}`).close();
};

loadBtnInfo();
loadCardInfo();






// -----------------------------------------------------------

function toggleButtons(index) {
    const btn1 = document.getElementById(`likeBtn-${index}-1`);
    const btn2 = document.getElementById(`likeBtn-${index}-2`);

    // Toggle the display of the buttons
    if (btn1.style.display === 'inline') {
        btn1.style.display = 'none'; // Hide the first button
        btn2.style.display = 'inline'; // Show the second button
    } else {
        btn1.style.display = 'inline'; // Show the first button
        btn2.style.display = 'none'; // Hide the second button
    }
}

// -----------------------------------------------------------------




let countdownValue = 3;
                let countdownInterval;
        
                function startAdoption(containerId) {
                    document.getElementById('countdown').textContent = countdownValue;
                    startCountdown(containerId);
                }
        
                function startCountdown(containerId) {
                    if (countdownInterval) {
                        clearInterval(countdownInterval);
                    }
        
                    countdownValue = 3;
                    document.getElementById('countdown').textContent = countdownValue;
        
                    countdownInterval = setInterval(() => {
                        countdownValue--;
                        document.getElementById('countdown').textContent = countdownValue;
        
                        if (countdownValue === 0) {
                            clearInterval(countdownInterval); // Stop countdown
                            addClassesToCardContainer(containerId); // Apply styles
        
                            setTimeout(() => {
                                removeClassesFromCardContainer(containerId); // Remove styles
                                resetCountdown(); // Reset countdown
                            }, 1000); // Delay before removing styles
                        }
                    }, 1000);
                }
        
                function resetCountdown() {
                    countdownValue = 3;
                    document.getElementById('countdown').textContent = countdownValue;
                }
        

// -----------------------------------------------------------------------------------------


// -----------------------------------------------------------
  

function reloadPage() {
    location.reload();  // Reloads the current page
}
