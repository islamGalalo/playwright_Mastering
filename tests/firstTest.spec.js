import {test , expect} from '@playwright/test'
test('homepage',async ({page})=> {
await page.goto('https://www.demoblaze.com/');
const pageURL=page.url(); 
console.log('page title is : ', pageURL);
await expect (page).toHaveTitle('STORE')
await page.click('id=signin2');
await page.fill('id=sign-username','islam');
await page.fill('id=sign-password', '12345678');
await page.click("//button[normalize-space()='Sign up']");

await page.close 
})