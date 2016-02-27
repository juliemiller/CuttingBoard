Rails.application.routes.draw do
  resources :users, only: [:new, :create, :show]
  resource :session, only: [:new, :create, :destroy]
  
  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do 
  	resources :boards, only: [:create, :destroy, :update, :index, :show]
  	resources :categories, only: [:index]
  	resources :recipes, only: [:index, :create, :update, :show]
  	resources :pins, only: [:create, :destroy]
  end
end
