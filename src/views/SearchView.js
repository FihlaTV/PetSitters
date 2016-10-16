import { View } from 'backbone';
import $ from 'jquery';
import ResultCollection from '../collections/ResultCollection';

var template = require('../handlebars/resultList.handlebars');


class TestView extends View {

  constructor() {

    super({
       events: {
          "click .updateFilter": "updateFilter"
      }
    });
   
  }

  get el() {
    return '#petList';
  }

  initialize() {
    this.collection = new ResultCollection();
    let opt = this.getFetchParams();
    this.collection.fetch(opt);
    this.listenTo(this.collection, "reset", this.render);
  }

  updateFilter(event) {
    let filterBy = $(event.target).data('filter-by');
    let options = this.getFetchParams(filterBy);
    this.collection.fetch(options);
  }

  getFetchParams(param) {
    let defaultOpts = {"reset": true}; 
    if(param){
      let paramOpts = {"data": {"service": param}};
      let opts = $.extend({}, defaultOpts, paramOpts);
      return opts;
    }
    else return defaultOpts;
  }

  render() {
    let html = template({result:this.collection.toJSON()});
    this.$el.html(html);
  }
}

export default TestView;
