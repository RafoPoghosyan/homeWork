// Xndir 14 grel cragir vory https://jsonplaceholder.typicode.com/ es eji API neric mekov request 
// a anum inchvor userneri u ete et userneric meki  id hamapatasxana linum mer koxmic trvac tvin
// veradarcnuma useri anuny(ete anun chka inchvor info useri. Masin) 
// ete chi hamapatasxanum asum vor et idov user chka bayc vorpes error


// async function someUser(id) {
//       const users = await fetch("https://jsonplaceholder.typicode.com/users");
//       const us = await users.json();
//       const promise = new Promise(function (resolve, reject) {
//         for (let i = 0; i <= us.length; i++) {
//           if (us[i] === undefined) {
//             reject(new Error("et idov user chka"));
//           } else if (us[i].id === id) {
//             resolve(us[i].name);
//           }
//         }
//       });
//       return promise;
//     }
//     let p = someUser(1000);
//     p.then((res) => console.log(res));



// Xndir 15 stexcel function vory dinamic e functiony yndunum e argument url erb kanchenq
// u tanq et url y inqy zapros kani u mez kasi vorpes chisht  ardyunq (url  worked ) 
// vorpes sxal (url doesn't work)  isk erb requesty lini tox asi (request done)

// async function fetchData (url) {

//       try{
//             const users = await fetch(url);
//             const us = await users.json(); 
//             console.log('url  worked');
//       } catch{
//             console.log('url doesn\'t work');
//       } finally {
//             console.log('request done');
//       }

// }

// fetchData(".typicode.fom/usersdfdff");