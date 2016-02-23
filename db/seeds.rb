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
Category.create({name: 'Category1'})
Category.create({name: 'Category2'})
Category.create({name: 'Category3'})

#Boards
10.times do 
	user_id = (1..4).to_a.sample
	category_id = (1..3).to_a.sample
	Board.create({ title: Faker::App.name, description: Faker::Hipster.sentence, user_id: user_id, category_id: category_id})
end

