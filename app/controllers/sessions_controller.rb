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
		logout!
		render json: {user: nil}
	end

	def show
	end
	
end
