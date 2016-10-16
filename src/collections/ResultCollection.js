import { Collection } from 'backbone';
import $ from 'jquery'

class TestCollection extends Collection {
  constructor() {
    super();
  }

  url() {
  	return "/static/search.json";
  }

  parse(data) {
  	return data.search;
  }

  initialize() {
    console.log('Collection');
  }
}

export default TestCollection;
