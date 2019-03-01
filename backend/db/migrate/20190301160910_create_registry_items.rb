class CreateRegistryItems < ActiveRecord::Migration[5.2]
  def change
    create_table :registry_items do |t|
      t.integer :couple_registry_id
      t.integer :item_id
      t.integer :guest_id

      t.timestamps
    end
  end
end
