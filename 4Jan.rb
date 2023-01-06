def rgb_to_hex(rgb)
  # split the RGB value into its red, green, and blue components
  red, green, blue = rgb.split(',')

  # convert each component to a hexadecimal string and pad it with a leading zero if necessary
  red_hex = red.to_i.to_s(16).rjust(2, '0')
  green_hex = green.to_i.to_s(16).rjust(2, '0')
  blue_hex = blue.to_i.to_s(16).rjust(2, '0')

  # concatenate the hexadecimal strings together to form the final hexadecimal representation
  "#" + red_hex + green_hex + blue_hex
end

# example usage
p rgb_to_hex("rgb(255, 99, 71)")  # prints "#ff6347"