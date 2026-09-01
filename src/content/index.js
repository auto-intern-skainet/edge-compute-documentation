import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import en from './en';
import de from './de';
import zh from './zh';

const CONTENT = {en, de, zh};

/** Page content for the current locale, falling back to English. */
export function useContent() {
  const {i18n} = useDocusaurusContext();
  return CONTENT[i18n.currentLocale] || en;
}
