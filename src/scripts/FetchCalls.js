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
            
        getInterest(id) {
          return fetch(`http://localhost:8088/tasks/${id}`)
          .then(response => response.json())
        },
    
        putExistingTask(interestId, interestToEdit) {
          return fetch(`http://localhost:8088/tasks/${interestId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(interestToEdit)
          })
        }
      }
      
      export default FetchCalls