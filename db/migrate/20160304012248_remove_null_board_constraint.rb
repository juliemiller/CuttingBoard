class RemoveNullBoardConstraint < ActiveRecord::Migration
  def change
  	change_column_null(:boards, :category_id, :true)
  end
end
