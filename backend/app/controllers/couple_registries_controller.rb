class CoupleRegistriesController < ApplicationController

  def index
    @couple_registries = CoupleRegistry.all
    render json: @couple_registries
  end
end
