class CouplesController < ApplicationController

  def index
    @couples = Couple.all
    render json: @couples
  end

  def login
    @couple = Couple.find_by(email_address: params[:email_address])
    if @couple && @couple.authenticate(params[:password])
      render json: {email_address: @couple.email_address, token: issue_token({id: @couple.id})}
    else
      render json: {error: "Your email address or password is incorrect"}, status: 401
    end
  end

  def validate
    @couple = get_current_couple
    if @couple
      render json: {email_address: @couple.email_address, token: issue_token({id: @couple.id})}
    else
      render json: {error: "Your email address or password is incorrect"}, status: 401
    end
  end

  def get_registry
    @couple = get_current_couple
    if @couple
      render json: @couple.items
    else
      render json: {error: "Not a valid couple"}, status: 401
    end
  end

  def get_guests
    @couple = get_current_couple
    if @couple
      render json: @couple.guests
    else
      render json: {error: "Not a valid couple"}, status: 401
    end
  end

  def get_items
    @couple = get_current_couple
    if @couple
      render json: Item.all
    else
      render json: {error: "Not a valid couple"}, status: 401
    end
  end

  def create
    @couple = Couple.new(name_1: params[:name_1], name_2: params[:name_2], email_address: params[:email_address], password: params[:password])
    if @couple.save
      render json: @couple
    else
      render json: {error: "Unable to create couple"}, status: 400
    end
  end

end
