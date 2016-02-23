class StaticPagesController < ApplicationController
	before_action :redirect_when_not_logged_in
	
	def root
	end
end
