import FetchCalls from "./FetchCalls"
import List from "./List"


const DomBuilder = {
// DROPDOWN FOR CITY
createAndAppendForm() {
    console.log("Hello from Dombuilder.createAndAppendForm");
    // NAVBAR
    let navBarContainer = document.querySelector("#navOutput");
    let navBar = document.createElement("nav");
    navBar.setAttribute("id", "navBar");
    let navUl = document.createElement("ul");
    navUl.setAttribute("class", "ulClass");

    let li1 = document.createElement("li");
    li1.setAttribute("class", "liOne");
    li1.setAttribute("id", "li--1");
    let linkOne = document.createElement("a");
    linkOne.setAttribute("href", "#");
    linkOne.textContent = "The Ternary Traveler";
    li1.appendChild(linkOne);
    // li1.addEventListener("click", () => {
    // 	console.log("I'm in NavBar")
    // })
    let li2 = document.createElement("li");
    li2.setAttribute("class", "liTwo");
    li2.setAttribute("id", "li--2");
    let linkTwo = document.createElement("a");
    linkTwo.setAttribute("href", "#");
    linkTwo.textContent = "Hong Kong";
    li2.appendChild(linkTwo);
    // li2.addEventListener("click", () => {
    // 	console.log("I'm in NavBar")
    // })
    let li3 = document.createElement("li");
    li3.setAttribute("class", "liThree");
    li3.setAttribute("id", "li--3");
    let linkThree = document.createElement("a");
    linkThree.setAttribute("href", "#");
    linkThree.textContent = "Tokyo";
    li3.appendChild(linkThree);
    // li3.addEventListener("click", () => {
    // 	console.log("I'm in NavBar")
    // })
    let li4 = document.createElement("li");
    li4.setAttribute("class", "liFour");
    li4.setAttribute("id", "li--4");
    let linkFour = document.createElement("a");
    linkFour.setAttribute("href", "#");
    linkFour.textContent = "Shanghai";
    li4.appendChild(linkFour);
    // li4.addEventListener("click", () => {
    // 	console.log("I'm in NavBar")
    // })
    navUl.appendChild(li1);
    navUl.appendChild(li2);
    navUl.appendChild(li3);
    navUl.appendChild(li4);

    navBar.appendChild(navUl);
    navBarContainer.appendChild(navBar);
//CREATING SELECT DROPDOWN FOR CHOOSING CITY
    let interestCityField = document.createElement("fieldset");
    interestCityField.setAttribute("class", "cityStyling");
    let interestCityLabel = document.createElement("label");
    interestCityLabel.textContent = "Select a City:  ";
    interestCityLabel.setAttribute("for", "interestCitySelect");
    let interestCitySelect = document.createElement("select");
    interestCitySelect.setAttribute("id", "interest_city");
    interestCityField.appendChild(interestCityLabel);

    FetchCalls.getPlaces()
    .then(allPlaces => {
      console.log(allPlaces);
      allPlaces.forEach(placeItem => {
        let selectOption = document.createElement("option");
        selectOption.setAttribute("label", placeItem.nameCity);
        selectOption.setAttribute("value", placeItem.id);
        interestCitySelect.appendChild(selectOption);
          console.log(selectOption);
      })
      interestCityField.appendChild(interestCitySelect);
    })
// ADD SECONDARY HEADER
    // let addHeader = document.createElement("h3");
    // addHeader.textContent = "Points of Interest";
    // addHeader.setAttribute("class", "headerH3");

// NAME OF INTEREST
    let interestNameField = document.createElement("fieldset");
    interestNameField.setAttribute("class", "nameStyling");

    let interestNameLabel = document.createElement("label");
    interestNameLabel.textContent = "Name:  ";
    interestNameLabel.setAttribute("for", "interestNameInput");
    interestNameField.appendChild(interestNameLabel);

    let interestNameInput = document.createElement("input");
    interestNameInput.setAttribute("id", "interest_name");
    interestNameField.appendChild(interestNameInput);

// DESCRIPTION OF INTEREST
    let interestDescField = document.createElement("fieldset");
    interestDescField.setAttribute("class", "descStyling");

    let interestDescLabel = document.createElement("label");
    interestDescLabel.textContent = "Description:  ";
    interestDescLabel.setAttribute("for", "interestDescInput");

    let interestDescInput = document.createElement("textarea");
    interestDescInput.setAttribute("id", "interest_desc");
    interestDescInput.setAttribute("name", "interestDescInput")

    interestDescField.appendChild(interestDescLabel);
    interestDescField.appendChild(interestDescInput);

// COST OF INTEREST
    let interestCostField = document.createElement("fieldset");
    interestCostField.setAttribute("class", "costStyling");

    let interestCostLabel = document.createElement("label");
    interestCostLabel.textContent = "Cost:  ";
    interestCostLabel.setAttribute("for", "interestCostInput");

    let interestCostInput = document.createElement("input");
    interestCostInput.setAttribute("id", "interest_cost");

    interestCostField.appendChild(interestCostLabel);
    interestCostField.appendChild(interestCostInput);

// SUBMIT BUTTON
    let submitButton = document.createElement("button");
    submitButton.textContent = "Add Point of Interest";
    submitButton.setAttribute("class", "addBtnStyling");
    submitButton.setAttribute("id", "interest__save");
    // 2. Attach event listener to button in form
    submitButton.addEventListener("click", this.handleAddNewInterest);

// 3. Append the HTML form to the DOM
    let interestFormFragment = document.createDocumentFragment();
    // interestFormFragment.appendChild(formHeader);
    // interestFormFragment.appendChild(addHeader);
    interestFormFragment.appendChild(interestNameField);
    interestFormFragment.appendChild(interestDescField);
    interestFormFragment.appendChild(interestCostField);
    interestFormFragment.appendChild(interestCityField);
    interestFormFragment.appendChild(submitButton);

    let interestFormArticle = document.querySelector("#li--1");
    interestFormArticle.setAttribute("class", "liOne");
    interestFormArticle.appendChild(interestFormFragment);

    console.log(interestFormArticle);
    List.createDomList();
},
  clearTaskDom() {
    console.log("Hello from TasksDomBuilder.clearDom");
    let clearHtmlDiv = document.querySelector("#pageDiv");
    let clearHtmlSection = document.querySelector("#clearSection");
    clearHtmlSection.innerHTML = `
        <article id="formOutput"></article>
        <article id="listOutput"></article>`;
    clearHtmlDiv.appendChild(clearHtmlSection);
    },
    handleAddNewInterest() {
// "id": 9,
// "nameInterest": "Interest Nine",
// "descriptionInterest": "Description of Interest Nine",
// "costInterest": 10.00,
// "reviewInterest": "",
// "placeId": 2

    let intNameInput = document.querySelector("#interest_name").value;
    let intDescInput = document.querySelector("#interest_desc").value;
    let intCostInput = document.querySelector ("#interest_cost").value;
    let intReviewInput = "";
    let intPlaceInput = document.querySelector("#interest_city").value;
    let newInterest = {
      nameInterest: intNameInput,
      descriptionInterest: intDescInput,
      costInterest: intCostInput,
      reviewInterest: intReviewInput,
      placeId: intPlaceInput
    }

    console.log("newInterest Object")
    console.log(newInterest)

    FetchCalls.postNewInterest(newInterest)
    .then(response => {
        console.log("You have fetched")
        List.createDomList()
    })
},
}

 export default DomBuilder