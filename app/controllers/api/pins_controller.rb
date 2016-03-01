class Api::PinsController < ApplicationController

	def create
		@pin = Pin.new(pin_params)
		if @pin.save
			render :show
		else
			render json: @pin.errors.full_messages, status: 422
		end
	end

	def destroy
		@pin = Pin.find(params[:id])
		@pin.destroy
	end

	def index
		@recipes = current_user.unique_recipes
	end


	private
	def pin_params
		params.require(:pin).permit(:board_id, :recipe_id)
	end

end
