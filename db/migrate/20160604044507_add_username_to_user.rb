class AddUsernameToUser < ActiveRecord::Migration
  def change
# on ajoute notre propre User parce que Devise génère "seulement" l'email et le mot de passe
    add_column :users, :username, :string
    add_index :users, :username, unique: true
  end
end
