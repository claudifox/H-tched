class CreateGuests < ActiveRecord::Migration[5.2]
  def change
    create_table :guests do |t|
      t.string :email_address
      t.string :first_name
      t.string :last_name
      t.integer :couple_registry_id

      t.timestamps
    end
  end
end
