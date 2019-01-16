import FetchCalls from "./FetchCalls"
import EditForm from "./EditForm"
import List from "./List"

const CreateObject = {
  
   taskBuilder(interestItem) {

    let interestArticle = document.createElement("article")
    interestArticle.setAttribute("id", `task--${interestItem.id}`)
    interestArticle.setAttribute("class", "listItemContainer")

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

    let vnameInterest = document.createElement("p");
    vnameInterest = interestItem.nameInterest;
    let vdescriptionInterest = document.createElement("p");
    vdescriptionInterest = interestItem.descriptionInterest;
    let vcostInterest = document.createElement("p");
    vcostInterest = interestItem.costInterest;

    // "nameInterest": "Interest Nine",
    // "descriptionInterest": "Description of Interest Nine",
    // "costInterest": 10,
    // "reviewInterest": "",
    // "placeId": 2
    
    // Fetch.putExistingInterest(interestId, interestToEdit)
    //   .then(response => {
    //   List.createDomList()
    //   })


  interestArticle.appendChild(editBtn);
  interestArticle.appendChild(delBtn);
  interestArticle.appendChild(vnameInterest);
  interestArticle.appendChild(vdescriptionInterest);
  interestArticle.appendChild(vcostInterest);

  return interestArticle;
   }   
  }

  export default CreateObject