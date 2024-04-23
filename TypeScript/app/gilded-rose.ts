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
    // Backstage pass increases in quality. Max 50
    if (item.quality < 50) {
      item.quality++;
    }

    // Backstage passes increase in quality as the concert approaches
    if (item.quality < 50) {
      if (item.sellIn < 10) {
        item.quality++;
      }
      if (item.sellIn < 5) {
        item.quality++;
      }
    }
    return item;
  }

  updateExpiringDate(item: Item): Item {
    item.sellIn--;

    return item;
  }

  invalidateBackstagePass(item: Item): Item {
    // backstage pass is worthless after the concert
    if (item.sellIn < 0) {
      item.quality = 0;
    }

    return item;
  }

  updateBrie(item: Item): Item {
    if (item.name !== "Aged Brie") {
      return item;
    }

    // Brie increases in quality. Max 50
    if (item.quality < 50) {
      item.quality++;
    }

    // Brie gets an extra quality point after when it expires
    if (item.sellIn < 0) {
      if (item.quality < 50) {
        item.quality++;
      }
    }

    return item;
  }

  /**
   * Update a single item
   * @param item The item to update
   * @returns item - the updated item
   */
  updateItem(item: Item): Item {
    // handle expiring date
    if (item.name !== "Sulfuras, Hand of Ragnaros") {
      item = this.updateExpiringDate(item);
    }

    if (item.name === "Backstage passes to a TAFKAL80ETC concert") {
      // Handle backstage pass
      item = this.updateBackstagePass(item);
      item = this.invalidateBackstagePass(item);
    } else if (item.name === "Aged Brie") {
      // Handle Brie
      item = this.updateBrie(item);
    } else if (item.name !== "Sulfuras, Hand of Ragnaros") {
      // All items degrade and extra point after they expire
      if (item.sellIn < 0) {
        if (item.quality > 0) {
          item.quality--;
        }
      }

      // All other items degrade in quality. min 0
      if (item.quality > 0) {
        item.quality--;
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
