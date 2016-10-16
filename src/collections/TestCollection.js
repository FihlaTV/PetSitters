import { Collection } from 'backbone';
import $ from 'jquery'

class TestCollection extends Collection {
  constructor() {
    super();
  }

  url() {
  	return "/static/search.json";
  }

  initialize() {
    console.log('Collection');
  }
}

export default TestCollection;
