# Proposal

## ClassMate

By team RateMyClass

Members: Ryan Peruski, Jake Marlow, Chris White, and Gabe Carson

## Introduction

Our project is a web application that allows students to rate and review their classes. This website takes inspiration from RateMyProfessor, but we plan to make it for specific classes instead of professors. For example, one professor can teach multiple classes that vary in difficulty, so we plan to make it so that students can rate the class instead of the professor. This will allow students to see what classes are like before they take them, and it will provide both reviews from students as well as an average difficulty level, allowing students to make more informed decisions about their classes. Thus, students will have a better experience in their classes, knowing what they are about to get into. We will plan to make this UTK-specific, so that we can keep the scope of the project small and manageable.

Our team has a variety of skills, such as data analysis, web development, and cybersecurity. We plan to use these skills to make a user-friendly, secure, and dynamic website.

## Customer Value and User Stories

We provide the value of information about classes to students. This way, with this knowledge, students can better prepare for their classes or decide if taking the class is worth it. We hope to provide what RateMyProfessor has failed to provide, as there will now be specific classes. We will know if the project is successful by the number of users and reviews on the website. We also hope to see a lot of feedback from students in order to improve the student experience.

Our users will be students who want information about what a specific class will provide and how difficult the material is, which they can obtain through viewing the class page on our site which provides a 1-5 difficulty rating, 1-5 enrichment rating, and student comments on the class itself.

Other users, including school faculty, can use the site to obtain information about what students think about the curriculum of the class and how the content was used later in their school career and future careers.

## Proposed Solution and Technology

We plan to use a React framework for a frontend and a Node.js and MySQL backend. We forsee the use of some Python scripts for data collection and analysis. We will plan to use some free/cheap option like Azure to get the application up and running, and we will all use a Docker container that supports everything that we need. We will also check what we can do with student accounts. The main issue we forsee involve making the website dynamic, user-friendly, and secure, as we do plan to have users edit and add data to the website.

## Team

- Ryan Peruski: I am a junior in Computer Science. I have experience in data analysis in Python and SQLite, so I will plan to work on more of the backend and data analysis. I also have experience in Operating Systems Programming in C, and I'm learning about Cybersecurity, so I plan to use this knowledge to protect against security threats.
- Jake Marlow: I am a junior in Computer Science. I have experience in C++, C, Javascript, SQL, and React. I plan to work with Chris White on the front-end development for ClassMate to provide a easy to use and intuitive UI/UX.
- Chris White: I am a Junior in Computer Science. I have experience in frontend HTML, cross-platform Java, and C++. I plan to work on web scraping and frontend to allow for a high quality and smooth user experience. Although I am planning on studying Cybersecurity, I have not yet begun, so I will focus my energy on an advanced yet visibly soft user interface.
- Gabe Carson: I am a junior in Computer Science. I have experience in C, C++, JavaScript, Python, and OpenGL. I will be working with Ryan Peruski on the backend database and middleware. My goal is to create a accurate, secure, and reliable data base for the website.

## Project Management

We plan to meet every friday during class time to schedule code reviews, discuss the project, etc. Furthermore, we have a Discord server to send files and communicate. We have a legal issue involving user data if we successfully get the website to be dynamic, so we will need to look into encrypting user data as well as making the database immune to various SQL injection attacks.

The first sprint should not focus on making the website dynamic. Instead, we should focus on learning our technologies and setting up a static website. For this sprint, we would also like to make sure that we know the steps to get the website up and running. We hope to get a Minimal System up and running by the end of this sprint.

The next few sprints (sprints 2-4) should focus on adding the dynamic features to the website. This includes adding the ability to add and edit reviews, as well as contributing to the average difficulty level of the class. We should also focus on making the website user-friendly and secure.

The last few sprints (sprints 5-6) should focus on cleaning up, testing, and making the website free of bugs and security threats. From here, we hope to have a fully presentable website.

If we cannot get the website to be dynamic, this would be a huge hit to our functionality. However, if we run into this, we will add as much as we can to a static website to provide our experience of the classes that we have collected.

## Tech Flow

![classMate techFLow](https://github.com/cs340-24/RateMyClass/assets/114703597/5380f1ff-d817-45af-a9d0-f6d9b9a0b62f)

## Minimal System

Our minimal system includes a database connected to a node.js backend, which is able to make http requests through the backend using express.js middlewear. These http requests functions should be baked into web elements that users can make such as requesting a specific classes info page and viewing/posting comments. We will plan to use test data for our minimal system.
