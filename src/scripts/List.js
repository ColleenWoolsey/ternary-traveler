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
const InterestsDocFragment1 = document.createDocumentFragment();
const InterestsDocFragment2 = document.createDocumentFragment();
const InterestsDocFragment3 = document.createDocumentFragment();

   FetchCalls.getPlaces()
    .then(allPlaces => {
      console.log(allPlaces);
      allPlaces.forEach(placeItem => {
        // fetch list for just that city
        const cityId = placeItem.id;
        FetchCalls.byCityInterests(cityId)
        .then(allInterests => {
          //console.log(allInterests);
          allInterests.forEach(interestItem => {
            let interestHtml = CreateObject.interestBuilder(interestItem);
            console.log(interestHtml);
            if (interestItem.place.id === 1) {
            listArticleOne.appendChild(interestHtml);
            InterestsDocFragment1.appendChild(interestHtml);
          } else if (interestItem.place.id === 2) {
            listArticleTwo.appendChild(interestHtml);
            InterestsDocFragment2.appendChild(interestHtml);
          } else if (interestItem.place.id === 3) {
            listArticleThree.appendChild(interestHtml);
            InterestsDocFragment3.appendChild(interestHtml);
          } else {
            alert("There are no interests for this city")
          }
        })
        listArticleOne.appendChild(InterestsDocFragment1);
        listArticleTwo.appendChild(InterestsDocFragment2);
        listArticleThree.appendChild(InterestsDocFragment3);

        listContainer.appendChild(listArticleOne);
        listContainer.appendChild(listArticleTwo);
        listContainer.appendChild(listArticleThree);

        let outputArticle = document.querySelector("#output")

      while (outputArticle.firstChild) {
        outputArticle.removeChild(outputArticle.firstChild);
      }
        outputArticle.appendChild(listContainer);
        console.log(outputArticle);
      })
    })
   })
  }
}
export default List