class User < ActiveRecord::Base
  has_secure_password
  has_many :reviews

  validates :name, presence: true
  validates :email, presence: true
  validates :email, uniqueness: { case_sensitive: false }
  validates :password_digest, presence: true
  validates :password_digest, length: { minimum: 6 }




  # Class method
  def self.authenticate_with_credentials(email, password)
    user = User.find_by(email: email.downcase.strip).try(:authenticate, password)
    return user

  end
end
