class Api::BoardsController < ApplicationController
	def create
		@board = Board.new(board_params)

		if @board.save
			render :show
		else
			
		end

	end

	def update
		@board = Board.find(params[:id])
		if @board.update(board_params)
			render :show
		else
		end
	end

	def destroy
		@board = Board.find(params[:id])
		@board.destroy
		render :index
	end

	def show
		@board = Board.find(params[:id])
	end

	def index 
		@boards = Board.all
	end

	private
	def board_params
		params.require(:board).permit(:title, :description, :category_id, :private)
	end

end
