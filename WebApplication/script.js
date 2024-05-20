document.getElementById('getDataButton').addEventListener('click', getData);

function getData() {
    const url = "https://reqres.in/api/users?page=1";
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            displayUsers(data.data);
        })
        .catch(error => console.error('Error fetching data:', error));
}

function displayUsers(users) {
    const userCardsContainer = document.getElementById('userCards');
    userCardsContainer.innerHTML = ''; // Clear previous content

    users.forEach(user => {
        const userCard = document.createElement('div');
        userCard.className = 'user-card';

        const userImage = document.createElement('img');
        userImage.src = user.avatar;
        userImage.alt = `${user.first_name} ${user.last_name}`;

        const userName = document.createElement('h2');
        userName.textContent = `${user.first_name} ${user.last_name}`;

        const userEmail = document.createElement('p');
        userEmail.textContent = user.email;

        userCard.appendChild(userImage);
        userCard.appendChild(userName);
        userCard.appendChild(userEmail);

        userCardsContainer.appendChild(userCard);
    });
}
