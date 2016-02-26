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
#

class UsersController < ApplicationController

	def create
		@user = User.new(user_params)
		if @user.save
			login_user!(@user)
			redirect_to root_url
		else
			render :new
		end
	end

	def new
		@user = User.new
	end

	def show
		user = current_user
		render json: {user: user.email}
	end

	private
	def user_params
		params.require(:user).permit(:email, :password)
	end

end
