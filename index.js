/***** Deliverable 1 *****/
let header = document.querySelector("#header")
console.log("Here's your header:", header)


/***** Deliverable 2 *****/
header.style.color = "silver";
// same thing as: document.querySelector("#header").style.color = "red";

/***** Deliverable 3 *****/
console.log('This is what the traveler object looks like: ', traveler)
let travelerArr = document.querySelector('.traveler')
travelerArr.innerHTML = `<div id="profile">
    <img src="${traveler.photo}"
        alt="${traveler.name}"> </img>
    <h2>${traveler.name}</h2>
    <em>${traveler.nickname}</em>
</div>
<h4>Great Sightings</h4>
<ul id="animals">

</ul>`
// Trying to get to profile elements

/***** Deliverable 4 *****/
// Wasn't able to get to the last two, will continue working tonight


/***** Deliverable 5 *****/
