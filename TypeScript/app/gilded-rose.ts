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

  /**
   * Update a single item
   * @param item The item to update
   * @returns item - the updated item
   */
  updateItem(item: Item): Item {
    if (item.name === "Backstage passes to a TAFKAL80ETC concert") {
      if (item.quality < 50) {
        item.quality++;
      }

      if (item.quality < 50) {
        if (item.sellIn < 11) {
          item.quality++;
        }
        if (item.sellIn < 6) {
          item.quality++;
        }
      }
    }

    if (item.name !== "Sulfuras, Hand of Ragnaros") {
      item.sellIn--;
    }

    if (item.name === "Backstage passes to a TAFKAL80ETC concert") {
      if (item.sellIn < 0) {
        item.quality = 0;
      }
    }

    if (item.name === "Aged Brie") {
      if (item.quality < 50) {
        item.quality++;
      }

      if (item.sellIn < 0) {
        if (item.quality < 50) {
          item.quality++;
        }
      }
    }

    // other
    if (item.name !== "Aged Brie") {
      if (item.name !== "Backstage passes to a TAFKAL80ETC concert") {
        if (item.name !== "Sulfuras, Hand of Ragnaros") {
          if (item.sellIn < 0) {
            if (item.quality > 0) {
              item.quality--;
            }
          }
          if (item.quality > 0) {
            item.quality--;
          }
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
