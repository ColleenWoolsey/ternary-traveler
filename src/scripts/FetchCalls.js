const FetchCalls = {
    
    getAllInterests() {
      return fetch("http://localhost:8088/interests")
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