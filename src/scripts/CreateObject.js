import FetchCalls from "./FetchCalls"
import EditForm from "./EditForm"
import List from "./List"

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
    let vplaceName = document.createElement("p");
    vplaceName.textContent = interestItem.place.nameCity;
    console.log("PlaceName" + vplaceName);
    let vnameInterest = document.createElement("p");
    vnameInterest.textContent = interestItem.nameInterest;
    let vdescriptionInterest = document.createElement("textarea");
    vdescriptionInterest.textContent = interestItem.descriptionInterest;
    let vcostInterest = document.createElement("p");
    vcostInterest.textContent = interestItem.costInterest;
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


  interestArticle.appendChild(editBtn);
  interestArticle.appendChild(delBtn);
  interestArticle.appendChild(vnameInterest);
  interestArticle.appendChild(vplaceName)
  interestArticle.appendChild(vdescriptionInterest);
  interestArticle.appendChild(vcostInterest);
  if (vreview !== "") {
    interestArticle.appendChild(vreview);
  }

  return interestArticle;
  }   
}

  export default CreateObject