import FetchCalls from "./FetchCalls"
import CreateObject from "./CreateObject"
//import DomBuilder from "./DomBuilder"

const List = {
  createDomList() {
   console.log("Hello from List.createDomList")
    FetchCalls.getAllInterestsAndPlaces()
    .then(allInterests => {
      console.table(allInterests);
      let interestDocFragment = document.createDocumentFragment()
      allInterests.forEach(interestItem => {
          let interestHtml = CreateObject.interestBuilder(interestItem)
          interestDocFragment.appendChild(interestHtml)
          console.log(interestDocFragment)
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
      outputArticle.appendChild(interestDocFragment)
    })
  }
}
export default List