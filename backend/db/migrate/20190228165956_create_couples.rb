class CreateCouples < ActiveRecord::Migration[5.2]
  def change
    create_table :couples do |t|
      t.string :name_1
      t.string :name_2
      t.string :email_address
      t.string :password_digest

      t.timestamps
    end
  end
end
