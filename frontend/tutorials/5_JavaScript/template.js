// alert("deneme") => single comment
/*
multiple comment
 */

//variable(değişken)
//"var" dinamik bir değişkendir.
var kalem = "dijital kalem";
console.log(kalem)

console.log("******************")

//değişken tanımlamak
var x1 = 45;
var x2 = 66;
var x3 = x1 + x2;
console.log(x3)

console.log("******************")

//değişken tanımlamak (readibility)
var x4=45,x5=15,x6;
x6=x4+x5;
console.log(x6)

console.log("******************")

//variable information  =>> white space (boşluklara dikkat et)
var temp = 11;
console.log(temp)

console.log("******************")
//whoisting: önce değeri yaz sonra veri türünü yaz
deneme=27+93;
var deneme;
console.log(deneme)

console.log("******************")

//veriable data type
var kelime=27; // sayı.
kelime="selam"; //string
kelime=true; //boolean
console.log(kelime)

console.log("******************")

// variable typeof: türü nedir?
var kelime=27;
console.log(typeof kelime)
kelime="selam"; //string
console.log(typeof kelime)
kelime=true;
console.log(typeof kelime)
console.log(kelime)

// Çıktı
//console.log("Çıktı : console.log")
//alert("Çıktı : alert")
//window.alert("Çıktı : window.alert")
//document.write(result + "merhabalarben document.write")
//var result=prompt("kullanıcıdan veri almak için")

 //Çıktı
 //console.log("Console : console.log");
 //console.warn("Console : console.warn");
 //console.error("Console : console.error");
 //console.info("Console : console.info");

// //variable declaration: değer atamadan sadece değişken oluşturma işlemine denir
// var number;
// console.log(number)

// //variable initialization: ilk değer ataması yapmaya denir.
// //toplama  etkisiz eleman: 0
// //çarpmada etkisiz eleman: 1
// var toplam=0;

// //variable common rules (Syntax rules)
// var degisken="Değişken merhabalar";
// //değişkenlerde:
// //Türkçe karakter olan: üğşçöıİ kullanmayalım
// //değişken isimlerini camelCase kullanalım.
// var degiskenAdiKullanimi="camel case";

// //sonuna sayı yazabiliriz.
// degisken11="Değişken merhabalar";

// //başına sayı yazamayız.
// 11degisken="Değişken merhabalar";

// //başına $ ve _ yazabiliriz.
// $degisken="Değişken merhabalar";
// _degisken="Değişken merhabalar";

// //başına $ ve _ haricinde özel simge yazamayız.
// -+*/#degisken="Değişken merhabalar";

//Operator
// 8 bit = 1 byte
// 1 bit (0,1)

// +  ==> additional
// -  ==> substaction
// *  ==> multiplication
// ** ==> exponentiation(ES6)
// /  ==> division
// %  ==> modules
// ++ ==> increment (artırmak)
// -- ==> deincrement (azaltmak)

// logic operator(Mantıksal Operatörler)           ==> &=VE |=VEYA
// mathematics operator (matematiksel operatörler) ==> x**y=x üzerine y,  + - * /=bölüm %=bölümünden kalan
// comparation  operator                           ==> (> >= < <= ! == ===)
// postfix increment                               ==> X++
// postfix deincrement                             ==> X--
// pre increment                                   ==> ++X
// pre deincrement                                 ==> --X

// ! = değil

// =    ==> ATAMA
// ==   ==> EŞİT (Türe bakmıyor sadece eşitliğe   bakıyor) ==> 11="11" ==> SONUÇ EŞİT
// ===  ==> EŞİT (Türe bakıyor  ve     eşitliğede bakıyor) ==> 11="11" ==> SONUÇ EŞİTDEĞİL

//CAST String() Number()

//var sayi1="11";
//console.log(typeof sayi1)
//var sayi2="33";
//console.log(typeof sayi2)
//console.log(sayi1 + sayi2)
//console.log(Number(sayi1) +String(sayi2) )

//kullanıcıdan alınan 2 sayının üssü 4^2=16 (prompt, x**2)
//Not : prompt'tan string gelir.
//var data1=prompt("Bir sayi gir");
//var result = data1 ** 2;
//console.log(result)

//undefined: tanımsız. ; eğer değişkene bir başlangıç verilmezse bu kullanılır.
var result;
console.log(result)

// //NaN: Not A Number
// // bir sayıyı string'e böldüğümde
// var sayi1 = 14 / "asd";
// console.log(sayi1);

// //infinity:
// //Bir sayıyı sıfıra bölemezsin ve sonsuzdur
// var sayi2 = 12 / 0;
// console.log(sayi2)

// new : hafızdan bir yer açar bizim için
// null: olan hafızayı boşaltır
// zero: sıfır null ile aynı değildir zero hafızda bir yere sahip ancak değeri sıfırdır

//escape character simgesi ==>  \ (back slash)
// single quote ==> Tek Tırnak
// double quote ==> Çift Tırnak
// \t ==> backspace
// \n=new
//console.log("\"\n\tdeneme")

////////////////////////////////////////////////////////////
//Math: önceden yazılmış matematiksel problemler için kullanıyoruz.

// //sabit sayı
// console.log("PI:"+Math.PI);
// console.log("E:"+Math.E);

// //Math
// console.log("en küçüğü:"+Math.min(1,5,-55,96));
// console.log("en büyüğü:"+Math.max(1,5,-55,96));
// console.log("karekök:"+Math.sqrt(25));
// console.log("üslü:"+Math.pow(2,5));
// console.log("mutlak:"+Math.abs(-5));

// //yuvarlama
// console.log("üste yuvarla:"+Math.ceil(2.1));
// console.log("aşağı yuvarla:"+Math.floor(2.9));
// console.log("üste-aşağı yuvarla:"+Math.round(2.5));

//rastgele sayı ve iç ieç math
//console.log("rastgele:"+ Math.round(Math.random()*3+1)  );

//sinus cosinus tan cot
//console.log("sin:"+Math.sin(45));

////////////////////////////////////////////////////////////
//JavaScript : interpreter(Yorumlayıcı)
//SAYILAR
// let sayi1 = 5;
// sayi1=23.11;
// console.log( sayi1);

// //typeof: varible türünü belirtir.
// let sayi2 = 5;
// sayi1=23.11;
// console.log(typeof sayi2);

// //Bilimsel
// const bilimsel=12E-2; //E+2 ==> sayının 2 tane sağına sıfır ekle
// console.log(bilimsel)

// //CAST
// var sayi3=Number(prompt("Lütfen bir sayı giriniz"));

// //infinity
// let sayi4=14/0;
// console.log(sayi4);

// //NaN:Not A Number(Sayı değildir)
// let sayi5=14/"asd";
// console.log(sayi5);

// //isNaN:false dönerse sayıdır
// //it is Not A Number  ==> Bir sayı değildir
// console.log(isNaN(11)) //hayır(false) sayıdır

// //Sayı sistemleri
// //binary (2) => (0-1)
// //octal(8)    => (0-1-2-3-4-5-6-7)
// //decimal(10) => (0-1-2-3-4-5-6-7-8-9)
// //hexadecimal(16) =>(0-1-2-3-4-5-6-7-8-9-a-b-c-d-e-f)
// //2-8-16 tabandan yazılan sayıyı 10 tabana çevirmede

// //2'lik sayıyı 10 tabanda gösterimi
// let binary=0b0101010101;
// console.log(binary)

// //8'lik sayıyı 10 tabanda gösterimi
// let octal=0777;
// console.log(octal)

// //16'lik sayıyı 10 tabanda gösterimi
// //NOT: aA-bB-cC-dD-eE-fF yazabiliriz yani buna non-case sensitive
// let hexadecimal=0xABC;
// console.log(hexadecimal)

//console.log()
////////////////////////////////////////////////////////////
//METİNSEL
//boşluk bir karakterdir
// const metinsel = "Html5 Css3 Bootstrap~Responsive Html5 ";
// console.log("Harf sayısı: " + metinsel.length);
// console.log("Trim Harf sayısı: " + metinsel.trim().length);
// console.log("Hepsi Büyük Harf: " + metinsel.toUpperCase());
// console.log("Hepsi Küçük Harf: " + metinsel.toLowerCase());
// console.log("Başlamak: " + metinsel.startsWith("H"));
// console.log("Bitmek: " + metinsel.endsWith(" "));
// console.log(metinsel.concat("-sona ekle"));

// //substring: sıfırdan başlar
// console.log("parçala: " + metinsel.substring(1));
// console.log("parçala: " + metinsel.substring(0, 4)); //0<=X<=4-1

// //charAt(): sıfırdan başlar
// console.log("Harf: " + metinsel.charAt(1));

//indexOf-lastIndexOf: sıfırdan başlar
//indexOf:soldan arayarak istediğimizi bulursa indis sayısı döndürür
//lastIndexOf:sağdan arayarak istediğimizi bulursa indis sayısı döndürür
// console.log("indexof: " + metinsel.indexOf('Html5'));
// console.log("lastIndexof: " + metinsel.lastIndexOf('Html5'));

// //replace
// const yeniMetinsel = "değiştirdim ";
// console.log("replace: " + metinsel.replace(metinsel,yeniMetinsel));

/////////////////////////////////////
//Function:
// sürekli aynı yazdımız kod tekrarını önlemek,
// clean code mantığında ilerlememize olanak sağlar.

//yazım şekli
//1-) returnsuz Parametresiz Function
// function returnsuzParametresiz() {
//   console.log("1-returnsuz parametresiz function");
// }
// returnsuzParametresiz();

// //2-) returnsuz Parametreli Function
// function returnsuzParametreli(data) {
//   console.log("2-returnsuz parametreli function " + data);
// }
// returnsuzParametreli("Ferhat");

// //3-) returnlu Parametresiz Function
// function returnluParametresiz() {
//   return "3-returnlu parametresiz function";
// }
// let result3=returnluParametresiz();
// console.log(result3)
// ///////////////////////////////////////////////////////////////////////
// //4-) returnlu Parametreli Function
// //Normal Function
// function returnluParametreli(nameData,surnameData) {
//   return "4-returnlu parametreli function: "+nameData+" "+surnameData;
// }
// let result4=returnluParametreli("Ferhat","Kaplan");
// console.log(result4)

// //ES5 (Anonymous Function)
// let anonymousFunction = function (nameData, surnameData) {
//   return "5-anonymous fonksiyon : " + nameData + " " + surnameData;
// }
// let result5 = anonymousFunction("Ferhat", "Kaplan");
// //console.log(result5)

// //ES6 Arrow Function
// let arrowFunction =  (nameData, surnameData)=> {
//   return "6-arrow function  : " + nameData + " " + surnameData;
// }
// let result6 = arrowFunction("Ferhat", "Kaplan");
// //console.log(result6)

// //return olmayan function olmalıdır.
// //Immediate Function
// (function () {
//   console.log('7-Immediate Function Anonymous')
// })();

// //Immediate Function
// ( ()=> {
//   console.log('8-Immediate Function Arrow Function')
// })();

/////////////////////////////////////////////////////////
//JavaScript: Senkrondur (Aynı anda sadece 1 tane iş yapar) şeklinde çalışır Single Thread

//senkron: bir işlem biter diğerine geçer. Sırayla çalışır.
//Asenkron aynı anda birden fazla process(iş) demektir
//JavaScript Asenkron çalışabilmesi için şunları yapabiliriz.
//1-)basic Asenkron-Senkron
//2-)callBack function
//3-)setTimeOut() ==> function istediğimiz zaman aralığında çalışmasını sağlarız.
//4-)promise
//5-)async await

///////////////////////////////////
//Asenkron çözümümüz
//1-)basic Asenkron-Senkron :
//Kullanıcıdan alınan sayının karekökü
// function birinci(number) {
//   console.log("birinci function")
//   console.log(Math.sqrt(number))
// }

// function ikinci() {
//   const userData = Math.round(Math.abs(Number(prompt("Lütfen bir sayı giriniz"))));
//   console.log("ikinci function");
//   birinci(userData);
// }
// ikinci();

// ///////////////////////////////////

// //2-) CallBackFunction
// //Kullanıcıdan alınan sayının karekökü
// function birinci(number) {
//   console.log("birinci function")
//   console.log(Math.sqrt(number))
// }

// function ikinci(callback) {
//   const userData = Math.round(Math.abs(Number(prompt("Lütfen bir sayı giriniz"))));
//   console.log("ikinci function");
//   callback(userData);
// }
// ikinci(birinci);

// ////////////////////////////////////


// //2-)setTimeOut(Body,timerMS)
// //1000ms = 1sn
// //2.1-)Normal setTimeOut
// function setTimeOutFunction() {
//   console.log("Normal setTimeOut")
// }
// setTimeout(setTimeOutFunction, 3000);

// //2.2-)Anonymous function setTimeOut
// setTimeout(function () {
//   console.log("Anonymous function setTimeOut")
// }, 2000);

// //2.3-)Arrow function setTimeOut
// setTimeout(() => {
//   console.log("Arrow function setTimeOut")
// }, 3000);

///////////////////////////////////

//conditional (Karar mekanizması):
//if else (sadece 2 seçeneğimiz varsa)
// eğer veriler arasında karar vermek zorunda kalırsa yani birden fazla yol var ama hangisine gideceğini bilmiyorsam
// if (3 > 1) {
//   //Eğer şart doğruysa bu scope
// } else {
//   //Değilse  bu scope
// }

// //verdiğimiz String sayıya ve pozitif bir sayı olsun
// function stringToNumberPositive(number) {
//   return Math.abs(Number(number));
// }

// const number = stringToNumberPositive(16);
// //1.Gösterim
// if (number > 10) {
//   console.log(number + " sayısı 10'dan büyüktür")
// } else {
//   console.log(number + " sayısı 10'dan küçüktür")
// }

// //2.Gösterim
// if (number > 10)
//   console.log(number + " sayısı 10'dan büyüktür")
// else
//   console.log(number + " sayısı 10'dan küçüktür")

// //3.Gösterim (Ternary)
// let result = (number > 10) ? number + " sayısı 10'dan büyüktür" : number + " sayısı 10'dan küçüktür";
// console.log(result)
//////////////////////////////////////////////
//conditional (Karar mekanizması):
//if elseif() ... else (seçeneğimiz 2'den fazla ise)
// eğer veriler arasında karar vermek zorunda kalırsa yani birden fazla yol var ama hangisine gideceğini bilmiyorsam

// //if else if() else
// const hours = new Date().getHours();
// if (hours == 5) {
//   console.log("saat: 5")
// } else if (hours == 6) {
//   console.log("saat: 6")
// } else if (hours == 7) {
//   console.log("saat: 7")
// } else if (hours == 8) {
//   console.log("saat: 8")
// } else if (hours == 9) {
//   console.log("saat: 9")
// } else if (hours == 10) {
//   console.log("saat: 10")
// } else {
//   console.log("saat dışında bir rakam girildi")
// }

// //switch-case:okunabilirliği daha iyidir
// switch (hours) {
//   case 5:
//     console.log("saat: 5")
//     break;
//   case 6:
//     console.log("saat: 6")
//     break;
//   case 7:
//     console.log("saat: 7")
//     break;
//   case 8:
//     console.log("saat: 8")
//     break;
//   case 9:
//     console.log("saat: 9")
//     break;
//   case 10:
//     console.log("saat: 10")
//     break;

//   default:
//     console.log("saat dışında bir rakam girildi")
//     break;
// }

///////////////////////////////////////////////////////////////////
//Loop: Sürekli kendini tekrar eden verilerde kolaylıkla sağlaması için kullanılır.

// console.log("********iterative for************")
// //1-) iterative for loop
// for (let i = 1; i <= 5; i++) {
//   console.log(i)
// }

// //sonsuz for döngüsü
// //for(;;){}
// console.log("********While************")

// //2-) while loop
// let k = 1;
// while (k <= 5) {
//   console.log(k)
//   k++;
// }
// //sonsuz while döngüsü
// //while(true){}

// console.log("********Do-While************")

// //3-) do-while loop: şart sağlansın yada sağlanmasın en az 1 kez çalışır.
// let m = 1;
// do {
//   console.log(m)
//   m++;
// }
// while (m <= 5);

///////////////////////////////////////////////////////////////////
//return  : metotun çalışmasını durdurur
//break   : döngünün çalışmasını durdurur
//continue: sadece 1 kereye mahsus durur sonra devam eder.

//user Data
let number = () => {
    const number = Math.abs(Number(prompt("Lütfen bitiş sayısı giriniz")));
    return number;
  }
  
  //result
  const statementData = function (data) {
    let oddCounter = 0, oddSum = 0, evenCounter = 0, evenSum = 0;
    let sum = 0;
    for (let i = 1; i <= data; i++) {
  
      //15 üstünde çalışmasın
      if (i == 15)
        break;
  
      //7 dahil etme
      if (i == 7)
        continue;
  
      //tek çift sayı adeti toplamı
      if (i % 2 == 0) {
        evenCounter++;
        evenSum = evenSum + i;
      } else if (i % 2 == 1) {
        oddCounter++;
        oddSum += i;
      }
      sum += i;
    }
    console.log("toplam:" + sum);
    console.log("Çift sayı adedi:" + evenCounter);
    console.log("Çift sayı toplamı:" + evenSum);
    console.log("Tek sayı adedi:" + oddCounter);
    console.log("Tek sayı toplamı:" + oddSum);
  }
  
  //result
  let result = () => {
    const data = number();
    if (data == 11) {
      console.log("secret-key girdiniz:" + data);
      return;
    } else {
      statementData(data);
    }
  }
  //result();
  
  //////////////////////////////////////////////////////
  //"use strict" //ES5 göre uyarlıyoruz.
  
  
  //////////////////////////////////////////////////////
  
  // Date: Tarih bilgisini verir.
  // GET
  let dateGetTutorials = () => {
    let tarih = new Date();
    //let tarih = new Date().getDay();
    console.log(tarih);
    console.log("GMT:" + tarih.toUTCString());
    console.log("String:" + tarih.toDateString());
  
    console.log("YIL:" + tarih.getFullYear());
    console.log("AY:" + tarih.getMonth());  //Aylar 0 başlar 
    console.log("Gün:" + tarih.getDay()); //Gün: pazar:0 başlar
    console.log("SAAT:" + tarih.getHours());
    console.log("DAKİKA:" + tarih.getMinutes());
    console.log("SANİYE:" + tarih.getSeconds());
    console.log("MİLİSANİYE:" + tarih.getMilliseconds());
  }
  //dateGetTutorials();
  
  // SET
  let dateSetTutorials = () => {
    //yıl ay gün saat dakika saniye milisaniye
    let tarih1 = new Date(2019, 5, 12, 10, 15, 30, 500);
    console.log("tarih 1: " + tarih1);
  
    //gün ay yıl
    let tarih2 = new Date("01 12 2015");
    console.log("Tarih 2: " + tarih2);
  
    //set
    let tarih3 = new Date();
    tarih3.setFullYear(1999);
    tarih3.setMonth(6);
    tarih3.setDate(0);
    tarih3.setHours(23);
    tarih3.setMinutes(59);
    tarih3.setSeconds(59);
    tarih3.setMilliseconds(999);
    console.log("Tarih 3: " + tarih3);
  }
  //dateSetTutorials();
  
  //////////////////////////////////////////////////////
  // DİZİLER
  // Verilerimizi bütün bir şekilde elimizde bulunmaktır. bunu kütüphane gibi düşünebiliriz.
  // Nasıl ki kütüphaneci binlerce kitap arasında istediği kitabı raflara dizdiğinden dolayı bulabiliyor.
  
  //dizide bir objedir.
  
  // Diziler ==> 1.Gösterim 
  // let dizi=[];
  
  // Diziler ==> 2.Gösterim 
  // let dizi=new Array();
  
  //let dizi=[]; ile  let dizi=new Array(); arasındaki fark nedir ? 
  // TARIK
  
  // DİKKAT Dizi
  // dizi elemanlarımıza sıfırıncı indiste başlıyoruz.
  
  // indisler sıfırdan başladığından dolayı son elemanda 1 çıkarmak zorundayız
  // dizimizde son elemana erişmek için: dizi.length-1 
  
  //boş bir dizi oluşturdum
  let dizi1 = [];
  
  ///////////////
  let arrayTutorials = function () {
    //boş bir dizi oluşturdum
    let dizi2 = ['merhabalar', 11, "nasılsınız", 55.66, 'javascript', true];
  
    // console.log
    console.log(dizi2);
  
    //dizi elemanlarına erişmek
    document.writeln(dizi2[0] + ' ' + dizi2[5] + ' ' + dizi2[dizi2.length - 1])
  
    const firstData = dizi2[1];
    //string number boolean
    document.writeln("<br/>" + typeof firstData)
  
  }
  //arrayTutorials()
  
  //////////////
  let iterativeFor = () => {
    //boş bir dizi oluşturdum
    let dizi = ['merhabalar', 11, "nasılsınız", 55.66, 'javascript', true];
  
    //iterative for -1
    for (let i = 0; i <= dizi.length - 1; i++) {
      document.writeln("<br/>" + dizi[i]);
    }
    document.writeln("<br/> +++++++++++++++++++")
    //iterative for -2
    for (let i = 0; i < dizi.length; i++) {
      document.writeln("<br/>" + dizi[i]);
    }
  }
  //iterativeFor();
  
  
  //////////////
  // for in: bize indis numarlarını verir.
  // for in: for over INdex
  let forInfunction = () => {
    //boş bir dizi oluşturdum
    let dizi = ['merhabalar', 11, "nasılsınız", 55.66, 'javascript', true];
  
    //for in
    for (temp in dizi) {
      document.writeln("<br/>" + temp + ' ' + dizi[temp]);
    }
  
  }
  //forInfunction();
  
  
  //////////////
  
  // for of: bize datayı verir
  // for of: for over Members
  // genellikle forOf tercih edilir forIN'e göre
  const forOffunction = () => {
    //boş bir dizi oluşturdum
    let dizi = ['merhabalar', 11, "nasılsınız", 55.66, 'javascript', true];
  
    //for of
    let counter = 1;
    for (temp of dizi) {
      document.writeln("<br/>" + counter + " " + temp);
      counter++;
    }
  
  }
  //forOffunction();
  
  //////////////////////////
  
  //Diziye Veri Ekleme
  const ArrayFunctions1 = () => {
    // boş bir dizi oluşturdum
    let dizi = ['merhabalar', 11];
  
    // push() 
    // dizimizin son elemanına ==> 1 tane veri eklemek
    dizi.push("son eleman push");
  
    //unshift()
    // dizimizin ilk elemanına ==> 1 tane veri eklemek için
    dizi.unshift("ilk eleman unshift");
  
    for (temp of dizi) {
      document.writeln("<br/>" + temp);
    }
  }
  //ArrayFunctions1();
  
  //////////////////////////
  
  //Diziye Veri Çıkarmak
  const ArrayFunctions2 = () => {
    // boş bir dizi oluşturdum
    let dizi = ['ilk eleman', 11, "son eleman"];
  
    // pop() 
    // dizimizin son elemanına ==> 1 tane veri çıkarmak
    dizi.pop();
  
    //shift()
    // dizimizin ilk elemanına ==> 1 tane veri çıkarrmak için
    dizi.shift();
  
    for (temp of dizi) {
      document.writeln("<br/>" + temp);
    }
  
  }
  //ArrayFunctions2();
  
  
  ///////////////////////
  
  //sort() ==> elemanları küçükten büyüğe sıralama yapar.
  const ArrayFunctions3 = () => {
    let dizi = ['a', "k", 'b'];
  
    //dizi.sort()
    dizi.sort();
  
    for (temp of dizi) {
      document.writeln("<br/>" + temp);
    }
  }
  //ArrayFunctions3();
  
  
  //reverse() ==> elemanları ters sıralar.
  const ArrayFunctions4 = () => {
    let dizi = ['a', "k", 'b'];
  
    //dizi.reverse()
    dizi.reverse();
  
    for (temp of dizi) {
      document.writeln("<br/>" + temp);
    }
  }
  //ArrayFunctions4();
  
  //sort().reverse() ==> elemanları büyükten küçüğe sıralar.
  const ArrayFunctions5 = () => {
    let dizi = ['a', "k", 'b'];
  
    //dizi.reverse()
    //dizi.sort();
    //dizi.reverse();
  
    dizi.sort().reverse();
  
    for (temp of dizi) {
      document.writeln("<br/>" + temp);
    }
  }
  //ArrayFunctions5();
  
  
  /////////////////////////
  //function Array
  //1.Function
  function diziFunction() {
    return ['kalem', 'Tükenmez']
  }
  
  let diziTemp = diziFunction();
  //console.log(diziTemp);
  
  //2.Function
  function sonucDizisi(temp) {
    console.log(temp)
  }
  
  // Dizi içinde Array Function
  //sonucDizisi(diziFunction());
  
  ///////////////////////
  //JSON
  let objectDizi = () => {
  
    //data object
    const data = {
      adi: "Ferhat",
      "soyadi": "Kaplan"
    }
  
    let objectToString = JSON.stringify(data);
    console.log(objectToString);
  
    const adi = JSON.parse(objectToString).adi;
    console.log(adi);
  
    const soyadi = JSON.parse(objectToString).soyadi;
    console.log(soyadi);
  }
  
  //objectDizi()
  
  ///////////////////////
  //Diziyi String'e çevirmek
  let arrayToString = () => {
  
    //data object
    let dizi = ['java', "spring", 'mysql'];
    console.log(dizi);
  
    //dizideki verilerin hepsini büyük harfe çevirelim.
    const changeData = dizi.toString().toUpperCase();
    console.log(changeData);
  }
  //arrayToString();
  
  
  ///////////////////////
  //string split ==> Diziyi split'e çevirmek
  let arraySplit = () => {
  
    //string veriyi split yaptık
    let kelime = "java +spring ~mysql &postgresql devops";
    let data = kelime.split("+");
  
    for (temp2 of data) {
      document.writeln('<br/>' + temp2)
    }
  
    document.writeln("<br/>++++++++++++++++++++++++")
  
    //data object
    let dizi = ["java +spring ~mysql &postgresql devops"];
    //console.log(dizi);
  
    //Öncelikle Diziyi String'e çevirmek gerekiyor sonra split yapmamız gerekiyor.
    let dizi2 = dizi.toString().split("+");
    for (temp2 of dizi2) {
      document.writeln('<br/>' + temp2)
    }
  }
  //arraySplit();
  
  ///////////////////////
  //string concat ==> Diziye son olarak ekler
  let arrayJoinConcat = () => {
  
    //data object
    let dizi = ['java', "spring", 'mysql'];
    console.log(dizi);
  
    //join: Her bir elemanın sonuna ekleme yapar
    // bize string verisi döndürür.
    dizi = dizi.join("+");
    console.log(dizi);
  
    //dizi.concat() ==> dizi elemanızın sonuna ekler
    dizi = dizi.concat("INC");
    console.log(dizi[dizi.length - 1])
    for (temp2 of dizi) {
      document.writeln(temp2)
    }
  }
  //arrayJoinConcat();
  
  
  
  ///////////////////////
  //delete ==> Dizide belirlediğimiz indis'e göre veri silmek ve yerine null yazmak
  //dikkat sildiği verinin yeri hala durur. ==> empty olarak gösterir. (Kalıntısı var)
  let arrayDelete = () => {
  
    //data object
    let dizi = ['java', "spring", 'mysql', 'rest'];
    document.writeln(dizi);
    //output: java,spring,mysql,rest
  
    delete dizi[0];
    document.writeln("<br/>" + dizi);
    //output: ,spring,mysql,rest
  }
  //arrayDelete();
  
  
  ///////////////////////
  //splice:hem ekleme hem silme yapabiliriz.
  let arraySplice = () => {
  
    //data object
    let dizi = ['java', "spring", 'mysql', 'rest', 'JaxRS'];
    console.log(dizi);
    //output: java,spring,mysql,rest,JaxRS
  
    //dizi.splice(1);
    //console.log(dizi);
    ////1: başlama indisinden itibaren siler göster
    ////output: spring,mysql,rest,JaxRS
  
    //dizi.splice(1,3);
    //console.log(dizi);
    ////1: başlama indisi
    ////3: tane veriyi silme (başlama indiside dahil etmelisin)
    ////output: java,JaxRS
  
    ////Verinin başına veri eklemek
    //dizi.splice(0,0,'33');
    //console.log(dizi);
    //// 0  : başlama indisi
    //// 0  :  adet silme sayısı
    //// 33 : yerine gelecek data
    ////output ilk veri: java,spring,mysql,rest,JaxRS
    ////output son veri: 33,java,spring,mysql,rest,JaxRS
  
    ////Veriye istediğimiz indiste istedimiz kadar silme işlemi
    ////output: java,spring,mysql,rest,JaxRS
    //dizi.splice(0,3,'11');
    //console.log(dizi);
    //// 0  : başlama indisi
    //// 3  :  adet silme sayısı
    //// 11 : yerine gelecek data
  
  }
  //arraySplice();
  
  ///////////////////////
  //slice ==> Verdiğimiz indisten itibaren kopyalama yapar.
  //dikkat clonlama yani belirtilen indis numarasından sonra kendisine kopyasını alır.
  let arraySlice = () => {
  
    //data object
    let dizi = ['java', "spring", 'mysql', 'rest'];
    document.writeln(dizi);
    console.log(dizi);
    //output: java,spring,mysql,rest
  
    dizi = dizi.slice(1);
    document.writeln("<br/>" + dizi);
    console.log(dizi);
    //output: spring,mysql,rest
  
  
    //slice(0,2) ==> 0<=X<=2-1 indisi bana getir.
    dizi = dizi.slice(0, 2);
    document.writeln("<br/>" + dizi);
    console.log(dizi);
    //output: spring,mysql,rest
  }
  //arraySlice();
  
  ///////////////////////////////////////
  //Template Literal (ES6) 
  // Unutma: backtick yazarak işlem yapıyoruz.
  //1-multi line
  //2-interpolation
  //3-html template
  
  //1-multi line
  let data1 = "Merhabalar nasılsınız";
  // normal
  //console.log(data1 + " diğer");
  
  //multiline (Backtick)
  let data2 = `Merhabalar 
  nasılsınız`;
  //console.log(data2);
  
  //+++++++++++++++++++++++++++++++++
  
  //2-interpolation
  let adi = "Ferhat";
  let soyadi = "Kaplan";
  //console.log("Adı: " + adi + " Soyadı: " + soyadi);
  
  //2-interpolation ==> UNUTMA: ```${}
  //console.log(`Adı: ${adi} Soyadı: ${soyadi}`)
  
  
  //+++++++++++++++++++++++++++++++++
  //3-html template
  let language1 = "Java";
  let language2 = "JavaScript";
  
  let result2 = () => {
  
    //NORMAL
    const htmlNormal =
      "<ul>" +
      "<li>" + language1 + "</li>" +
      "<li>" + language2 + "</li>" +
      "</ul>";
    //document.body.innerHTML = htmlNormal;
    document.getElementById("temp1").innerHTML = htmlNormal;
  
    //HTML Template
    const htmlTemplate = `
  <ul>
        <li>${language1}</li>
        <li>${language2}</li>
  </ul>
  `
    //document.body.innerHTML = htmlTemplate;
    document.getElementById("temp2").innerHTML = htmlTemplate;
  }
  //result2();
  
  
  
  /////////////////////////////////////////////////////
  //Object: Anlamlandırabileceğimiz her şeye denir.
  // let objectData={};
  // console.log(objectData);
  
  // let objectData2=new Object();
  // console.log(objectData2);
  
  // //let objectData={}; ikisi arasındaki fark let objectData2=new Object();  MELEK
  // //let dizi1=[];  let dizi2=new Array(); TARIK
  // let dizi1=[];
  // console.log(dizi1);
  
  // let dizi2=new Array();
  // console.log(dizi2);
  
  let personObject = () => {
    let person = {
      "adi": "Ferhat",
      "soyadi": "Kaplan",
      "isLogin": true,
      "hescode": "hescode-123",
      "teknolojiDizi": ["Html5", "Css3", "Js", "Bootstrap"],
      javaObjesi: {
        "adı": "JavaSE",
        "year": "1999"
      }
    };
  
    //console
    console.log(person);
    console.log(person.adi.toLowerCase());
    console.log(person.soyadi);
    console.log(typeof person.soyadi);
    console.log(person.isLogin);
    console.log(person.hescode);
    console.log(person.teknolojiDizi);
    console.log(person.teknolojiDizi[0]);
    console.log(person.javaObjesi);
  
    //sonradan objeye attributes eklemek
    person.meslek = "Bilgisayar Mühendisi";
    console.log(person.meslek);
    console.log(person.hescode);
    console.log(person['hescode']);
    //delete
    //delete person.hescode
    //console.log(person.hescode);
  
    let allObject;
    for (const key in person) {
      allObject += person[key]
    }
    // alert(allObject)
  }
  //personObject();
  
  
  let stu = () => {
    //CONSTRUCTUR
    function Student(adi, soyadi, yas) {
      this.adi = adi;
      this.soyadi = soyadi;
      this.yas = yas;
      console.log(this);
      this.birthday = function () {
        //return 2022-yas;
        return new Date().getFullYear() - yas;
      }
    }
  
    let resultData = new Student("adı", "Soyadı", 25);
    console.log(resultData.birthday());
  
  }
  //stu();
  
  const tea = () => {
    let Teacher = function (adi, soyadi, yas) {
      this.adi = adi;
      this.soyadi = soyadi;
      this.yas = yas;
      console.log(this);
      this.dogumTarihi = function () {
        return new Date().getFullYear() - yas;
      };
      this.emekliYasi = () => {
        return 60 - yas;
      }
    }//Teacher function end
  
    let result = new Teacher("adi", "soyadi", 25);
    console.log(`Doğum Tarihi: ${result.dogumTarihi()}`)
    console.log(`Emeklilik Kalan Zamanı: ${result.emekliYasi()}`)
  }//tea end
  //tea();
  
  
  let callApplyBind = () => {
    //1- call apply bind
    //this kullandık
    let dataFunction = function () {
      console.log("Değer: " + this.adi)
      console.log(this);
    }
  
    //call apply bind :ENES
    let object = { adi: "Ferhat", soyadi: "Kaplan" };
    //dataFunction.call(object);
    //dataFunction.apply(object);
    dataFunction();
  
    let result5 = dataFunction.bind(object);
    result5();
  }
  //callApplyBind();
  
  
  ///////////////////////////////////////////
  
  const callApplyBindParameter = function () {
    let dataFunction2 = function (tekno2, tekno3) {
      console.log("Java teknolojileri: " + this.tekno1 + " " + tekno2 + " " + tekno3)
    }
  
    let objectData = { tekno1: "JavaME" }
    // dataFunction2.call(objectData,"JavaSE","javaEE");
    // dataFunction2.apply(objectData,["JavaSE","javaEE"]);
    let result6 = dataFunction2.bind(objectData, "JavaSE", "javaEE");
    result6()
  }
  
  //callApplyBindParameter();
  
  
  ///////////////////////////////////////////
  // DOM
  // Document Object Model
  // web sayfalarımızda javascript üzerinden  HTML-CSS-JS yönetimini sağlar.
  // F12 Google Chrome önemlidir.
  
  function parag() {
    let result = prompt("Lütfen birşey yazınız");
    setInterval(function () {
      //id
      //window.document.getElementById("paragId").innerHTML=result;
      // document.getElementById("paragId").innerHTML=result;
      // document.getElementById("paragId").innerText=result;
  
      //className
      // const className = "paragrafClass";
      // const dom = document.getElementsByClassName(className)[0];
      // dom.innerHTML = result;
  
      //tagName
      // const tagName = "p";
      // const dom = document.getElementsByTagName(tagName)[0];
      // dom.innerHTML = result;
  
      //name
      // const nameDate = "paragrafName";
      // const dom = document.getElementsByName(nameDate)[0];
      // dom.innerHTML = result;
  
      //querySelector
      //document.querySelector("#paragId").innerHTML = result;
      //document.querySelector(".paragrafClass").innerHTML = result;
      //document.querySelector("p").innerHTML = result;
  
      //CSS 
      window.document.getElementById("paragId").innerHTML = result;
      // document.getElementById("paragId").style.color = "orange";
      // document.getElementById("paragId").style.backgroundColor = "blue";
      // document.getElementById("paragId").style.marginTop = "2rem";
      // document.getElementById("paragId").style.padding = "1rem";
  
    }, 2000);
  }
  
  //addEventListener 
  //kullanıcı bir olay gerçekleştiğinde sürekli dinleyen function
  //----- .addEventListener(olay,function,false)
  //1-A) Function olmadan direk çağırmak
  let result7 = document.getElementById("h1_id").addEventListener("click", function (e) {
    alert("Tıklandı")
  }, false);
  
  //1-B) Function yazarak çağırmak
  function deneme7() {
    let result7 = document.getElementById("h1_id").addEventListener("click", function (e) {
      alert("Tıklandı")
    }, false);
  }
  deneme7()
  //----- .removeEventListener(olay,function)
  //2-)
  
  //////////////////////////////////////////////////////////
  //jQuery 
  //jqeury hazır olduğunda çalışsın.
  //$(document).ready(function(){});
  //$(function(){});
  
  /*
   Group Selector:
   p{}     ==> tüm p'ler
   div,p{} ==> tüm div'ler ve tüm p'ler
   div p{} ==> div içindeki tüm p'ler
   div>p{} ==> div içindeki tüm p'ler
   div~p   ==>div ile p aynı seviyede tüm p'ler
   div+p   ==>div ile p aynı seviyede tek p
   */
  
  // window   ==> bütün neslere erişmek için kullanırız.
  // document ==> sadece o sayfaya erişim sağlarız.
  
  // npm  ==> senkron(Aynı anda sadece 1 işi yapar yeni işi bekletir)
  // yarn ==> Asenkron (Aynı anda birden fazla iş yapabiliyor daha hızlıdır.)
  
  // Framework: 
  // Önceden yazılmış hazır kodlar vardır.
  // Belli kuralları vardır bizden beklenen sadece bu kuralları yerine getirmektir. 
  // Projelerde daha hızlı ilerleriz. 
  // Examples: Angular(Microsoft),Vue
  
  // Libraries:
  // Önceden yazılmış hazır kodlar vardır.
  // Özgürüz Kullandığımız dili kullanarak kodlar yazabiliriz
  // Herşeyi kendimiz çağırdığımız için framework'e göre daha yavaş ilerleyebiliriz.
  // Examples: jQuery , React(Facebook)
  
  // JavaScript Kütühanesidir.
  // Daha az kodla daha fazla işlem yapmamıza olanak sağlar.
  // AJAX kullanacaksak native-javascriptte göre jQuery bize daha kolay gelecektir.
  // Google Netflix IBM Microsoft
  // jquery kullanırken: CDN (Content Delivery Network)  Tercihim bu.
  
  // Why jQuery?
  // Google
  // Microsoft
  // IBM
  // Netflix
  
  // jquery CDN unutma: head tagleri arasına yazalım.
  
  {/* <head>
  <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
  <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
  </head>
  <script src="Template.js"></script>
  </body>
  </html> 
  *
  JavaScript ==> çift tırnak kullanmak
  jQuery     ==> tek tırnak kullanmak */}
  
  
  // val()
  // input taglerin value değerlerini almak istersek yani input içeriğine yazılanları almak istersek;
  
  // val  get
  // <input type="text" value="değer" />
  // alert( $("input").val() );
  
  // val => set
  // alert( $("input").val("değiştirdim") );
  
  // val()
  // <form>
  // <input type="text" name="adi" id="adi" />
  
  // <button id="gonder" name="gönder" onclick="online" > Gönder </button>
  // </form>
  
  // $(document).ready(function()){
  // val adim=$("#adi").val();
  // alert(adim);
  // }
  
  
  
  
  
  function jQueryFunction() {
    let result = prompt("Lütfen birşey yazınız");
  
    setInterval(function () {
      //
      //id ==> DOM - JQUERY HTML
      // window.document.getElementById("paragId").innerHTML=result;
      // document.getElementById("paragId").innerHTML=result;
      $('#paragId').html(result);
  
      //DOM - JQUERY TEXT
      //document.getElementById("paragId").innerText=result;
      // $('#paragId').text(result);
  
      //className ==> DOM - JQUERY
      //const className = "paragrafClass";
      //document.getElementsByClassName(className)[0].innerHTML = result;
      //$(".paragrafClass").html(result);
  
      //tagName
      //const tagName = "p";
      //document.getElementsByTagName(tagName)[0].innerHTML = result;
      //$(tagName).html(result);
  
      //CSS  ==> DOM - JQUERY 
      $('#paragId').html(result);
      //document.getElementById("paragId").style.color = "orange";
      // document.getElementById("paragId").style.backgroundColor = "blue";
      // document.getElementById("paragId").style.marginTop = "2rem";
      // document.getElementById("paragId").style.padding = "1rem";
      // $('#paragId').css("backgroundColor","blue").css("marginTop","2rem").css("padding","1rem");
  
      //jQuery css object
      //$('#paragId').css(
      //  { "backgroundColor": "blue", "marginTop": "2rem", "padding": "1rem" }
      // );
  
      //jQuery css object
      const jqueryObject = { "backgroundColor": "blue", "marginTop": "2rem", "padding": "1rem" }
      $('#paragId').css(jqueryObject);
  
      //jquery addEventListener
      $('#h1_id').click(function () { alert("jquery Tıklandı") })
    }, 500);
  }
  //jQueryFunction();
  
  
  
  
  //
  // HTML
  // <h4 id="jquery_id" class="mb-5 border">jquery </h4>
  //  <button class="btn btn-primary" onclick="dom_javascript()">DOM</button>
  //  <button class="btn btn-warning" onclick="dom_jquery()">jQuery</button>
  //
  //
  // JAVASCRIPT
  // function dom_javascript(){
  //  document.getElementById("jquery_id").innerHTML="<b><mark>JavaScript</mark></b>"
  // }
  // function dom_jquery(){
  //  // $(selector).attributes()
  // $('#jquery_id').html("<b><mark><i>jQuery</i></mark></b>")
  // }
  //
  // <!-- UNUTMA: önce sayfaların yüklenmesi için <script> </script> alt tarafa yazıyoruz. ancak
  // document.ready yazdığımızdan dolayı ister head tagleri arasında bile YAZABİLİRİZ
  // -->
  //
  // $(document).ready()
  // $(document).ready(function (){
  //   $(‘p’).html();      $(‘p’).text();     $(‘p’).css();
  // });
  //
  //
  // $(function (){
  //   $(‘p’).html();      $(‘p’).text();     $(‘p’).css();
  // });
  





