class Game 
  def initialize
    @max_lives = 3
    @player1 = Player.new('Player 1', @max_lives)
    @player2 = Player.new('Player 2', @max_lives)
    @players = [@player1, @player2]
    @current_player = @player1
  end

  def play
    while @players.all? { |player| player.alive? } do
      question = Question.new
      puts "#{@current_player.name}: #{question.print_question}"
      user_answer = $stdin.gets.chomp "> "

      if question.answer_correct? user_answer
        puts "#{@current_player.name}: YES! That's right."
      else
        puts "#{@current_player.name}: NOOO! WRONG"
        @current_player.lives -= 1
      end

      self.print_scores
      @current_player = self.next_player @current_player
    end
    self.winner_text
    puts "Game Over!"
  end

  def print_scores
    @players.each { |p| print "#{p.name}: #{p.lives} / #{@max_lives}  "}
    print "\n"
  end

  def next_player current_player
    current_player_index = @players.find_index { |p| p == current_player }
    @players[current_player_index + 1] || @players[0]
  end

  def winner_text
    winner = @players.find {|player| player.alive?}
    puts "#{winner.name} wins with a score of #{winner.lives} / #{@max_lives}"
  end
end

class Player
  attr_accessor :lives
  attr_accessor :name
  def initialize name, lives
    @name = name
    @lives = lives
  end
  def alive?
    @lives > 0
  end
end

class Question
  def initialize
    @num1 = rand(20)
    @num2 = rand(20)
    @answer = @num1 + @num1
  end

  def print_question
    puts "=====NEW QUESTION====="
    "What is #{@num1} + #{@num2}?"
  end

  def answer_correct? user_answer
    user_answer.to_i == @num1 + @num2
  end
end

lets_play = Game.new
lets_play.play
puts "GG"