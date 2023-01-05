def snail(multi_array)
  container = []
  until multi_array.flatten.count == 0 do
    container << multi_array.shift
    multi_array = multi_array.transpose.reverse
  end
  container.flatten
end

p snail([
          [1, 2, 3],
          [4, 5, 6],
          [7, 8, 9]
        ]) #[1, 2, 3, 6, 9, 8, 7, 4, 5]

p snail([
          [9, 8, 7],
          [6, 5, 4],
          [3, 2, 1]
        ]) #[9, 8, 7, 4, 1, 2, 3, 6, 5]

p snail([
        [9, 8],
        [6, 5]
      ]) #[9, 8, 5, 6]

p snail([
  [9, 8, 7, 0],
  [6, 5, 4, 12],
  [3, 2, 1, 20],
  [4, 4, 4, 4]
]) #[9, 8, 7,0,12,20,4, 4, 4, 4,3, 6, 5, 4, 1, 2]

