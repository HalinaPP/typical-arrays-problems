
exports.min = function min (array) {
  if(!array || array.length===0){
    return 0;
   }
   return array.reduce((prev,curr)=>{ return prev>=curr ? curr : prev});
}

exports.max = function max (array) {
  if(!array || array.length===0){
    return 0;
   }
   return array.reduce((prev,curr)=>{ return prev<=curr ? curr : prev});
}

exports.avg = function avg (array) {
  if(!array || array.length===0){
    return 0;
   }
   const sum = array.reduce((prev,curr)=> prev+curr );
   return sum/array.length;
}
