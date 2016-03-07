class SessionsController < ApplicationController	
	def new
		@user = User.new
	end

	def create
		 @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
    if @user.nil?
    	@user = User.new
    	flash.now[:errors] = ["Invalid username or password"]
      render :new
    else
      login_user!(@user)
      redirect_to root_url
    end 
	end

	def destroy
		if current_user.id == 1
			current_user.boards.destroy_all
			current_user.pins.destroy_all
			current_user.followed_categories.destroy_all

			#Recreate Boards
			b1 = Board.create({ title: "Healthy Choices", description: "Delicious and nutritious food options", user_id: 1})
			b2 = Board.create({ title: "Chocolate", description: "Great desserts", user_id: 1, category_id: 4})
			
			#Recreate Pins to boards
			Pin.create({ board_id: b1.id, recipe_id: 5})
			Pin.create({ board_id: b1.id, recipe_id: 136})
			Pin.create({ board_id: b1.id, recipe_id: 134})
			Pin.create({ board_id: b1.id, recipe_id: 199})
			Pin.create({ board_id: b1.id, recipe_id: 206})
			Pin.create({ board_id: b2.id, recipe_id: 6})
			Pin.create({ board_id: b2.id, recipe_id: 144})
			Pin.create({ board_id: b2.id, recipe_id: 151})
			Pin.create({ board_id: b2.id, recipe_id: 172})

			#Recreate followed categories
			FollowedCategory.create({user_id: 1, category_id: 2})
			FollowedCategory.create({user_id: 1, category_id: 4})
			FollowedCategory.create({user_id: 1, category_id: 6})
			FollowedCategory.create({user_id: 1, category_id: 8})
		end
		logout!
		render json: {user: nil}
	end

	def show
	end
	
end
