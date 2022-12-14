# Papercuts - A Bookclub Social Media App
A fullstack application that connects readers around the world with the goal of providing a space for readers to share their opinions, likes and dislikes on a book they are currently reading/read.

**Link to project:** https://papercuts-bookclub.onrender.com

![alt tag](https://i.imgur.com/4hWBW0J.jpg)

## How It's Made:

**Tech used:** HTML, CSS, JavaScript, Node.js, Express

Fullstack application is made in an express environment using MVC architecture. The following packages were used to make this application possible: bcrypt, connect-mongo, dotenv, ejs, express, express-flash, express-session, method-override, mongodb, mongoose, nanoid, passport, passport-local, validator.

## Optimizations

<!-- - Add a point system where children can earn points based on the amount of reading they've did and their level of engagement with posts. Teachers could then trade in these points for in classroom rewards, or weekly competitions for reader of the week. -->
- Add the option for private and public bookclubs. If a bookclub is public, people all over the world can find it by the book and join it.
- Add user flairs, e.g. a spoiler flair that shows where a user is in the book.

## Lessons Learned:

- Learning to tailor information presented to a user based on their type of account. For example having one route, where clubmakers and readers can see their own version of the feed with added functionality for clubmakers.
- Working with custom made id's. Every club that is generated is given a unique id, this id can be used by readers to easily join clubs.