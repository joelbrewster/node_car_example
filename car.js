var current_speed = 0

module.exports.color = "red";
module.exports.convertible = true;
module.exports.getCar = function(speed){
  current_speed += speed;
  console.log("The current speed is:", current_speed);
  return current_speed;
}
module.exports.change_speed = function(current_speed, new_speed){
  final_speed = current_speed + new_speed;
  return current_speed;
  return new_speed;

  return final_speed;
  // if final_speed blah current_speed
  // accel
  // else
  // de
}
