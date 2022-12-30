const { Select } = require('selenium-webdriver')
const BasePage = require("./basePage");
const logger = require("../logger");


class TranslatePage extends BasePage {

    static TRANSLATE_WORD_XPATH = '/html/body/div/div[1]/div[2]/header/div/div[2]/div[1]/div[5]/a/p';
    
    async checkTranslationMessage() {
      logger.info("Get result of translation word.");
      const element = await this.findByXpath(TranslatePage.TRANSLATE_WORD_XPATH);
    return element.getText();
    }

  }

    module.exports = TranslatePage;