class SessionsController < ApplicationController
	
	def new
		@user = User.new
	end

	def create
		 @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
    if @user.nil?
      render :new
    else
      login_user!(@user)
      redirect_to root_url
    end 
	end

	def destroy
		logout!
    redirect_to new_session_url
	end
	
end
