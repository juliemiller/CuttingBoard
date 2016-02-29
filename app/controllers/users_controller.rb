# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  firstname       :string
#  lastname        :string
#

class UsersController < ApplicationController
	
	def create
		@user = User.new(user_params)
		if @user.save
			login_user!(@user)
			redirect_to root_url
		else
			flash.now[:errors] = @user.errors.full_messages
			render :new
		end
	end

	def new
		@user = User.new
	end

	def show
		user = current_user
		render json: {email: user.email, firstname: user.firstname, lastname: user.lastname}
	end

	private
	def user_params
		params.require(:user).permit(:email, :password, :firstname, :lastname)
	end

end
