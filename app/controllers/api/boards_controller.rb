class Api::BoardsController < ApplicationController
	def create
		@board = Board.new(board_params)
		@board.user_id = current_user.id
		if @board.save
			render :show
		else
			render json: @board.errors.full_messages, status: 422
		end

	end

	def update
		@board = Board.find(params[:id])
		if @board.update(board_params)
			render :show
		else
			render json: @board.errors.full_messages, status: 422
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
		if current_user
			@boards = Board.getUsersBoards(current_user.id)
		else
			redirect_to new_session_url
		end
	end

	private
	def board_params
		params.require(:board).permit(:title, :description, :category_id, :private)
	end

end
