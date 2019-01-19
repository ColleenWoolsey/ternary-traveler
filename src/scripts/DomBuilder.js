import FetchCalls from "./FetchCalls"
import List from "./List"


const DomBuilder = {
// DROPDOWN FOR CITY
createAndAppendForm() {
    console.log("Hello from Dombuilder.createAndAppendForm");
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

// MAIN HEADER
    let formHeader = document.createElement("h1");
    formHeader.textContent = "The Ternary Traveler";
    formHeader.setAttribute("class", "headerH1");

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
    interestFormFragment.appendChild(formHeader);
    // interestFormFragment.appendChild(addHeader);
    interestFormFragment.appendChild(interestNameField);
    interestFormFragment.appendChild(interestDescField);
    interestFormFragment.appendChild(interestCostField);
    interestFormFragment.appendChild(interestCityField);
    interestFormFragment.appendChild(submitButton);

    let interestFormArticle = document.querySelector("#formOutput");
    interestFormArticle.setAttribute("class", "formContainer");
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