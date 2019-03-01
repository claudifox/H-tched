class Guest < ApplicationRecord
  belongs_to :couple_registry
  has_one :registry_item
end
