import FetchCalls from "./FetchCalls"
import List from "./List"


const DomBuilder = {
// DROPDOWN FOR CITY
createAndAppendCrud() {
    console.log("Hello from Dombuilder.createAndAppendForm");

    const pageDiv = document.querySelector("#pageDiv");
    pageDiv.setAttribute("class", "pageDiv");

// CRUD CONTAINER
    const crudContainer = document.createElement("section");
    crudContainer.setAttribute("id", "crudContainer");
    let crudContainerHeader = document.createElement("h2");
    crudContainerHeader.textContent = "The Ternary Traveler";
//CREATING SELECT DROPDOWN FOR CHOOSING CITY
    let interestCityField = document.createElement("fieldset");
    interestCityField.setAttribute("class", "cityStyling");
    let interestCityLabel = document.createElement("label");
    interestCityLabel.textContent = "Select a City:  ";
    interestCityLabel.setAttribute("for", "interestCitySelect");
    interestCityLabel.setAttribute("class", "label");
    let interestCitySelect = document.createElement("select");
    interestCitySelect.setAttribute("id", "interest_city");
    interestCityField.appendChild(interestCityLabel);
// FETCH CALL TO PLACES TO POPULATE SELECT & LISTHEADERCONTAINER

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
    // NAME OF INTEREST
    let interestNameField = document.createElement("fieldset");
    interestNameField.setAttribute("class", "nameStyling");

    let interestNameLabel = document.createElement("label");
    interestNameLabel.textContent = "Name:  ";
    interestNameLabel.setAttribute("for", "interestNameInput");
    interestNameLabel.setAttribute("class", "label");
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
    interestDescLabel.setAttribute("class", "label");

    let interestDescInput = document.createElement("textarea");
    interestDescInput.setAttribute("id", "interest_desc");
    interestDescInput.setAttribute("name", "interestDescInput")
    interestDescInput.setAttribute("class", "descInput");

    interestDescField.appendChild(interestDescLabel);
    interestDescField.appendChild(interestDescInput);

// COST OF INTEREST
    let interestCostField = document.createElement("fieldset");
    interestCostField.setAttribute("class", "costStyling");

    let interestCostLabel = document.createElement("label");
    interestCostLabel.textContent = "Cost:  ";
    interestCostLabel.setAttribute("for", "interestCostInput");
    interestCostLabel.setAttribute("class", "label");

    let interestCostInput = document.createElement("input");
    interestCostInput.setAttribute("id", "interest_cost");

    interestCostField.appendChild(interestCostLabel);
    interestCostField.appendChild(interestCostInput);

// SUBMIT BUTTON
    let submitButton = document.createElement("button");
    submitButton.textContent = "Add Point of Interest";
    submitButton.setAttribute("class", "btnStyling");
    submitButton.setAttribute("id", "interest__save");
    // 2. Attach event listener to button in form
    submitButton.addEventListener("click", this.handleAddNewInterest);
    // APPEND ADD CONTAINER TO THE DOM
    let crudContainerFragment = document.createDocumentFragment();
    crudContainerFragment.appendChild(crudContainerHeader);
    crudContainerFragment.appendChild(interestNameField);
    crudContainerFragment.appendChild(interestDescField);
    crudContainerFragment.appendChild(interestCostField);
    crudContainerFragment.appendChild(interestCityField);
    crudContainerFragment.appendChild(submitButton);
    crudContainer.appendChild(crudContainerFragment);

    List.createDomList();

    pageDiv.appendChild(crudContainer);
    console.log(pageDiv);
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