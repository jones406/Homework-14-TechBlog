# TechBlog
-- URL: [Tech Blog](https://techbloggie.herokuapp.com/)
-- Version 1.0. 
-- Deployment Date: 12/04/2021. 

## Description  
Task: Build a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. Build this site completely from scratch and deploy it to Heroku. Follow the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
 
## Table of Contents
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Credits](#credits)
- [License](#license)
- [Contributing](#contributing)
- [Sources](#sources)
- [Future Improvements](#future-improvements)
- [Questions](#questions)

## User Story
```md
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions
```

## Acceptance Criteria
```md
GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments
```

## Credits
--
    
## License 
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
![MIT](https://opensource.org/licenses/MIT)  
    
      
## Contributing
 Contributers: Worked with classmates Todd Taylor, Sam Kilpatrick, Mary Lou Hoover and tutor Jaired Jawed. 

## Sources
- [express-handlebars](https://www.npmjs.com/package/)
- [MySQL2](https://www.npmjs.com/package/mysql2)
- [Sequelize](https://sequelize.org/)
- [connect-session-sequelize](https://www.npmjs.com/package/connect-session-sequelize) 
- [bcrypt package](https://www.npmjs.com/package/bcrypt)
- [dotenv package](https://www.npmjs.com/package/dotenv)

## Future Improvements
Styling Improvements, and comment routes working on one machine and not another ...
 Suggestions can be provided at the email link below. 

  ## Questions
  For questions, please check out my Github profile or email me.  
[My Github](https://www.github.com/jones406)  
[Email Me](mailto:brookejones406@gmail.com)  
