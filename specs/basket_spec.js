
var basket = require ('../basket');
var assert = require('chai').assert;

describe('basket',function(){

    beforeEach(function () {
        basket.fullprice=0;
        customer = Object.create(null);
        customer.name="Davide"
        customer.surname="de Lerma"
        customer.discountcard="yes"
    });

   it ( 'basket should be empty at start', function(){
     assert.deepEqual([], basket.items)
   })

   it ('add item to basket', function(){
    var ham = Object.create(null)
    ham.price = 12
    ham.offer="no"
    basket.add(ham);
    assert.deepEqual([ham], basket.items)
   })

   it ('remove item from basket', function(){
      var ham = Object.create(null);
      ham.price = 12
      ham.offer="no"
      basket.remove(ham)
      assert.deepEqual([], basket.items); 
   })

   it ('calulate total price of basket', function(){
      var cream = Object.create(null);
      cream.price = 3
      cream.offer="no"
      var ham = Object.create(null);
      ham.price = 12
      ham.offer="no"
      basket.items=[cream,ham]
      basket.totprice(customer)
      assert.equal(15,basket.fullprice)
   })

   it ('if price of basket higher than 40 discount 10%',function(){
    var wine = Object.create(null);
    wine.price = 45
    wine.offer="no"
    customer.discountcard="no"
    basket.add(wine)
    basket.totprice(customer)
    assert.equal(54,basket.fullprice)
   })

   it('more discount', function(){
    basket.totprice(customer)
    assert.equal(51.3,basket.fullprice)
   })

   it('buy one get one', function(){
    basket.remove(wine)
    var wine = Object.create(null);
    wine.price = 45
    wine.offer="yes"
    basket.add(wine)
    assert.equal(4,basket.items.length)
   })
 })