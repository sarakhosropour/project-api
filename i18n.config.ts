import i18n from "i18n";
import path from "path";
import * as url from "url";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

i18n.configure({
  locales: ["en", "fa"],
  defaultLocale: "en",
  queryParameter: "lang",
  directory: path.join(__dirname, "/src/locales"),
  api: {
    __: "translate",
    __n: "translateN",
  },
});

export default i18n;
