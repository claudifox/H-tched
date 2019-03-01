class Item < ApplicationRecord
  has_many :registry_items
  has_many :couple_registries, through: :registry_items
end
