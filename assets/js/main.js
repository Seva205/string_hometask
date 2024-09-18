// function saitleriSay(string) {
//   const saitler = "aieəiöü";

//   let say = 0;

//   const lowerCaseString = string.toLowerCase();

//   for (let i = 0; i < lowerCaseString.length; i++) {
//     if (saitler.includes(lowerCaseString[i])) {
//       say++;
//     }
//   }

//   return say;
// }

// const testString = "salam";
// console.log(saitleriSay(testString));

// function tersString(str) {
//     return str.split('').reverse().join('');
// }

// const string = 'salam';
// console.log(tersString(string));

// function upperCase(string) {
//     const words=string.split('');
//     const worsalong=words.map(word)=>{if (soz.length > 0) {
//         return soz.charAt(0).toUpperCase() + soz.slice(1).toLowerCase();
//     }};
//     return soz;
// };

// function enUzunSozuTap(string) {
//   const sozler = string.split(" ");

//   let enUzunSoz = "";

//   for (const soz of sozler) {
//     if (soz.length > enUzunSoz.length) {
//       enUzunSoz = soz;
//     }
//   }

//   return enUzunSoz;
// }

// const orijinalString = "tapaq gorek bize ne verecek.";
// console.log(enUzunSozuTap(orijinalString));



// Verilmiş string-dən bütün rəqəmləri çıxaran funksiya yazın.
// function reqemleriChixart(string) {
//     const reqemleri=string.match(/\d+/g);
//     return reqemleri ? reqemleri:[];
//   };
//   const esasreqemleri='salam bugun ayin 19 -u 9 -cu aydir';
//   console.log(reqemleriChixart(esasreqemleri));
  
  
  
  



// Bir string və iki simvol götürən, string-də birinci simvolu ikinci simvolla əvəzləyən funksiya yazın.
// function symbolReplace(string, a, b) {
//   return string.replace(a, b);
// }

// const string = "innoway tedris merkezi";
// const a = "innoway";
// const b = "keyfiyyetli";
// console.log(symbolReplace(string, a, b));
