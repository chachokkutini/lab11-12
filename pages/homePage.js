const { By, Key, until } = require("selenium-webdriver");
const BasePage = require("./basePage");
const logger = require("../logger");


class HomePage extends BasePage {
  static PAGE_URL = 'https://gum.by/';
  static BAG_BUTTON_XPATH = '//*[@id="root"]/div[1]/div[2]/header/div/div[2]/div[1]/div[5]/a/p';
  static TRANSLATION_BUTTON_XPATH = '/html/body/div/div[1]/div[2]/header/div/div[2]/div[1]/div[4]/div[1]/div[2]';
  static SEARCH_BUTTON_XPATH = '//*[@id="root"]/div[1]/div[2]/main/div/div[4]/div/div[1]/a';

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

}

module.exports = HomePage;