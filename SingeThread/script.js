console.log("1 KG Onions");
console.log("1 liter milk packet");
//synchronus Programming
// for (let i = 0; i < 300000000; i++) {
//     if (i == 200000000) {
//       console.log("1 onion dosa");
//     }
//   }

//Asynchronus programming
setTimeout(function () {
  for (let i = 0; i < 300000000; i++) {
    if (i == 200000000) {
      console.log("1 onion dosa");
    }
  }
}, 5000);

typeof setTimeout;

console.log("drop chelli at the school");
