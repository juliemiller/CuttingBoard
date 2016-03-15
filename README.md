# CuttingBoard

[Live site][link] 

[link]: http://www.cuttingboard.me/

CuttingBoard is a recipe browsing and storing site inspired by Pinterest. Users can log in, view and save recipes to their own boards. 

![Home Page][homeScreen]

[homeScreen]: ./docs/screenshots/HomePage.png

## Features

* User Authentication
* Create and Edit Boards
* Follow Food Categories
* Browse Recipes
* Search Recipes by Category
* Store Recipes to Boards

##Technologies
* Ruby on Rails
* React.js
* Flux
* PostgreSQL

##Future Features
* Upload Recipes
* Share Boards or Recipes with Friends
* Like Boards and Recipes
* Tag Recipes

## Design Docs
* [View Wireframes][views]
* [React Components][components]
* [Flux Stores][stores]
* [API endpoints][api-endpoints]
* [DB schema][schema]

[views]: ./docs/views.md
[components]: ./docs/components.md
[stores]: ./docs/stores.md
[api-endpoints]: ./docs/api-endpoints.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and User Authentication (0.5 days)

**Objective:** Functioning rails project with Authentication

- [x] create new project
- [x] create `User` model
- [x] authentication
- [x] user login and signup pages
- [x] blank landing page after login

### Phase 2: Board Model, API, and basic APIUtil (1.5 days)

**Objective:** Boards can be created, edited and destroyed through
the API.

- [x] create `Board` and 'Category' models and tables
- [x] seed the database with a small amount of test data
- [x] CRUD API for boards (`BoardsController`)
- [x] jBuilder views for boards
- [x] setup Webpack & Flux scaffold
- [x] setup `APIUtil` to interact with the API
- [x] test out API interaction in the console.

### Phase 3: Flux Architecture and Router (1.5 days)

**Objective:** Boards can be created, read, edited and destroyed with the
user interface.

- [x] setup the flux loop with skeleton files
- [x] setup React Router
- implement each board component, building out the flux loop as needed.
  - [x] `BoardsIndex`
  - [x] `BoardIndexitem`
  - [x] `BoardForm`

### Phase 4: Start Styling (0.5 days)

**Objective:** Style all existing pages (including singup/signin).

- [x] create a basic style guide
- [x] position elements on the page
- [x] add basic colors & styles

### Phase 5: Recipes (1 day)

**Objective:** Recipes can be viewed on the user interface in a list and individually. 

- [x] create `Recipe` model
- [x] seed database with small amount of recipe test data
- [x] jBuilder views for recipes
- [x] setup the flux loop with skeleton files
- [x] setup React Router
- implement each board component, building out the flux loop as needed.
  - [x] `RecipesIndex`
  - [x] `RecipesIndexItem`
  - [x] `RecipesIndexItemDetail`

### Phase 6: Pins (1.5 days)

**Objective:** Recipes can be pinned to boards. 

- [x] create `Pin` model and join table
- build out API, Flux loop, and components for:
  - [x] pinning recipes to boards
  - [x] displaying pinned recipes
- [x] Style new elements

### Phase 7: Recipe Search (0.5 days)

**Objective:** Enable searching of recipes.

- [x] build searching by category
- [x] add keyword searching

### Phase 8: Styling Cleanup and Seeding (1 day)

**Objective:** Make the site feel more cohesive.

- [x] Get feedback on my UI from others
- [x] Refactor HTML classes & CSS rules
- [x] Add modals, transitions, and other styling flourishes.

### Bonus Features (TBD)
- [x] Pagination / infinite scroll for Recipes Index
- [ ] Share boards or recipes with friends
- [ ] Like boards and recipes
- [ ] Tag recipes
- [ ] Multiple sessions

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
