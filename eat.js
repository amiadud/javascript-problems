

// var taka = 400; // taka nia ber hobo

// if (taka >= 1000){
//     console.log("Chaines e giye chichen khabo ");
// }
// else if(taka >= 800){
//     console.log("Bou niye biriyani khabo");
// }
// else if(taka >= 500){
//     console.log("Bou niye teheri khabo");
// }
// else{
//     console.log("tor kopale bou nai! basa giye vat kha");
// }

var friend = ['Sopnil', 'Joy','Alve','Nowshin', 'Bakkar' ];
var achePerPerson = 800;
var khabo = ['Chaines', 'Biriyani','Teheri','barite kha'];

for(var i = 0; i < friend.length; i++){
    if(achePerPerson >=1000 ){
        console.log(friend[i], khabo[0]);
    }
    else if(achePerPerson >= 800){
        console.log(friend[i],khabo[1]);
    }
    else if(achePerPerson >= 500 ){
        console.log(friend[i],khabo[2]);
    }
    else{
        console.log(khabo[3]);
    }
}