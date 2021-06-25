# E-Commerce Back End

## Background

This was a homework assignment for the UofT Bootcamp.  Below is the user story and the acceptance criteria for reference.

## Table of Contents
[User Story](#user-story)\
[Acceptance Criteria](#acceptance-criteria)\
[Technologies](#technologies)\
[Process](#process)\
[Screen Shot](#screen-shot)\
[Walkthrough Video](#walkthrough-video)\
[Link](#link)


## User Story

```md
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

## Acceptance Criteria

```md
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia Core for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
THEN I am able to successfully create, update, and delete data in my database
```

## Technologies

* JavaScript
* Node.js
* Express.js
* MySQL
* Sequalize

## Process

* For this project we were given starter code and primarily needed to get the models and routes working properly and syncing with our database.
* I started with installing the dependancies, getting the server running, and seeding the database.
* Next I moved to the models for the database and then the routes.
* Biggest challenge for this project was completing the routes.  While the routes for the Categories cames together quickly the Product routes did not.  The biggest success for this project was completing the Product POST route.  I had trouble with the POST route because although it was given, I changed it to an async/await, which required some extra help to get functioning properly, but was a good learning opportunity.
* Credit to my TA's, tutor, and classmates.

## Screen Shots

![Screen Shot](./public/assets/images/screen-shot.png)
![Screen Shot 2](./public/assets/images/screen-shot2.png)

## Link
https://afternoon-fjord-14538.herokuapp.com/