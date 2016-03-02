class Api::RecipesController < ApplicationController

	def show
		@recipe = Recipe.find(params[:id])
	end

	def index
		@recipes = Recipe.all()
	end

	def filtered
		if params[:filter] == "all"
			@recipes = Recipe.all()
		elsif params[:filter]
			@recipes = Recipe.where(category_id: params[:filter])
		else
			@recipes = Recipe.where(category_id: current_user.categories)
		end
	end

	def create
	end

	def update
	end
end
