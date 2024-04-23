import { GildedRose, Item } from "./gilded-rose";

// initialize items
const agedBrie: Item = {
  name: "Aged Brie",
  sellIn: 10,
  quality: 2,
};
const backstagePass: Item = {
  name: "Backstage passes to a TAFKAL80ETC concert",
  sellIn: 10,
  quality: 2,
};
const Sulfuras: Item = {
  name: "Sulfuras, Hand of Ragnaros",
  sellIn: 10,
  quality: 2,
};

// create an instance
const gildedRose: GildedRose = new GildedRose([
  agedBrie,
  backstagePass,
  Sulfuras,
]);

// test the output
let output: Array<Item> = gildedRose.updateQualities();
console.log(output);
