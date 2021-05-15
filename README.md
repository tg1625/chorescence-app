# Chorescence
Chorescence is a web app that aims to help families or roommates to manage and assign chores while avoiding awkward confrontations. 

### Authors
- Tatyana Graesser
- Kevin Grajeda
- Helen Xu
- Alwyn Zhang

### Kanban Board
Here's the link to the [Kanban Board](https://trello.com/b/Kf6zRpQy) for this project

## Requirements

####	User Account Creation 
The proposed project will allow users to create accounts and add other users to their contacts lists. Information pertaining to the user such as name, tasks/chores, roles, and email address will be associated with their account. 

####	Group Creation and moderation for families/roommates
Users may create and be a part of as many groups as they want. The user who created the group will be the initial group administrator. They will be able to adjust group settings and user permissions, appoint other users as administrators, and relinquish their administrator status. Group members can be given specific roles based on the tasks/chores the members have. The adjustable group settings will include group name, group theme, and group roles. User permissions will include abilities to add or remove users, create tasks/chores, and adjust  the group settings.

#### Task/Chore Creation
Either the administrator of the group can create tasks for the other users or other users can create tasks for themselves. The administrator will  have control over the name, date, duration, priority, category, and whom the task is assigned to. The tasks will be able to be easily modified or deleted if needed. They can also be set to be recurring at specific dates and times. The application will also provide users with customizable reminders to ensure that the tasks are completed.

#### Task Feedback
Users can notify others in their group that they have completed their task/chore, notify others if they are unable to complete the task/chore, or request changes relating to the task/chore. When users within a group find that a task has been falsely marked as complete or performed inadequately, they may send a notice to the user responsible for the task or to the administrator for review.

#### Task History
Users can view past tasks within a group that have been assigned and completed, plus any notices that have been sent for falsely/inadequately completed tasks. Previously assigned tasks can be duplicated and re-assigned.

Fully detailed system requirements and use cases can be found in [SRS.pdf](documentation/SRS.pdf) in the documentation folder

## NPM Targets
Since this project is built using Node, we will be using npm instead of make
- npm start: compile and run the project using the heroku server
- npm run local: compile and run the project using the local server
    - assumes server is running on port 3000
- npm test: compile and run tests
    - the equivalent of make tests
- npm test -- --coverage: compile and run tests with coverage
- npm install: install all the dependencies for the project
    - the equivalent of make dev_env
- npm run docs: run React component documentation server
- npm run prod -- "Message of the commit": runs tests, then pushes code to GitHub
    - the equivalent of make prod
