export const ProductCategories = [
  'apparel',
  // 'books',
  // 'electronics',
  // 'furniture',
  // 'jewelry',
  'travel',
];

export const ProductSubCategories = {
  apparel: ['t-shirts', 'sweaters', 'jackets', 'pants', 'shoes', 'jeans'],
  travel: ['airplane', 'car', 'boat', 'train'],
};

export const ProductCateogryMaterials = {
  apparel: [
    { type: 'cotton', footprint: 14.5 },
    { type: 'polyester', footprint: 14.2 },
    { type: 'linen', footprint: 11.7 },
    { type: 'viscose', footprint: 14 },
    { type: 'nylon', footprint: 12.7 },
    { type: 'wool', footprint: 24.8 },
    { type: 'leather', footprint: 46.9 },
  ],
};

// https://youmatter.world/en/plane-or-cars-which-means-of-transport-pollutes-the-most/
export const TravelCarbonFootprintPerKm = {
  airplane: 0.285,
  car: 0.55,
  train: 0.14,
  motorcycle: 0.72,
};

export const ApparelCarbonFootprintPerLbs = {
  cotton: 14.5,
  polyester: 14.2,
  linen: 11.7,
  viscose: 14,
  nylon: 12.7,
  wool: 24.8,
  leather: 46.9,
};
