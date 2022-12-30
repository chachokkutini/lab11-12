const { Select } = require('selenium-webdriver')
const BasePage = require("./basePage");
const logger = require("../logger");


class SearchPage extends BasePage {

    static SEARCH_COMPANY_BUTTON_XPATH = '/html/body/div/div[1]/div[2]/main/section/div/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/label/p';
    static CHECK_COUNT_XPATH = '/html/body/div/div[1]/div[2]/main/section/div/div[2]/div[1]/div[2]/div[7]/p';
    static READ_MORE_BUTTON = '/html/body/div/div[1]/div[2]/main/section/div/div[2]/div[2]/div/div[1]/div[1]/div[2]/div[1]';
    static ADD_TO_BAG_BUTTON = '/html/body/div/div[1]/div[2]/main/section/div/div[2]/div[2]/div/div[1]/div[2]/div/button/span';
    static BAG_BUTTON = '/html/body/div/div[1]/div[2]/header/div/div/div[1]/div[5]/a/p'

    async clickChooseCompanyButton() {
        logger.info("Click on the company button");
        const element = await this.findByXpath(SearchPage.SEARCH_COMPANY_BUTTON_XPATH);
        await element.click();
        return this;
      }

      async checkCountCompany() {
        logger.info("Get result of searching products of company.");
        const element = await this.findByXpath(SearchPage.CHECK_COUNT_XPATH);
      return element.getText();
      }

      async clickMouseMoveButton() {
        logger.info("Click on the read more button");
        const element = await this.findByXpath(SearchPage.READ_MORE_BUTTON);
        await element.click();
        return this;
      }

      async clickAddToBagButton() {
        logger.info("Click on the add to bag button");
        const element = await this.findByXpath(SearchPage.ADD_TO_BAG_BUTTON);
        await element.click();
        return this;
      }

      async clickMoveToBagButton() {
        logger.info("Click on the bag button");
        const element = await this.findByXpath(SearchPage.BAG_BUTTON);
        await element.click();
        return this;
      }

  }

    module.exports = SearchPage;

///html/body/div/div[1]/div[2]/header/div/div/div[1]/div[5]/a/p - корзина
    ///html/body/div/div[1]/div[2]/main/section/div/div[2]/div[2]/div/div[1]/div[1]/div[2]/div[1] - кликать на текст 
    ///html/body/div/div[1]/div[2]/main/section/div/div[2]/div[2]/div/div[1]/div[2]/div/button/span - добавить в корзину 