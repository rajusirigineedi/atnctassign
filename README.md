# Authenticate - Front end assessment

## This project has covered all th requirements specified in the assessment.

### User can:

1. Signup using username and email
2. Signin using email
3. No duplicate emails can register
4. Create any number of watchlists
5. Search movies and add them to desired watchlist [ A movie can be added to as many watchlists you want ]
6. Remove movies from watchlist
7. Mark a movie as watched/ unwatched
8. View details of the movie
9. Delete a watchlist
10. Multiple accounts will be handled and each user has their own data
11. Data will be persisted and will not get lost, after refresh.
12. Responsive and many more.

### How to run

Clone the project

```
npm install
npm run dev
```

### App flow.

1. Signup using an email, no need to login, it auto logins
2. Search any movies, and click on bookmark icon to add to a watchlist
3. If you dont have any watchlists, it prompts you to create one
4. Create a watchlist from sidebar, and add movie to that watchlist
5. You can create as many watchlist and add movies
6. Click on some watchlist on sidebar to view the added movies
7. You can mark movies as watched/ unwatched from there. Can remove movies from watchlists from there.
8. View movie details by clicking on poster.
9. Logout and login with another credentials to create a branch new session for that user.
10. Can comeback to previous user after logging out and you can see the respective data of that user.

### Stack used

- ReactJS
- TailwindCSS [ for styling ]
- AntDesign [ for components ]
- Redux toolkit [ for state management ]
- React Icons, Toast, and misc...

### Future improvements [ OUT OF SCOPE FOR THIS ASSESSMENT ]

- can add pagination to load more movies.
- watch trailer if available.
- etc.
