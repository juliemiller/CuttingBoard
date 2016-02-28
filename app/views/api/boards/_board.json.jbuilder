json.extract!(board, :id, :title, :description, :user_id, :category_id, :private)

json.recipes do
	json.array!(board.recipes) do |recipe|
		json.partial! 'api/recipes/recipe', recipe: recipe
	end
end