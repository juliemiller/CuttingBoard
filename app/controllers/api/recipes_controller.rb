class Api::RecipesController < ApplicationController

	def show
		@recipe = Recipe.find(params[:id])
	end

	def index
		@recipes = Recipe.all()
	end

	def create
	end

	def update
	end
end
