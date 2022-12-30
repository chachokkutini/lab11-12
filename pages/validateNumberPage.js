const { Select } = require('selenium-webdriver')
const BasePage = require("./basePage");
const logger = require("../logger");


class ValidateNumberPage extends BasePage {
static CONFIRM_NUMBER_BUTTON_XPATH = '/html/body/div[1]/div[1]/div[2]/main/div/div[3]/div[2]/div[2]/div/form/div[3]/div/button';
static CHECK_WARNING_INFO_XPATH = '/html/body/div[1]/div[1]/div[2]/main/div/div[3]/div[2]/div[2]/div/form/div[2]/div/div[2]/p';

    async clickConfirmNumberButton() {
        logger.info("Click on the confirm phone button");
        const element = await this.findByXpath(ValidateNumberPage.CONFIRM_NUMBER_BUTTON_XPATH);
        await element.click();
        return this;
      }

      async checkWarningMessage() {
        logger.info("Get warning message.");
        const element = await this.findByXpath(ValidateNumberPage.CHECK_WARNING_INFO_XPATH);
      return element.getText();
      }

  }

    module.exports = ValidateNumberPage;