# "Codename 'Nemo'" - Front End - v1

## Description
"Codename 'Nemo'" (aka "Survey Says...") is a survey application that provides the user with access to a platform to gather intelligence from a large population of individuals. These surveys are "public" to all logged in users and all logged in users have the ability to create, update, and delete their own surveys in addition to the ability to read other individual's surveys as well. Upon submitting a vote, the individual is shown the present score of the survey which they can then keep proverbial "tabs" on throughout their use of the application. Version 2 concepts have been outlined below.

## Relevant Links
Full-Stack: | Link To: | URL:
------------|----------|--------------------------------------------------------
Front-End   | Website  | https://esat-megan-scott.github.io/codename-nemo-client
------------|----------|--------------------------------------------------------
Front-End   | GitHub   | https://github.com/esat-megan-scott/codename-nemo-client
------------|----------|--------------------------------------------------------
Back-End    | Website  | https://codename-nemo.herokuapp.com/
------------|----------|--------------------------------------------------------
Back-End    | GitHub   | https://github.com/esat-megan-scott/codename-nemo-api

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
__A Quick Note About Our Team Model:__ As a small "non-traditional" team in the GA SEI cohort, we didn't have the luxury of participating in some aspects of the project in a traditional sense. An example of this is in our "Team Model." While we all agreed we were part of the QA team, we were also in agreement that, based upon our collective skill set (and that we were a "man down" so to speak), we were pretty well matched to serve as either leader/follower in the specific areas below. After a brief discussion, we decided that we all would serve as co-leads for the full-stack project (in part and in whole) which is why we are all mentioned in each row below. The bold name in each row indicates who would have taken which role if we had a fourth member. However, we do wish to close by emphasizing that each of us collaborated on every aspect of this project, and that it truly was a unique situation where three individuals with a shared team mindset were lucky enough to be placed together and were able to democratically make decisions in all areas of the application.

Title:               | Team Member:
---------------------|----------------------------------------------------------
Project/Product Lead | Esat Ozen, Megan Tsai, __R. Scott Lundgren__
Front-End Lead       | Esat Ozen, __Megan Tsai__, R. Scott Lundgren
Back-End Lead        | __Esat Ozen__, Megan Tsai, R. Scott Lundgren
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
We began the day working on curl scripts and CRUD on our Surveys and Answers. It was at this point that we hit our first roadblock (the only truly "major" roadblock of the project). We had a misunderstanding of specifically what Subdocuments were/meant in the MongoDB framework. While we thought we had built them correctly during Day 1 we were wrong. As a result, the day felt a little split. We were rather like the bouncing ball - we'd spend time trying to debug the API and raising issues with the instructors and while we waited we spent time working on our handlebars, modals, and continuing to update our design of the front-end client. By the end of the day, we hadn't made much progress in trying to resolve the issues we experienced with the API - specifically with trying to access the answer and survey subdocuments as we thought we should be able to. We did make decent progress in the creation of our handlebars, modals, and furthering the rough design of the front end into something that we could all be proud of.

On a voluntary basis throughout the evening, the team spent time individually trying to solve the API issue. It wasn't until late in the evening (around 11:00p or so) that we were able to begin the resolution of the issue, which was that we had thought we had connected the documents to the appropriate subdocuments, but we had not. Instead, we had made a partial connection which prevented us from having complete communication with the API. We were able to make a late night commit that resolved that issue and then went to bed.

### Day 3:
After the previous late evening win we were in really good shape. Unlike in Day 1 & 2 where we practiced "mob programming" for 8+ hours a day, we only mob programmed for a little over 4 hours, with the other 4 spent working on our own individual issues in the code. One team member focused on modals and some HTML/CSS aesthetics in the client application; one team member focused solely on the logic for tallying the votes for the surveys; the final team member spent their time split, making some small changes to the HTML/CSS and also working on another way to tally the votes. We periodically joined forces throughout the day to update each other on what we had accomplished, what we were working on next, and where we were stuck. After mob programming through our respective bugs, we would split up into our own areas again and reconvene a little later, repeating this process throughout the day until our final afternoon meeting. During that meeting we discussed deployment and deadlines for all edits to the application - we decided that all final edits must be submitted by 10:30p that evening for a deployment period of 11:00p-1:00a. The deployment, with the exception of a couple small hiccups, went off smoothly.

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
