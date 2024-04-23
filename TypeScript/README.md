# Gilded Rose

This is the Gilded Rose kata in TypeScript.

## Getting started

Install dependencies

```sh
npm install
```

## Run the unit tests from the Command-Line

There are two unit test frameworks to choose from, Jest and Mocha.

```sh
npm run test:jest
```

To run all tests in watch mode

```sh
npm run test:jest:watch
```

Mocha

```sh
npm run test:mocha
```


## Run the TextTest fixture from the Command-Line

_You may need to install `ts-node`_

```sh
npx ts-node test/golden-master-text-test.ts
```

Or with number of days as args:
```sh
npx ts-node test/golden-master-text-test.ts 10
```

You should make sure the command shown above works when you execute it in a terminal before trying to use TextTest (see below).


## Run the TextTest approval test that comes with this project

There are instructions in the [TextTest Readme](../texttests/README.md) for setting up TextTest. You will need to specify the Python executable and interpreter in [config.gr](../texttests/config.gr). Uncomment these lines:

    executable:${TEXTTEST_HOME}/python/texttest_fixture.py
    interpreter:python

## Notities

- Ik heb het project over gezet naar vite.
- Ik heb Item omgezet naar een Type. Maar dat werkte niet lekker met de tests. Dus dat heb ik weer teruggedraaid.
- Ik moest even wennen aan de tests. Daarom had ik vite opgezet. Maar toen ik er eenmaal aan gewend was keek ik niet meer naar vite en alleen maar naar de output van test:jest:watch.
- Mijn taktiek was eerst de ifstatements 
- Ik heb een soort mapping object aangemaakt om de onnodige ingewikkelde keys te managen
```js
/**
 * Types of items
 */
const ItemType = {
  BRIE: "Aged Brie",
  BACKSTAGE_PASS: "Backstage passes to a TAFKAL80ETC concert",
  SULFURAS: "Sulfuras, Hand of Ragnaros",
};
```
- Ik heb de aanname gemaakt dat alle quality van de items gecapt moet worden tussen 0 en 50.