def fibonaccid
  a = 1
  b = 1
  old = 1
  i = 1
  while i < 200000
    old = a
    a = a + b
    b = old
    i += 1
    if a > 10 ** 300
      a = b = old = 1
    end
  end
  a
end

start_time = Time.now

a = fibonaccid

end_time = Time.now

running_time = end_time - start_time

puts "fibonacci(200) took #{running_time} seconds. last number #{a}"