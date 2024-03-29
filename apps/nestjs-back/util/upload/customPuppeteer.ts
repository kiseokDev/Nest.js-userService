import { Product } from '../../src/product/entities/product.entity';

export class CustomPuppeteer {
  naverStoreUplaod(product: Product) {
    console.log(product, 'naverStoreUplaod');
  }
  cupangStoreUplaod(product: Product) {
    console.log(product, 'cupangStoreUplaod');
  }
  gmarketStoreUplaod(product: Product) {
    console.log(product, 'gmarketStoreUplaod');
  }
  auctionStoreUplaod(product: Product) {
    console.log(product, 'auctionStoreUplaod');
  }
  elevenStoreUplaod(product: Product) {
    console.log(product, 'elevenStoreUplaod');
  }
  wemakepriceStoreUplaod(product: Product) {
    console.log(product, 'wemakepriceStoreUplaod');
  }
  ssgStoreUplaod(product: Product) {
    console.log(product, 'ssgStoreUplaod');
  }
  tmonStoreUplaod(product: Product) {
    console.log(product, 'tmonStoreUplaod');
  }
  wconceptStoreUplaod(product: Product) {
    console.log(product, 'wconceptStoreUplaod');
  }
  interparkStoreUplaod(product: Product) {
    console.log(product, 'interparkStoreUplaod');
  }
}

export const customCrawler = new CustomPuppeteer();
