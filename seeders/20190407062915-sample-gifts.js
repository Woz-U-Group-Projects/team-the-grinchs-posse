'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('gifts', [
        
        {
          giftName: 'Extra Large Backpack',
          description: 'TSA Friendly Durable Travel Computer Backpack with USB Charging Port/Headphones Hole. Water-Resistant Big Business College School Bookbag Fits 17 Inch Laptop & Notebook',
          listId: 1,
          buyerId: 3
        },
        {
          giftName: 'Echo (2nd Generation)',
          description: 'Smart Speaker with Alexa',
          listId: 1,
          buyerId: 4
        },
        {
          giftName: 'Occer Upgraded 12X42 HD Compact Monocular Telescope',
          description: 'Waterproof Monoculars with 25mm Large Eyepiece & BAK4 Prism Optics,Dual Focus Low Light Scope',
          listId: 1,
          buyerId: 2
        },
        {
          giftName: 'Money Clip Wallet HOUSTON Mens Wallet',
          description: 'RFID Blocking Wallet | Minimalist Mini Slim Wallets Bifold',
          listId: 1,
          buyerId: 5
        },
        {
          giftName: 'Burt\'s Bees Classics Gift Set',
          description: '6 Products in Giftable Tin – Cuticle Cream, Hand Salve, Lip Balm, Res-Q Ointment, Hand Repair Cream and Foot Cream',
          listId: 2,
          buyerId: 3
        },
        {
          giftName: 'Canon - EOS Rebel T6',
          description: 'DSLR Camera with EF-S 18-55mm IS II and EF 75-300mm III lens',
          listId: 2,
          buyerId: 1
        },
        {
          giftName: 'Apple Watch Series 4',
          description: '(GPS + Cellular) 40mm Gold Aluminum Case with Pink Sand Sport Band',
          listId: 2,
          buyerId: 5
        },
        {
          giftName: 'Thule - Accent Backpack Bundle for 15.6" Laptop',
          description: 'The 23L Accent laptop backpack accommodates a 15.6-inch notebook, has a dedicated pocket for a 10-inch tablet and holds your eyewear and other delicate items in its SafeZone compartment.',
          listId: 2,
          buyerId: 4
        },
        {
          giftName: 'Apple Watch Series 4',
          description: '(GPS + Cellular) 44mm Space Gray Aluminum Case with Black Sport Band',
          listId: 3,
          buyerId: 1
        },
        {
          giftName: 'GRILLART BBQ Grill Utensil Tools Set',
          description: 'Reinforced BBQ Tongs 19-Piece Stainless-Steel Barbecue Grilling Accessories with Aluminum Storage Case',
          listId: 3,
          buyerId: 2
        },
        {
          giftName: ' SwissGear Travel Gear 1900',
          description: 'Scansmart TSA Friendly Laptop Backpack 19" Blue',
          listId: 3,
          buyerId: 5
        },
        {
          giftName: 'ring Video Doorbell 2',
          description: 'The Next Generation of Video Doorbells',
          listId: 3,
          buyerId: 4
        },
        {
          giftName: 'Men\'s Peugeot®',
          description: 'Black Leather Watch and Pen Gift Set',
          listId: 4,
          buyerId: 2
        },
        {
          giftName: 'Apple - 11-Inch iPad Pro',
          description: 'WIFI, 64GB, Space Gray',
          listId: 4,
          buyerId: 5
        },
        {
          giftName: 'Shiatsu Back Shoulder and Neck Massager with Heat',
          description: 'Electric Deep Tissue 4D Kneading Massage for Shoulder, Back and Neck',
          listId: 4,
          buyerId: 1
        },
        {
          giftName: 'Jazz: A Film By Ken Burns',
          description: 'Box Set',
          listId: 4,
          buyerId: 3
        },
        {
          giftName: 'New York: Directed by Ric Burns',
          description: 'DVD Box Set',
          listId: 5,
          buyerId: 2
        },
        {
          giftName: 'LG All 3D Region Free Blu Ray Player',
          description: 'Modified Full Multi Zone A B C Playback - WiFi Compatible, 110-240 Volts Free 6FT HDMI Cable',
          listId: 5,
          buyerId: 1
        },
        {
          giftName: 'ASUS VivoBook F510UA 15.6”',
          description: 'Full HD Nanoedge Laptop, Intel Core i5-8250U Processor, 8GB DDR4 RAM, 1TB HDD, USB-C, Fingerprint, Windows 10 Home - F510UA-AH51, Star Gray',
          listId: 5,
          buyerId: 3
        },
        {
          giftName: 'Authentic ROXANT Grip Scope',
          description: 'High Definition Wide View Monocular - with Retractable Eyepiece and Fully Multi Coated Optical Glass Lens + BAK4 Prism.',
          listId: 5,
          buyerId: 4
        },

    ], {});
 
  },

  down: (queryInterface, Sequelize) => {
    
    return queryInterface.bulkDelete( 'gifts', null, {} );
    
  }

};
