# This is the main entrypoint into the program
# It requires the other files/gems that it needs

require 'pry'
require './candidates'
require './filters'

## Your test code can go here

# pp experienced? @candidates[1]
# pp find @candidates, 10
pp qualified_candidates @candidates
# binding.pry

# pp @candidates