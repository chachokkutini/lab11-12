const { Select } = require('selenium-webdriver')
const BasePage = require("./basePage");
const logger = require("../logger");


class BagPage extends BasePage {
    static EMPTY_BAG_RESULT_XPATH =  '//*[@id="root"]/div[1]/div[2]/main/section/div/div/div[1]/div[2]/div[1]';
    static SUMMARY_PRICE_XPATH = '/html/body/div/div[1]/div[2]/main/section/div/div/div[2]/div/div/div[4]/div[2]/span';
    
    async checkEmptybagMessage() {
      logger.info("Get result of empty bag.");
      const element = await this.findByXpath(BagPage.EMPTY_BAG_RESULT_XPATH);
    return element.getText();
    }

    async checkSummaryPrice() {
      logger.info("Get result of prices products added to bag.");
      const element = await this.findByXpath(BagPage.SUMMARY_PRICE_XPATH);
    return element.getText();
    }

  }

    module.exports = BagPage;