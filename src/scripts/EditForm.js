import FetchCalls from "./FetchCalls"
import List from "./List"

const interestEditForm = {
  // This module will build an edit form and append it to the DOM.
  // The form will contain input fields with existing values from
  // the API and an Update button. The user can edit the the values
  // in the input fields. An event listener on the Update button
  // will handle taking the new values entered by the user and
  // calling the API to update the data.
  createAndAppendForm (articleId, interestObjToEdit) {
// COST
    let interestCostField = document.createElement("fieldset");

    let interestCostLabel = document.createElement("label");
    interestCostLabel.textContent = "Cost:  ";
    interestCostLabel.setAttribute("for", "interest__cost");
    interestCostLabel.setAttribute("class", "label");

    let interestCostInput = document.createElement("input");
    interestCostInput.value = interestObjToEdit.cost;
    interestCostInput.setAttribute("id", "interest__cost");

    interestCostField.appendChild(interestCostLabel);
    interestCostField.appendChild(interestCostInput);
// REVIEW
    let interestReviewField = document.createElement("p");

    let interestReviewLabel = document.createElement("label");
    interestReviewLabel.textContent = "Review:  ";
    interestReviewLabel.setAttribute("for", "interest__review");

    let interestReviewInput = document.createElement("textarea");
    interestReviewInput.value = interestObjToEdit.review;
    interestReviewInput.setAttribute("id", "interest__review");
    interestReviewInput.setAttribute("rows", "10");
    interestReviewInput.setAttribute("cols", "50");
    interestReviewInput.setAttribute("name", "interestReviewInput");

    interestReviewField.appendChild(interestReviewLabel);
    interestReviewField.appendChild(interestReviewInput);
// UPDATE BUTTON
    let updateButton = document.createElement("button");
    updateButton.setAttribute("class", "btnStyling");
    updateButton.textContent = "Update";

    // There is an event listener on the Update button which will
    // take the new values in the input fields and build an object
    // for the food item to be edited. Then we make a HTTP PUT
    // request where we target the food item we want to edit by
    // specifying the id in the URL. We also pass the object
    // representing the food item with the new values as data in
    // our HTTP request. Once again, because our data has been
    // modified, we make an HTTP GET request to get all the food
    // items and display them.
    updateButton.addEventListener("click", () => {
      let editedInterest = {
        cost: interestCostInput.value,
        review: interestReviewInput.value
      }
      console.log(editedInterest);
      FetchCalls.editExistingInterest(interestObjToEdit.id, editedInterest)
      .then(response => {
        List.createDomList();
      })
    })

    // We passed in the id of the article so we know exactly where to
    // append the edit form.
    let interestArticle = document.querySelector(`#${articleId}`);
    interestArticle.setAttribute("class", "editContainer")
    // Because we want to replace what is currently in the article
    // element with the edit form, we clear out all children HTML
    // elements in our targeted element before appending our edit
    // form to it.
    while (interestArticle.firstChild) {
      interestArticle.removeChild(interestArticle.firstChild);
    }
    interestArticle.appendChild(interestCostField);
    interestArticle.appendChild(interestReviewField);
    interestArticle.appendChild(updateButton);
  }
}

export default interestEditForm