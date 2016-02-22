# Flux Stores

### BoardStore

Holds all persisted board data.

##### Actions:
- `receiveAllBoards`
- `receiveSingleBoard`
- `removeBoard`

##### Listeners:
- `BoardsIndex` (passes to `BoardIndexItem` via props)
- `BoardDetail`


### RecipeStore

Holds all persisted article data.

##### Actions:
- `receiveAllRecipes`
- `receiveSingleRecipe`
- `receivePinnedRecipes`

##### Listeners:
- `RecipesIndex`
