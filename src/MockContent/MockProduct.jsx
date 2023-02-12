import Images from '../Images';

const MockProducts = [
  {
    slug: 'thumb-pen-holder',
    title: {
      tr: 'Başparmak Kalem Tutucu',
      en: 'Thumb Pen Holder',
    },
    description: {
      tr: '',
      en: '',
    },
    categories: [
      {
        tr: 'Sağlık',
        en: 'Health',
        slug: 'health',
      },
    ],
    image: Images.productsImages.thumbPenHolder,
  },
  {
    slug: 'painting-apparatus',
    title: {
      tr: 'Boyama Aparatı',
      en: 'Painting Apparatus',
    },
    description: {
      tr: '',
      en: '',
    },
    categories: [
      {
        tr: 'Sağlık',
        en: 'Health',
        slug: 'health',
      },
    ],
    image: Images.productsImages.paintingApparatus,
  },
  {
    slug: 'fork-spoon-holder',
    title: {
      tr: 'Çatal & Kaşık Tutucu',
      en: 'Fork & Spoon Holder',
    },
    description: {
      tr: '',
      en: '',
    },
    categories: [
      {
        tr: 'Sağlık',
        en: 'Health',
        slug: 'health',
      },
    ],
    image: Images.productsImages.forkSpoonHolder,
  },
  {
    slug: 'multifunctional-apparatus',
    title: {
      tr: 'Çok Amaçlı Aparat',
      en: 'Multifunctional Apparatus',
    },
    description: {
      tr: '',
      en: '',
    },
    categories: [
      {
        tr: 'Sağlık',
        en: 'Health',
        slug: 'health',
      },
    ],
    image: Images.productsImages.multifunctionalApparatus,
  },
  {
    slug: 'chess-for-visually-impaired',
    title: {
      tr: 'Görme Engelliler için Satranç',
      en: 'Chess for Visually Impaired',
    },
    description: {
      tr: '',
      en: '',
    },
    categories: [
      {
        tr: 'Sağlık',
        en: 'Health',
        slug: 'health',
      },
      {
        tr: 'Oyuncak',
        en: 'Toy',
        slug: 'toy',
      },
    ],
    image: Images.productsImages.chessForVisuallyImpaired,
  },
  {
    slug: 'cardboard-cup-holder',
    title: {
      tr: 'Karton Bardak Tutucu',
      en: 'Cardboard Cup Holder',
    },
    description: {
      tr: '',
      en: '',
    },
    categories: [
      {
        tr: 'Sağlık',
        en: 'Health',
        slug: 'health',
      },
    ],
    image: Images.productsImages.cardboardCupHolder,
  },
  {
    slug: 'fork-spoon-holder-with-grip',
    title: {
      tr: 'Kavramalı Çatal & Kaşık Tutucu',
      en: 'Fork & Spoon Holder with Grip',
    },
    description: {
      tr: '',
      en: '',
    },
    categories: [
      {
        tr: 'Sağlık',
        en: 'Health',
        slug: 'health',
      },
    ],
    image: Images.productsImages.forkSpoonHolderWithGrip,
  },
  {
    slug: 'game-console-apparatus',
    title: {
      tr: 'Oyun Konsolu Aparatı',
      en: 'Game Console Apparatus',
    },
    description: {
      tr: '',
      en: '',
    },
    categories: [
      {
        tr: 'Sağlık',
        en: 'Health',
        slug: 'health',
      },
    ],
    image: Images.productsImages.gameConsoleApparatus,
  },
  {
    slug: 'pet-bottle-opener',
    title: {
      tr: 'Pet Şişe Açacağı',
      en: 'Pet Bottle Opener',
    },
    description: {
      tr: '',
      en: '',
    },
    categories: [
      {
        tr: 'Sağlık',
        en: 'Health',
        slug: 'health',
      },
    ],
    image: Images.productsImages.petBottleOpener,
  },
  {
    slug: 'one-finger-paint-brush-holder',
    title: {
      tr: 'Tek Barmak Boya Fırçası Tutacağı',
      en: 'One Finger Paint Brush Holder',
    },
    description: {
      tr: '',
      en: '',
    },
    categories: [
      {
        tr: 'Sağlık',
        en: 'Health',
        slug: 'health',
      },
    ],
    image: Images.productsImages.oneFingerPaintBrushHolder,
  },
  {
    slug: 'nail-clipper-apparatus',
    title: {
      tr: 'Tırnak Kesme Aparatı',
      en: 'Nail Clipper Apparatus',
    },
    description: {
      tr: '',
      en: '',
    },
    categories: [
      {
        tr: 'Sağlık',
        en: 'Health',
        slug: 'health',
      },
    ],
    image: Images.productsImages.nailClipperApparatus,
  },
  {
    slug: 'round-pen-holder-apparatus',
    title: {
      tr: 'Yuvarlak Kalem Tutma Aparatı',
      en: 'Round Pen Holder Apparatus',
    },
    description: {
      tr: '',
      en: '',
    },
    categories: [
      {
        tr: 'Sağlık',
        en: 'Health',
        slug: 'health',
      },
    ],
    image: Images.productsImages.roundPenHolderApparatus,
  },
  {
    slug: 'tweezers',
    title: {
      tr: 'Cımbız',
      en: 'Tweezers',
    },
    description: {
      tr: '',
      en: '',
    },
    categories: [
      {
        tr: 'Sağlık',
        en: 'Health',
        slug: 'health',
      },
    ],
    image: Images.productsImages.tweezers,
  },
  {
    slug: 'pill-box-reminder-seven-days',
    title: {
      tr: 'Hatırlatıcı İlaç Kutusu 7 Günlük',
      en: 'Pill Box Reminder 7 day',
    },
    description: {
      tr: '',
      en: '',
    },
    categories: [
      {
        tr: 'Sağlık',
        en: 'Health',
        slug: 'health',
      },
    ],
    image: Images.productsImages.pillBoxReminderSevenDay,
  },
  {
    slug: 'bag-holder',
    title: {
      tr: 'Poşet Askılığı',
      en: 'Bag Holder',
    },
    description: {
      tr: '',
      en: '',
    },
    categories: [
      {
        tr: 'Sağlık',
        en: 'Health',
        slug: 'health',
      },
    ],
    image: Images.productsImages.bagHolder,
  },
  {
    slug: 'bag-holder-with-wrist-support',
    title: {
      tr: 'İki Delikli Anahtar Tutucu',
      en: 'Bag Holder With Wrist Support',
    },
    description: {
      tr: '',
      en: '',
    },
    categories: [
      {
        tr: 'Sağlık',
        en: 'Health',
        slug: 'health',
      },
    ],
    image: Images.productsImages.bagHolderWithWristSupport,
  },
  {
    slug: 'button-up-tool',
    title: {
      tr: 'Düğme İlikleme Aparatı',
      en: 'Button Up Tool',
    },
    description: {
      tr: '',
      en: '',
    },
    categories: [
      {
        tr: 'Sağlık',
        en: 'Health',
        slug: 'health',
      },
    ],
    image: Images.productsImages.buttonUpTool,
  },
  {
    slug: 'can-opener',
    title: {
      tr: 'Konserve Açacağı',
      en: 'Can Opener',
    },
    description: {
      tr: '',
      en: '',
    },
    categories: [
      {
        tr: 'Sağlık',
        en: 'Health',
        slug: 'health',
      },
    ],
    image: Images.productsImages.canOpener,
  },
  {
    slug: 'thermos-holder',
    title: {
      tr: 'Termos Tutucu',
      en: 'Thermos Holder',
    },
    description: {
      tr: '',
      en: '',
    },
    categories: [
      {
        tr: 'Sağlık',
        en: 'Health',
        slug: 'health',
      },
    ],
    image: Images.productsImages.thermosHolder,
  },
  {
    slug: 'classic-flusher-apparatus',
    title: {
      tr: 'Klasik Sifon Aparatı',
      en: 'Classic Flusher Apparatus',
    },
    description: {
      tr: '',
      en: '',
    },
    categories: [
      {
        tr: 'Sağlık',
        en: 'Health',
        slug: 'health',
      },
    ],
    image: Images.productsImages.classicFlusherApparatus,
  },
  {
    slug: 'enlarged-key-holder',
    title: {
      tr: 'Geniş Yüzey Anahtarlık',
      en: 'Enlarged Key Holder',
    },
    description: {
      tr: '',
      en: '',
    },
    categories: [
      {
        tr: 'Sağlık',
        en: 'Health',
        slug: 'health',
      },
    ],
    image: Images.productsImages.enlargedKeyHolder,
  },
  {
    slug: 'expanded-wheelchair-joystick',
    title: {
      tr: 'Tekerlekli Sandalye Joystick Tutucu',
      en: 'Expanded Wheelchair Joystick',
    },
    description: {
      tr: '',
      en: '',
    },
    categories: [
      {
        tr: 'Sağlık',
        en: 'Health',
        slug: 'health',
      },
    ],
    image: Images.productsImages.expandedWheelchairJoystick,
  },
  {
    slug: 'extended-finger-splint',
    title: {
      tr: 'Geniş Parmak Ateli',
      en: 'Extended Finger Splint',
    },
    description: {
      tr: '',
      en: '',
    },
    categories: [
      {
        tr: 'Sağlık',
        en: 'Health',
        slug: 'health',
      },
    ],
    image: Images.productsImages.extendedFingerSplint,
  },
  {
    slug: 'flusher-with-extended-surface',
    title: {
      tr: 'Geniş Yüzey Sifonluk',
      en: 'Flusher with Extended Surface',
    },
    description: {
      tr: '',
      en: '',
    },
    categories: [
      {
        tr: 'Sağlık',
        en: 'Health',
        slug: 'health',
      },
    ],
    image: Images.productsImages.flusherWithExtendedSurface,
  },
  {
    slug: 'hand-orthosis',
    title: {
      tr: 'El Ortezi',
      en: 'Hand Orthosis',
    },
    description: {
      tr: '',
      en: '',
    },
    categories: [
      {
        tr: 'Sağlık',
        en: 'Health',
        slug: 'health',
      },
    ],
    image: Images.productsImages.handOrthosis,
  },
  {
    slug: 'jelatin-holder',
    title: {
      tr: 'Jelatin Tutucu',
      en: 'Jelatin Holder',
    },
    description: {
      tr: '',
      en: '',
    },
    categories: [
      {
        tr: 'Sağlık',
        en: 'Health',
        slug: 'health',
      },
    ],
    image: Images.productsImages.jelatinholder,
  },
  {
    slug: 'key-holder-with-finger-support',
    title: {
      tr: 'Parmak Destekli Anahtarlık',
      en: 'Key Holder With Finger Support',
    },
    description: {
      tr: '',
      en: '',
    },
    categories: [
      {
        tr: 'Sağlık',
        en: 'Health',
        slug: 'health',
      },
    ],
    image: Images.productsImages.keyHolderWithFingerSupport,
  },
  {
    slug: 'l-key-holder',
    title: {
      tr: 'L Anahtarlık',
      en: 'L Key Holder',
    },
    description: {
      tr: '',
      en: '',
    },
    categories: [
      {
        tr: 'Sağlık',
        en: 'Health',
        slug: 'health',
      },
    ],
    image: Images.productsImages.lKeyHolder,
  },
  {
    slug: 'multiple-bag-holder',
    title: {
      tr: 'Çoklu Poşet Tutucu',
      en: 'Multiple Bag Holder',
    },
    description: {
      tr: '',
      en: '',
    },
    categories: [
      {
        tr: 'Sağlık',
        en: 'Health',
        slug: 'health',
      },
    ],
    image: Images.productsImages.multipleBagHolder,
  },
  {
    slug: 'pencil-holder',
    title: {
      tr: 'Kalem Tutucu',
      en: 'Pencil Holder',
    },
    description: {
      tr: '',
      en: '',
    },
    categories: [
      {
        tr: 'Sağlık',
        en: 'Health',
        slug: 'health',
      },
    ],
    image: Images.productsImages.pencilHolder,
  },
  {
    slug: 'wheelchair-cup-holder',
    title: {
      tr: 'Sandalye Bardak Tutucu',
      en: 'Wheelchair Cup Holder',
    },
    description: {
      tr: '',
      en: '',
    },
    categories: [
      {
        tr: 'Sağlık',
        en: 'Health',
        slug: 'health',
      },
    ],
    image: Images.productsImages.wheelchairCupHolder,
  },
  {
    slug: 'tape-measure-holder',
    title: {
      tr: 'Metre Sabitleyici',
      en: 'Tape Measure Holder',
    },
    description: {
      tr: '',
      en: '',
    },
    categories: [
      {
        tr: 'Sağlık',
        en: 'Health',
        slug: 'health',
      },
    ],
    image: Images.productsImages.tapeMeasureHolder,
  },
  {
    slug: 'thumb-book-holder',
    title: {
      tr: 'Tek El Kitap Sayfa Tutucu',
      en: 'Thumb Book Holder',
    },
    description: {
      tr: '',
      en: '',
    },
    categories: [
      {
        tr: 'Sağlık',
        en: 'Health',
        slug: 'health',
      },
    ],
    image: Images.productsImages.thumbBookHolder,
  },
  {
    slug: 'toothbrush-with-hand-assist',
    title: {
      tr: 'El Destekli Diş Fırçası',
      en: 'Toothbrush With Hand Assist',
    },
    description: {
      tr: '',
      en: '',
    },
    categories: [
      {
        tr: 'Sağlık',
        en: 'Health',
        slug: 'health',
      },
    ],
    image: Images.productsImages.toothbrushWithHandAssist,
  },
  {
    slug: 'flatware-holding-apparatus',
    title: {
      tr: 'Çatal-Kaşık Tutma Aparatı',
      en: 'Flatware Holding Apparatus',
    },
    description: {
      tr: '',
      en: '',
    },
    categories: [
      {
        tr: 'Sağlık',
        en: 'Health',
        slug: 'health',
      },
    ],
    image: Images.productsImages.flatwareHoldingApparatus,
  },
  {
    slug: 'zipper-puller',
    title: {
      tr: 'Fermuar Çekme Aparatı',
      en: 'Zipper Puller',
    },
    description: {
      tr: '',
      en: '',
    },
    categories: [
      {
        tr: 'Sağlık',
        en: 'Health',
        slug: 'health',
      },
    ],
    image: Images.productsImages.zipperPuller,
  },
  {
    slug: 'wide-fork-spoon-gripper',
    title: {
      tr: 'Geniş Çatal-Kaşık Kavrama Aparatı',
      en: 'Wide Fork-Spoon Gripper',
    },
    description: {
      tr: '',
      en: '',
    },
    categories: [
      {
        tr: 'Sağlık',
        en: 'Health',
        slug: 'health',
      },
    ],
    image: Images.productsImages.wideForkSpoonGripper,
  },
  {
    slug: 'finger-pencil',
    title: {
      tr: 'Parmak Kalemi',
      en: 'Finger Pencil',
    },
    description: {
      tr: '',
      en: '',
    },
    categories: [
      {
        tr: 'Sağlık',
        en: 'Health',
        slug: 'health',
      },
    ],
    image: Images.productsImages.fingerPencil,
  },
  {
    slug: 'double-pipette-holder',
    title: {
      tr: 'İkili Pipet Tutucu',
      en: 'Double Pipette Holder',
    },
    description: {
      tr: '',
      en: '',
    },
    categories: [
      {
        tr: 'Sağlık',
        en: 'Health',
        slug: 'health',
      },
    ],
    image: Images.productsImages.doublePipetteHolder,
  },
  {
    slug: 'finger-splint',
    title: {
      tr: 'Parmak Ateli',
      en: 'Finger Splint',
    },
    description: {
      tr: '',
      en: '',
    },
    categories: [
      {
        tr: 'Sağlık',
        en: 'Health',
        slug: 'health',
      },
    ],
    image: Images.productsImages.fingerSplint,
  },
  {
    slug: 'finger-splint',
    title: {
      tr: 'Parmak Ateli',
      en: 'Finger Splint',
    },
    description: {
      tr: '',
      en: '',
    },
    categories: [
      {
        tr: 'Sağlık',
        en: 'Health',
        slug: 'health',
      },
    ],
    image: Images.productsImages.fingerSplint,
  },
  {
    slug: 'adaptive-key',
    title: {
      tr: 'Adaptif Anahtar',
      en: 'Adaptive Key',
    },
    description: {
      tr: '',
      en: '',
    },
    categories: [
      {
        tr: 'Sağlık',
        en: 'Health',
        slug: 'health',
      },
    ],
    image: Images.productsImages.adaptiveKey,
  },
  {
    slug: 'adaptive-key',
    title: {
      tr: 'Adaptif Anahtar',
      en: 'Adaptive Key',
    },
    description: {
      tr: '',
      en: '',
    },
    categories: [
      {
        tr: 'Sağlık',
        en: 'Health',
        slug: 'health',
      },
    ],
    image: Images.productsImages.adaptiveKey,
  },
  {
    slug: 'hand-palm-water-bottle-opener',
    title: {
      tr: 'El İçi Şişe Açma Aparatı',
      en: 'Hand Palm Water Bottle Opener',
    },
    description: {
      tr: '',
      en: '',
    },
    categories: [
      {
        tr: 'Sağlık',
        en: 'Health',
        slug: 'health',
      },
    ],
    image: Images.productsImages.handPalmWaterBottleOpener,
  },
  {
    slug: 'expanded-bottle-cap-opener',
    title: {
      tr: 'Geniş Pet Şişe Kapak Açıcı',
      en: 'Expanded Bottle Cap Opener',
    },
    description: {
      tr: '',
      en: '',
    },
    categories: [
      {
        tr: 'Sağlık',
        en: 'Health',
        slug: 'health',
      },
    ],
    image: Images.productsImages.expandedBottleCapOpener,
  },
  {
    slug: 'pill-cutter',
    title: {
      tr: 'Hap Kesici',
      en: 'Pill Cutter',
    },
    description: {
      tr: '',
      en: '',
    },
    categories: [
      {
        tr: 'Sağlık',
        en: 'Health',
        slug: 'health',
      },
    ],
    image: Images.productsImages.pillCutter,
  },
  {
    slug: 'extended-zipper',
    title: {
      tr: 'Adaptif Fermuar',
      en: 'Extended Zipper',
    },
    description: {
      tr: '',
      en: '',
    },
    categories: [
      {
        tr: 'Sağlık',
        en: 'Health',
        slug: 'health',
      },
    ],
    image: Images.productsImages.extendedZipper,
  },
];

export default MockProducts;
