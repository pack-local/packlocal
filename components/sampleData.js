let locationData = {
    tokyo: {
        loc: 'Tokyo',
        image: 'https://packlocal.s3-us-west-1.amazonaws.com/tokyoHeader.jpg',
        topSouvenirs: {
            
        }
   },
   jamaica: {
        loc: 'Jamaica',
        image: 'https://packlocal.s3-us-west-1.amazonaws.com/jamaica.jpg',

   },
   paris: {
       loc: 'Paris',
        image: 'https://packlocal.s3-us-west-1.amazonaws.com/parisHeader.jpg'

   },
   mumbai: {
    loc: 'Mumbai',
     image: 'https://packlocal.s3-us-west-1.amazonaws.com/Mumbai.png'

    }
};

let bestSeller = [
    {
        title: 'Embroidered Handbag',
        image: ['https://packlocal.s3-us-west-1.amazonaws.com/Bag+2.png'],
        options: '3 more styles',
        rating: '3',
        price: '15.00'
    },
    {
        title: 'Beaded braclet',
        image: ['https://packlocal.s3-us-west-1.amazonaws.com/Bracelet+2.png'],
        options: '10 more styles',
        rating: '4.5',
        price: '55.00'
    }
];

let essentials = [
    {
        title: 'Kundan Necklace',
        image: ['https://packlocal.s3-us-west-1.amazonaws.com/Jewerly+2.png',
                'https://packlocal.s3-us-west-1.amazonaws.com/Necklace.png'],
        options: 'comes with earings',
        rating: '4',
        price: '295.00'
    },
    {
        title: 'Beaded Bridal Shoes',
        image: ['https://packlocal.s3-us-west-1.amazonaws.com/Shoes.png',
            'https://packlocal.s3-us-west-1.amazonaws.com/Shoes.png'],
        options: '3 more styles',
        rating: '3',
        price: '15.00'
    },
    {
        title: 'Lehenga Choli',
        image: ['https://packlocal.s3-us-west-1.amazonaws.com/Bridal+Dress.png',
            'https://packlocal.s3-us-west-1.amazonaws.com/Bridal+Dress.png'],
        options: 'Only this style',
        rating: '4.5',
        price: '320.00'
    },
    {
        title: 'Sabyasachi Jewelry',
        image: ['https://packlocal.s3-us-west-1.amazonaws.com/Bridal+Jewerly.png',
            'https://packlocal.s3-us-west-1.amazonaws.com/Bridal+Jewerly.png'],
        options: '2 more styles',
        rating: '4',
        price: '130.00'
    },
    {
        title: 'Sherwani',
        image: ['https://packlocal.s3-us-west-1.amazonaws.com/Sherwani.png',
            'https://packlocal.s3-us-west-1.amazonaws.com/Sherwani.png'],
        options: '3 more styles',
        rating: '4',
        price: '220.00'
    },
];


export {locationData, bestSeller , essentials};