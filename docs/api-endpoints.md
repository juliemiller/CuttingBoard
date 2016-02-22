# API Endpoints

## HTML API

### Users

- `GET /users/new`
- `POST /users`
- `PATCH /users`

### Session

- `GET /session/new`
- `POST /session`
- `DELETE /session`

## JSON API

### Recipes

- `GET /api/recipes`
  - Notes index/search
  - accepts `category` query param to list recipes by category
- `POST /api/recipes`
- `GET /api/recipes/:id`
- `PATCH /api/recipes/:id`
- `DELETE /api/recipes/:id`

### Boards

- `GET /api/boards`
- `POST /api/boards`
- `GET /api/boards/:id`
- `PATCH /api/boards/:id`
- `DELETE /api/boards/:id`
- `GET /api/boards/:id/recipes`
  - index of all pinned recipes for a board


### Categories

- `GET /api/categories`
