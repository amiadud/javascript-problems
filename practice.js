var practice = 5;

switch(practice){
    case 1:
        function foo(){
            console.log('foo');
            bar();
        }
        function bar(){
            console.log('bar');
        }
        foo();
        break;
    case 2:
        function make_avg(a,b,c){
            var sum = a + b + c;
            var avg = sum / 3;
            return avg;
        }
        var avgResult = make_avg(60,58,59)
        console.log(avgResult);
        break;
    case 3:
        function avg(arr,size){
            if(size == 0){
                return size
            }
            var total = arr.reduce((sum,num) => sum + num);
            var avg = total / size;
            return avg;
        } 
        var marks = [60,58,59];
        var size = marks.length;
        var avgResult = avg(marks,size);
        console.log("My Assignment Average Marks: ",avgResult);
        break;
    case 4:
        function odd_even(value){
            if(value % 2 == 0){
                return 'This Number is even';
            }
            else{
                return 'This Number is odd';
            }
        }
        var result = odd_even(2);
        console.log(result);
        break;
    case 5:
        let signal = 'green';
        if (signal === 'green') {
            console.log('Go for a walk in the park.');
        }
        else if (signal === 'yellow') {
            console.log('Prepare to stop.');
        }
        else if(signal === 'red') {
            console.log('Stop and wait.');
        }
        else{
            console.log('Invalid signal.');
        }
        break;

}
