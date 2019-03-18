![Main Page](/src/Traveler.png?raw=true)

The Ternary Traveler is a CRUD application for a travel blogger who travels to 3 destinations per month. It adds points of interest for the next set of places she’ll be visiting. When the memories are made, she adjusts the cost and adds a review.

She requested a Browserify application using JSON-Server, written in JavaScript with modules. Writing this app in a 3 day sprint reminded me of the first time I took the car out for a spin on my own after becoming a licensed driver … Sweet spot!  I’m looking forward to seeing where REACT takes me next!


MY STEP BY STEP BREAKDOWN OF HOW PROJECT REQUIREMENTS WILL BE ACCOMPLISHED

Meet Technical Requirements:

Create directory and file structure and initialize a git repo

Set up Grunt to run ESLint and Browserify during development and use json-server for persistent data storage

1. Create points of interest array object in database.json

2. DomBuilder component:

  - Create a container section with two articles - add form and list output
  
  - DomBuilder.createAndAppendCrud will create elements and append them
  
    When the user opens the application, a form will be presented in which
    the following properties of the point of interest are provided
    
      A. Name of the Point Of Interest - POI (A fieldset of label and input)
      
      B. Description of the POI (A fieldset of label and textarea)
      
      C. Cost of visiting the POI (A fieldset of label and input)
      
      D. Dropdown to pick which city the POI is located in (Fieldset and
      Select with options populated by a fetch to places array containing
      the  three static cities assigned)
      
      E. Button with click event listener to add POI and display the new POI
      in the application after it's added.
      
  - The Add POI Button will call domBuilder.handleAddNewInterest and:
  
      A. Create a new Interest object
      
      B. Select the input values and asign them to the object
      
      C. Fetch the interests array and POST to it
      
      D. Refresh the list of points of interest
      
      E. Clear the input form
      
3. In addition to the add form, when the user opens the application,

    - All POI objects will be displayed with their
          city
          name
          description
          cost
          review (if it's not blank)
          options to both edit and delete the POI
          
    - List.createDomList calls createObject.interestbuilder to create the singular object to be displayed
    
    - It then adds each POI object to the list output container section
    Within the output section are three articles relative to the three static cities in the places array
    
    For POI to be displayed by city:
    
      A. Create list container and 4 subsets
      
      B. Fetch for one city by Id
      
      C. Create a docFragment
      
      D. For each city (placeId) fetch POI
      
      E. Add POI item to docFragment
      
      F. Add docFragment to container
      
      G. Repeat for other two cities
      
4. The edit button created in createObject.interestBuilder:

      A. Calls EditForm.js
      
      B. Which creates a form with:
      
           POI name (for easy reference)
           
           Pre-filled input fields to update cost and review
           
           An update button to save changes
           
      C. Redisplays the POI list reflecting the update.
      
5. When the delete button created in createObject.interestBuilder is clicked:

      A. The user is prompted to confirm the delete.
      
      B. If confirmed, FetchCalls.deleteInterest is called for that interest Id and the object is deleted from the interests array
      
      C. The list of POI is refreshed.
      
      D. If the user elects not to delete, the POI is not deleted and the confirmation message disappears.
  
  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

CLIENT objectives for The Ternary Traveler

You've been asked to put together a simple application for your client, Mira. Mira is a travel blogger who creates both videos and writes blog posts for her website. She tries to travel to three destinations per month, spending a week in each place. Then she takes a week off before starting the whole cycle again. She has requested a Browserify application using JSON-Server, where she can add points of interests for the next set of three places she will be visiting. She would like to be able to add a new point of interest in one of her destinations so she can have a list of places she needs to visit when she travels. As she visits each point of interest, she would like to be able to edit the point of interest by adjusting the cost and adding a review. She has also asked to be able to delete points of interest from her list. But to ensure she does not accidentally delete anything, she would like an alert to to confirm the delete action.

Mira expects an application that has a clean user interface with easy to read text and an intuitive interface. However, it is much more important that the application performs the required functionality than that it looks perfect.

To start you off, here's what the resources in your API should look like for this application:

Places
{
  "places": [
    { 
      "id": 1, 
      "name": "Italy", 
      "visa_required": false 
    },
    { 
      "id": 2, 
      "name": "Switzerland", 
      "visa_required": true 
    },
    { 
      "id": 3, 
      "name": "France", 
      "visa_required": false
    }
  ],
  "interests": []
}
Interests
An example of what an interest would like when it is initially added:

{ "id": 1, "placeId": 1, "name": "Local Market", "description": "Local market where you can try purchase local products and try the local food", "cost": 0.00, "review": "" }
An example of what an interest would like after it has been visited and reviewed:

{ "id": 1, "placeId": 1, "name": "Local Market", "description": "Local market where you can try purchase local products and try the local food", "cost": 0.00, "review": "You can definitely get things for a lower price if you are willing to bargain!" }
Story
As a user, I should be able to enter in an point of interest, and associate it with a place.

Acceptance Criteria
Given a user has already has points of interests
When the user opens the application
Then all points of interests should be displayed with their name, description, cost, review if it's not blank and the place it is located

Given a user wants to keep track of a new point of interest
When the user opens the application
Then a form should be presented to the user in which the following properties of the point of interest can be provided

Name of the point of interest
Description of the point of interest
Cost of visiting the point of interest
Dropdown to pick which place the point of interest is located in
Given a user has entered in all details of a point of interest
When the user performs a gesture to save the point of interest
Then the point of interest should be displayed in the application

Given a user wants to change the cost of a point of interest or add/change the review to a point of interest
When the user performs a gesture to edit the point of interest
Then the user should be presented with a form that has the cost and review, if it's not blank, pre-filled
And there should be an affordance to save the edited cost and review

Given a user has saved a point of interest
When the user visits their application
Then all points of interest should be displayed
And each point of interest should have an affordance to delete it

Given a user wants to remove a previously stored point of interest
When the user performs a gesture on the delete affordance
Then the user should be prompted to confirm the delete

Given a user is viewing the delete prompt When the user selects the confirmation affordance Then the point of interest should be deleted And the confirmation message should disappear And the list of points of interest should be refreshed

Given a user is viewing the delete prompt When the user selects the cancel affordance Then the point of interest should NOT be deleted And the confirmation message should disappear

Technical Requirements
The application should be built using Grunt to run ESLint and Browserify during development
For persistent data storage, use json-server.
