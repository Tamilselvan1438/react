const _ = require("lodash");
class Dictionary {
  constructor() {
    this.synonyms = {};
  }

  addSynonym(word) {
    if (!this.synonyms[word]) {
      this.synonyms[word] = [];
    }
    return this.synonyms;
  }

  addMeaningSynonyms(word, synonym) {
    if (this.synonyms[word]) {
      if (!this.synonyms[word].includes(synonym)) {
        this.synonyms[word].push(synonym);
      }
    } else {
      this.synonyms[word] = [synonym];
    }
  }

  searchSynonyms(word) {
    if (this.synonyms[word]) {
      return { [word]: this.synonyms[word] };
    } else if (_.flatMapDeep(Object.values(this.synonyms)).includes(word)) {
      let search = {};
      _.map(this.synonyms, (key, value) => {
        if (key.includes(word)) {
          search[word] = _.without([value, ...key], word);
        }
      });
      return search;
    } else {
      return "Word Not Found";
    }
  }

  showSynonyms() {
    console.log(this.synonyms);
  }
}

const car1 = new Dictionary();
car1.addSynonym("language");
car1.addSynonym("animals");
car1.addMeaningSynonyms("language", "tamil");
car1.addMeaningSynonyms("language", "english");
car1.addMeaningSynonyms("animals", "dog");
car1.addMeaningSynonyms("animals", "cat");
car1.showSynonyms();
console.log(car1.searchSynonyms("tamil"));
console.log(car1.searchSynonyms("english"));
console.log(car1.searchSynonyms("dog"));
