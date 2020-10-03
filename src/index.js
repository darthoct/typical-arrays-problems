
exports.min = function min (array) {
    if(array=='')
        console.log(0)
    else
   console.log(Math.min(array));
    return 0;
}

exports.max = function max (array) {
    if(array=='')
        console.log(0);
    else
   console.log(Math.max(array));
    return 0;
}

exports.avg = function avg (array) {
    if(array=='')
        console.log(0);
    else {
    let i = 0;
    let sum = 0;
    for(i = 0; i<array.length; i+=1) {
        sum += array[i];
        i += 1;
    }
    
    console.log(sum/(i+1));
    }
  return 0;
}
