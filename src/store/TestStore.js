import  { observable, action, computed } from  'mobx'

export  class Article{
    @observable  data  = 'Test data here';
}

export default new Article();