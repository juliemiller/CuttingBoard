# CuttingBoard

[Heroku link][heroku] **NB:** This should be a link to your production site

[heroku]: http://www.herokuapp.com

## Minimum Viable Product

CuttingBoard is a web application inspired by Pinterest built using Ruby on Rails
and React.js. CuttingBoard allows users to:

- [ ] Create an account
- [ ] Log in and Log out
- [ ] View a feed of recipes based on selected category interests
- [ ] Create interest boards
- [ ] Save recipes to interest boards 


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

- [ ] create new project
- [ ] create `User` model
- [ ] authentication
- [ ] user login and signup pages
- [ ] blank landing page after login

### Phase 2: Board Model, API, and basic APIUtil (1.5 days)

**Objective:** Boards can be created, edited and destroyed through
the API.

- [ ] create `Board` and 'Category' models and tables
- [ ] seed the database with a small amount of test data
- [ ] CRUD API for boards (`BoardsController`)
- [ ] jBuilder views for boards
- [ ] setup Webpack & Flux scaffold
- [ ] setup `APIUtil` to interact with the API
- [ ] test out API interaction in the console.

### Phase 3: Flux Architecture and Router (1.5 days)

**Objective:** Boards can be created, read, edited and destroyed with the
user interface.

- [ ] setup the flux loop with skeleton files
- [ ] setup React Router
- implement each board component, building out the flux loop as needed.
  - [ ] `BoardsIndex`
  - [ ] `BoardIndexitem`
  - [ ] `BoardForm`

### Phase 4: Start Styling (0.5 days)

**Objective:** Style all existing pages (including singup/signin).

- [ ] create a basic style guide
- [ ] position elements on the page
- [ ] add basic colors & styles

### Phase 5: Recipes (1 day)

**Objective:** Recipes can be viewed on the user interface in a list and individually. 

- [ ] create `Recipe` model
- [ ] seed database with small amount of recipe test data
- [ ] jBuilder views for recipes
- [ ] setup the flux loop with skeleton files
- [ ] setup React Router
- implement each board component, building out the flux loop as needed.
  - [ ] `RecipesIndex`
  - [ ] `RecipesIndexItem`
  - [ ] `RecipesIndexItemDetail`

### Phase 6: Pins (1.5 days)

**Objective:** Recipes can be pinned to boards. 

- [ ] create `Pin` model and join table
- build out API, Flux loop, and components for:
  - [ ] pinning recipes to boards
  - [ ] displaying pinned recipes
- [ ] Style new elements

### Phase 7: Recipe Search (0.5 days)

**Objective:** Enable searching of recipes.

- [ ] build searching by category
- [ ] add keyword searching

### Phase 8: Styling Cleanup and Seeding (1 day)

**Objective:** Make the site feel more cohesive.

- [ ] Get feedback on my UI from others
- [ ] Refactor HTML classes & CSS rules
- [ ] Add modals, transitions, and other styling flourishes.

### Bonus Features (TBD)
- [ ] Pagination / infinite scroll for Recipes Index
- [ ] Share boards or recipes with friends
- [ ] Like boards and recipes
- [ ] Tag recipes
- [ ] Multiple sessions

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
