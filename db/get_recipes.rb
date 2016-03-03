keywords = [
	"chicken",
	"rice",
	"pasta",
	"chocolate",
	"cake",
	"drink",
	"appetizer",
	"meat",
	"dinner",
	"snack",
	"smoothie",
	"vegetables",
	"soup",
	"salad",
	"fish",
	"breakfast",
	"lunch",
	"pork",
	"sandwich",
	"wrap",
	"burger",
	"eggs",
	"pancakes",
	"pizza",
	"cheese",
	"pie",
	"potato",
	"taco",
	"salmon",
	"tomato",
	"fruit",
	"pesto",
	"sweet potato",
	"peas",
	"bowl",
	"honey",
	"lasagna",
	"chili",
	"oatmeal",
	"ramen",
	"bacon",
	"kale",
	"lettuce",
	"cobb",
	"tortilla",
	"bean",
	"carrots",
	"teriyaki",
	"yogurt",
	"bread",
	"pumpkin",
	"pot pie",
	"avocado",
	"candy",
	"apple",
	"orange",
	"italian",
	"cookies",
	"blueberry"
]

recipe_ids = []

keywords.each do |word|
	r = Yummly.search(word)
	recipe_ids += r.collect {|recipe| recipe.id }
end

recipe_ids = recipe_ids.uniq.shuffle!

recipes = {}

recipe_ids.each do |id|
	puts "CREATING RECIPE"
	recipe = Yummly.find(id)
	puts "GETTING RECIPE NAME"
	name = recipe.name
	puts "GETTING RECIPE URL"
	url = recipe.json["source"]["sourceRecipeUrl"]
	puts "GETTING IMAGE URL"
	if recipe.json["images"]
		if recipe.json["images"][0]["hostedLargeUrl"]
			image_url = recipe.json["images"][0]["hostedLargeUrl"]
		else
			image_url = recipe.json["images"][0]["hostedSmallUrl"]
		end
	end

	puts "GETTING CATEGORY"
	if recipe.json["attributes"]["course"]
		category = recipe.json["attributes"]["course"][0]
	end

	new_recipe = { title: name, url: url, image_url: image_url, category_id: category, description: name }
	recipes[id] = new_recipe
end


categories = []
recipes.each do |k, v|
	v.each do |key, value|
		if key == :category_id
			categories.push(value)
		end
	end
end

["Main Dishes",
 "Appetizers",
 "Side Dishes",
 "Desserts",
 "Afternoon Tea",
 "Beverages",
 "Salads",
 "Lunch and Snacks",
 "Breakfast and Brunch",
 "Breads",
 "Soups"]

# = { name: recipe.name, url: recipe.json["source"]["sourceRecipeUrl"],
# 		image_url: recipe.images[0], category: recipe.json["attributes"]["course"][0] }

# name = recipe.name
# url = recipe.json["source"]["sourceRecipeUrl"]
# image_url = recipe.images.last
# category = recipe.json["attributes"]["course"][0]

	# "rice",
	# "pasta",
	# "chocolate",
	# "cake",
	# "drink",
	# "appetizer"