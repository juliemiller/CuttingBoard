class CreateFollowedCategories < ActiveRecord::Migration
  def change
    create_table :followed_categories do |t|
    	t.integer :user_id, null: false
    	t.integer :category_id, null: false
      t.timestamps null: false
    end

    add_index :followed_categories, :user_id
    add_index :followed_categories, :category_id
    
  end
end
