require 'rails_helper'

RSpec.describe User, type: :model do
  describe 'Validations' do
    # validation tests/examples here
    it 'Passes validations' do
      @user = User.new({name: 'John', email: "example@example.com", password_digest: "password"})
      @user.save
      expect(@user.name).to be_present
      expect(@user.email).to be_present
      expect(@user.password_digest).to be_present
    end

    it 'should have a matching password and confirmation' do
      @user = User.new({name: 'John', email: "example@example.com", password_digest: "password"})
      @user.save
      expect(@user.password).to eql(@user.password_confirmation)
    end

    it 'should provide error if no name' do
      @user = User.new({name: nil, email: "example@example.com", password_digest: "password"})
      @user.save
      expect(@user.errors.full_messages).to include("Name can't be blank")
    end
    it 'should provide error if no email' do
      @user = User.new({name: 'John', email: nil, password_digest: "password"})
      @user.save
      expect(@user.errors.full_messages).to include("Email can't be blank")
    end
    it 'should provide error if no password' do
      @user = User.new({name: 'John', email: "example@example.com", password_digest: nil})
      @user.save
      expect(@user.errors.full_messages).to include("Password can't be blank")
    end
    it 'should provide error if password length is less than 6' do
      @user = User.new({name: 'John', email: "example@example.com", password_digest: 'this'})
      @user.save
      expect(@user.errors.full_messages).to include("Password digest is too short (minimum is 6 characters)")
    end
  end
end
