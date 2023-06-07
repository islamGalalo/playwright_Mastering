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

    // 4) expect(locator).toBeEnabled()  Control is enabled   -- toBeDisabled()
    const radioCheck = await page.locator("[id='gender-male']")
    await expect(radioCheck).toBeEnabled()

    // 5) expect(locator).toBeChecked()  Radio/Checkbox is checked
    const checkboxNewsletter = await page.locator("[id='Newsletter']")
    // await checkboxNewsletter.click()
    await expect(checkboxNewsletter).toBeChecked()

    // 6) expect(locator).toHaveAttribute() Element has attribute
    const regbutton = await page.locator('#register-button')
    await expect(regbutton).toHaveAttribute('type', 'submit')

    // 7) expect(locator).toHaveText()  Element matches text = full text
    const textmatch = await page.locator("div[class='page-title'] h1")
    await expect(textmatch).toHaveText("Register")

    // 8) expect(locator).toContainText()  Element contains text   =partial text
    const textcontain = await page.locator("div[class='page-title'] h1")
    await expect(textcontain).toHaveText("Reg")

    // 9) expect(locator).toHaveValue(value) Input has a value
    const emailInput= await page.locator('#Email')
    await emailInput.fill('test@email.com')
    await expect(emailInput).toHaveValue('test@email.com')

    // 10) expect(locator).toHaveCount()  List of elements has given length
    const options = await  page.locator("//select[@name='DateOfBirthMonth'] option")
    await expect(options).toHaveCount(13)
    // in case of adding a soft assert
    await expect.soft('first' , '#add')
})


