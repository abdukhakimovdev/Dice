// JavaScript kodini yuklashni kuting

    // 1 dan 6 gacha bo‘lgan tasodifiy raqamlarni yaratamiz
    var randomNumber1 = Math.floor(Math.random() * 6) + 1; // Player 1 uchun
    var randomNumber2 = Math.floor(Math.random() * 6) + 1; // Player 2 uchun
  
    // Zar rasmlari fayl yo‘li
    var randomImage1 = "images/dice" + randomNumber1 + ".png"; // dice1.png - dice6.png zar raqamiga mos keluvchi fayl nomini hosil qiladi
    var randomImage2 = "images/dice" + randomNumber2 + ".png";  /*zar tasvirlari papkasidagi umumiy nom.*/
  
    // HTML-dagi rasmlarni yangilash
    document.querySelector(".img1").setAttribute("src", randomImage1); /*HTML-dagi birinchi zarning <img> elementini tanlaydi.*/
    document.querySelector(".img2").setAttribute("src", randomImage2); /*tanlangan zarning tasvir manzilini (src) randomImage1 bilan almashtiradi.*/
  
    // G‘olibni aniqlash
    if (randomNumber1 > randomNumber2) {
      document.querySelector("#winner").textContent = "Player 1 Wins!";
    } else if (randomNumber1 < randomNumber2) {
      document.querySelector("#winner").textContent = "Player 2 Wins!";
    } else {
      document.querySelector("#winner").textContent = "It's a Draw!";
    }
  