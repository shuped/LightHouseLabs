class Product < ActiveRecord::Base

  monetize :price_cents, numericality: true
  mount_uploader :image, ProductImageUploader

  belongs_to :category
  has_many :reviews

  validates :name, presence: true
  validates :price, presence: true
  validates :quantity, presence: true
  validates :category, presence: true

  def average_rating
    average = 0

    if reviews.count > 0
      average = reviews.inject(0) { |sum, value| sum + value.rating.to_i } / reviews.count
    end

    average
  end

  def sold_out?
    quantity.to_i == 0
  end
end
