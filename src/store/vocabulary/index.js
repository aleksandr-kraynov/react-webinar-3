import StoreModule from "../module";
import { strings } from '../../vocabulary'

class Vocabulary extends StoreModule {  

  initState() {
    return {  
        vocabulary: strings,      
        language: 'ru'
    }
  }

  onChangeLanguage(language) {
    this.setState({
      ...this.getState(),
      language: language     
    }, 'Язык изменён');  
  }

  getTranslation(string, language) {
    if (!language) {
      console.warn("getString, language is undefined");
      return "";
    }
    if (!strings[language][string]) {
      const alternativeLanguage = language === "en" ? "ar" : "en";
      if (!strings[alternativeLanguage][string]) {
        console.warn(
          "getString, string not found in any language. ID: ",
          string,
        );
        return "";
      }
      console.warn(`getString, string not found in ${language}. ID: `, string);
      return strings[alternativeLanguage][string];
    }
    return strings[language][string];
  };

}

export default Vocabulary;
