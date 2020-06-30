import dictionary from "./json/dictionary.json";
const dictionaries = new Map();
for (let k of Object.keys(dictionary)){
    dictionaries.set(k, dictionary[k]);
}

export default dictionaries;
