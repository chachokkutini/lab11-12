const { Select } = require('selenium-webdriver')
const BasePage = require("./basePage");
const logger = require("../logger");


class ShowEventsPage extends BasePage {
    static CHECK_EVENTS_XPATH = '/html/body/div/div[1]/div[2]/main/div/div[1]/div/div[4]/span';
    
    async checkEventName() {
      logger.info("Get name of page.");
      const element = await this.findByXpath(ShowEventsPage.CHECK_EVENTS_XPATH);
    return element.getText();
    }

  }

    module.exports = ShowEventsPage;






///html/body/div/div[1]/div[2]/main/div/div[2]/div[1]/a