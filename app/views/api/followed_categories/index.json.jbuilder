json.array!(@followed_categories) do |category|
	json.partial!('api/categories/category', category: category)
end