angular.module('templateView', ['ui.sortable'])
  .controller('templateListController', function(){
    var template = this;

    template.directory = [
      {id: 1, name: 'Real Estate Standard'},
      {id: 2, name: 'Newsletter Standard'}];

    template.add = function(){

      // template.tempName.show(false);
      if (template.directory.name != undefined){
      template.directory.push({id: template.directory.length + 1, name: template.directory.name})
      console.log(template.directory.length);
      template.directory.name = null;
      console.table(template.directory);


    }
    else{
      alert("Please add a title to your template!")
    }

    };

    template.remove = function(index){
      var r = confirm('Are you sure you want to delete this template?')
      if(r == true){
      template.directory.splice(index, 1);
      }
    };
  });
