class CouplesController < ApplicationController

  def index
    @couples = Couple.all
    render json: @couples
  end

  def signin

  end

  def validate

  end

  def get_inventory

  end
end
