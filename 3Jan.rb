def bracket(string)
  stack = []
  string.each_char do |char|
    if char == '{' || char == '[' || char == '('
      stack.push(char)
    elsif char == '}'
      return false if stack.pop != '{'
    elsif char == ']'
      return false if stack.pop != '['
    elsif char == ')'
      return false if stack.pop != '('
    end
  end
  return stack.empty?
end

p bracket(["{{"])
#false

p bracket('{}')
# # # // => true

p bracket('{()}')
# # // => true

p bracket('({[]}{[]})') 
# # # // => true

p bracket('{(')
# # # // => false

p bracket('{[)][]}')
# # // => false

p bracket(']')
# // => false

p bracket('{(})')
# false




# {()}'
#first look at current parenth & next paretnh.
#if closer_check({,}) move forward i += 2

#if they don't close each other
#container << current_parenthesis 
# container = ["{"]
#i += 1



# def closer_checker(a,b)
#   return true if a == "{" && b == "}"
# end