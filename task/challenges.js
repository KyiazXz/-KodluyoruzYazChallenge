// easy

//  Kullanıcının doğum tarihini alarak kaç yaşında olduğunu bulan bir algoritma yazmanızı istiyorum.

function dogumTarih(year){
    let date =  new Date().getFullYear();
    let result = date - year
    console.log(result)
}
dogumTarih(2001)



// 13 challenge

// ******************************

// 🙌🏼 Easy: Kullanıcıdan bir sayı almanızı ve bu sayının asal olup olmadığını kullanıcıya söylemenizi istiyorum. 
// 🗝️ Asal sayıların ortak özelliği kendisine ve bire kalansız bölünmesidir. 2’nin de asal sayı olduğunu programında unutma 😀Bütün asal sayıları tanımlamak ve kontrol etmek yerine sayının asal sayı olup olmadığını matematik işlemleriyle anlayabilirsin 😉


function asalSayi(num){
    if (num % 5 === 0 && num % 2 === 0 ){
      console.log(`${num} asal bir sayidir`)
    }
    else{
      console.log(`${num} asal bir sayi degildir`)
    }
  }
  asalSayi(10)


// 🌟Medium: Kullanıcıdan bir kelime almanız gerekiyor. Bu kelimenin harflerini büyük harflere dönüştüren bir program yazmanızı istiyorum. 
// 🗝️ C dilinde toupper() fonksiyonu harfleri büyük harfe dönüştürür.

function upperCase (str){
    console.log(str.toUpperCase())
  }
  
 upperCase("sfjlsdjdfsfaf")

  
// ----------------------------------------------- 
  
//   12 challenge

// 🙌🏼 Easy: Bir araba saatte 60 km hızla hareket ediyor. Bu araba kaç saatte 240 km yol alır?
// 🗝️ Bu problemi çözen kodu yazmanı istiyorum🤗

const arabaHizi = 60; // Speed of the car in km/h
const maxYol = 240; // Maximum distance of the journey in km
let saat; // Variable to store the time

const calculateTime = () => {
  saat = maxYol / arabaHizi; // Calculate time in hours
}

calculateTime(); // Call the function to calculate time
console.log(saat + " saat"); // Print the calculated time


// 🌟Medium:  Bir çiftlikte toplamda 36 baş tavuk ve koyun bulunmaktadır. Bu hayvanlardan toplamda 100 bacak çıkmaktadır. 
// Çiftlikte kaçar tane tavuk ve koyun olduğunu bulan kod parçacığını yazar mısın?
// 🗝️ Bu problemi çözen kodu yazmanı istiyorum🤗

for (let tavukSayisi = 0; tavukSayisi <= 36; tavukSayisi++) {
  let koyunSayisi = 36 - tavukSayisi;
  let toplamBacak = (tavukSayisi * 2) + (koyunSayisi * 4);

  if (toplamBacak === 100) {
      console.log("Tavuk Sayısı: " + tavukSayisi + ", Koyun Sayısı: " + koyunSayisi);
      break;
  }
}


// 💪🏻Hard: Bir yüzme havuzunda 2 adet su girişi, 1 adet su çıkışı vardır. İlk su girişi havuzu 10 saatte doldururken, ikinci su girişi havuzu 15 saatte doldurmaktadır. Havuzun kendiliğinden boşalma hızı ise 30 saatte bir doludur. Eğer havuz boşken, her iki su girişi de açılırsa havuz ne kadar sürede dolar?😀
// 🗝️ Bu problemi çözen kodu yazmanı istiyorum🤗


const ilkGirisHizi = 1 / 10;
const ikinciGirisHizi = 1 / 15;
const cikisHizi = -1 / 30;

const toplamHiz = ilkGirisHizi + ikinciGirisHizi + cikisHizi;
const dolmaSuresi = 1 / toplamHiz;

console.log("Havuzun dolma süresi: " + dolmaSuresi + " saat");

