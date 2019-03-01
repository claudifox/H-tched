class RegistryItem < ApplicationRecord
  belongs_to :couple_registry
  belongs_to :item
  belongs_to :guest
end
