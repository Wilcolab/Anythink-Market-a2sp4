class AddIsVerifiedToUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :isVerified, :string
  end
end
