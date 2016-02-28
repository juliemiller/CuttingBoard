json.extract!(pin, :id, :board_id, :recipe_id)
json.recipe do 
	json.partial! 'api/recipes/recipe', recipe: pin.recipe
end
