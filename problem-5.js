// let signal = 'yellow';

// switch (signal) {
//   case 'green':
//     console.log('Go for a walk in the park.');
//     break;
//   case 'yellow':
//     console.log('Prepare to stop.');
//     break;
//   case 'red':
//     console.log('Stop and wait.');
//     break;
//   default:
//     console.log('Invalid signal.');
//     break;
// }

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