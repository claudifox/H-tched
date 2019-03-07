Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :couples, only: [:index, :create] do
    resources :guests, only: [:index, :create, :update, :delete]
    resources :registry, only: [:index, :create, :delete]
    resources :items, only: [:index]
  end


  post 'login', to: 'couples#login'
  get 'validate', to: 'couples#validate'

end
