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

class User < ActiveRecord::Base

	attr_reader :password
	after_initialize :ensure_session_token

	validates :email, :password_digest, :session_token, presence: true
	validates :email, :session_token, uniqueness: true

	def self.find_by_credentials(email, password)
		user = User.find_by(email: email)
		return nil if user.nil?

		user.is_password?(password) ? user : nil
	end

	def password=(password)
		@password = password
		self.password_digest = BCrypt::Password.create(@password)
	end

	def reset_session_token
		self.session_token = SecureRandom.base64
		self.save!
	end

	def ensure_session_token
		self.session_token ||= SecureRandom.base64
	end

	def is_password?(password)
		BCrypt::Password.new(self.password_digest).is_password?(password)
	end
end
