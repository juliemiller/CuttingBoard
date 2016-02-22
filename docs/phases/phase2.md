# Phase 2: Flux Architecture and Board CRUD (2 days)

## Rails
### Models

### Controllers

### Views

## Flux
### Views (React Components)
* BoardsIndex
  - BoardsIndexItem
* BoardForm

### Stores
* Board

### Actions
* ApiActions.receiveAllBoards -> triggered by ApiUtil
* ApiActions.receiveSingleBoard
* ApiActions.deleteBoard
* BoardActions.fetchAllBoards -> triggers ApiUtil
* BoardActions.fetchSingleBoard 
* BoardActions.createBoard
* BoardActions.editBoard 
* BoardActions.destroyBoard

### ApiUtil
* ApiUtil.fetchAllBoards
* ApiUtil.fetchSingleBoard
* ApiUtil.createBoard
* ApiUtil.editBoard
* ApiUtil.destroyBoard

## Gems/Libraries
* Flux Dispatcher (npm)
