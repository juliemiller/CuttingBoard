Rails.application.routes.draw do
  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create, :destroy]
  
  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do 
  	resources :boards, only: [:create, :destroy, :update, :index, :show]
  end
end
