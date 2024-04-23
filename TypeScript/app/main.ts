import { GildedRose, Item } from "./gilded-rose";

// initialize items
const agedBrie: Item = new Item("Aged Brie", 10, 2);
const backstagePass: Item = new Item(
  "Backstage passes to a TAFKAL80ETC concert",
  10,
  2
);
const Sulfuras: Item = new Item("Sulfuras, Hand of Ragnaros", 10, 2);

// create an instance
const gildedRose: GildedRose = new GildedRose([
  agedBrie,
  backstagePass,
  Sulfuras,
]);

// test the output
let output: Array<Item> = gildedRose.updateQuality();
console.log(output);
