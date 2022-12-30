const { Select } = require('selenium-webdriver')
const BasePage = require("./basePage");
const logger = require("../logger");


class SearchPage extends BasePage {

    static SEARCH_COMPANY_BUTTON_XPATH = '/html/body/div/div[1]/div[2]/main/section/div/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/label/p';
    static CHECK_COUNT_XPATH = '/html/body/div/div[1]/div[2]/main/section/div/div[2]/div[1]/div[2]/div[7]/p';

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

  }

    module.exports = SearchPage;