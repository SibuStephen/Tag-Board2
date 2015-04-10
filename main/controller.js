var mongoose = require('mongoose');
    Tagboard = mongoose.model('MyTagBoard');

console.log(MyTagboard);

exports.tag =function(req,res)
{

MyTagBoard.find(function(err, result){
  if(err){
    c("Error: " + err);
  }else{
    c(result);
  }
console.log(tag);
});
}
