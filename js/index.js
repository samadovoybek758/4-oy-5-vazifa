// break/continue
// // 1-masala
// for (let i = 1; i <= 50; i++) {
//     if(i==30){
//         break
//     }
//     console.log(i);
// }

// // 2-masala
// for (let i = 1; i <= 50; i++) {
//     if(i%5==0){
//        continue
//     }
//     console.log(i);
// }

// // 3-masala
// for (let i = 1; i <= 100; i++) {
//     if(i==75){
//         break
//     }
//     console.log(i);
// }

// // 4-masala
// for (let i = 1; i <= 30; i++) {
//     if(i%3==0){
//        continue
//     }
//     console.log(i);
// }

// while and do while
// 1-masala

// let i = 1;
// while (i<=20){
//     console.log(i);
//     i++
// }

// 2-masala
// let i =10;
// while (i>=1) {
//     console.log(i);
//     i--
// }

// 3-masala
// let i =1;
// while (i<=50) {
//     if(i%2==0){
//         console.log(i);
//     }
//     i++
// }

// 4-masala
// let i =1;
// while (i<=50) {
//     if(i%2==1){
//         console.log(i);
//     }
//     i++
// }

// 5-masala
// let i =1;
// let yig =0;
// while(i<=100){

//     yig= yig +i;
//     i++
// }
// console.log(yig);

// 6-masala
// let i =1;
// while (i<=10) {
//     console.log(i**2);
//     i++

// }

// 7-masala
// let a = +prompt("sonni kiritng");
// while (a>0) {

//     let a = +prompt("sonni kiritng");

//     if (a<0) {
//         break
//     }
//     console.log(a);

// }

// 8-masala
// let i =2;
// while (i<=1024) {
//     if (i==1024) {
//         break
//     }
//     console.log(i);
//     i*2;

// }

// 10-masala
// let i=1;
// while (i<=20) {
//     if (i%3==0) {
//         console.log(i);
//     }
//     i++
// }

// 11-masala
// let i = 1;
// do {
//   console.log(i);
//   i++;
// } while (i <= 10);

// // 12-masala
// let i = 20;
// do {
//   console.log(i);
//   i--;
// } while (i >= 1);

// 13-masala
// let i = 1;
// do {
//     if (i%2==0) {
//         console.log(i);
//     }
//     i++;
// } while (i <= 100);

// 14-masala
// let a = +prompt("sonni kiritng");

// do{
//     let a = +prompt("sonni kiritng");

//     if (a==0) {
//         break
//     }
//     console.log(a**2);
// }
// while (a>0) {
// }

// 15-masala
// let a = +prompt("sonni kiritng");

// do{
//     let a = +prompt("sonni kiritng");

//     if (a==10) {
//         break
//     }
//     console.log(a);
// }
// while (a>0) {
// }

// umumiy masalalar
// 1-masala
// for (let i = 1; i <=50; i++) {
//     if (i%5==0 && i%7==0) {
//         console.log("5ga va 7ga karrali");
//         continue
//     }
//     if (i%5==0) {
//         console.log("5ga karrali");
//         continue
//     }
//     if (i%7==0) {
//         console.log("7ga karrali");
//         continue
//     }

//     console.log(i);
// }

// 2-masala
// for (let i = 1; i <= 12; i++) {
//   console.log(i);
//   switch (i) {
//     case 1:
//       console.log("yanvar");
//       break;
//     case 2:
//       console.log("fevral");
//       break;
//     case 3:
//       console.log("mart");
//       break;
//     case 4:
//       console.log("aprel");
//       break;
//     case 5:
//       console.log("may");
//       break;
//     case 6:
//       console.log("iyun");
//       break;
//     case 7:
//       console.log("iyul");
//       break;
//     case 8:
//       console.log("avgust");
//       break;
//     case 9:
//       console.log("sentyabr");
//       break;
//     case 10:
//       console.log("oktyabr");
//       break;
//     case 11:
//       console.log("noyabr");
//       break;
//     case 12:
//       console.log("dekabr");
//       break;

//     default:
//       console.log("eror");
//       break;
//   }
// }

// 3-masala

// 4-masala
// let i = 1;
// while (i <= 7) {
//   console.log(i);

//   switch (i) {
//     case 1:
//       console.log("Duyshanba");
//       break;
//     case 2:
//       console.log("Seyshanba");
//       break;
//     case 3:
//       console.log("Chorshanba");
//       break;
//     case 4:
//       console.log("Payshanba");
//       break;
//     case 5:
//       console.log("Juma");
//       break;
//     case 6:
//       console.log("Shanba");
//       break;
//     case 7:
//       console.log("Yakshanba");
//       break;

//     default:
//       console.log(eror);
//       break;
//   }
//   i++;
// }

// 5-masala

// do{
//     let a = +prompt('sonni kiritng');

//     if (a>0) {
//         console.log("musbat");
//     }
//     if (a<0) {
//         console.log("manfiy");
//     }
// }while (a==0)

// 6-masala
// do {
//   let son = +prompt("sonni kiritng");
//   if (son>0) {
//     switch (son) {
//         case 1:
//           console.log("Duyshanba");
//           break;
//         case 2:
//           console.log("Seyshanba");
//           break;
//         case 3:
//           console.log("Chorshanba");
//           break;
//         case 4:
//           console.log("Payshanba");
//           break;
//         case 5:
//           console.log("Juma");
//           break;
//         case 6:
//           console.log("Shanba");
//           break;
//         case 7:
//           console.log("Yakshanba");
//           break;
    
//         default:
//           console.log("eror");
//           break;
//       }
//   }
//   if (son==0) {
//     break
//   }
//   son==son
// } while (son == 0);

