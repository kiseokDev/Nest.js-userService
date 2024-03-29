import { Product } from '../../src/product/entities/product.entity';

export class CustomPuppeteer {
  naverStoreUplaod(product: Product) {
    return { product, test: 'naverStoreUplaod' };
  }
  cupangStoreUplaod(product: Product) {
    return { product, test: 'cupangStoreUplaod' };
  }
  gmarketStoreUplaod(product: Product) {
    return { product, test: 'gmarketStoreUplaod' };
  }
  auctionStoreUplaod(product: Product) {
    return { product, test: 'auctionStoreUplaod' };
  }
  elevenStoreUplaod(product: Product) {
    return { product, test: 'elevenStoreUplaod' };
  }
  wemakepriceStoreUplaod(product: Product) {
    return { product, test: 'wemakepriceStoreUplaod' };
  }
  ssgStoreUplaod(product: Product) {
    return { product, test: 'ssgStoreUplaod' };
  }
  tmonStoreUplaod(product: Product) {
    return { product, test: 'tmonStoreUplaod' };
  }
  wconceptStoreUplaod(product: Product) {
    return { product, test: 'wconceptStoreUplaod' };
  }
  interparkStoreUplaod(product: Product) {
    return { product, test: 'interparkStoreUplaod' };
  }
}

export const customCrawler = new CustomPuppeteer();
