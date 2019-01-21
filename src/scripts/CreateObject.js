import FetchCalls from "./FetchCalls"
import EditForm from "./EditForm"
import List from "./List";

const CreateObject = {
  interestBuilder(interestItem) {
    console.log("Hello from CreateObject.interestBuilder")
// CREATING ITEM LIST CONTAINER FOR EACH INTEREST ITEM
    let interestArticle = document.createElement("article");
    interestArticle.setAttribute("id", `interest--${interestItem.id}`);
    interestArticle.setAttribute("class", "listItemContainer");

// CREATING EDIT BUTTON
    let editBtn = document.createElement("button");
    editBtn.setAttribute("class", "btnStyling");
    editBtn.textContent = "Edit";
// ADDING EVENT LISTENER TO EDIT BUTTON
    editBtn.addEventListener("click", () => {
      let articleId = event.target.parentNode.id;
      let interestId = articleId.split("--")[1];
      console.log("This is the id from interests for fetch")
      console.log(interestId);
      FetchCalls.getInterest(interestId)
      .then(response => {
          console.log("This is the response from edit fetch to be used in EditForm")
          console.log(response)
          EditForm.createAndAppendForm(articleId, response);
      })
    })
// CREATING DELETE BUTTON
    let delBtn = document.createElement("button");
    delBtn.setAttribute("class", "btnStyling");
    delBtn.textContent = "Delete";
// ADDING EVENT LISTENER TO DELETE BUTTON
    delBtn.addEventListener("click", () => {
// CONFIRMATION ALERT FOR DELETE
      let confirmationValue = confirm("Are you sure you want to delete this place?")
      if (confirmationValue == true) {
          // Target the parentnode because event is on article not button
          let articleId = event.target.parentNode.id;
          // Pass in the articleId (word + number) in EditForm.createAndAppend
          let interestId = articleId.split("--")[1]
          // The split variable contains only the number
          FetchCalls.deleteInterest(interestId)
          .then(response => {
            console.log(response);

            List.createDomList();
          })
        } else {
          return false
      }
    })
// CREATING DOM "PRINT" FORM FOR INTEREST OBJECT
    let vnameInterest = document.createElement("p");
    vnameInterest.textContent = interestItem.nameInterest;
    vnameInterest.setAttribute("class", "vnameInterestHeader");

    let vnameCity = document.createElement("p");
    vnameCity.setAttribute("class", "header");
    vnameCity.textContent = interestItem.place.nameCity;

    let vdescriptionInterest = document.createElement("textarea");
    vdescriptionInterest.textContent = interestItem.descriptionInterest;
    vdescriptionInterest.setAttribute("rows", "4");

    let vcostInterest = document.createElement("p");
    vcostInterest.setAttribute("class", "costList");
    vcostInterest.innerHTML = `Cost : ${interestItem.costInterest}`;

    let vreviewLabel = document.createElement("p");
    vreviewLabel.setAttribute("class", "reviewLabel");
    vreviewLabel.textContent = "Review";
    let vreview = document.createElement("textarea");
    vreview.setAttribute("rows", "6");
    vreview.textContent = interestItem.reviewInterest;
// APPENDING LIST ITEM
  interestArticle.appendChild(vnameCity);
  interestArticle.appendChild(vnameInterest);
  interestArticle.appendChild(vdescriptionInterest);
  interestArticle.appendChild(vcostInterest);
  if (vreview.textLength > 0) {
    interestArticle.appendChild(vreviewLabel);
    interestArticle.appendChild(vreview);
  }
  interestArticle.appendChild(editBtn);
  interestArticle.appendChild(delBtn);
  return interestArticle;
  }
}
export default CreateObject