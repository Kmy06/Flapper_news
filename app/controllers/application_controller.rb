class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
	# pour que les controllers répondent au format json
	# apres on utlisera respond_with pour que nos actions retournent du json à la fin
	respond_to :json
	def angular
		render 'layouts/application'
	end

end
