import miscellaneous from "./miscellaneous";
import aboutme from "./aboutme";
import news from "./news";
import cv from "./cv";
import membership from "./membership";
import expertopinion from "./expertopinion";
import publications from "./publications";
import lectures from "./lectures";
import press from "./press";
import ws from "./ws";
import publicspeaking from "./publicspeaking";

const translation = (lang) => ({
  ...miscellaneous[lang],
  ...aboutme[lang],
  ...news[lang],
  ...cv[lang],
  ...membership[lang],
  ...expertopinion[lang],
  ...publications[lang],
  ...lectures[lang],
  ...press[lang],
  ...ws[lang],
  ...publicspeaking[lang],
});

const languages = { de: "de", en: "en" };
const german = translation(languages.de);
const english = translation(languages.en);
const dict = { de: german, en: english };

const t = (lang, category, string) => dict[lang][category][string];

export { dict, languages };
export default t;
