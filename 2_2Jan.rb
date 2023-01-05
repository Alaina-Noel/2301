# nums_1 = [1, 2, 4, 5, 8]
# nums_2 = [2, 3, 5, 7, 9]
# nums_3 = [1, 2, 5, 8, 9]
# def find_numbers(arr1,arr2,arr3) 
#   result = []
  # i = -1
  # j = -1
  # k = -1
#   until arr1.length == 0 ||arr2.length == 0 || arr3.length == 0
#     current_check_number = [arr1[-1], arr2[-1], arr3[-1]].min
#     until arr1[-1] <= current_check_number
#         arr1.pop
#       end
#       until arr2[-1] <= current_check_number
#         arr2.pop
#       end
#       until arr3[-1] <= current_check_number
#         arr3.pop
#       end
#       if arr1[-1] == arr2[-1] && arr2[-1] == arr3[-1]
#         result << current_check_number
#       end
#       arr1.reject!{|num| num >= current_check_number}
#       arr2.reject!{|num| num >= current_check_number}
#       arr3.reject!{|num| num >= current_check_number}
#   end
#   result
# end

nums_1 = Array.new(1000) {rand(1...900)}.sort
nums_2 = Array.new(1000) {rand(1...900)}.sort
nums_3 = Array.new(1000) {rand(1...900)}.sort

def find_numbers(arr1,arr2,arr3) 
  result = arr1 & arr2 & arr3
end

# def find_numbers(arr1,arr2,arr3) 
#   set1 = arr1.to_set
#   set2 = arr2.to_set
#   set3 = arr3.to_set
#   result = Set.new
   
#   i = arr1.length

#   arr1.length times do 
#     #need a way to access num
#     if set1.has(num) && set2.has(num) && set3.has(num)
#       result.add(num)
#     end
#   end

#   return result.to_a
# end

# nums_4 = [1]
# nums_5 = [2]
# nums_6 = [3]

p find_numbers(nums_1, nums_2, nums_3) #[2, 5]
# p find_numbers(nums_4, nums_5, nums_6) #[]