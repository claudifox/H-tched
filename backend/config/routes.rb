Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :items
  resources :guests
  resources :couples, only: [:index]

  post 'signin', to: 'couples#signin'
  get 'validate', to: 'couples#validate'
  get 'guests', to: 'couples#guests'
  get 'registry', to: 'couples#registry'

end
