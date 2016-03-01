class Api::FollowedCategoriesController < ApplicationController

	def create
		ids = params[:follow_categories]
		
		@followed_category = FollowedCategory.new(follow_params)
		@followed_category.user_id = current_user.id
		if @followed_category.save
			render :show
		else
			render json: @followed_category.errors.full_messages, status: 422
		end
	end

	def destroy
		@followed_category = Pin.find(params[:id])
		@followed_category.destroy
	end

	def index
		@followed_categories = current_user.categories
	end

	private
	def follow_params
		params.require(:followed_category).permit(:category_id)
	end

end
