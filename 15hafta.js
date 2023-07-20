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
// ******************************
// ******************************

// 🙌🏼 Easy: Kullanıcıdan bir sayı almanızı ve bu sayının asal olup olmadığını kullanıcıya söylemenizi istiyorum. 

// 🗝️ Asal sayıların ortak özelliği kendisine ve bire kalansız bölünmesidir. 2’nin de asal sayı olduğunu programında unutma 😀Bütün asal sayıları tanımlamak ve kontrol etmek yerine sayının asal sayı olup olmadığını matematik işlemleriyle anlayabilirsin 😉

// function solution???

function asalSayi(num){
    if (num % 5 === 0 && num % 2 === 0 ){
      console.log(`${num} asal bir sayidir`)
    }
    else{
      console.log(`${num} asal bir sayi degildir`)
    }
  }
  asalSayi(10)

// ***********************
// ***********************
// ***********************

// 🌟Medium: Kullanıcıdan bir kelime almanız gerekiyor. Bu kelimenin harflerini büyük harflere dönüştüren bir program yazmanızı istiyorum. 

// 🗝️ C dilinde toupper() fonksiyonu harfleri büyük harfe dönüştürür.


function upperCase (str){
    console.log(str.toUpperCase())
  }
  
 upperCase("sfjlsdjdfsfaf")
  
  