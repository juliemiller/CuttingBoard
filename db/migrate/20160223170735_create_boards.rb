class CreateBoards < ActiveRecord::Migration
  def change
    create_table :boards do |t|
    	t.string :title, null: false
    	t.string :description
    	t.integer :user_id, null: false
    	t.boolean :private, default: false, null: false
    	t.integer :category_id, null: false
      t.timestamps null: false
    end

    add_index :boards, :category_id
    add_index :boards, :user_id
    add_index :boards, :title
  end
end
