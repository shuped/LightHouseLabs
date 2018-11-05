class SessionsController < ApplicationController
  def new
  end

  def create
    user = User.find_by_email(params[:email])
    # confirm proper credentials
    if user && user.authenticate(params[:password])
      # Create a session
      session[:user_id] = user.id
      redirect_to '/'
    else
    # redirect back to login if incorrect
      redirect_to '/sessions/new'
    end
  end

  def destroy
    session[:user_id] = nil
    redirect_to '/'
  end
end