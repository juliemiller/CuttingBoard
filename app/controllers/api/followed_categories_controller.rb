class Api::FollowedCategoriesController < ApplicationController

	def create
		ids = params[:followed_category]
		idArray = ids.split(", ")
		follows = []
		idArray.each do |id|
			follow = FollowedCategory.new(user_id: current_user.id, category_id: id)
			if follow.save
				follows << follow
			else
			end
		end
		@follows = follows
		render :show

	end

	def destroy
		ids = params[:categoryIds]
		if (ids.length > 1)
			idArray = ids.split(", ")
		else
			idArray = [ids]
		end

		idArray.each do |id|
			FollowedCategory.find_by(category_id: id, user_id: current_user.id).delete
		end

		render :index
	end

	def index
		@followed_categories = current_user.categories
	end

end
