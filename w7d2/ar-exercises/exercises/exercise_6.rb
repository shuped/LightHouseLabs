require_relative '../setup'
require_relative './exercise_1'
require_relative './exercise_2'
require_relative './exercise_3'
require_relative './exercise_4'
require_relative './exercise_5'

puts "Exercise 6"
puts "----------"
# Add the following code directly inside the Store model (class): has_many :employees

# Add the following code directly inside the Employee model (class): belongs_to :store

# Add some data into employees. Here's an example of one (note how it differs from how you create stores): 
# Go ahead and create some more employees using the create method. You can do this by making multiple calls 
@store1.employees.create(first_name: "Khurram", last_name: "Virani", hourly_rate: 60)
@store1.employees.create(first_name: "John", last_name: "Dicks", hourly_rate: 100)
@store1.employees.create(first_name: "Joe", last_name: "Blow", hourly_rate: 190)
@store1.employees.create(first_name: "Jane", last_name: "Fonda", hourly_rate: 50)
# to create (like you have before.) No need to assign the employees to variables though. Create them through
# the @store# instance variables that you defined in previous exercises. Create a bunch under @store1 (Burnaby)
# and @store2 (Richmond). Eg: @store1.employees.create(...).
@store2.employees.create(first_name: "Jerry", last_name: "McGuire", hourly_rate: 60)
@store2.employees.create(first_name: "Eric", last_name: "McHoist", hourly_rate: 50)
@store2.employees.create(first_name: "Jeff", last_name: "Jeff", hourly_rate: 49)
@store2.employees.create(first_name: "Sam", last_name: "McMyMotherKeptHerLastName", hourly_rate: 700)
@store2.employees.create(first_name: "Jeremy", last_name: "Sadman", hourly_rate: 41)
