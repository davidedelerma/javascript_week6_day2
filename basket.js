var basket = Object.create(null);
basket.items = [];
basket.fullprice = 0;
basket.add = function(item){
  this.items.push(item)
  if (item.offer === "yes"){
    this.items.push(item)
  }
};

basket.remove = function(itemToremove){
  for (item of this.items){
    if (itemToremove.name === item.name) {
      var pos = this.items.indexOf(item);
      this.items.splice(pos, 1);
    }
  }

};

basket.totprice = function(customer){
  for (item of this.items){
    this.fullprice += item.price
  };

  if (this.fullprice>=40 && customer.discountcard === "yes" ){
    this.discount(0.9);
    this.discount(0.95);
  }else if(this.fullprice>=40 && customer.discountcard != "yes" ){
    this.discount(0.9);
  };

};

basket.discount =function(disc){
  this.fullprice=this.fullprice*disc;
  this.fullprice=this.fullprice;
};


module.exports = basket;