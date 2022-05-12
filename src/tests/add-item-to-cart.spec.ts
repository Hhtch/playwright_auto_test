import { test, expect} from "@playwright/test";
import { DELIVERY_CITY, ITEM_NAME, PRICE, SELLER, URL } from "../template";

test('Adding an item to the cart and checking that this item has been added', async ({ page }) => {
  // await page.pause();
  await page.goto(URL);
  await page.click(`[data-widget="webDelivery"] [type="button"] >> nth=0`);
  await page.waitForSelector(".tsHeadL");
  await page.click(".tsHeadL + div");
  await page.keyboard.type(DELIVERY_CITY);
  await page.click(`a[href="#"]:has-text('${DELIVERY_CITY}')`);
  await expect(page.locator(`[data-widget="webDelivery"] span:has-text('${DELIVERY_CITY}') >> nth=0`))
  .toBeVisible();
  await expect(page.locator(`[data-widget="webPrice"] div div div span span >> nth=1`))
  .toHaveText(`${PRICE}`);
  await expect(page.locator(`[data-widget="webProductHeading"] h1:has-text('${ITEM_NAME}')`))
  .toBeVisible();
  await expect(page.locator(`[data-widget="webCurrentSeller"] a[title="${SELLER}"]`))
  .toBeVisible(); 
  await page.click('[data-widget="webAddToCart"] button');
  await page.waitForSelector('[data-widget="webAddToCart"] button span:has-text("В корзине")');
  await page.click('[data-widget="webAddToCart"] button');
  await expect(page.locator(`.tsBodyM span span:has-text('${ITEM_NAME}')`))
  .toHaveText(`${ITEM_NAME}`);
  await expect(page.locator(`.tsBodyM span span:has-text('${SELLER}')`))
  .toHaveText(`${SELLER}`);
  await expect(page.locator(`.tsBodyLBold span:has-text('${PRICE}')`))
  .toHaveText(`${PRICE}`);
});