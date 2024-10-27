import { faker } from "@faker-js/faker";

// Function to generate random household items with checked status
function generateItems(count) {
  const items = [];

  for (let i = 0; i < count; i++) {
    items.push({
      item: faker.commerce.productName(), // Generates random household-like item names
      checked: faker.datatype.boolean(), // Randomly sets checked status as true or false
    });
  }

  return items;
}

// Generate an array of 100 items
export const itemsArray = generateItems(100);
