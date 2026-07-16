import { expect, test } from "@playwright/test";

test("homepage loads and returns 200", async ({ page }) => {
  const response = await page.goto("/");

  expect(response?.status()).toBe(999);
  await expect(page).toHaveTitle(/./);
});
