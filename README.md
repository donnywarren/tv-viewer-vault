# PROJECT 2 README <!-- omit in toc -->

## Project Planning

<br>

### Overview

**TV VIEWER VAULT** is an app for users to research their favorite shows, discover new shows and see what's on today. Users will be able to create accounts and save their favorites for quick access. Additionally, they will be able to update their "vault" with new shows and delete others.

<br>

### Wireframes

[Login/Signup](https://wireframe.cc/eKVI6f)

- Desktop Landing
- Tablet Landing (flexed by percentage)

[User Home](https://wireframe.cc/pIVFuM)

- User Home
- Tablet User Home (flexed by percentage)

[Show Focus](https://wireframe.cc/bC3VNO)

- Desktop Show Focus
- Tablet Show Focus (flexed by percentage)

[Login/Signup](https://wireframe.cc/1svLwX)

- Mobile login/signup

[User Home](https://wireframe.cc/2m6ugR)

- Mobile user home

[Show Focus](https://wireframe.cc/4vHpNX)

- Mobile show focus

<br>

### MVP

**TV VAULT VIEWER** MVP will include a login/signup welcome page, basic user homepage with functionality to research, save and modify their personal "vault", and there should be a show/focus page to view complete details of a particular show.

<br>

#### Goals

1. emulate user validation
2. successfully structure and save signup data
3. retrieve and display search data
4. full CRUD on "vault" data base for individual user
5. create UI that is intuitive and stylish
6. responsive accross all screen sizes

<br>

#### Libraries

|   Library    | Description                              |
| :----------: | :--------------------------------------- |
| React Router | navigate between pages                   |
|    Axios     | api calls to 3rd party and app resources |

<br>

#### Data

|         API         | Quality Docs? | Website                            | Sample Query                                                                                      |
| :-----------------: | :-----------: | :--------------------------------- | :------------------------------------------------------------------------------------------------ |
| TheMovieDataBaseAPI |      yes      | https://developers.themoviedb.org/ | https://api.themoviedb.org/3/search/tv?api_key=8d021868bbab84ae4f9d16fdc0645e0c&query=star%20trek |
|     AirtableAPI     |      yes      | https://airtable.com/api           | https://api.airtable.com/v0/appY8EFNMSYGualIW/Table%201                                           |

<br>

#### Component Hierarchy

```
tv-viewer-vault
|__ public/
      |__ favicon.ico
      |__ index.html
      |__ manifest.json
|__ src/
      |__ App.css
      |__ App.js
      |__ Index.css
      |__ Login.js
      |__ Userhome.js
      |__ Showfocus.js
|__ .env
|__ .gitignore
|__ assets
|__ package.json
|__ package-lock.json
|__ README.md
```

<br>

#### Component Breakdown

|  Component   |    Type    | state | props | Description                                                  |
| :----------: | :--------: | :---: | :---: | :----------------------------------------------------------- |
| Login/Signup | functional |   y   |   n   | validate user interact with .env data object set login state |
|  Navigation  | functional |   y   |   y   | small components reused to link routes and update state      |
|   UserHome   | functional |   y   |   y   | will interact with data base and api                         |
|  Show/Focus  | functional |   n   |   y   | full screen display of all data on one show                  |
|    Footer    | functional |   n   |   n   | my contact information and link to 3rd party api             |

<br>

#### Component Estimates

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| login/signup page   |    H     |     6 hrs      |     0 hrs     |    0 hrs    |
| user home page      |    H     |     8 hrs      |     0 hrs     |    0 hrs    |
| set up data base    |    H     |     2 hrs      |     0 hrs     |    0 hrs    |
| create CRUD actions |    H     |     8 hrs      |     0 hrs     |    0 hrs    |
| show/focus page     |    H     |     6 hrs      |     0 hrs     |    0 hrs    |
| CSS styling         |    M     |     5 hrs      |     0 hrs     |    0 hrs    |
| media queries       |    M     |     3 hrs      |     0 hrs     |    0 hrs    |
| TOTAL               |          |     3 hrs      |     0 hrs     |    0 hrs    |

<br>

#### Helper Functions

<br>

### Post-MVP

1. password/user encryption and safe storage
2. video panel for locally viewing previews from third party websites
3. social network links to share content
4. calender page to display weekly viewing times
5. notes field to save user comments on each item in vault

<br>

---

## Project Delivery

### Code Showcase

### Code Issues & Resolutions
