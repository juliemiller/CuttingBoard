# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

#Users
User.create(email: "me@gmail.com", password: "password")

3.times do 
	User.create({email: Faker::Internet.email, password: "password"})
end


#Categories:
Category.create({ name: 'Drinks' })
Category.create({ name: 'Dinner' })
Category.create({ name: 'Soups' })
Category.create({ name: 'Breakfast' })

#Boards
30.times do 
	user_id = (1..4).to_a.sample
	category_id = (1..3).to_a.sample
	Board.create({ title: Faker::App.name, description: Faker::Hipster.sentence, user_id: user_id, category_id: category_id})
end

#Recipes
Recipe.create({ title: "lemonade", url: "http://aseasyasapplepie.com/frozen-strawberry-lemonade/",
	image_url: "http://aseasyasapplepie.com/wp-content/uploads/2015/05/frozen-strawberry-lemonade.jpg", 
	description: "Strawberry lemonade", category_id: 1})

Recipe.create({ title: "Fish tacos", url: "http://cooking.nytimes.com/recipes/1012445-fish-tacos",
	image_url: "http://graphics8.nytimes.com/images/2014/05/12/dining/Fish-Tacos/Fish-Tacos-videoSixteenByNine495.jpg",
	description: "Fish tacos, that great meal of the Baja Peninsula, and a taste of summer. They are simple to make, no more complicated in fact than a hamburger or a mess of pancakes, and they are considerably more flavorful.",
	category_id: 2})

Recipe.create({ title: "Scrambled Eggs", url: "http://cooking.nytimes.com/recipes/1015676-the-best-scrambled-eggs",
	image_url: "http://graphics8.nytimes.com/images/2015/05/20/dining/20HIT_EGGS/20HIT_EGGS-articleLarge.jpg",
	description: "For silky, outrageously good scrambled eggs, cook them low and slow. This method, which Mark Bittman learned from James Beard, is very low and very slow: you place the eggs over very low heat, stirring frequently, breaking up the curds as they form. ",
	category_id: 4})

Recipe.create({ title: "Pizza", url: "http://cooking.nytimes.com/recipes/1016231-pizza-margherita",
	image_url: "http://graphics8.nytimes.com/images/2014/04/09/dining/09JPPIZZA2/09JPPIZZA2-articleLarge.jpg",
	description: "ere is the archetype of a thin-crust pizza pie, a pizza margherita adorned simply in the colors of the Italian flag: green from basil, white from mozzarella, red from tomato sauce. This pizza is adapted from the recipe used by the staff at Roberta’s restaurant in Brooklyn, who make their tomato sauce simply by whizzing together canned tomatoes, a drizzle of olive oil and a pinch of salt. ",
	category_id: 2})

Recipe.create({ title: "Vegetarian Chili", url: "http://cooking.nytimes.com/recipes/1016032-vegetarian-chili-with-winter-vegetables",
	image_url: "http://graphics8.nytimes.com/images/2014/02/11/science/12recipehealth/12recipehealth-articleLarge.jpg",
	description: "I have made several versions of vegetarian chili; in some the beans take center stage, others are just as focused on vegetables. This thick, satisfying chili is equally focused on both. I particularly like the way the sweet flavor and comforting, creamy texture of the winter squash plays against the spicy flavors in the chili.",
	category_id: 3})