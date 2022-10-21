var express = require('express');
var router = express.Router();

//anasayfa ismi sabit kalması için const yapılır

const anaSayfa = function(req, res, next) {
  res.render('anasayfa',
    {
      "baslik": 'Anasayfa',
      "sayfaBaslik": {
        "siteAd": "MekanBul",
        "slogan": "Civardaki Mekanları Kesfet"
      },
      "mekanlar": [
        {
          "ad": "Starbucks",
          "puan": "5",
          "adres": "Centrum Garden AVM",
          "imkanlar": ["Kahve", "Çay", "Kek"],
          "mesafe": "10km"
        },
        {
          "ad": "İyaş Restorant",
          "puan": "4",
          "adres": "İyaş Awm",
          "imkanlar": ["Kahve", "Çay", "Kek", "Tost"],
          "mesafe": "3km"
        }

      ]

    });
}

const mekanBilgisi = function(req, res, next) {
  res.render('mekanbilgisi',
    {
      "baslik": 'Mekan Bilgisi',
      "mekanBaslik": "Starbucks",
      "mekanDetay": {
        "ad": "Starbucks",
        "puan": "5",
        "adres": "Centrum Garden AVM",
        "saatler": [
          {
            "gunler": "Pazartesi - Cuma",
            "acilis": "9:00-23:00",
            "kapali": "false"
          },
          {
            "gunler": "Cumartesi - Pazar",
            "acilis": "08:00-22:00",
            "kapali": "false"
          }

        ],
        "imkanlar": ["Kahve", "Çay", "Kek"],
        "koordinatlar": {
          "enlem": "37.7",
          "boylam": "30.5"
        },
        "yorumlar": [
          {
            "yorumYapan": "Abdulbaki Bayram",
            "yorumMetni": "Kahveler Güzeldi",
            "tarih": "21 Ekim 2022",
            "puan": "5"
          },
          {
            "yorumYapan": "Dilara Erdoğan",
            "yorumMetni": "Kahveleri Beğenmedim",
            "tarih": "21 Ekim 2022",
            "puan": "2"
          }
        ]
      }
    });
}

const yorumEkle = function(req, res, next) {
  res.render('yorumekle', { title: 'Yorum Ekle' });
}


// anasayfayı dış dünyaya açmak için 

module.exports = {
  anaSayfa, mekanBilgisi, yorumEkle
}