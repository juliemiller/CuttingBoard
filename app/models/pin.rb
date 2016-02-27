# == Schema Information
#
# Table name: pins
#
#  id         :integer          not null, primary key
#  board_id   :integer          not null
#  recipe_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Pin < ActiveRecord::Base
	validates :board_id, :recipe_id, presence: true
	validates :board_id, uniqueness: { scope: :recipe_id }

	belongs_to :board
	belongs_to :recipe
end
