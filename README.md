

## Can of Books Backend

**Author**: Alan Chelko & Stephen Clemmer
**Version**: 1.0.0 (increment the patch/fix version number if you make more commits past your first submission)

## Overview
We are going to build a front end client to display books, and a backend server which will communicate with a database which will hold our array of books. 

## Getting Started: Steps needed to build this app:

1. Have one person on your team create a new repository from the [front-end template repo](https://github.com/codefellows/can-of-books-frontend-template/blob/main/README.md) called `can-of-books-frontend`.

2. Have another person on your team create a new repository from the [back-end template repo](https://github.com/codefellows/can-of-books-backend-template) called `can-of-books-backend`.

3. Add all partners as collaborators to both repos.

4. Have each member of the team clone the repos down to their local dev environment. 

5. Use the Driver-Navigator collaboration strategy to perform all changes in the code, via pull requests from semantically-named branches. Switch off Driver often, so everyone on the team has a strong record of making contributions.

6. Review the `.gitignore` files to ensure they align with standard content for the repos, and add blank `.env` files, which **must be** in your `.gitignore` so as to not get pushed to GitHub.

7. Deploy BOTH the front-end and the back-end of your app to the cloud. It won't do much, but check for a proof-of-life indicator that the code is running. Your team will work with these same production deployments throughout the labs in this module. 


## Feature 1

8. Add Mongoose to your server. Ensure your local Mongo database is running. Connect to the Mongo database from within your server code. 

9. Build a Mongoose 'Book' schema with valid keys for `title`, `description`, and `status`. 

10. Use your schema to craft a Book model.

11. Modularize your code by putting your schema and model in its own separate file and requiring the schema into your server.

12. Seed your database. Create at least three Book objects with all available attributes.

13. Create a `/books` route. Use a REST client to hit the route, so you can continually verify what your server is returning. 

14. When a client sends a `GET` to the `/books` route, your server should retrieve all of the books from the `books` collection, and return them as JSON in the response object.

## Feature 2

15. Add a new route and handler function to your server, to respond to `POST` requests to `/books`. This is your book-creation end point. Verify it's working by sending a raw POST request via your REST Client. 

16. Grab the properties of the book to be created from the request object. Create an object-literal representation of a Book with these book properties. Verify the server is doing this correctly with your REST Client.

17. Add your new book object to the database. Respond to the request with a JSON representation of the newly-saved book. With your REST Client, verify that this is working.

18. Be sure to include server-side error checking, in case something goes wrong. Respond with appropriate status codes, if anything goes wrong. Verify with your REST Client. 

## Feature 3

19. Add a server end point to handle `DELETE` requests to `/books/:id`. 

20. Verify that you can access the book id from the `request.params` object.

21. Use the id of the book to delete that book from the database.

22. If all goes well, send back a success response. Handle any errors with proper error messages and response status codes.

## Feature 4

23. Add server code to handle `PUT` requests to a `/book/:id` route. Return the updated book.


## Architecture
Backend:

React front end with Bootstrap Components
Front end deployed on Netlify

React server
Mongo DB database deployed on Heroku
dotenv
express
  express.json
cors
mongoose

## Change Log
All changes are recorded on github.

## Time Estimates

Repository Setup

Estimate of time needed to complete: 1 hour

Start time: 1:00 p.m.

Finish time: 2:00 p.m.

Actual time needed to complete: 1 hour

====================================================================
Feature 1: View the list of books, so that whenever the client visits the page, they can see the a full list of best books.

Estimate of time needed to complete: 2 hours

Start time: 1:00 p.m.

Finish time: 2:30 p.m.

Actual time needed to complete: 1.5 hours

====================================================================
Feature 2: Add a new book to the shelf, so that the client can update the list with their own recommendations.

Estimate of time needed to complete: 1 hour

Start time: 1:00 p.m.

Finish time: 2:00 p.m.

Actual time needed to complete: 1 hour

====================================================================
Feature 3: Remove books from the list

Estimate of time needed to complete: 1 hour

Start time: 3:30 p.m.

Finish time: 4:30 p.m.

Actual time needed to complete: 1 hour

====================================================================
Feature 4: Update book details on my list, so that I can change the book status, or update the book details as I learn more about it.

Estimate of time needed to complete: 1 hour

Start time: 2:00 p.m.

Finish time: 2:30 p.m.

Actual time needed to complete: 30 minutes

====================================================================
## Credit and Collaborations
Thanks to Audrey, Ben, and the other TAs who provided their expertise to unstick us when we became stuck.

Alan Chelko & Stephen Clemmer Team Agreement
# Project Plan

### Conflict Resolution
For any potential conflicts, we plan to work things out on a consensual basis, but assuming a real conflict arises, we would plan to go through a pros and cons scrum session and weigh it from there.  We'll still strive to reach consensus.

### What are the key strengths of each person on the team?
Alan: some JS experience from earlier this year
Stephen: Feels more comfortable on the backend than the front end currently. Project management.

### How can you best utilize these strengths in the execution of your project?  
Generally, we'll tap the strengths of each member, but we do not want to silo anybody by any particular skill or lack of skill. We have decided to have Stephen drive on the backend and Alan drive on the front end

### Knowing that every person in your team needs to understand all aspects of the project, how do you plan to approach the day-to-day work?  
We will pair program for this project. Stephen driving on the backend, Alan driving on the front end. We will pause as needed to clarify the code. 


## Communication Plan
### What hours will you be available to communicate?
Target same hours as normal CF class hours: 9:00 - 17:00 PST.

### What platforms will you use to communicate (ie. Slack, phone …)?
Slack, Remo, gmail.

### How often will you take breaks?
As needed

### What is your Git flow?
We will ACP at every functional component

#### Who merges PRs?
Alan will merge front end PRs. Stephen will merge backend PRs.
