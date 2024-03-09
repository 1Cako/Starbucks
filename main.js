window.onload=zamanMesaji;
function zamanMesaji()
 {
    var saat = new Date().getHours();
    var mesaj;

    if (saat >= 6 && saat < 12)
    {
      mesaj = "Günaydın! 🌞";
    } 
    else if(saat >=13 && saat< 18)
    {
        mesaj="İyi günler ☕️"
    }

    else if(saat >=19 && saat < 23)
    {
        mesaj="İyi Akşamlar 🌙"
    }

    else
    {
        mesaj="İyi geceler 🌑"
    }
   
    document.getElementById("mesaj").innerHTML = mesaj;
  }




