# == Schema Information
#
# Table name: recipes
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  url         :string           not null
#  image_url   :string           not null
#  description :string           not null
#  category_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Recipe < ActiveRecord::Base
	validates :title, :url, :image_url, :description, :category_id, presence: true

	belongs_to :category
	has_many :pins
end
