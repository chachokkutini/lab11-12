const { expect } = require('chai');
const { Builder, Browser, } = require('selenium-webdriver');

const Driver = require("../driver/Driver");
const Constants = require("../config/constants");
const DataReaderService = require("../services/dataReader.service");
const SearchPage = require("../pages/searchPage");
const HomePage = require("../pages/homePage");

describe('Show count of companies products.', () => {
  before(async function () {
    const props = await DataReaderService.getTestData('test.properties');
    for (const key in props) {
      this[key] = props[key];
    }
  })

  beforeEach(async function () {
    this.driver = await Driver.createDriver();
  });

  it('Should show count of companies products.', async function () {

    const homePage = new HomePage(this.driver);
    await homePage.openPage();
    await homePage.clickSearchButton();
    const searchPage = new SearchPage(this.driver);
    await searchPage.clickChooseCompanyButton();
    expect(await searchPage.checkCountCompany()).to.contain(this.countCompanyValue);                   
  }).timeout(Constants.TEST_TIMEOUT);

  afterEach(async function () {
    await new Promise((resolve) => {
      setTimeout(async () => {
        resolve();
      }, 100);
    })
    await this.driver.quit();
  })
});