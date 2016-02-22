# Phase 3: Recipes and Pins (2 days)

## Rails
### Models
* Recipe
* Pin

### Controllers
* Api::RecipesController (index, show)
* Api::PinsController (create, destroy)

### Views
* recipes/index.json.jbuilder
* recipes/show.json.jbuilder

## Flux
### Views (React Components)
* RecipesIndex
  - RecipeIndexItem
  - RecipeIndexItemDetail

### Stores
* Recipe

### Actions
* ApiActions.receiveAllRecipes -> triggered by ApiUtil
* ApiActions.receiveSingleRecipes
* ApiActions.receivePinnedRecipes
* RecipeActions.fetchAllRecipes -> triggers ApiUtil
* RecipeActions.fetchSingleRecipe
* RecipeActions.fetchPinnedRecipes

### ApiUtil
* ApiUtil.fetchAllRecipes
* ApiUtil.fetchSingleRecipe
* ApiUtil.fetchPinnedRecipes

## Gems/Libraries
