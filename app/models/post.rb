class Post < ActiveRecord::Base
# associe post avec comment Un post possède plusieurs commentaires
	has_many :comments

# as_json retourne un hash représentant un modèle
# Super appelle la méthode de la classe parent
	def as_json(options = {})
    super(options.merge(include: :comments))
  end
end