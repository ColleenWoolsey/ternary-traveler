import FetchCalls from "./FetchCalls"
import CreateObject from "./CreateObject"

const List = {
  createDomList() {
   console.log("Hello from List.createDomList")

// LIST OF INTERESTS CONTAINER
const listContainer = document.createElement("section");
listContainer.setAttribute("id", "listContainer");
const listArticleOne = document.createElement("article");
listArticleOne.setAttribute("id", "articleId--1");
const listArticleTwo = document.createElement("article");
listArticleTwo.setAttribute("id", "articleId--2");
const listArticleThree = document.createElement("article");
listArticleThree.setAttribute("id", "articleId--3");

   FetchCalls.getPlaces()
    .then(allPlaces => {
      console.log(allPlaces);
      allPlaces.forEach(placeItem => {
        // fetch list for just that city
        const cityId = placeItem.id;
        FetchCalls.getInterests(cityId)
        .then(allInterests => {
          console.log(allInterests);
          allInterests.forEach(interestItem => {
            let interestHtml = CreateObject.interestBuilder(interestItem);
            console.log(interestHtml);
            if (interestItem.place.id === 1) {
            listArticleOne.appendChild(interestHtml);
            listContainer.appendChild(listArticleOne);
          } else if (interestItem.place.id === 2) {
            listArticleTwo.appendChild(interestHtml);
            listContainer.appendChild(listArticleTwo);
          } else if (interestItem.place.id === 3) {
            listArticleThree.appendChild(interestHtml);
            listContainer.appendChild(listArticleThree);
          } else {
            alert("There are no interests for this city")
          }
          pageDiv.appendChild(listContainer);
          console.log(listContainer);
        })
       })
     })
    })
  }
}
export default List