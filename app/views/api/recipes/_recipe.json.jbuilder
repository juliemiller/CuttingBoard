json.extract!(recipe, :id, :title, :url, :image_url, :description)
json.category do 
	json.extract!(recipe.category, :name, :id)
end

