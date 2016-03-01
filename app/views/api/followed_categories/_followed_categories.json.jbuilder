json.extract!(followed_category, :id, :category_id)
json.category do 
	json.partial! 'api/categories/category', category: followed_category.category
end
