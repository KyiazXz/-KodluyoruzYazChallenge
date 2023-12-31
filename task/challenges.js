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



// ---------------------------------------


// 11 challenge

// 🙌🏼 Easy: Kullanıcıdan aldığınız bir sayının faktöriyelini hesaplayan kod parçacığını yazmanızı istiyorum.


function factorial (num) {
  // your code here
let count = 1
for (let i=1 ; i<=num ; i++){
    count*=i
}
return count
}



// 🌟Medium:  Bir dizi oluşturup bu sayıların ortalamasını hesaplayan bir kod parçacığı yazar mısın?


const ar = [1,2,3,4,5,6,7,8,9];
let total = 0
function dizi (arr) {
  for (let i=0 ; i<arr.length ; i++){
    total+=arr[i]
  }
  return total/arr.length
}

dizi(ar)


//  10 challange


// 🙌🏼 Easy: Bir dizi tanımladıktan sonra bu dizinin içinden en büyük sayıyı bulan kod parçacığını yazar mısın?


const myArray = [1, 2, 3, 5, 6, 7, 8, 9];

function printArray(a) {
  let bigger = a[0];  // Initialize 'bigger' with the first element of the array

  for (let i = 1; i < a.length; i++) {
    if (bigger < a[i]) {
      bigger = a[i];  // Update 'bigger' if a smaller value is found
    }
  }

  console.log(bigger);  // Print the smallest value after the loop
}

printArray(myArray);


// 🌟Medium:  Bir dizi oluşturup içindeki sayıların en büyük ve en küçük değerlerini bulan ve ekrana yazdıran bir kod parçacığı yazar mısınız?

const myArray2 = [14, 3, 27, 8, 21, 6, 35, 18];

function findMinMaxNumbers(arr) {
  let minNumber = arr[0];  // Dizinin ilk elemanıyla başlatılır
  let maxNumber = arr[0];  // Dizinin ilk elemanıyla başlatılır

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < minNumber) {
      minNumber = arr[i];  // Daha küçük bir sayı bulunursa minNumber güncellenir
    }
    if (arr[i] > maxNumber) {
      maxNumber = arr[i];  // Daha büyük bir sayı bulunursa maxNumber güncellenir
    }
  }

  return [minNumber, maxNumber];  // En küçük ve en büyük sayıları dizi olarak döndürür
}

const [minValue, maxValue] = findMinMaxNumbers(myArray2);
console.log("En küçük sayı:", minValue);
console.log("En büyük sayı:", maxValue);


// 9 challenge

// 🙌🏼 Easy: Kullanıcıdan aldığınız sayının tek mi çift mi olduğunu ekrana yazdıran bir kod parçacığı yazar mısın?

var sayi = parseInt(prompt("Bir sayı girin:"));

// Sayının tek veya çift olduğunu kontrol et
if (sayi % 2 === 0) {
    console.log(sayi + " çift bir sayıdır.");
} else {
    console.log(sayi + " tek bir sayıdır.");
}


// 🌟Medium: Bir dizi oluşturup içindeki çift sayıların toplamını hesaplayan bir kod parçacığı yazar mısınız?

var dizi = [2, 5, 8, 10, 15, 6, 12];

// Çift sayıların toplamını hesapla
var toplam = 0;
for (var i = 0; i < dizi.length; i++) {
    if (dizi[i] % 2 === 0) {
        toplam += dizi[i];
    }
}

// console.log("Dizideki çift sayıların toplamı:", toplam);



// 8 challenge

// 🙌🏼 Easy: Kullanıcıdan aldığın sayının karesini hesaplayarak ekrana yazdıran kod parçacığını yazar mısın?

function sayi(num) {
  return Math.pow(num, 2)
}

sayi(6)


// 🌟Medium:  Oluşturduğunuz bir dizinin medyanını hesaplayan bir kod parçacığı yazar mısınız?
// 🗝️ Medyan: Dizideki sayıları sıralandığında ortada bulunan değer.🤗

const myNewArray = [1,2,3,4,5,6,7,8,9];

function medyan(arr) {
  let total = 0
  for (let i=0 ; i<arr.length ; i++){
      total+=arr[i]
  }

  return total/arr.length
}

medyan(myNewArray)


//  7 challenge

// 🙌🏼 Easy: Kullanıcıdan alınan bir kelimenin uzunluğunu hesaplayan bir kod parçacığı yazar mısın?

function NameLength (name) {
  return name.length
}
NameLength("Kyiaz")


// 🌟Medium:  Kullanıcıdan aldığınız bir sayının basamaklarının toplamını hesaplayan bir kod parçacığı yazar mısın?;

// Kullanıcıdan bir sayı girdisi alın
let sayi = prompt("Bir sayı girin:");

// Sayının basamaklarını toplamak için bir değişken tanımlayın
let toplam = 0;

// Sayının her bir basamağını toplama ekleyin
while (sayi > 0) {
    // Sayının son basamağını alın ve toplama ekleyin
    toplam += sayi % 10;
    
    // Sayının son basamağını kaldırın
    sayi = Math.floor(sayi / 10);
}

// Sonucu ekrana yazdırın
console.log("Basamaklar toplamı:", toplam);



// 5 challenge


// 🙌🏼 Easy: Kullanıcıdan aldığın iki sayının toplamını ekrana yazdıran bir kod parçacığı yazar mısın?


function kulanciAdi (say1, say2){

  return say1 + say2
}
kulanciAdi(25, 60)



// 🌟Medium:  Kullanıcıdan alınan bir metindeki kelime sayısını hesaplayan bir kod parçacığı yazar mısın?

function kelimeSayisi (str) {
 
  return str.length
}

kelimeSayisi("hello")

// 💪🏻Hard: Kullanıcının girdiği bir sayı karekökten çıkıyorsa çıktığı halini eğer çıkmıyorsa karekökten tam olarak çıkmıyor hata mesajı veren kod parçacığını yazar mısın?


//  3 challenge

// 🙌🏼 Easy: Bir futbol maçında 3 puanlık atışlarda 5 kez isabet edildi, 2 puanlık atışlarda ise 10 kez isabet edildi. Toplam kaç puan elde edildi?

const threePoints = 3*5;
const twoPoints = 2*10;

function points (threePoints, twoPoints){
 return threePoints + twoPoints

}


points (threePoints, twoPoints)


// 🌟Medium:  Bir mağazada bir kitap 80 TL, bir defter 20 TL ve bir kalem 5 TL. Bir müşteri 2 kitap, 3 defter ve 4 kalem aldı. Müşteri ne kadar ödeme yapmalı?

const kitap = 80 ; 
const defter = 20;
const kalem = 5;

const alanKitap = kitap *2 ;
const alanDefter = defter * 3 ;
const alanKalem = defter * 4;


function magaza (alanKitap, alanDefter, alanKalem){

return alanKitap  + alanDefter + alanKalem
}

magaza(alanKitap, alanDefter, alanKalem)


// 💪🏻Hard: Bir sınıfta 30 öğrenci bulunmaktadır. Öğrencilerden kaç farklı şekilde 4 kişi seçilebilir?😀


//  son 1

//  Bir kutuda 5 kırmızı, 4 yeşil ve 3 mavi top bulunuyor. Kutudan rastgele çekilen 2 topun aynı renk olma olasılığı nedir?


const redBalls = 5;
const greenBalls = 4;
const blueBalls = 3;

// Calculate the total number of balls in the box
const totalBalls = redBalls + greenBalls + blueBalls;

// Calculate the probability of drawing 2 red balls
const probabilityRed = (redBalls / totalBalls) * ((redBalls - 1) / (totalBalls - 1));

// Calculate the probability of drawing 2 green balls
const probabilityGreen = (greenBalls / totalBalls) * ((greenBalls - 1) / (totalBalls - 1));

// Calculate the probability of drawing 2 blue balls
const probabilityBlue = (blueBalls / totalBalls) * ((blueBalls - 1) / (totalBalls - 1));

// Calculate the total probability of drawing 2 balls of the same color
const totalProbability = probabilityRed + probabilityGreen + probabilityBlue;

console.log("Probability of drawing 2 balls of the same color:", totalProbability);


// 🌟Medium:  Bir öğrenci kitap okuma hedefi olarak yılda 36 kitap okumayı belirledi. Eğer her ay eşit sayıda kitap okursa kaç kitap okumuş olur?


// Yıllık kitap hedefi
const yillikKitapHedefi = 36;

// Ay sayısı
const aySayisi = 12;

// Her ay kaç kitap okunması gerektiği
const herAyKitapSayisi = yillikKitapHedefi / aySayisi;

console.log("Her ay kaç kitap okunmalı:", herAyKitapSayisi);