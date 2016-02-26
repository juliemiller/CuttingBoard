class CreateRecipes < ActiveRecord::Migration
  def change
    create_table :recipes do |t|
    	t.string :title, null: false
    	t.string :url, null: false
    	t.string :image_url, null: false
    	t.string :description, null: false
    	t.integer :category_id, null: false
      t.timestamps null: false
    end

    add_index :recipes, :category_id
    
  end
end
