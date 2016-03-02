json.array!(@follows) do |follow|
	json.extract!(follow, :id, :category_id)
end