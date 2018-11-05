class ReviewsController < ApplicationController
  before_filter :authorize
  def create
    @product = Product.find(params[:product_id])
    @review =  @product.reviews.new(review_params)
    @review.user = current_user
    @review.save
    redirect_to @product if @review.save
  end

  def destroy
    @product = Product.find(params[:product_id])
    @review = Review.find(params[:id])
    @review.destroy
    redirect_to @product, notice: 'Review deleted!'
  end

  private
   def review_params
     params.require(:review).permit(:rating, :description)
   end
end