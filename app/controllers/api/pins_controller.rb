class Api::PinsController < ApplicationController

	def create
		@pin = Pin.new(pin_params)
	end

	def destroy
		@pin = Pin.find(params[:id])
		@pin.destroy
	end

	private
	def pin_params
		parmas.require(:pin).permit(:board_id, :recipe_id)
	end

end
