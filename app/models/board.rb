# == Schema Information
#
# Table name: boards
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  description :string
#  user_id     :integer          not null
#  private     :boolean          default(FALSE), not null
#  category_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Board < ActiveRecord::Base
	validates :title, :user_id, :category_id, presence: true

	belongs_to :user
	
	def self.getUsersBoards(id)
		self.where(user_id: id)
	end
end
