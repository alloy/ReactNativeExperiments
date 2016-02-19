'use strict';



//{
//  artist(id: "banksy") {
//    artworks(size: 10) {
//      title
//      sale_message
//      image {
//        url
//        aspect_ratio
//      }
//      artist {
//        name
//      }
//      partner {
//        name
//      }
//    }
//  }
//}

let artworks = [
  {
    "title": "Radar Rat",
    "sale_message": "£20,000 - 30,000",
    "image": {
      "url": "https://d32dm0rphc51dk.cloudfront.net/ohPRSVAsWeXR55Iv-dxEvw/tall.jpg",
      "aspect_ratio": 1
    },
    "artist": {
      "name": "Banksy"
    },
    "partner": {
      "name": "Gallery Nosco"
    }
  },
  {
    "title": "CHAMPAGNE FORMICA FLAG",
    "sale_message": null,
    "image": {
      "url": "https://d32dm0rphc51dk.cloudfront.net/08yIgFpiD7kOr_EWsbMubQ/tall.jpg",
      "aspect_ratio": 1.29
    },
    "artist": {
      "name": "Banksy"
    },
    "partner": {
      "name": "Gallery Nosco"
    }
  },
  {
    "title": "Blowpop Records",
    "sale_message": "Contact For Price",
    "image": {
      "url": "https://d32dm0rphc51dk.cloudfront.net/H-KoAx18Sq6UFiwMjmTtPw/normalized.jpg",
      "aspect_ratio": 1
    },
    "artist": {
      "name": "Banksy"
    },
    "partner": {
      "name": "Julien's Auctions: Street Art Now February 2016"
    }
  },
  {
    "title": "Vettriano, Beach Rescue",
    "sale_message": null,
    "image": {
      "url": "https://d32dm0rphc51dk.cloudfront.net/DH1GuPHEOITaSFgEjOLhTA/tall.jpg",
      "aspect_ratio": 1.25
    },
    "artist": {
      "name": "Banksy"
    },
    "partner": {
      "name": "Lazarides"
    }
  },
  {
    "title": "Girl and Balloon (Diptych)",
    "sale_message": null,
    "image": {
      "url": "https://d32dm0rphc51dk.cloudfront.net/2i8Rw4xP9x-3PLeLRvYaSw/tall.jpg",
      "aspect_ratio": 0.97
    },
    "artist": {
      "name": "Banksy"
    },
    "partner": {
      "name": "Lazarides"
    }
  },
  {
    "title": "Kids on Guns",
    "sale_message": null,
    "image": {
      "url": "https://d32dm0rphc51dk.cloudfront.net/WgNYm-T_7permhh7yrcA4Q/tall.jpg",
      "aspect_ratio": 1.01
    },
    "artist": {
      "name": "Banksy"
    },
    "partner": {
      "name": "Lazarides"
    }
  },
  {
    "title": "The Key to Making Great Art is all in the Composition",
    "sale_message": null,
    "image": {
      "url": "https://d32dm0rphc51dk.cloudfront.net/f9_pLsTq_pAZnYTdXnw_cQ/tall.jpg",
      "aspect_ratio": 1
    },
    "artist": {
      "name": "Banksy"
    },
    "partner": {
      "name": "Lazarides"
    }
  },
  {
    "title": "Graffiti Cottage",
    "sale_message": null,
    "image": {
      "url": "https://d32dm0rphc51dk.cloudfront.net/tNtyTyg30oawwsYszmEiQQ/tall.jpg",
      "aspect_ratio": 1.16
    },
    "artist": {
      "name": "Banksy"
    },
    "partner": {
      "name": "Lazarides"
    }
  },
  {
    "title": "Keep It Real",
    "sale_message": null,
    "image": {
      "url": "https://d32dm0rphc51dk.cloudfront.net/N3Jzl43P03wezA3KGKhOwA/tall.jpg",
      "aspect_ratio": 0.88
    },
    "artist": {
      "name": "Banksy"
    },
    "partner": {
      "name": "Lazarides"
    }
  },
  {
    "title": "Kissing Coppers",
    "sale_message": "Contact For Price",
    "image": {
      "url": "https://d32dm0rphc51dk.cloudfront.net/O1M6sRtdF_r5OcGeZmsU4A/tall.jpg",
      "aspect_ratio": 0.81
    },
    "artist": {
      "name": "Banksy"
    },
    "partner": {
      "name": "Lazarides"
    }
  },
  {
    "title": "Paranoid Pictures (Unique)",
    "sale_message": "Contact For Price",
    "image": {
      "url": "https://d32dm0rphc51dk.cloudfront.net/gjr78SgtpMtmcBKN7ylq1Q/tall.jpg",
      "aspect_ratio": 1
    },
    "artist": {
      "name": "Banksy"
    },
    "partner": {
      "name": "Gallery Nosco"
    }
  },
  {
    "title": "Avon and Somerset Constabulary",
    "sale_message": null,
    "image": {
      "url": "https://d32dm0rphc51dk.cloudfront.net/Vze4qMojN0ko90Tf7Z99yA/tall.jpg",
      "aspect_ratio": 0.99
    },
    "artist": {
      "name": "Banksy"
    },
    "partner": {
      "name": "Lazarides"
    }
  },
  {
    "title": "Lenin on Skates",
    "sale_message": null,
    "image": {
      "url": "https://d32dm0rphc51dk.cloudfront.net/Yx1IafyWqv3ZqdrjsfK3Kw/tall.jpg",
      "aspect_ratio": 0.79
    },
    "artist": {
      "name": "Banksy"
    },
    "partner": {
      "name": "Lazarides"
    }
  },
  {
    "title": "Pooh ",
    "sale_message": "Contact For Price",
    "image": {
      "url": "https://d32dm0rphc51dk.cloudfront.net/TvknLME7cKDznJybofd93g/tall.jpg",
      "aspect_ratio": 1.01
    },
    "artist": {
      "name": "Banksy"
    },
    "partner": {
      "name": "Guy Hepner"
    }
  },
  {
    "title": "Forgive me my trespassing",
    "sale_message": null,
    "image": {
      "url": "https://d32dm0rphc51dk.cloudfront.net/t5yVbNm1ventzShg0p42Bg/tall.jpg",
      "aspect_ratio": 0.71
    },
    "artist": {
      "name": "Banksy"
    },
    "partner": {
      "name": "MUCA"
    }
  },
  {
    "title": "Barcode shark",
    "sale_message": null,
    "image": {
      "url": "https://d32dm0rphc51dk.cloudfront.net/W_voNa-yjtGlD7Xo0fQNKQ/tall.jpg",
      "aspect_ratio": 1
    },
    "artist": {
      "name": "Banksy"
    },
    "partner": {
      "name": "MUCA"
    }
  },
  {
    "title": "Keep it Real ",
    "sale_message": "Contact For Price",
    "image": {
      "url": "https://d32dm0rphc51dk.cloudfront.net/VmzSBR1whWfx3fJdB5xAqg/tall.jpg",
      "aspect_ratio": 1
    },
    "artist": {
      "name": "Banksy"
    },
    "partner": {
      "name": "Guy Hepner"
    }
  },
  {
    "title": "Heavy Weaponry",
    "sale_message": "Contact For Price",
    "image": {
      "url": "https://d32dm0rphc51dk.cloudfront.net/-K7fgH6erIa-mA0lNSUsiw/tall.jpg",
      "aspect_ratio": 1.2
    },
    "artist": {
      "name": "Banksy"
    },
    "partner": {
      "name": "Guy Hepner"
    }
  },
  {
    "title": "Sid Vicious - Target",
    "sale_message": null,
    "image": {
      "url": "https://d32dm0rphc51dk.cloudfront.net/62u0Zs1q3qKFL5F79bzrgQ/tall.jpg",
      "aspect_ratio": 1.01
    },
    "artist": {
      "name": "Banksy"
    },
    "partner": {
      "name": "Lazarides"
    }
  },
  {
    "title": "LENIN ON ROLLERSKATES",
    "sale_message": "Contact For Price",
    "image": {
      "url": "https://d32dm0rphc51dk.cloudfront.net/gSBv5uSIE-TDUXpx8VhEFg/tall.jpg",
      "aspect_ratio": 0.76
    },
    "artist": {
      "name": "Banksy"
    },
    "partner": {
      "name": "Guy Hepner"
    }
  },
  {
    "title": "Study for Happy Choppers",
    "sale_message": "Contact For Price",
    "image": {
      "url": "https://d32dm0rphc51dk.cloudfront.net/EG8l2IrDZ0hVOYNPfJ7U3Q/tall.jpg",
      "aspect_ratio": 1.39
    },
    "artist": {
      "name": "Banksy"
    },
    "partner": {
      "name": "DELAHUNTY"
    }
  },
  {
    "title": "Radar rat",
    "sale_message": "Contact For Price",
    "image": {
      "url": "https://d32dm0rphc51dk.cloudfront.net/pxzWGTBsasswLhUfE5gpHg/tall.jpg",
      "aspect_ratio": 1
    },
    "artist": {
      "name": "Banksy"
    },
    "partner": {
      "name": "Taglialatella Galleries"
    }
  },
  {
    "title": "Precision Bombing",
    "sale_message": "£75,000 - 100,000",
    "image": {
      "url": "https://d32dm0rphc51dk.cloudfront.net/AAPNWpmiBKFzxnBPr2vFjg/tall.jpg",
      "aspect_ratio": 1.09
    },
    "artist": {
      "name": "Banksy"
    },
    "partner": {
      "name": "Andipa Gallery"
    }
  },
  {
    "title": "Sale Ends Today",
    "sale_message": "Contact For Price",
    "image": {
      "url": "https://d32dm0rphc51dk.cloudfront.net/3MMoBW618Vg_3gpKx5bamQ/tall.jpg",
      "aspect_ratio": 1.98
    },
    "artist": {
      "name": "Banksy"
    },
    "partner": {
      "name": "Collectors Contemporary"
    }
  },
  {
    "title": "Filth",
    "sale_message": "Contact For Price",
    "image": {
      "url": "https://d32dm0rphc51dk.cloudfront.net/qqONbfdpd_kNf_t3XCg2DQ/tall.jpg",
      "aspect_ratio": 0.91
    },
    "artist": {
      "name": "Banksy"
    },
    "partner": {
      "name": "Taglialatella Galleries"
    }
  },
  {
    "title": "Custardized Oil #3",
    "sale_message": null,
    "image": {
      "url": "https://d32dm0rphc51dk.cloudfront.net/aYj9DHHOBGRnFaznIxLZwA/tall.jpg",
      "aspect_ratio": 0.84
    },
    "artist": {
      "name": "Banksy"
    },
    "partner": {
      "name": "Andipa Gallery"
    }
  },
  {
    "title": "London, New York, Bristol (Heavy Weaponry)",
    "sale_message": "£75,000 - 100,000",
    "image": {
      "url": "https://d32dm0rphc51dk.cloudfront.net/vBbt5itkB9xhjn3oUUkA7g/tall.jpg",
      "aspect_ratio": 1.06
    },
    "artist": {
      "name": "Banksy"
    },
    "partner": {
      "name": "Andipa Gallery"
    }
  },
  {
    "title": "Mariachi Player",
    "sale_message": null,
    "image": {
      "url": "https://d32dm0rphc51dk.cloudfront.net/fieDB6bwOaztjUFRpvkHfg/tall.jpg",
      "aspect_ratio": 0.76
    },
    "artist": {
      "name": "Banksy"
    },
    "partner": {
      "name": "Taglialatella Galleries"
    }
  },
  {
    "title": "Toxic Mary (double)",
    "sale_message": "Contact For Price",
    "image": {
      "url": "https://d32dm0rphc51dk.cloudfront.net/0Yc-qY4JkEzu_-v9au4nfA/normalized.jpg",
      "aspect_ratio": 0.98
    },
    "artist": {
      "name": "Banksy"
    },
    "partner": {
      "name": "Galerie Kronsbein"
    }
  },
  {
    "title": "Lenin on Rollerblades",
    "sale_message": "Contact For Price",
    "image": {
      "url": "https://d32dm0rphc51dk.cloudfront.net/cgsQH7qFLfl6v7l9JvKxCA/tall.jpg",
      "aspect_ratio": 0.76
    },
    "artist": {
      "name": "Banksy"
    },
    "partner": {
      "name": "Guy Hepner"
    }
  },
  {
    "title": "Girl With Balloon (unsigned)",
    "sale_message": "Contact For Price",
    "image": {
      "url": "https://d32dm0rphc51dk.cloudfront.net/HYYx85T79cjGZrg57npG8A/tall.jpg",
      "aspect_ratio": 0.69
    },
    "artist": {
      "name": "Banksy"
    },
    "partner": {
      "name": "Guy Hepner"
    }
  },
  {
    "title": "Christ with Shopping Bags",
    "sale_message": "Contact For Price",
    "image": {
      "url": "https://d32dm0rphc51dk.cloudfront.net/c4mri7MWB2RdT3xXM6-iiw/tall.jpg",
      "aspect_ratio": 0.7
    },
    "artist": {
      "name": "Banksy"
    },
    "partner": {
      "name": "Masters Projects"
    }
  },
  {
    "title": "Laugh Now",
    "sale_message": "Contact For Price",
    "image": {
      "url": "https://d32dm0rphc51dk.cloudfront.net/ivCuGRbCGF3V8T_ov7IWOA/tall.jpg",
      "aspect_ratio": 0.71
    },
    "artist": {
      "name": "Banksy"
    },
    "partner": {
      "name": "IFAC Arts"
    }
  },
  {
    "title": null,
    "sale_message": null,
    "image": {
      "url": "https://d32dm0rphc51dk.cloudfront.net/KVA2VOXIsp6dHUdH2ShpAg/tall.jpg",
      "aspect_ratio": 0.99
    },
    "artist": {
      "name": "Banksy"
    },
    "partner": {
      "name": "Andipa Gallery"
    }
  },
  {
    "title": "Pulp Fiction",
    "sale_message": "Contact For Price",
    "image": {
      "url": "https://d32dm0rphc51dk.cloudfront.net/6SWT3cOaEzdtXbAOkO5mjg/tall.jpg",
      "aspect_ratio": 1.43
    },
    "artist": {
      "name": "Banksy"
    },
    "partner": {
      "name": "Lazarides"
    }
  },
  {
    "title": "Choose Your Weapon (Purple)",
    "sale_message": "Contact For Price",
    "image": {
      "url": "https://d32dm0rphc51dk.cloudfront.net/Mt6vrYtE8Tbe3c-WjEHuwg/tall.jpg",
      "aspect_ratio": 1
    },
    "artist": {
      "name": "Banksy"
    },
    "partner": {
      "name": "Guy Hepner"
    }
  },
  {
    "title": "Color Trolleys",
    "sale_message": "$10,000 - 15,000",
    "image": {
      "url": "https://d32dm0rphc51dk.cloudfront.net/u_sBw13n8xRbw9UuqpxrQA/tall.jpg",
      "aspect_ratio": 1.51
    },
    "artist": {
      "name": "Banksy"
    },
    "partner": {
      "name": "IFAC Arts"
    }
  },
  {
    "title": "Donuts (Strawberry)",
    "sale_message": "$15,000 - 20,000",
    "image": {
      "url": "https://d32dm0rphc51dk.cloudfront.net/zRVhcARdZkvZfNPo_P71Uw/tall.jpg",
      "aspect_ratio": 1.36
    },
    "artist": {
      "name": "Banksy"
    },
    "partner": {
      "name": "IFAC Arts"
    }
  },
  {
    "title": "Kate Moss (Original Colour Way)",
    "sale_message": "Contact For Price",
    "image": {
      "url": "https://d32dm0rphc51dk.cloudfront.net/EVlwWBWBG6vVTeyFD3n8fw/tall.jpg",
      "aspect_ratio": 1
    },
    "artist": {
      "name": "Banksy"
    },
    "partner": {
      "name": "Masters Projects"
    }
  },
  {
    "title": "Soup Can, AP",
    "sale_message": "Contact For Price",
    "image": {
      "url": "https://d32dm0rphc51dk.cloudfront.net/v30qExyxR6GsoNFdgoWi3A/tall.jpg",
      "aspect_ratio": 0.69
    },
    "artist": {
      "name": "Banksy"
    },
    "partner": {
      "name": "Masters Projects"
    }
  },
  {
    "title": "Kate (grey)",
    "sale_message": null,
    "image": {
      "url": "https://d32dm0rphc51dk.cloudfront.net/5Y4fCtzaAxYBKsxVo1_twQ/tall.jpg",
      "aspect_ratio": 0.99
    },
    "artist": {
      "name": "Banksy"
    },
    "partner": {
      "name": "MUCA"
    }
  },
  {
    "title": "Grannies",
    "sale_message": "Contact For Price",
    "image": {
      "url": "https://d32dm0rphc51dk.cloudfront.net/eiN8HZTXOdTDua4--W6M1w/tall.jpg",
      "aspect_ratio": 1.5
    },
    "artist": {
      "name": "Banksy"
    },
    "partner": {
      "name": "Puccio Fine Art"
    }
  },
  {
    "title": "No Ball Games",
    "sale_message": "Contact For Price",
    "image": {
      "url": "https://d32dm0rphc51dk.cloudfront.net/SneR0S4iI9-_r6fz3LfciA/tall.jpg",
      "aspect_ratio": 1.04
    },
    "artist": {
      "name": "Banksy"
    },
    "partner": {
      "name": "IFAC Arts"
    }
  },
  {
    "title": "CND Soldiers",
    "sale_message": "Contact For Price",
    "image": {
      "url": "https://d32dm0rphc51dk.cloudfront.net/saDkaetsVMorkdziguczcw/tall.jpg",
      "aspect_ratio": 0.73
    },
    "artist": {
      "name": "Banksy"
    },
    "partner": {
      "name": "Guy Hepner"
    }
  },
  {
    "title": "Stop and search",
    "sale_message": null,
    "image": {
      "url": "https://d32dm0rphc51dk.cloudfront.net/jZqOsXbZGvAbRfKz-ZA3kA/tall.jpg",
      "aspect_ratio": 0.8
    },
    "artist": {
      "name": "Banksy"
    },
    "partner": {
      "name": "MUCA"
    }
  },
  {
    "title": "Bomb Hugger",
    "sale_message": "$15,000 - 20,000",
    "image": {
      "url": "https://d32dm0rphc51dk.cloudfront.net/M-9b6O_mXuwXrdRjoDou1Q/tall.jpg",
      "aspect_ratio": 0.71
    },
    "artist": {
      "name": "Banksy"
    },
    "partner": {
      "name": "IFAC Arts"
    }
  },
  {
    "title": "Love is in the Air",
    "sale_message": null,
    "image": {
      "url": "https://d32dm0rphc51dk.cloudfront.net/ewuwtqcpOERuv_qAMuPuGw/tall.jpg",
      "aspect_ratio": 1.41
    },
    "artist": {
      "name": "Banksy"
    },
    "partner": {
      "name": "Masters Projects"
    }
  },
  {
    "title": "Donuts (Strawberry), 2009",
    "sale_message": "$30,000",
    "image": {
      "url": "https://d32dm0rphc51dk.cloudfront.net/u4AmylRnU7qbJzlnv8Jmmw/tall.jpg",
      "aspect_ratio": 1.37
    },
    "artist": {
      "name": "Banksy"
    },
    "partner": {
      "name": "Fine Art Mia"
    }
  },
  {
    "title": "Pulp Fiction",
    "sale_message": "Contact For Price",
    "image": {
      "url": "https://d32dm0rphc51dk.cloudfront.net/BIGCtydr7WFJ9oLdsSoMzg/tall.jpg",
      "aspect_ratio": 1.48
    },
    "artist": {
      "name": "Banksy"
    },
    "partner": {
      "name": "Puccio Fine Art"
    }
  },
  {
    "title": "Grannies",
    "sale_message": "Contact For Price",
    "image": {
      "url": "https://d32dm0rphc51dk.cloudfront.net/JbnaESwokD6ASiFuSXKVYw/tall.jpg",
      "aspect_ratio": 1.5
    },
    "artist": {
      "name": "Banksy"
    },
    "partner": {
      "name": "IFAC Arts"
    }
  },
  {
    "title": "Donuts (Strawberry)",
    "sale_message": "Contact For Price",
    "image": {
      "url": "https://d32dm0rphc51dk.cloudfront.net/w1NO3tNQKafq3BVp71Wr3A/tall.jpg",
      "aspect_ratio": 1.55
    },
    "artist": {
      "name": "Banksy"
    },
    "partner": {
      "name": "David Benrimon Fine Art"
    }
  },
  {
    "title": "Barcode",
    "sale_message": null,
    "image": {
      "url": "https://d32dm0rphc51dk.cloudfront.net/AFgX_5-tsjQre4tT6vgdYw/tall.jpg",
      "aspect_ratio": 1.41
    },
    "artist": {
      "name": "Banksy"
    },
    "partner": {
      "name": "Lazarides"
    }
  },
  {
    "title": "Choose Your Weapon (Red)",
    "sale_message": "Contact For Price",
    "image": {
      "url": "https://d32dm0rphc51dk.cloudfront.net/IQYzCaCPId_U6YyEFfCMIw/tall.jpg",
      "aspect_ratio": 1
    },
    "artist": {
      "name": "Banksy"
    },
    "partner": {
      "name": "Masters Projects"
    }
  },
  {
    "title": "Choose Your Weapon (Purple)",
    "sale_message": null,
    "image": {
      "url": "https://d32dm0rphc51dk.cloudfront.net/kCdMhYCnuGmRD4r7-wlCvg/tall.jpg",
      "aspect_ratio": 1
    },
    "artist": {
      "name": "Banksy"
    },
    "partner": {
      "name": "IFAC Arts"
    }
  },
  {
    "title": "Queen Vic",
    "sale_message": null,
    "image": {
      "url": "https://d32dm0rphc51dk.cloudfront.net/pY0yvqrYXdfIpWWI24hfxQ/tall.jpg",
      "aspect_ratio": 0.7
    },
    "artist": {
      "name": "Banksy"
    },
    "partner": {
      "name": "MUCA"
    }
  },
  {
    "title": "Jack and Jill",
    "sale_message": "$15,000 - 20,000",
    "image": {
      "url": "https://d32dm0rphc51dk.cloudfront.net/gkO0yqGgtV5s3qT0rk3X3Q/tall.jpg",
      "aspect_ratio": 1.43
    },
    "artist": {
      "name": "Banksy"
    },
    "partner": {
      "name": "IFAC Arts"
    }
  },
  {
    "title": "Because I'm Worthless",
    "sale_message": null,
    "image": {
      "url": "https://d32dm0rphc51dk.cloudfront.net/OMs5dLOXC2aCRilLvkSGhw/tall.jpg",
      "aspect_ratio": 0.72
    },
    "artist": {
      "name": "Banksy"
    },
    "partner": {
      "name": "IFAC Arts"
    }
  },
  {
    "title": "Jack and Jill (Police kids)",
    "sale_message": "Contact For Price",
    "image": {
      "url": "https://d32dm0rphc51dk.cloudfront.net/p96JxJ_Kz-CLX7qXDAwP2Q/tall.jpg",
      "aspect_ratio": 1.35
    },
    "artist": {
      "name": "Banksy"
    },
    "partner": {
      "name": "Puccio Fine Art"
    }
  },
  {
    "title": "Di-Face Tenners Artist Proof",
    "sale_message": null,
    "image": {
      "url": "https://d32dm0rphc51dk.cloudfront.net/YcDGGz6VGsClN1SblcEJUw/tall.jpg",
      "aspect_ratio": 0.76
    },
    "artist": {
      "name": "Banksy"
    },
    "partner": {
      "name": "Gallery Nosco"
    }
  },
  {
    "title": "Stop and Search",
    "sale_message": "Contact For Price",
    "image": {
      "url": "https://d32dm0rphc51dk.cloudfront.net/eg-XGXjAZ2M7kO3V-SH8ug/tall.jpg",
      "aspect_ratio": 0.72
    },
    "artist": {
      "name": "Banksy"
    },
    "partner": {
      "name": "Puccio Fine Art"
    }
  },
  {
    "title": "Grannies",
    "sale_message": "$15,000 - 20,000",
    "image": {
      "url": "https://d32dm0rphc51dk.cloudfront.net/X0Pjqj54MuxJlRaMnKl17g/tall.jpg",
      "aspect_ratio": 1.5
    },
    "artist": {
      "name": "Banksy"
    },
    "partner": {
      "name": "Masters Projects"
    }
  },
  {
    "title": "Have a Nice Day",
    "sale_message": "Contact For Price",
    "image": {
      "url": "https://d32dm0rphc51dk.cloudfront.net/fwTWstwCC1O2xDRbzMxyDg/tall.jpg",
      "aspect_ratio": 2.91
    },
    "artist": {
      "name": "Banksy"
    },
    "partner": {
      "name": "Puccio Fine Art"
    }
  },
  {
    "title": "Choose Your Weapon (Khaki)",
    "sale_message": "$30,000",
    "image": {
      "url": "https://d32dm0rphc51dk.cloudfront.net/iowoRAjAU2rSp2PS2bXEQA/tall.jpg",
      "aspect_ratio": 0.99
    },
    "artist": {
      "name": "Banksy"
    },
    "partner": {
      "name": "Fine Art Mia"
    }
  },
  {
    "title": "Choose Your Weapon ",
    "sale_message": "Contact For Price",
    "image": {
      "url": "https://d32dm0rphc51dk.cloudfront.net/obgT-meeXeYMcCDj4SDb6Q/tall.jpg",
      "aspect_ratio": 1
    },
    "artist": {
      "name": "Banksy"
    },
    "partner": {
      "name": "Guy Hepner"
    }
  },
  {
    "title": "Kate Moss Green / Turquoise Hair",
    "sale_message": "Contact For Price",
    "image": {
      "url": "https://d32dm0rphc51dk.cloudfront.net/W_21WspS3EPtM0hb_qXGJQ/tall.jpg",
      "aspect_ratio": 1
    },
    "artist": {
      "name": "Banksy"
    },
    "partner": {
      "name": "Masters Projects"
    }
  },
  {
    "title": "Laugh Now",
    "sale_message": "Contact For Price",
    "image": {
      "url": "https://d32dm0rphc51dk.cloudfront.net/U2pWKhtJKbiPTGN2AImQVQ/tall.jpg",
      "aspect_ratio": 0.72
    },
    "artist": {
      "name": "Banksy"
    },
    "partner": {
      "name": "Masters Projects"
    }
  },
  {
    "title": "Flying Copper",
    "sale_message": "Contact For Price",
    "image": {
      "url": "https://d32dm0rphc51dk.cloudfront.net/74HwGPB6NOyFCwVVoyyFog/tall.jpg",
      "aspect_ratio": 1
    },
    "artist": {
      "name": "Banksy"
    },
    "partner": {
      "name": "Puccio Fine Art"
    }
  },
  {
    "title": "Donuts - Strawberry",
    "sale_message": "Contact For Price",
    "image": {
      "url": "https://d32dm0rphc51dk.cloudfront.net/ja_CEq_NItqkukbbojxLOQ/tall.jpg",
      "aspect_ratio": 1.36
    },
    "artist": {
      "name": "Banksy"
    },
    "partner": {
      "name": "Puccio Fine Art"
    }
  },
  {
    "title": "HMV Dog",
    "sale_message": "Contact For Price",
    "image": {
      "url": "https://d32dm0rphc51dk.cloudfront.net/I4KEYTA8M9rLaplhlEu6Jg/tall.jpg",
      "aspect_ratio": 1.39
    },
    "artist": {
      "name": "Banksy"
    },
    "partner": {
      "name": "Guy Hepner"
    }
  },
  {
    "title": "Morons (White & Gold)",
    "sale_message": "Contact For Price",
    "image": {
      "url": "https://d32dm0rphc51dk.cloudfront.net/6t50WpIoy28paRT0XE2lYg/normalized.jpg",
      "aspect_ratio": 1.32
    },
    "artist": {
      "name": "Banksy"
    },
    "partner": {
      "name": "Julien's Auctions: Street Art Now February 2016"
    }
  },
  {
    "title": "Nola",
    "sale_message": "Contact For Price",
    "image": {
      "url": "https://d32dm0rphc51dk.cloudfront.net/c7IPKp1AhAtX4IFI9t5KAw/tall.jpg",
      "aspect_ratio": 0.67
    },
    "artist": {
      "name": "Banksy"
    },
    "partner": {
      "name": "Puccio Fine Art"
    }
  },
  {
    "title": "Donuts (Chocolate)",
    "sale_message": "Contact For Price",
    "image": {
      "url": "https://d32dm0rphc51dk.cloudfront.net/AZEikOIAetj0NERz8amR0Q/tall.jpg",
      "aspect_ratio": 1.36
    },
    "artist": {
      "name": "Banksy"
    },
    "partner": {
      "name": "Puccio Fine Art"
    }
  },
  {
    "title": "No ball games (green)",
    "sale_message": null,
    "image": {
      "url": "https://d32dm0rphc51dk.cloudfront.net/k9wJ7nIUFx8fXAttcmNlAw/tall.jpg",
      "aspect_ratio": 1.03
    },
    "artist": {
      "name": "Banksy"
    },
    "partner": {
      "name": "MUCA"
    }
  },
  {
    "title": "Happy Choppers",
    "sale_message": "Contact For Price",
    "image": {
      "url": "https://d32dm0rphc51dk.cloudfront.net/GYyOLCwRKbdJ4n85xiBX4A/tall.jpg",
      "aspect_ratio": 0.69
    },
    "artist": {
      "name": "Banksy"
    },
    "partner": {
      "name": "Masters Projects"
    }
  },
  {
    "title": "Nola (Blue/Green), AP",
    "sale_message": "Contact For Price",
    "image": {
      "url": "https://d32dm0rphc51dk.cloudfront.net/8dZ9LAVrEAO7hdIviXD5lg/tall.jpg",
      "aspect_ratio": 0.69
    },
    "artist": {
      "name": "Banksy"
    },
    "partner": {
      "name": "Masters Projects"
    }
  },
  {
    "title": "Nola (Orange)",
    "sale_message": null,
    "image": {
      "url": "https://d32dm0rphc51dk.cloudfront.net/sTzTvsN2EoLOkogcVwRCDg/tall.jpg",
      "aspect_ratio": 0.63
    },
    "artist": {
      "name": "Banksy"
    },
    "partner": {
      "name": "MUCA"
    }
  },
  {
    "title": "Choose your weapon (grey)",
    "sale_message": null,
    "image": {
      "url": "https://d32dm0rphc51dk.cloudfront.net/bA55qNRBOIHDFUY9tIJSrw/tall.jpg",
      "aspect_ratio": 1
    },
    "artist": {
      "name": "Banksy"
    },
    "partner": {
      "name": "MUCA"
    }
  },
  {
    "title": "Stop and Search",
    "sale_message": "$20,000 - 30,000",
    "image": {
      "url": "https://d32dm0rphc51dk.cloudfront.net/bfp3UY0N_MrbMrjKUttKOA/tall.jpg",
      "aspect_ratio": 0.75
    },
    "artist": {
      "name": "Banksy"
    },
    "partner": {
      "name": "Desert Casino"
    }
  },
  {
    "title": "Choose Your Weapon (Grey) ",
    "sale_message": "Contact For Price",
    "image": {
      "url": "https://d32dm0rphc51dk.cloudfront.net/sRB3-viRwMMZPNGmLubL4w/tall.jpg",
      "aspect_ratio": 1
    },
    "artist": {
      "name": "Banksy"
    },
    "partner": {
      "name": "David Benrimon Fine Art"
    }
  },
  {
    "title": "Toxic Mary",
    "sale_message": null,
    "image": {
      "url": "https://d32dm0rphc51dk.cloudfront.net/H416Fbp2qsud-gxBQv5szA/tall.jpg",
      "aspect_ratio": 0.68
    },
    "artist": {
      "name": "Banksy"
    },
    "partner": {
      "name": "MUCA"
    }
  },
  {
    "title": "Gangsta Rat",
    "sale_message": "Contact For Price",
    "image": {
      "url": "https://d32dm0rphc51dk.cloudfront.net/5zPV021kAYaZ0rvqj8-VCA/tall.jpg",
      "aspect_ratio": 0.7
    },
    "artist": {
      "name": "Banksy"
    },
    "partner": {
      "name": "Masters Projects"
    }
  },
  {
    "title": "Very Little Helps",
    "sale_message": "Contact For Price",
    "image": {
      "url": "https://d32dm0rphc51dk.cloudfront.net/XN7RnFHzGG6nVjZQm8Gb6A/tall.jpg",
      "aspect_ratio": 0.74
    },
    "artist": {
      "name": "Banksy"
    },
    "partner": {
      "name": "Puccio Fine Art"
    }
  },
  {
    "title": "Super Mare",
    "sale_message": "Contact For Price",
    "image": {
      "url": "https://d32dm0rphc51dk.cloudfront.net/dXBBs9YEMeg55p64ar8vrQ/tall.jpg",
      "aspect_ratio": 2.62
    },
    "artist": {
      "name": "Banksy"
    },
    "partner": {
      "name": "Puccio Fine Art"
    }
  },
  {
    "title": "Color Trolleys",
    "sale_message": "Contact For Price",
    "image": {
      "url": "https://d32dm0rphc51dk.cloudfront.net/8X1CKy3-NPrMJxFe6P_q0A/tall.jpg",
      "aspect_ratio": 1.35
    },
    "artist": {
      "name": "Banksy"
    },
    "partner": {
      "name": "Masters Projects"
    }
  },
  {
    "title": "Nola",
    "sale_message": "Contact For Price",
    "image": {
      "url": "https://d32dm0rphc51dk.cloudfront.net/kbI2RSpDtUxy6XlgNZ7A6g/tall.jpg",
      "aspect_ratio": 0.67
    },
    "artist": {
      "name": "Banksy"
    },
    "partner": {
      "name": "Masters Projects"
    }
  },
  {
    "title": "Choose your weapon (silver)",
    "sale_message": null,
    "image": {
      "url": "https://d32dm0rphc51dk.cloudfront.net/eGNpNpKYnxpy5QwxSDYk6Q/tall.jpg",
      "aspect_ratio": 1
    },
    "artist": {
      "name": "Banksy"
    },
    "partner": {
      "name": "MUCA"
    }
  },
  {
    "title": "Choose Your Weapon Turquoise",
    "sale_message": "Contact For Price",
    "image": {
      "url": "https://d32dm0rphc51dk.cloudfront.net/5xdDmoH0vxbxKE_CPNJPxQ/tall.jpg",
      "aspect_ratio": 1
    },
    "artist": {
      "name": "Banksy"
    },
    "partner": {
      "name": "Guy Hepner"
    }
  },
  {
    "title": "No Ball Games",
    "sale_message": "Contact For Price",
    "image": {
      "url": "https://d32dm0rphc51dk.cloudfront.net/5FItJbS1okfeyTh6aZEB5w/tall.jpg",
      "aspect_ratio": 1.04
    },
    "artist": {
      "name": "Banksy"
    },
    "partner": {
      "name": "Puccio Fine Art"
    }
  },
  {
    "title": "Monkey Queen",
    "sale_message": "Contact For Price",
    "image": {
      "url": "https://d32dm0rphc51dk.cloudfront.net/__AR50l1bEBDPh3vLwjkGQ/tall.jpg",
      "aspect_ratio": 0.69
    },
    "artist": {
      "name": "Banksy"
    },
    "partner": {
      "name": "Lazarides"
    }
  },
  {
    "title": "Morons (Sepia)",
    "sale_message": "Contact For Price",
    "image": {
      "url": "https://d32dm0rphc51dk.cloudfront.net/VbhBFXTIflLhWpuI4SQr5A/tall.jpg",
      "aspect_ratio": 1.35
    },
    "artist": {
      "name": "Banksy"
    },
    "partner": {
      "name": "Guy Hepner"
    }
  },
  {
    "title": "Gold Flag",
    "sale_message": "Contact For Price",
    "image": {
      "url": "https://d32dm0rphc51dk.cloudfront.net/oxIc9dxrEYQViYcu-xzHcg/tall.jpg",
      "aspect_ratio": 1.39
    },
    "artist": {
      "name": "Banksy"
    },
    "partner": {
      "name": "Puccio Fine Art"
    }
  },
  {
    "title": "Choose Your Weapon (Magenta)",
    "sale_message": "Contact For Price",
    "image": {
      "url": "https://d32dm0rphc51dk.cloudfront.net/QQ5UpuuRR9jy9Bsrgxo4Fw/tall.jpg",
      "aspect_ratio": 1
    },
    "artist": {
      "name": "Banksy"
    },
    "partner": {
      "name": "Masters Projects"
    }
  },
  {
    "title": "CND Soldiers",
    "sale_message": "Contact For Price",
    "image": {
      "url": "https://d32dm0rphc51dk.cloudfront.net/XacTibaM7Bq-7Uoc24YsKw/tall.jpg",
      "aspect_ratio": null
    },
    "artist": {
      "name": "Banksy"
    },
    "partner": {
      "name": "Puccio Fine Art"
    }
  },
  {
    "title": "Trolley Hunters - Trolleys",
    "sale_message": "Contact For Price",
    "image": {
      "url": "https://d32dm0rphc51dk.cloudfront.net/8tuMhDIzW-foOExDwSlGJw/tall.jpg",
      "aspect_ratio": 1.44
    },
    "artist": {
      "name": "Banksy"
    },
    "partner": {
      "name": "Puccio Fine Art"
    }
  },
  {
    "title": "Donuts (Strawberry)",
    "sale_message": "Contact For Price",
    "image": {
      "url": "https://d32dm0rphc51dk.cloudfront.net/O_fyHWHss6UYK4Yf6cfx6A/tall.jpg",
      "aspect_ratio": 1.33
    },
    "artist": {
      "name": "Banksy"
    },
    "partner": {
      "name": "Masters Projects"
    }
  },
  {
    "title": "Trolley hunters",
    "sale_message": null,
    "image": {
      "url": "https://d32dm0rphc51dk.cloudfront.net/x1-RGaN3vMseFa-NTsiVgw/tall.jpg",
      "aspect_ratio": 1.5
    },
    "artist": {
      "name": "Banksy"
    },
    "partner": {
      "name": "MUCA"
    }
  },
  {
    "title": "Choose Your Weapon (Khaki)",
    "sale_message": "Contact For Price",
    "image": {
      "url": "https://d32dm0rphc51dk.cloudfront.net/Zaqq3N02qbH4ttTubi3oRg/tall.jpg",
      "aspect_ratio": 1
    },
    "artist": {
      "name": "Banksy"
    },
    "partner": {
      "name": "Puccio Fine Art"
    }
  },
  {
    "title": "Choose Your Weapon",
    "sale_message": null,
    "image": {
      "url": "https://d32dm0rphc51dk.cloudfront.net/kyO0TcrpZ8d3Gz0nZwijRw/tall.jpg",
      "aspect_ratio": 1
    },
    "artist": {
      "name": "Banksy"
    },
    "partner": {
      "name": "Masters Projects"
    }
  },
  {
    "title": "Morons",
    "sale_message": "£5,000 - 7,500",
    "image": {
      "url": "https://d32dm0rphc51dk.cloudfront.net/j2mnFxWRgsyzxetGO7JCSA/tall.jpg",
      "aspect_ratio": 1.36
    },
    "artist": {
      "name": "Banksy"
    },
    "partner": {
      "name": "Imitate Modern"
    }
  },
  {
    "title": "No Ball Games (Green)",
    "sale_message": "Contact For Price",
    "image": {
      "url": "https://d32dm0rphc51dk.cloudfront.net/-8B1GAHTqgr5B3uevFmbKw/tall.jpg",
      "aspect_ratio": 1.02
    },
    "artist": {
      "name": "Banksy"
    },
    "partner": {
      "name": "IFAC Arts"
    }
  }
];



var React = require('react-native');
var {
  Text,
  TouchableHighlight,
  View,
  NativeModules
} = React;


// TODO: I tried adding the components dir to the package manager with the `--root` option,
//       but to no avail, so using this relative style for now.
//let ARArtworkComponent = require('../ARComponents/ARArtworkComponent');
let ARMasonryGridComponent = require('../ARComponents/ARMasonryGridComponent');
//let ARMasonryGridComponent = require('../ARComponents/ARNativeMasonryGridComponent');


var styles = React.StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  imageContainer: {
    flexDirection: 'column',
    //flexDirection: 'row',
    width: 150,
    //height: 100,
  },
});


class SimpleApp extends React.Component {
  pushReactViewController() {
    console.log('Host VC: 0x' + this.props.viewControllerID.toString(16));
    NativeModules.ARNavigatorModule.pushViewController('/react-controller',
                                                       true,
                                                       this.props.viewControllerID);
  }

  pushNativeViewController() {
    console.log('Host VC: 0x' + this.props.viewControllerID.toString(16));
    NativeModules.ARNavigatorModule.pushViewController('/native-controller',
                                                       true,
                                                       this.props.viewControllerID);
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this.pushReactViewController.bind(this)}>
          <Text>Tap to add a React VC to the navigation stack.</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.pushNativeViewController.bind(this)}>
          <Text>Tap to add a Native VC to the navigation stack.</Text>
        </TouchableHighlight>
        <ARMasonryGridComponent artworks={artworks} />
      </View>
    );
  }
}

React.AppRegistry.registerComponent('SimpleApp', () => SimpleApp);
