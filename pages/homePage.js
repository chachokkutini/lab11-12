const { By, Key, until } = require("selenium-webdriver");
const BasePage = require("./basePage");
const logger = require("../logger");


class HomePage extends BasePage {
  static PAGE_URL = 'https://gum.by/';
  static BAG_BUTTON_XPATH = '//*[@id="root"]/div[1]/div[2]/header/div/div[2]/div[1]/div[5]/a/p';
  static TRANSLATION_BUTTON_XPATH = '/html/body/div/div[1]/div[2]/header/div/div[2]/div[1]/div[4]/div[1]/div[2]';
  static SEARCH_BUTTON_XPATH = '/html/body/div/div[1]/div[2]/main/div/div[4]/div/div[1]/a';
  static SHOW_MORE_ABOUT_PRODUCT_XPATH = '/html/body/div/div[1]/div[2]/main/div/div[4]/div/div[2]/div/section/div/div/div[2]/div/div[4]/div/div/div/a/div';
  static ENTER_BUTTON_XPATH = '/html/body/div[1]/div[1]/div[2]/header/div/div[2]/div[1]/div[6]/div/a/p';
  static SHOW_EVENTS_BUTTON_XPATH = '/html/body/div/div[1]/div[2]/main/div/div[5]/div[1]/a';

  openPage = async () => super.openPage(HomePage.PAGE_URL);

  async clickBagButton() {
    logger.info("Click on the bag button");
    const element = await this.findByXpath(HomePage.BAG_BUTTON_XPATH);
    await element.click();
    return this;
  }

  async clickTranslateButton() {
    logger.info("Click on the translate button");
    const element = await this.findByXpath(HomePage.TRANSLATION_BUTTON_XPATH);
    await element.click();
    return this;
  }

  async clickSearchButton() {
    logger.info("Click on the show more about company button");
    const element = await this.findByXpath(HomePage.SEARCH_BUTTON_XPATH);
    await element.click();
    return this;
  }

  async clickShowMoreButton() {
    logger.info("Click on the show more about product button");
    const element = await this.findByXpath(HomePage.SHOW_MORE_ABOUT_PRODUCT_XPATH);
    await element.click();
    return this;
  }

  async clickEnterButton() {
    logger.info("Click on the enter button");
    const element = await this.findByXpath(HomePage.ENTER_BUTTON_XPATH);
    await element.click();
    return this;
  }

  async clickShowEventsButton() {
    logger.info("Click on the events button");
    const element = await this.findByXpath(HomePage.SHOW_EVENTS_BUTTON_XPATH);
    await element.click();
    return this;
  }

}

module.exports = HomePage;