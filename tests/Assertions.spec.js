const {test, expect} = require('@playwright/test');
test('assertions', async ({page}) => {
    await page.goto('https://demo.nopcommerce.com/register')
    // 1) expect(page).toHaveURL()   Page has URL
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register')
    // 2) expect(page).toHaveTitle()   Page has title
    await expect(page).toHaveTitle('nopCommerce demo store. Register')
    // 3) expect(locator).toBeVisible()  Element is visible
    const logo = await page.getByAltText("nopCommerce demo store")
    await expect(logo).toBeVisible()
    // 4) expect(locator).toBeEnabled()  Control is enabled
    const radioCheck = await page.locator("[id='gender-male']")
    await expect(radioCheck).toBeEnabled()


})

// 5) expect(locator).toBeChecked()  Radio/Checkbox is checked
// 6) expect(locator).toHaveAttribute() Element has attribute
// 7) expect(locator).toHaveText()  Element matches text
// 8) expect(locator).toContainText()  Element contains text
// 9) expect(locator).toHaveValue(value) Input has a value
// 10) expect(locator).toHaveCount()  List of elements has given length