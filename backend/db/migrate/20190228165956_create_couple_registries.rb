class CreateCoupleRegistries < ActiveRecord::Migration[5.2]
  def change
    create_table :couple_registries do |t|
      t.string :name_of_list
      t.string :email_address
      t.date :date_of_wedding
      t.boolean :published
      t.string :password_digest

      t.timestamps
    end
  end
end
