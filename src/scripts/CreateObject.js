import FetchCalls from "./FetchCalls"
// import EditForm from "./EditForm"

const CreateObject = {
  interestBuilder(interestItem) {

    let interestArticle = document.createElement("article");
    interestArticle.setAttribute("id", `interest--${interestItem.id}`);
    interestArticle.setAttribute("class", "listItemContainer");
    console.log(interestArticle);

    let editBtn = document.createElement("button");
    editBtn.textContent = "Edit";

    editBtn.addEventListener("click", () => {
      let articleId = event.target.parentNode.id;
      let interestId = articleId.split("--")[1]
      FetchCalls.getInterest(interestId)
      .then(response => {
        console.log(response)
        //EditForm.createAndAppendForm(articleId, response)
      })
    })

    let delBtn = document.createElement("button");
    delBtn.textContent = "Delete";

    delBtn.addEventListener("click", () => {
      let articleId = event.target.parentNode.id;
      let interestId = articleId.split("--")[1]
      FetchCalls.getInterest(interestId)
      .then(response => {
        console.log(response)
        //EditForm.createAndAppendForm(articleId, response)
      })
    })
    let vplaceName = document.createElement("h2");
    vplaceName.textContent = interestItem.place.nameCity;
    let vnameInterest = document.createElement("p");
    vnameInterest.textContent = interestItem.nameInterest;
    let vdescriptionInterest = document.createElement("textarea");
    vdescriptionInterest.textContent = interestItem.descriptionInterest;
    let vcostInterest = document.createElement("p");
    vcostInterest.innerHTML = `Cost : ${interestItem.costInterest}`;
    let vreview = document.createElement("textarea");
    vreview.textContent = interestItem.reviewInterest;
    // {
    // "id": 1,
    // "placeId": 1,
    // "nameInterest": "Local Market",
    // "descriptionInterest": "Local market where you can try purchase local products and try the local food",
    // "costInterest": 0.00,
    // "reviewInterest": "You can definitely get things for a lower price if you are willing to bargain!"
    // }
    // FetchCalls.putExistingInterest(interestId, interestToEdit)
    //   .then(response => {
    //   List.createDomList()
    //   })
  interestArticle.appendChild(vplaceName);
  interestArticle.appendChild(vnameInterest);
  interestArticle.appendChild(vdescriptionInterest);
  interestArticle.appendChild(vcostInterest);
  if (vreview.textLength > 0) {
    interestArticle.appendChild(vreview);
  }
  interestArticle.appendChild(editBtn);
  interestArticle.appendChild(delBtn);
  return interestArticle;
  }
}

  export default CreateObject