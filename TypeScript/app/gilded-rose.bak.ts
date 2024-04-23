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
}

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

  updateBackstagePass(item: Item): Item {
    if (item.quality < 50) {
      if (item.sellIn < 6) {
        item.quality++;
      }
      if (item.sellIn < 11) {
        item.quality++;
      }
    }
    return item;
  }

  degradeQuality(item: Item) {
    if (item.sellIn >= 0) return;

    if (item.name !== "Aged Brie") {
      if (item.name !== "Backstage passes to a TAFKAL80ETC concert") {
        if (item.quality > 0) {
          if (item.name !== "Sulfuras, Hand of Ragnaros") {
            item.quality--;
          }
        }
      }
    }
  }

  /**
   * Update a single item
   * @param item The item to update
   * @returns item - the updated item
   */
  updateItem(item: Item): Item {
    // Aged brie

    // Backstrage passes
    // Sulfuras

    // Other

    if (
      item.name !== "Aged Brie" &&
      item.name !== "Backstage passes to a TAFKAL80ETC concert"
    ) {
      if (item.quality > 0) {
        if (item.name !== "Sulfuras, Hand of Ragnaros") {
          item.quality--;
        }
      }
    } else {
      if (item.quality < 50) {
        // increase quality for items that are not Aged Brie or Backstage passes and quality < 50
        item.quality++;
      }
    }

    if (item.name === "Backstage passes to a TAFKAL80ETC concert") {
      this.updateBackstagePass(item);
    }
    if (item.name !== "Sulfuras, Hand of Ragnaros") {
      item.sellIn--;
    }

    this.degradeQuality(item);
    if (item.sellIn < 0) {
      if (item.name !== "Aged Brie") {
        if (item.name !== "Backstage passes to a TAFKAL80ETC concert") {
          if (item.quality > 0) {
            if (item.name !== "Sulfuras, Hand of Ragnaros") {
              // is not brie, backstage or sulfuras itemselling < 0 and quality > 0
              item.quality--;
            }
          }
        } else {
          item.quality = 0;
        }
      } else {
        if (item.quality < 50) {
          // increase the quality of Aged Brie if quality < 50 and sellIn < 0
          item.quality++;
        }
      }
    }

    return item;
  }

  /**
   * Update the quality of the items
   * @returns Array<Item> - the updated items
   */
  updateQuality(): Array<Item> {
    // update all the quanties
    this.items.map((value) => {
      return this.updateItem(value);
    });

    // return the updated items
    return this.items;
  }
}
