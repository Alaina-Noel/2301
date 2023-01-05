def is_palendrome?(string)
  i = 0
  j = -1
    while i <= ((string.length / 2) - 1)
      return false if string[i].downcase != string[j].downcase
    j -= 1
    i += 1
    end
  return true
end

p is_palendrome?("poop")
p is_palendrome?("thisisnt")
p is_palendrome?("Poop")