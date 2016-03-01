class ChangeBoardsColumn < ActiveRecord::Migration
  def change
  	change_column :boards, :description, :text
  end
end
