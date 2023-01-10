def reverse(string)
  array = string.split("")
  if array.length == 1
    return string[-1]
  end

  last_letter = array.pop
   last_letter + reverse(array.join)
end

p reverse("pickle")