import FetchCalls from "./FetchCalls"
import CreateObject from "./CreateObject"

const List = {
  createDomList() {
   console.log("Hello from List.createDomList");
   FetchCalls.getPlaces()
    .then(allPlaces => {
      allPlaces.forEach(placeItem => {
        // fetch list for just that city
        const cityId = placeItem.id;
        FetchCalls.byCityInterests(cityId)
        .then(allInterests => {
          let interestsDocFragment1 = document.createElement("section");
          interestsDocFragment1.setAttribute("id", "articleId--1");
          let interestsDocFragment2 = document.createElement("section");
          interestsDocFragment2.setAttribute("id", "articleId--2");
          let interestsDocFragment3 = document.createElement("section");
          interestsDocFragment3.setAttribute("id", "articleId--2");
          console.log("This is fetch call by city id");
          console.log(allInterests);
          allInterests.forEach(interestItem => {
            let interestHtml = CreateObject.interestBuilder(interestItem);
            if (interestItem.place.id === 1) {
            interestsDocFragment1.appendChild(interestHtml);
            console.log("This is interestsDocFragment1");
            console.log(interestsDocFragment1);
          } else if (interestItem.place.id === 2) {
            interestsDocFragment2.appendChild(interestHtml);
            console.log("This is interestsDocFragment2");
            console.log(interestsDocFragment2);
          } else if (interestItem.place.id === 3) {
            interestsDocFragment3.appendChild(interestHtml);
            console.log("This is interestsDocFragment3");
            console.log(interestsDocFragment3);
          } else {
            alert("There are no interests for this city");
          }
        })
        let outputArticle = document.querySelector("#output");
        while (outputArticle.firstChild) {
          outputArticle.removeChild(outputArticle.firstChild);
        }
        let listContainer = document.createElement("section");
        listContainer.setAttribute("id", "listContainer");
        listContainer.appendChild(interestsDocFragment1);
        listContainer.appendChild(interestsDocFragment2);
        listContainer.appendChild(interestsDocFragment3);
        outputArticle.appendChild(listContainer);
      })
    })
   })
  }
}
export default List