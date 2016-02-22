class UsersController < 

	def show
	end

	def create
		@user = User.new(user_params)
		if @user.save
			redirect_to root_url
		else
			render :new
		end
	end

	def new
		@user = user.new
	end

	private
	def user_params
		params.require(:user).permit(:username, :password)
	end
	
end
