// JavaScript
//     returnToOrigin("GRGL")
//     => false

//set some variables to hold count of nsew
//add one if robot is moving north//sub one if sootuh//same for E & W.
//return true if all have a count of 0. Return false otherwise.
//guard string.length < 7 return false

const returnToOrigin = (string) => {
  let count_north_south = 0;
  let count_east_west = 0;
  let north = false;
  let east = true;
  let current_direction_container = []
  
  if (string.length < 7) {
    return false;
  }
  else {
    for (let i = 0; i < string.length; i++) {
      const command = string[i];
      if (command === 'G') {
        current_direction_container.push(command)
      } else {
        if (east) {
          count_east_west += current_direction_container.length
          east = false
        } else {
          if (command === 'L') north = true
          else if (command === 'R') north = false
          
          if (north) count_north_south += current_direction_container.length
          else count_north_south -= current_direction_container.length
        }
        current_direction_container = []
      }
    }

    return count_north_south === 0 && count_east_west === 0
  }
}
