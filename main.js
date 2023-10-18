//test
//test2
// console.log("Starting my script");

// function addPeople(){
//     fetch("https://randomuser.me/api?results=3")
//     .then(function(response){
//         console.log("request is fullfilled, we have a response");
//         return response.json();
//     })

// .then(function(data){
//     console.log("the data we got is ",data);
//     updatePage(data);
// })

// }
// let updatePage = function(data){
//     document.getElementById()
// }

// console.log("End of my script");

const addressBook = document.getElementById("address-book");

// Function to fetch and display a user
function fetchUser() {
    fetch("https://randomuser.me/api/")
        .then((response) => response.json())
        .then((data) => {
            const user = data.results[0];
            const userDiv = createUserElement(user);
            addressBook.appendChild(userDiv);
        });
}

// Function to create a user element
function createUserElement(user) {
    const userDiv = document.createElement("div");
    userDiv.classList.add("user");
    userDiv.innerHTML = `
        <img src="${user.picture.large}" alt="${user.name.first} ${user.name.last}">
        <p>${user.name.first} ${user.name.last}</p>
        <button onclick="showDetails(this)">Show Details</button>
        <div class="user-details">
            <p>DOB: ${new Date(user.dob.date).toDateString()}</p>
            <p>Email: ${user.email}</p>
            <p>Phone: ${user.phone}</p>
            <p>Address: ${user.location.street.number} ${user.location.street.name}, ${user.location.city}, ${user.location.state}, ${user.location.postcode}</p>
        </div>
    `;
    return userDiv;
}

// Function to show/hide user details
function showDetails(button) {
    const userDiv = button.parentElement;
    const details = userDiv.querySelector(".user-details");
    details.style.display = details.style.display === "block" ? "none" : "block";
}

// Fetch multiple users on window load
window.addEventListener("load", () => {
    for (let i = 0; i < 5; i++) {
        fetchUser();
    }
});