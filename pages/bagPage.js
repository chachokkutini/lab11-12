const { Select } = require('selenium-webdriver')
const BasePage = require("./basePage");
const logger = require("../logger");


class BagPage extends BasePage {
    static EMPTY_BAG_RESULT_XPATH =  '//*[@id="root"]/div[1]/div[2]/main/section/div/div/div[1]/div[2]/div[1]';
    
    async checkEmptybagMessage() {
      logger.info("Get result of empty bag.");
      const element = await this.findByXpath(BagPage.EMPTY_BAG_RESULT_XPATH);
    return element.getText();
    }

  }

    module.exports = BagPage;