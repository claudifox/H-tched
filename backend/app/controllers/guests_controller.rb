class GuestsController < ApplicationController
  def index
    @guests = Guest.all
    render json: @guests
  end

  def create
    @guest = Guest.new(first_name: params[:first_name], last_name: params[:last_name], email_address: params[:email_address], couple_id: params[:couple_id])
    if @guest.save
      render json: @guest
    else
      render json: {error: "Unable to create guest"}, status: 400
    end
  end

  def update
    @guest = Guest.find_by(email_address: params[:email_address])
    if @guest.update_attributes(guest_params)
      flash[:success] = "Guest updated"
      render json: @guest
    else
      render json: {error: "Unable to create guest"}, status: 400
    end
  end

  def delete
    @guest = Guest.find_by(email_address: params[:email_address])
    @guest.destroy
  end

  private

  def guest_params
    params.permit(:first_name, :last_name, :email_address)
  end

end
