const SHOP_DATA = [
  {
    id: 1,
    title: 'Hats',
    routeName: 'hats',
    items: [
      {
        id: 1,
        name: 'Brown Brim',
        imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
        price: 25,
        description: 'From the 1920s and 1950s to a hipster staple item in the 2000s, Fedoras is probably one of the most polarising men’s accessories'
      },
      {
        id: 2,
        name: 'Blue Beanie',
        imageUrl: 'https://i.ibb.co/ypkgK0X/blue-beanie.png',
        price: 18,
        description: 'Beanies have become genuinely timeless and trans-seasonal pieces. While you might not want to wear one in the middle of summer, you can pretty much rock a beanie from winter to spring'
      },
      {
        id: 3,
        name: 'Brown Cowboy',
        imageUrl: 'https://i.ibb.co/QdJwgmp/brown-cowboy.png',
        price: 35,
        description: 'The cowboy hat is a high-crowned, wide-brimmed hat best known as the defining piece of attire for the North American cowboy.'
      },
      {
        id: 4,
        name: 'Grey Brim',
        imageUrl: 'https://i.ibb.co/RjBLWxB/grey-brim.png',
        price: 25,
        description: 'Police typically wear distinctive hats such as peaked caps or brimmed hats, such as those worn by the Royal Canadian Mounted Police.'
      },
    ]
  },
  {
    id: 2,
    title: 'Sneakers',
    routeName: 'sneakers',
    items: [
      {
        id: 10,
        name: 'Adidas NMD',
        imageUrl: 'https://i.ibb.co/0s3pdnc/adidas-nmd.png',
        price: 220,
        description: 'Plimsolls are the most famous among the numerous types of sneakers out there. Comfortable, simple, and super trendy, they can easily be paired up with all kinds of outfits.'
      },
      {
        id: 11,
        name: 'Adidas Yeezy',
        imageUrl: 'https://i.ibb.co/dJbG1cT/yeezy.png',
        price: 280,
        description: 'The lace-less version of plimsolls are slip-ons. They are Very easy to wear and they look extremely stylish with any casual outfit.'
      },
      {
        id: 12,
        name: 'Black Converse',
        imageUrl: 'https://i.ibb.co/bPmVXyP/black-converse.png',
        price: 110,
        description: 'If you are looking to add that sporty feel to your shoes and still be stylish, kicks are your thing.'
      },
      {
        id: 13,
        name: 'Nike White AirForce',
        imageUrl: 'https://i.ibb.co/1RcFPk0/white-nike-high-tops.png',
        price: 160,
        description: 'These are the most conventional type of sneakers available from ages. Be different and move on from the usual low ankle sneakers and use these high neck ones.'
      }
    ]
  },
  {
    id: 3,
    title: 'Jackets',
    routeName: 'jackets',
    items: [
      {
        id: 18,
        name: 'Black Jean Shearling',
        imageUrl: 'https://i.ibb.co/XzcwL5s/black-shearling.png',
        price: 125,
        description: 'Also known as a flight jacket, a bomber jacket is a short, durable jacket with a zippered front and fitted or elastic waist and cuffs'
      },
      {
        id: 19,
        name: 'Blue Jean Jacket',
        imageUrl: 'https://i.ibb.co/mJS6vz0/blue-jean-jacket.png',
        price: 90,
        description: 'If you don’t already own at least one denim jacket, it’s time to invest. This versatile outerwear option looks excellent with countless casual and smart casual outfits.'
      },
      {
        id: 20,
        name: 'Grey Jean Jacket',
        imageUrl: 'https://i.ibb.co/N71k1ML/grey-jean-jacket.png',
        price: 90,
        description: 'Whether you’re running laps around the park or having coffee with friends, a track jacket can make an excellent option.'
      },
      {
        id: 21,
        name: 'Brown Shearling',
        imageUrl: 'https://i.ibb.co/s96FpdP/brown-shearling.png',
        price: 165,
        description: 'The style features fitted or elastic cuffs and waistband, which cause the material to gather and “blouse” over the wrists and waist. As such, the style is similar to a bomber jacket. '
      }
    ]
  },
  {
    id: 4,
    title: 'Womens',
    routeName: 'womens',
    items: [
      {
        id: 23,
        name: 'Blue Tanktop',
        imageUrl: 'https://i.ibb.co/7CQVJNm/blue-tank.png',
        price: 25,
        description: 'Tank tops are often worn alone under very casual settings, as lounge wear, and/or while completing yard work or other chores around the home.'
      },
      {
        id: 24,
        name: 'Floral Blouse',
        imageUrl: 'https://i.ibb.co/4W2DGKm/floral-blouse.png',
        price: 20,
        description: 'A blouse is a loose-fitting upper garment that was formerly worn by workmen, peasants, artists, women, and children. It is typically gathered at the waist or hips'
      },
      {
        id: 25,
        name: 'Floral Dress',
        imageUrl: 'https://i.ibb.co/KV18Ysr/floral-skirt.png',
        price: 80,
        description: 'A dress is a garment traditionally worn by women or girls consisting of a skirt with an attached bodice It consists of a top piece that covers the torso'
      },
      {
        id: 26,
        name: 'Red Dots Dress',
        imageUrl: 'https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png',
        price: 80,
        description: 'A dress is a garment traditionally worn by women or girls consisting of a skirt with an attached bodice It consists of a top piece that covers the torso'
      }
    ]
  },
  {
    id: 5,
    title: 'Mens',
    routeName: 'mens',
    items: [
      {
        id: 30,
        name: 'Camo Down Vest',
        imageUrl: 'https://i.ibb.co/xJS0T3Y/camo-vest.png',
        price: 325,
        description: 'Western wear is a category of men\'s and women\'s clothing which derives its unique style from the clothes worn in the 19th century Wild West'
      },
      {
        id: 31,
        name: 'Floral T-shirt',
        imageUrl: 'https://i.ibb.co/qMQ75QZ/floral-shirt.png',
        price: 20,
        description: 'A T-shirt is a style of fabric shirt named after the T shape of its body and sleeves. Traditionally it has short sleeves and a round neckline, known as a crew neck'
      },
      {
        id: 32,
        name: 'Black & White Longsleeve',
        imageUrl: 'https://i.ibb.co/55z32tw/long-sleeve.png',
        price: 25,
        description: 'Long-sleeved T-shirt – a T-shirt with long sleeves that extend to cover the arms.'
      },
      {
        id: 33,
        name: 'Pink T-shirt',
        imageUrl: 'https://i.ibb.co/RvwnBL8/pink-shirt.png',
        price: 25,
        description: 'A T-shirt is a style of fabric shirt named after the T shape of its body and sleeves. Traditionally it has short sleeves and a round neckline, known as a crew neck'
      },
      {
        id: 34,
        name: 'Jean Long Sleeve',
        imageUrl: 'https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png',
        price: 40,
        description: 'Long-sleeved T-shirt – a T-shirt with long sleeves that extend to cover the arms.'
      },
      {
        id: 35,
        name: 'Burgundy T-shirt',
        imageUrl: 'https://i.ibb.co/mh3VM1f/polka-dot-shirt.png',
        price: 25,
        description: 'A T-shirt is a style of fabric shirt named after the T shape of its body and sleeves. Traditionally it has short sleeves and a round neckline, known as a crew neck'
      }
    ]
  }
];

export default SHOP_DATA;
