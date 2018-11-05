# In this file we define the methods to help filter out candidates
# This way, we keep these methods separated from other potential parts of the program

def find(candidates, id)
  matches = candidates.select { |obj| obj[:id] == id }
  return matches unless matches.empty?
end

def experienced?(candidate)
  candidate[:years_of_experience] >= 2
end

def qualified_candidates(candidates)
  matches = candidates.select do |candidate|
    candidate[:years_of_experience] > 0 &&
    candidate[:github_points] > 99 &&
    0.days.ago.to_date - candidate[:date_applied] < 16 &&
    candidate[:age] > 17
  end
  return matches unless matches.empty?
end

# More methods will go below