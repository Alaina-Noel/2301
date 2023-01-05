require 'benchmark'

def find_next_palindrome(int)
  starting_integer = int + 1
  until starting_integer.digits == starting_integer.digits.reverse
    starting_integer += 1
  end
  starting_integer
end

Benchmark.bm do |z|
  z.report {find_next_palindrome(100000000)}
  z.report {find_next_palindrome(101)}
  z.report {find_next_palindrome(6246236362362626)}
end

=begin
this is a
multlie comment
  =end 

#are there any numbers where num -> 3785163275361785236745236. O(n)
#101 111
#if given any number will the next pal have the same first digit?
#898 -> 909
#909 -> 919
#1111 -> 1221
#555 -> 565
#595 -> 606
#1991 -> 2002
#45 -> 55
#2 -> 11
#188888884 -> #199999991