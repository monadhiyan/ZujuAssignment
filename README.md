# ZujuAssignment

Hi,

In this assignment,I have covered the below mentioned scenarios.Please reach out to me if you have any questions regarding the same.
Thank you for this opportunity!


**Scenarios covered**

**1.Checklabels.js**

*This Test script is to check all links and labels in the page :https://beta-app.zujudigital.com/#sign-in
*Checking for deadlinks if any using custom command :checkalllinks()
*This is to test the user experience and the over all link health.

**2.Loginbyinput.js**

*This Test script is to check user sign in functionality using existing user credentials using custom command logininput()
*Made assertions on UI level for ensuring successful login
*User logs in by typing in the credentials and not SSO.
*User credentials are stored in fixtures ->example.js
*For this script i have used from fixtures:
**existinguseremail":"Zujuexistingu@gmail.com",
"newuser":"zujunewu@gmail.com",******

**3.Loginunsuccessful.js**
*This Test script is to check unsucessful sign in functionality
*The script tests unsuccessful attempt to login with incorrect password.
*assertions to check the error message
*Forgot password functionality check
*UI level assertions to check the functionality
*Custom command logininput() used
*arguments passed from fixtures are:
**existinguseremail":"Zujuexistingu@gmail.com",
"incorrectpassword":"wrongpassword",**

**4.SearchTeamsAddFav.js**
*This Test script searches team 'Manchester City' on https://beta-app.zujudigital.com/reputation page
*Adds to favorite from the add star icon button
*Performed on an existing user
*Assertions for return values of search(search being a pattern search),checks if returns the correct value array for the search made
*Assert if Machester city is now in favourite Teams list for this user
*Prerequisite:Manchester City Team should not already be a favourite.
*Tested on existing user:
**existinguseremail1":"zujutest+automation@gmail.com"
"existu1correctpwd":"TestAuto123",**

**5.TeamAddfavframe.js**
*.This Test script searches a team in all teams pool, adds to favorites from frame UI
*.Locate the searched team
*Click on the grid to open a frame which has a favourite button
*click to check the flow of the addition of team to favorites from different UI.
*Assert if Team is now added successfully to "favourite" Teams list for this user
*Tests addition of multiple teams to favorites ,adding all teams from pattern search yield
***Tested on existing user:existinguseremail1":"zujutest+automation@gmail.com",
"existu1correctpwd":"TestAuto123"**


