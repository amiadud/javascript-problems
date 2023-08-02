// // 1 no:
// for(var i = 1; i <= 39; i++) {
//     console.log('Ajker amar mon valo Nai',i);
// }

// // 2 no:
// for(var j = 58; j < 98; j++) {
//     console.log(j);
// }

// // // 3 no:
// for(var i = 412; i <= 456; i++) {
//     console.log(i);
//     i = i + 1;
// }

// // // 4 no:
// for(var i = 581; i <= 623; i++) {
//     console.log(i);
//     i = i + 1;
// }

// // // // 5 no While loop and for loop
// var i = 581;
// while(i <=623){
//     console.log("While loop Odd number is:",i);
//     i = i + 2;
// }

// for(var i = 581; i <= 623; i++) {
//     console.log("for loop Odd number is:",i);
//     i = i + 1;
// }

// // 6 no:

// var topics = ['HTML','CSS' ,'JavaScript','Tailwind','DaisyUI'];

// for(var i = 0; i < topics.length; i++) {
//     console.log(topics[i]);
// }

// // 7 no:

// var mobilePhones = ['Nokia','Symphony' ,'Huawei','Xiaomi','Redmi'];
// var i = 0;
// while(i< mobilePhones.length){
//     console.log(mobilePhones[i]);
//     // i = i + 1;
//     i++;
// }

// // // 8 no:

// for(var i = 30; i < 86; i++) {
//     if(i>44){
//         break;
//     }
//     console.log(i);
// }

// // 9 no:

// // 8 no:

// var booksPrices = [200,300,400,500,800,1200,900,150,350];
// for(var i = 0; i < booksPrices.length; i++) {
//     var booksPrice = booksPrices[i];
//     if(booksPrice < 200){
//         continue;
//     }
//     console.log(booksPrice);
// }

var booksPrices = [200,300,400,500,800,1200,900,150,350];
var i = 0;

while(i < booksPrices.length) {
    var booksPrice = booksPrices[i];
    i++;
    if(booksPrice < 200){
        continue;
    }
    console.log(booksPrice);
}