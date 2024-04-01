import { ProductEntity } from '../../src/product/entities/product.entity';

export class CustomPuppeteer {
  naverStoreUplaod(product: ProductEntity) {
    return { product, test: 'naverStoreUplaod' };
  }
  cupangStoreUplaod(product: ProductEntity) {
    return { product, test: 'cupangStoreUplaod' };
  }
  gmarketStoreUplaod(product: ProductEntity) {
    return { product, test: 'gmarketStoreUplaod' };
  }
  auctionStoreUplaod(product: ProductEntity) {
    return { product, test: 'auctionStoreUplaod' };
  }
  elevenStoreUplaod(product: ProductEntity) {
    return { product, test: 'elevenStoreUplaod' };
  }
  wemakepriceStoreUplaod(product: ProductEntity) {
    return { product, test: 'wemakepriceStoreUplaod' };
  }
  ssgStoreUplaod(product: ProductEntity) {
    return { product, test: 'ssgStoreUplaod' };
  }
  tmonStoreUplaod(product: ProductEntity) {
    return { product, test: 'tmonStoreUplaod' };
  }
  wconceptStoreUplaod(product: ProductEntity) {
    return { product, test: 'wconceptStoreUplaod' };
  }
  interparkStoreUplaod(product: ProductEntity) {
    return { product, test: 'interparkStoreUplaod' };
  }
}

export const customCrawler = new CustomPuppeteer();
