// Kullanıcıya kaç adet meyve girmek istediğini soralım.
// Söylediği adet kadar meyve ismini prompt ile eklesin.
// Yazılan her bir meyveyi diziye ekleyelim
// Eklenen meyvelerin hepsini console'a yazdıralım. 

let fruitCounter = Number(prompt('Kaç adet meyve girmek istediğinizi sayıyla yazın.'));

let fruits = []
let fruit;

function addFruits() {
  for(i = 0; i < fruitCounter; i ++) {
    fruit = prompt('Eklemek istediğiniz meyve ismini yazınız.');
    fruits.push(fruit);
   }
}


function listFruits() {
  for(i = 0; i < fruits.length; i ++) {
    console.log(fruits[i]);
  }
}

addFruits();
listFruits();