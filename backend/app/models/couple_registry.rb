class CoupleRegistry < ApplicationRecord
  has_many :guests
  has_many :registry_items
  has_many :items, through: :registry_items
end
