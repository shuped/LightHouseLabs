require 'rails_helper'

RSpec.describe Product, type: :model do
  describe 'Validations' do
    # validation tests/examples here
    it 'Passes validations' do
      @category = Category.new({name: 'Food'})
      @product = Product.new({name: 'Burger', price: 10, quantity: 2, category: @category})
      @product.save
      expect(@product.name).to be_present
      expect(@product.price).to be_present
      expect(@product.quantity).to be_present
      expect(@product.category).to be_present
    end
    it 'should provide error if no name' do
      @category = Category.new({name: 'Food'})
      @product = Product.new({name: nil, price: 10, quantity: 2, category: @category})
      @product.save
      expect(@product.errors.full_messages).to include("Name can't be blank")
    end
    it 'should provide error if no price' do
      @category = Category.new({name: 'Food'})
      @product = Product.new({name: 'Burger', price: nil, quantity: 2, category: @category})
      @product.save
      expect(@product.errors.full_messages).to include("Price can't be blank")
    end
    it 'should provide error if no quantity' do
      @category = Category.new({name: 'Food'})
      @product = Product.new({name: 'Burger', price: 10, quantity: nil, category: @category})
      @product.save
      expect(@product.errors.full_messages).to include("Quantity can't be blank")
    end
    it 'should provide error if no category' do
      @category = Category.new({name: 'Food'})
      @product = Product.new({name: 'Burger', price: 10, quantity: 2, category: nil})
      @product.save
      expect(@product.errors.full_messages).to include("Category can't be blank")
    end
  end
end
