const { expect } = require('chai');
const { Builder, Browser, } = require('selenium-webdriver');

const Driver = require("../driver/Driver");
const Constants = require("../config/constants");
const DataReaderService = require("../services/dataReader.service");
const ValidateNumberPage = require("../pages/validateNumberPage")
const HomePage = require("../pages/homePage");

describe('Show warning message.', () => {
  before(async function () {
    const props = await DataReaderService.getTestData('test.properties');
    for (const key in props) {
      this[key] = props[key];
    }
  })

  beforeEach(async function () {
    this.driver = await Driver.createDriver();
  });

  it('Should show warning message.', async function () {

    const homePage = new HomePage(this.driver);
    await homePage.openPage();
    await homePage.clickEnterButton();
    const validateNumberPage = new ValidateNumberPage(this.driver);
    await validateNumberPage.clickConfirmNumberButton();
    expect(await validateNumberPage.checkWarningMessage()).to.contain(this.warningNumberMessage);                   
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