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
        let cityHeader = document.createElement("h2");
        cityHeader.innerHTML = placeItem.nameCity.value;
        console.log("cityHeader: " + cityHeader.innerHTML);
        // let cityId = document.createElement("article")
        // cityId.innerHTML = `${placeItem.id.toString()}`;
        // console.log("cityId: " + cityId);
        // let cityArticle = document.createElement("article");
        // cityArticle.setAttribute("class", `${cityId}`)
        let cityId = placeItem.id;
        FetchCalls.getInterests(cityId)
        .then(allInterests => {
          console.log(allInterests);
          let interestDocFragment = document.createDocumentFragment();
          allInterests.forEach(interestItem => {
            let interestHtml = CreateObject.interestBuilder(interestItem);
            interestDocFragment.appendChild(interestHtml);
            console.log(interestDocFragment);
          })
          let outputArticle = document.querySelector("#listOutput")
      outputArticle.setAttribute("class", "editContainer")

      //This while loop essentially removes all child nodes of an element
      //until the element has no child nodes left. It is equivalent to the
      //following: outputArticle.innerHTML = "" If we don't do this,
      //each time a new task is added using the form, all the tasks
      //will be appended again to the bottom of the list.
      //Essentially, it clears the output container (article tag with
      //id taskOutput before repopulating it.
      while (outputArticle.firstChild) {
        outputArticle.removeChild(outputArticle.firstChild);
      }
      outputArticle.appendChild(cityHeader)
      outputArticle.appendChild(interestDocFragment)
    })
   })
  })
  }
}

export default List