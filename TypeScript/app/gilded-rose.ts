/**
 * Represents an item
 * @property {string} name - The name of the item
 * @property {number} sellIn - The number of days to sell the item
 * @property {number} quality - The quality of the item
 */
export class Item {
  name: string;
  sellIn: number;
  quality: number;

  /**
   * Create a new instance of Item
   * @param name The name of the item
   * @param sellIn The number of days to sell the item
   * @param quality The quality of the item
   */
  constructor(name: string, sellIn: number, quality: number) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }

  /**
   * Alter the quality of the item
   * @param value The value to add to the quality
   * @returns Item - the updated item
   */
  changeQuality(change: number): Item {
    // Increase the quality
    this.quality += change;

    // Quality should be kept between 0 and 50
    this.quality = Math.max(this.quality, 0);
    this.quality = Math.min(this.quality, 50);

    // return the item
    return this;
  }
}

/**
 * Types of items
 */
const ItemType = {
  BRIE: "Aged Brie",
  BACKSTAGE_PASS: "Backstage passes to a TAFKAL80ETC concert",
  SULFURAS: "Sulfuras, Hand of Ragnaros",
};

/**
 * Represents the GildedRose class
 */
export class GildedRose {
  items: Array<Item>;

  /**
   * Create a new instance of GildedRose
   * @param items The list of items
   */
  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  /**
   * Handle the backstage pass
   * @param item The item to handle
   */
  handleBackstagePass(item: Item): void {
    // Backstage pass increases in quality
    item.changeQuality(1);

    // Backstage passes increase in quality within 10 days of the concert
    if (item.sellIn < 10) item.changeQuality(1);

    // Backstage passes increase in quality within 5 days of the concert
    if (item.sellIn < 5) item.changeQuality(1);

    // backstage passes are worthless after the concert
    if (item.sellIn < 0) item.quality = 0;
  }

  /**
   * Handle the Brie
   * @param item The item to handle
   */
  handleBrie(item: Item): void {
    // Brie increases in quality
    item.changeQuality(1);

    // Brie gets an extra quality point after when it expires
    if (item.sellIn < 0) item.changeQuality(1);
  }

  /**
   * Update a single item
   * @param item The item to update
   * @returns item - the updated item
   */
  updateItem(item: Item): Item {
    // handle expiring date
    if (item.name !== ItemType.SULFURAS) item.sellIn--;

    // Handle backstage pass
    if (item.name === ItemType.BACKSTAGE_PASS) this.handleBackstagePass(item);

    // Handle Brie
    if (item.name === ItemType.BRIE) this.handleBrie(item);

    // All other items
    if (
      ![ItemType.SULFURAS, ItemType.BACKSTAGE_PASS, ItemType.BRIE].includes(
        item.name
      )
    ) {
      // All items degrade and extra point after they expire
      if (item.sellIn < 0) item.changeQuality(-1);

      // All other items degrade in quality. min 0
      item.changeQuality(-1);
    }

    // return the item
    return item;
  }

  /**
   * Update the quality of the items
   * @returns Array<Item> - the updated items
   */
  updateQuality(): Array<Item> {
    // update all the quanties
    return this.items.map((value) => this.updateItem(value));
  }
}
