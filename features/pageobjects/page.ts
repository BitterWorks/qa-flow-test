import { config as envconf } from "dotenv";
export default class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    public open(path: string | ""): Promise<string> {
        return browser.url(`${process.env.BASE_URL}${path || ""}`)
    }
}
