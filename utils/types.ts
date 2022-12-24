export type TImage = {
  id: number;
  altText: string | null;
  width: number;
  height: number;
  src: string;
  type: {};
  hasNextPage: {};
  hasPreviousPage: {};
  variableValues: {};
};

export type TPrice = {
  amount: number;
  currencyCode: string;
};

export type TVariant = {
  id: number;
  title: string;
  price: TPrice;
  priceV2: TPrice; //
  compareAtPrice: TPrice; //
  compareAtPriceV2: TPrice; //
  sku: string;
  position: number;
  selectedOptions: [];
  created_at: string;
  updated_at: string;
  image: TImage; //
  weight: number;
  unitPrice: string;
  unitPriceMeasurement: {};
  available: boolean;
};

export type TProduct = {
  [x: string]: any;
  id: number;
  title: string;
  descriptionhtml: string;
  description: string;
  vendor: string;
  productType: string;
  createdAt: string;
  handle: string;
  updatedAt: string;
  publishedAt: string;
  availableForSale: boolean;
  published_scope: string;
  tags: string;
  admin_graphql_api_id: string;
  variants: TVariant[];
  options: { id: string; name: string; values: []; type: {} }[];
  images: TImage[];
  image: TImage;
};
