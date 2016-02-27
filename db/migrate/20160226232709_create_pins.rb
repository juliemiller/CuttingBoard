class CreatePins < ActiveRecord::Migration
  def change
    create_table :pins do |t|
    	t.integer :board_id, null: false
    	t.integer :recipe_id, null: false
      t.timestamps null: false
    end
  end
end
