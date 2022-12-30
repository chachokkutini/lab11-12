const { expect } = require('chai');
const { Builder, Browser, } = require('selenium-webdriver');

const Driver = require("../driver/Driver");
const Constants = require("../config/constants");
const DataReaderService = require("../services/dataReader.service");
const ShowEventsPage = require("../pages/showEventsPage");
const HomePage = require("../pages/homePage");

describe('Show event.', () => {
  before(async function () {
    const props = await DataReaderService.getTestData('test.properties');
    for (const key in props) {
      this[key] = props[key];
    }
  })

  beforeEach(async function () {
    this.driver = await Driver.createDriver();
  });

  it('Should show event.', async function () {

    const homePage = new HomePage(this.driver);
    await homePage.openPage();
    await homePage.clickShowEventsButton();
    const showEventsPage = new ShowEventsPage(this.driver);
    expect(await showEventsPage.checkEventName()).to.contain(this.validEventName);                   
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