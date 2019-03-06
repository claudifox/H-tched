Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :items
  resources :guests
  resources :couples, only: [:index, :create]

  post 'login', to: 'couples#login'
  get 'validate', to: 'couples#validate'
  get 'items', to: 'couples#items'
  get 'guests', to: 'couples#guests'
  get 'registry', to: 'couples#registry'


end
