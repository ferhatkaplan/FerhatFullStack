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
var temp = 44;
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
// degisken44="Değişken merhabalar";

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



