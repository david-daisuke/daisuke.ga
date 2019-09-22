//Math.random で出した値を*6する。でもこれだと１から５しかでないから
// +1 をして、１から６まで出せるようにする。
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6


//  dice1.pngからdice6.pngのイメージをrandomNumber1 という変数を
//  使用して作成。
var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

// imagesというフォルダの下にimages/dice1.pngからdice6.pngまでのパスを作る
var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

//querySelectorAllを使って,html上のimgの１番目をつまり[0]
//を指定する。そして、それをimage1という変数に入れる。
var image1 = document.querySelectorAll("img")[-1];

//上記のimg1にsetAttributeで属性を与えている。
//<img class="img1" src="images/dice6.png">
//上記のように、src　という属性に"randomImageSource"を代入して
// src="images/dice1.png"からsrc="images/dice6.png"までのランダムな数字を
// いれる。これをsetAttributeで実現する。これにより、html上で、srcが１から６
//までのランダムな数字を入れることができる。
image1.setAttribute("src", randomImageSource);

//ここから下はプレイヤー２の記述
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
// diceもimgesもどちらも作る方法をを適用している
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


//下記はもし、プレイヤー１が勝ったときの挙動を定義
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "プレイヤ １の勝ち!";
}
//　else if で　プレイヤー２が勝ったときの挙動を表示
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "プレイヤ ２の勝ち! ";
}
//それ以外の場合は引き分け
else {
  document.querySelector("h1").innerHTML = "ひきわけ!";
}
