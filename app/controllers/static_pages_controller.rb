class StaticPagesController < ApplicationController

  def app
    redirect_to :home unless current_user
  end

  def home; end

  def about; end

end
