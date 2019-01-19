const FetchCalls = {

    getPlaces() {
      return fetch("http://localhost:8088/places")
      .then(response=>response.json())
    },

    getInterests(cityId) {
      return fetch(`http://localhost:8088/interests?_expand=place&placeId=${cityId}`)
      .then(response => response.json())
    },
    getAllInterestsAndPlaces() {
      return fetch("http://localhost:8088/interests?_expand=place")
        .then(response => response.json())
    },
    postNewInterest(newInterestToSave) {
      return fetch("http://localhost:8088/interests", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newInterestToSave)
      })
    },
    getInterest(interestId) {
      return fetch(`http://localhost:8088/interests/${interestId}`)
      .then(response => response.json())
    },
    putExistingTask(interestId, interestToEdit) {
      return fetch(`http://localhost:8088/interests/${interestId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(interestToEdit)
      })
    }
  }
  export default FetchCalls