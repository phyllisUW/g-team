**1. Overall Application Page (Repetitive Features)**

- A1. Each page will have a navigation bar that contains the logo and title of the application and a search bar.
- A2. The logo and title of the application is present on the top left corner of the page in a navigation bar.
- A3. Clicking on the logo and title of the application allows the user to go back to the front page which would be the ‘Community Forum Page’. 
- A4. Each page will have a “search” feature in the navigation bar that allows users to look up posts or users. 
  - A4a. If there are posts that contain the words that the user types, there will be pop-ups of the posts that have the typed words. 
  - A4b. If users look up for a post that cannot be found, there will be an error message that states, “Not found. Try again.”

**2. Sign-In Page (UW Authentication)**

- ​​​​B1. It should provide two text fields: one for entering a login name and one for entering a password
- B2. If the submit button is clicked and either of the text fields are left blank, an error will be shown to the user.
- B3. This page has a forgot password button. On the click of this button, the user will be redirected to the ‘Recover Password’ page. 
- B4. If a user successfully logs in using their UW NetID information, they will be directed to the ‘Community Forum Page’ which is the homepage of the application.
- B5. Must have the Sign-in button 
- B6. Side buttons with links to information on learning about uw net id’s and need help.
- B7. If users input the wrong information, including an incorrect UW netID or password, they will be prompted to enter their information again.

**3. Settings Page**

- C1. Must have a settings button (a settings wheel icon). 
- C2. Must have a profile picture icon that users can click on to change their profile picture using a picture they can upload from their computer.
- C3. Must have a selection of gender, major, and year for the user to select from and put on their profile.
- C4. Selection of two buttons that turn on enable and unable to get home safe notifications. 
- C5. On the click of the Save button, if the user's details are updated successfully, a success message is displayed and the altered settings decided by the users will be kept.

**4. Community Forum Page**

- D1. If a user who is not logged in visits this page, they are redirected to the Sign-in page. 
- D2. Must have an account section below the navigation bar.
- D3. Must have a ‘Create Post’ tab. 
- D4. The account section will show the logged in user’s username, profile picture, and the friends they have currently online.
- D5. Next to the account section, there will be posts shown that were created by other users to warn them off any suspicious activity or crimes. 
- D6. Each page will show 10 recent posts. 
- D7. Must have a ‘Next’ button to view more or older posts. 
- D8. Each post will have a title that the original poster has written about the suspicious activity they’ve seen. 
- D9. Each post will have the original poster’s username, a “heart” feature, and a share function for users to share to their friends.

**5.1 Create a Post Page**

- E1. Must have a create a new post button.
- E2. Must have a pop-up title and description text box for users to input information into. 
- E3. Must have a post button for users to click on when they want to post.
- E4. If a user clicks on the button and the title or description text is blank or incorrect, they will receive an error message prompting them to fill in the required information to post.
- E5. Must have an ‘X’ button where users can cancel their option to create a new post.

**5.2 Deleted Post Fail Page**

- F1. If the user is trying to view a post that has been deleted by the post creator
  - F1a. The users should not be able to view the post.
  - F1b. A message indicating that the following post has been deleted should be displayed.
  - F1c. There should be a back button / back to forum button that can lead users back to the community forum page.
  - F1d. The navigation bar should still be present on the top of the page.
  - F1e. The friend list feature should be still present on the left hand side of the page.

**5.3 Posted Message Page**

- G1. When the user clicks on one of the posted messages from the community forum
  - G1a. The content of the message should be clearly displayed in the middle of the page.
  - G1b. The username of the poster should be present underneath the message content.
  - G1c. The like/reaction icon should be displayed.
  - G1d. Users should be able to add comments to the post.
  - G1e. The navigation bar should still be present on the top of the page.
  - G1f. The friend list feature should be still present on the left hand side of the page.
- G2. When users like the post
  - G2a. The heart icon should change color and the number of total likes it received should increase by one.
- G3. When user leave a comment on the post
  - G3a. The posted comment should be present on the comment thread.

**6. Friends List Page**

- H1. There should be a list of friends that is displayed for everyone the user has added
- H2. The system should have a search bar to allow users to search for friends
- H3. The system should allow users to add friends
- H4. There should be suggestions for friends to add mutual friends
- H5. When the blocked button is clicked for the selected friend of the user, the user will no longer see that user in the Friends List Page or Direct Message Page. 
- H6. Blocked blocked users can be unblocked when user searches for the blocked user and clicks the unblock button
- H7. When the unadd button is clicked, the user will no longer be in the Friends List Page, but may still appear as a suggestion

**6.1 Direct Message Page**

- I1. There will be a message form that appears when the writing icon is clicked, allowing users to select friends’ name(s) from a dropdown list of all of the users’ friends, message form will be an empty textbox until the user inputs a message, and send the message upon the click of the send button
- I2. Have a panel of user’s friend list of online friends
- I3. Have a panel of user’s recent messages
- I4. Messages should have conversation history
- I5. Opened message page has the friend name and profile photo at the top bar
- I6. Enter button allows users to send the message
- I7. Red exclamation mark icon appears next to the message if it fails to send

**7. Get Home Safe Feature Page**

- J1. Must have the title “Get Home Safe Feature” on the screen. 
- J2. Must have the text: “Need a buddy to walk you home?” 
- J3. Below the text, the page must have the option for users to submit a request for a “walking buddy”.
- J4. In the request, must have location text where users can input where they are currently at.
- J5. In the request, there must be a ‘how many people’ drop-down menu with numbers starting from 1 to 5+. 
- J6. In the request, there must be a ‘request button’ after users have filled out the location and ‘how many people’ sections.
- J7. If users fail to complete both sections, they will be prompted to fill out those sections before submitting a request.
- J8. Next to the request function, there must be the ‘Buddy Requests’ sections. 
- J9. In the ‘Buddy Requests’ section, there must be submitted requests from users.
- J10. In the ‘Buddy Requests’ section, there must be descriptions of the username, location

**8. Non-Functional Requirements**

- K1. The ‘Get Home Safe’ application will be available to use on mobile devices and on computers. 
- K2. The ‘Get Home Safe’ application can be used on all versions of Chrome, Safari, and Edge browsers released in the last five years.
- K3. All user data and information will be encrypted at rest.
- K4. No unauthorized user will be able to access the ‘Get Home Safe’ application if they do not have a UW NetID or are a UW student.
- K5. The application must be able to load the homepage in less than 5 seconds on mobile devices and computers.
  