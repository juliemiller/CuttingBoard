class FollowedCategory < ActiveRecord::Base
	validates :user_id, :category_id, presence: true
	validates :user_id, uniqueness: {scope: :category_id}
	
	belongs_to :user
	belongs_to :category

end
