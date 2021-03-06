const FetchCalls = {
// GET ONLY PLACES
  getPlaces() {
      return fetch("http://localhost:8088/places")
      .then(response=>response.json())
    },
// GET A SINGULAR INTEREST BY INTEREST-ID (FOR EDIT)
  getInterest(interestId) {
      return fetch(`http://localhost:8088/interests/${interestId}`)
      .then(response => response.json())
    },
// GET ALL INTERESTS AND PLACES FOR A SINGULAR CITY
  byCityInterests(cityId) {
      return fetch(`http://localhost:8088/interests?_expand=place&placeId=${cityId}`)
      .then(response => response.json())
    },
// GET ALL (EXPANDED) INTERESTS AND PLACES
  getAllInterestsAndPlaces() {
      return fetch("http://localhost:8088/interests?_expand=place")
        .then(response => response.json())
    },
// POST A NEW INTEREST
  postNewInterest(newInterestToSave) {
      return fetch("http://localhost:8088/interests", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newInterestToSave)
      })
    },
// UPDATE
  patchExistingInterest(interestId, interestToEdit) {
      return fetch(`http://localhost:8088/interests/${interestId}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(interestToEdit)
      })
    },
  // DELETE
  deleteInterest(interestId) {
    return fetch(`http://localhost:8088/interests/${interestId}`, {
      method: "DELETE",
      headers: {
          "Content-Type": "application/json"
        }
    })
  }
}
  export default FetchCalls