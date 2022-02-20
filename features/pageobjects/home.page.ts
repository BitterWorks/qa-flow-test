import Page from "./page";
import { ChainablePromiseElement } from 'webdriverio';
import { selectors } from "../_selectors";


class HomePage extends Page {
    public get fruitNameInput(): ChainablePromiseElement<WebdriverIO.Element> {
        return $(selectors.home.nameInput);
    }

    public get fruitColorInput(): ChainablePromiseElement<WebdriverIO.Element> {
        return $(selectors.home.colorInput);
    }

    public get fruitAmountInput(): ChainablePromiseElement<WebdriverIO.Element> {
        return $(selectors.home.amountInput);
    }

    public get submitFruitBtn(): ChainablePromiseElement<WebdriverIO.Element> {
        return $(selectors.home.submitBtn);
    }


    // public get alertMsg(): Promise<string> {
    //     return $(selectors.common.toastH3).getText()
    // }

    public get fruitsList(): ChainablePromiseElement<WebdriverIO.Element> {
        return $(selectors.home.fruitList).$("child");
    }

    public async createFruit(name: string, amount: string, color: number): Promise<void> {
        await this.fruitNameInput.setValue(name);
        await this.fruitColorInput.setValue(color);
        await this.fruitAmountInput.setValue(amount);
        await this.submitFruitBtn.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    public open(): Promise<string> {
        return super.open('');
    }
};

export default new HomePage();