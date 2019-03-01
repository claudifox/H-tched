class CreateGuests < ActiveRecord::Migration[5.2]
  def change
    create_table :guests do |t|
      t.string :email_address
      t.integer :couple_registry_id

      t.timestamps
    end
  end
end
