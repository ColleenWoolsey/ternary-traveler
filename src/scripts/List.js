import FetchCalls from "./FetchCalls"
import CreateObject from "./CreateObject"

const List = {
  createDomList() {
   console.log("Hello from List.createDomList")
   FetchCalls.getPlaces()
    .then(allPlaces => {
      console.log(allPlaces);

      allPlaces.forEach(placeItem => {
        // fetch list for just that city
        const cityId = placeItem.id;
        FetchCalls.getInterests(cityId)
        .then(allInterests => {
          console.log(allInterests);
          let interestDocFragment = document.createDocumentFragment();
          allInterests.forEach(interestItem => {
            let interestHtml = CreateObject.interestBuilder(interestItem);
            console.log(interestHtml);
            //interestDocFragment.appendChild(interestHtml);
            console.log(interestDocFragment)
            if (interestItem.place.id === 1) {
            let outputArticle = document.getElementById("articleId--1");
            outputArticle.appendChild(interestHtml);
          } else if (interestItem.place.id === 2) {
            let outputArticle = document.getElementById("articleId--2");
            outputArticle.appendChild(interestHtml);
          } else if (interestItem.place.id === 3) {
            let outputArticle = document.getElementById("articleId--3");
            outputArticle.appendChild(interestHtml);
          } else {
            alert("There are no interests for this city")
          }
        })
       })
     })
    })
  }
}
export default List