function make_avg(arr, size){
  if (size == 0){
    return size;
  }
  let total = arr.reduce((sum,num)=> sum + num);
  let avg = total / size;
  return avg
}
let marks = [58,60,59];
let size = marks.length;
let result = make_avg(marks, size);

console.log(result);