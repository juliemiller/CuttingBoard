Rails.application.routes.draw do
  resources :users, only: [:new, :create, :show]
  resource :session, only: [:new, :create, :destroy]
  
  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do 
  	resources :boards, only: [:create, :destroy, :update, :index, :show]
  	resources :categories, only: [:index]
  	resources :recipes, only: [:index, :create, :update, :show, :pinned_recipes]
  	resources :pins, only: [:create, :destroy, :index]
  	resources :followed_categories, only: [:create, :destroy, :index]
  end
end
