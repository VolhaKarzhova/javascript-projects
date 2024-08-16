//TODO: Add Your Code Below
window.addEventListener("load", () => {

    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function (response) {
        response.json().then(function (json) {
            json.sort((a, b) => (a.hoursInSpace < b.hoursInSpace ? 1 : -1));
            const astronauts = document.getElementById("container");

            for (let i = 0; i < json.length; i++) {
                astronauts.innerHTML += `
            <div class="astronaut">
                 <div class="bio">
                     <h2>${json[i].firstName} ${json[i].lastName}</h2>
                     <ul>
                     <li>Hours in space: ${json[i].hoursInSpace}</li>
                 `;


                if (json[i].active === true) {
                    astronauts.innerHTML += `<li style="color: green">Active: ${json[i].active}</li>`;
                } else {
                    astronauts.innerHTML += `<li>Active: ${json[i].active}</li>`;
                }
                astronauts.innerHTML += `
                    <li>Skills: ${json[i].skills}</li>  
                         </ul>
                     </div>
                    <img class="avatar" src=${json[i].picture} alt="image of atronaut's face">
                 </div>`;
            }

        })
    });
});