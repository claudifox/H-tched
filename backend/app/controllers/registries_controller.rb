class RegistriesController < ApplicationController

  def index
    @registries = Registry.all
    render json: @registries
  end

  def create
    @registry = Registry.new(couple_id: params[:couple_id], item_id: params[:item_id])
    if @registry.save
      render json: @registry
    else
      render json: {error: "Unable to add item to registry"}, status: 400
    end
  end

  def delete
    @registry = Registry.find_by(id: params[:id])
    @registry.destroy
  end


end
