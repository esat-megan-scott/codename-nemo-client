# "Codename 'Nemo'" - Front End - v1

## Description
"Codename 'Nemo'" (aka "Survey Says...")

## Relevant Links
Full-Stack: | Link To: | URL:
------------|----------|--------------------------------------------------------
Front-End   | Website  | https://rscottlundgren.github.io/codename-nemo-client/
------------|----------|--------------------------------------------------------
Front-End   | GitHub   | https://github.com/rscottlundgren/codename-nemo-client
------------|----------|--------------------------------------------------------
Back-End    | Website  | https://codename-nemo.herokuapp.com/
------------|----------|--------------------------------------------------------
Back-End    | GitHub   | https://github.com/rscottlundgren/codename-nemo-api

## List of Technologies Used
- Browser template
- Custom-Built API
- Express
- MongoDB/Mongoose
- JavaScript
- HTML
- CSS/SASS
- Ajax/jQuery
- Curl
- Bootstrap
- Flexbox
- Handlebars

## Team Model
Title:               | Team Member:
---------------------|----------------------------------------------------------
Project/Product Lead | Esat Ozen, Megan Tsai, R. Scott Lundgren
Front-End Lead       | Esat Ozen, Megan Tsai, R. Scott Lundgren
Back-End Lead        | Esat Ozen, Megan Tsai, R. Scott Lundgren
Quality Assurance    | Esat Ozen, Megan Tsai, R. Scott Lundgren

## Wireframes & ERD
- [Wireframe](https://i.imgur.com/quFPJBq.png)
- [ERD](https://i.imgur.com/JW9ZDJA.png)

## User Stories
- As an unregistered user, I would like to sign up with email and password.
- As a registered user, I would like to sign in with email and password.
- As a signed in user, I would like to change password.
- As a signed in user, I would like to sign out.
- As a signed in user, I would like to create a survey with a title and possible answers.
- As a signed in user, I would like to update my survey's title and possible answers of a survey.
- As a signed in user, I would like to delete my survey.
- As a signed in user, I would like to see all surveys and its answers.
- As a signed in user, I would like to take a survey.

## Planning
As a group we decided that we would deploy both the Front End & Back End sites the weekend prior to the group project start (this proved to be fortuitous as GitHub had issues on the first day). Scott took care of the initial deployment and we discussed, as a group, how we would proceed throughout the project period over the weekend and Monday. We made a decision that we would organize the three day period as such:

Tue = Back-End API
Wed = Back-End API (Morning), Front-End (Afternoon)
Thu = Front-End & Styling

We came up with the initial wireframe and ERD (see links below), along with a workflow for our Git, a SCRUM schedule, User Stories, Culture Code, and questions for our initial meeting with the faculty (those items have been listed below as well):

#### Git Workflow
Naming convention for feature branches will be based off issue number (i.e.
"api-issue-2" or "client-issue-5") - the workflow will be some variation of the
following:

- Create a feature branch off the development branch.
- When feature completed:
- “git add” the files
- “git commit” the files - first line = title, second line = hyphen, third line
(and after) = body of commit, last line = “close #x”
- “git push” the feature to the development branch
- Notify the group that a feature has been completed and tested so the group can
review the code together
- Meet and review the code, if remaining team members approve the code, Project
Lead confirms the pull in the development branch and merges the changes on
GitHub
- Everyone rebases to the new development branch

#### Scrum Schedule
Morning meeting at 9:15am and afternoon close-out at 4:30pm. Any work done after
hours will be decided at that point.

#### Culture Code
- Respect is mutually given, not earned
- Be an open communicator: do not disengage when working in a group, and
practice active listening.
- Be open to constructive feedback: when giving feedback, be specific.
- Take others’ intent into account
- Be collaborative, share freely, and respect others’ abilities and preferences.
- Maintain a growth mindset and a good attitude.
- Ask lots of questions, but do your due diligence!
- Leave outside stress and your ego at the door.
- Foster a space where it is safe to fail and learn from mistakes.
- Have fun!

## Journal & Challenges-of-Note

Throughout the project, because of our odd group number (3 people instead of 4 people), we had made the collective decision to practice "mob programming" as often as possible to ensure that we were all on the same page when it came to writing our code. There were instances where we did go off and do solo coding (i.e. work on specific aspects of the HTML, Esat & Scott trying two tactics of rebuilding the back end - discussed later, working through JS logic, etc.) but those were rare instances and were not the norm.

### Day 1:
As we had done a lot of pre-planning before Day 1 there wasn't much in the way of prep work that needed to be accomplished (you can see the above for specifics around prep-work) and we had pre-deployed both the front-end and back-end over the weekend so we just collected all the information we needed for our group 1:1 with the instructors and submitted our issue. After meeting with an instructor, we began our initial build of the back-end API. This would be the first time that we worked on the back-end out of a sum-total of two times diving into the back-end itself. During this initial venture we created what we thought were the correct models and schemas that we would need, but we neglected to connect our three models and schemas until later in the project (more on that later). We successfully wrote and tested Curl Scripts for our CRUD actions for both Authentication and Surveys (we did not touch CRUD for answers until later that evening, the next day) and we closed out the traditional work day with making scaffolding adjustments to the client.

### Day 2:
We began the day working on curl scripts and CRUD on our Surveys and Answers. It was at this point that we hit our first roadblock (the only truly "major" roadblock of the project). We had a misunderstanding of specifically what Subdocuments were/meant in the MongoDB framework. While we thought we had built them correctly during Day 1 we were wrong. As a result, the day felt a little split. We were rather like the bouncing ball - we'd spend time trying to debug the API and raising issues with the instructors and while we waited we spent time working on our handlebars, modals, and continuing to update our design of the front-end client. By the end of the day, we hadn't made much progress in trying to resolve the 

- Day 2: Front End Work - CRUD on Surveys, Attempted CRUD on Answers, Discovered massive misunderstanding that required us to rewrite our API, Handlebar & Modal creation, API troubleshooting, Rough design update of Front End

- Day 3: We worked on Modals, fixed issue with API on Day 2 into Day 3, worked on logic for tallying votes for surveys, light update and aesthetic adjustments to client, confirmed deployment readiness, deployed

## Unsolved Problems
* [ ] We're experiencing some issues with responsiveness of website based upon screen size. Issue seems to be located in the navbar though all template sections are included from Bootstrap website.
* [ ] Variables should be edited to better reflect the actions they are taking/facilitating.
* [ ] More comments should be added to the code to better facilitate third-party interpretation of the program.
* [ ] When an update is made to a specific survey, the count for the previously subjected option reverts to zero to ensure accurate reporting. Should reconsider alternative responses/UI from site to better facilitate accurate vote count upon survey update.

## Future Goals
* [ ] __Remove Multiple Voting:__ At present, users can vote multiple times on the same survey by revisiting the "Show All" screen; this could be problematic as it would skew the statistical significance of the survey.
* [ ] __Results Visualization:__ Offer the ability to view results in multiple ways (charts, graphs, etc.).
* [ ] __Flip Card UI:__ Create a feature where the cards flip on mouse-click to reveal surveys.
* [ ] __Character Limit [Title & Question]:__ As cards will be implemented and will provide less real-estate for messaging, limit number of characters using built-in limit helper function.
* [ ] __Navigation Bar & UI Messaging:__
    * [ ] Update Navigation Bar so that it always stays on the top of the page no matter where you scroll.
    * [ ] Update Navigation Bar so that UI Messaging is in the center of the Navbar.

## Special Thanks
A special thank you goes out to the following people (in no particular, yet alphabetical by first name, order):

- Alex Beers
- Angelique Marquina
- Ben Jenkins
- Brandon DePalmaFarr
- Brian Dorgan
- Chris Kennelly
- Dan Powers
- Eron Salling
- Esat Ozen
- Frank Luis-Ravelo
- Hannah See
- Jeffrey Springwater
- Jennifer Payano
- John Lucker
- Kane Two Feathers
- Ladybug Dorgan-Lundgren
- Liz Cramer Fox
- Matt Siperko
- Megan Tsai
- Mike Finneran
- Mike Tripp
- Murat Alayurt
- Naida Rosenberger
- Nick Solie
- Randy Dorgan-Lundgren
- Rick Wilcoxen
- Ross Northrop
- Ryry Tillman-French
- Tal Aharon
- Thanh "T" Nguyen
- Trey Hilson
- Youri Francois
