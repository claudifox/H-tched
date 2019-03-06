class Couple < ApplicationRecord
  has_secure_password
  validates :email_address, uniqueness: {case_sensitive: true}
  has_many :guests
  has_many :registries
  has_many :items, through: :registries
end
