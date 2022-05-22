import Images from '../Images';

const MockProducts = [
  {
    productTitle: {
      tr: 'Adaptif Kaşık Tutucu',
      en: 'Adaptive Spoon Holder',
    },
    productSlug: 'adaptive-spoon-holder',
    productImage: Images.MockProduct1.toString(),
    productDescription: {
      tr: 'Eases the use of pen/paint brush for individuals who work in an office environment with gripping problems.\n\nDoesn’t contains any hazardous material.\nIt is preferred for academic development and participation in artistic activities.\nCan be used with any pen/paint brush.\n\nDesigner: Luca Parmegiani\nTasarımcı: Luca Parmegian\nWebsite: Myminifactory',
      en: 'Eases the use of pen/paint brush for individuals who work in an office environment with gripping problems.\n\nDoesn’t contains any hazardous material.\nIt is preferred for academic development and participation in artistic activities.\nCan be used with any pen/paint brush.\n\nDesigner: Luca Parmegiani\nTasarımcı: Luca Parmegian\nWebsite: Myminifactory',
    },
    modelId: 'STLOBJ001',
  },
  {
    productTitle: {
      tr: 'Adaptif Kalem Tutucu',
      en: 'Adaptive Pencil Holder',
    },
    productSlug: 'adaptive-pencil-holder',
    productImage: Images.MockProduct2.toString(),
    modelId: 'STLOBJ002',
  },
  {
    productTitle: {
      tr: 'Eğitim Seti',
      en: 'Education Set',
    },
    productSlug: 'education-set-1',
    productImage: Images.EducationSet1.toString(),
    modelId: null,
  },
  {
    productTitle: {
      tr: 'Kuş Evi',
      en: 'Bird House',
    },
    productSlug: 'bird-house',
    productImage: Images.BirdHouse.toString(),
    modelId: null,
  },
];

export default MockProducts;
