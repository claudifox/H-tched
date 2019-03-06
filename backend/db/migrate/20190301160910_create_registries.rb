class CreateRegistries < ActiveRecord::Migration[5.2]
  def change
    create_table :registries do |t|
      t.integer :couple_id
      t.integer :item_id

      t.timestamps
    end
  end
end
