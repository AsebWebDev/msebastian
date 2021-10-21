import german from './de_translation'
import english from './en_translation'

const dict = { de: german, en: english };

const t = (lang, category, string) =>
  dict[lang][category][string];

export { dict };
export default t;
