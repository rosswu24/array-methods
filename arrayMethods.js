// DO NOT MODIFY
var genericNumberArray = [1, 2, 3, 4, 5];
var colors = ['Blue', 'Red', 'Yellow', 'Charlie'];
var scrambledWords = ['win', 'the', 'for', 'burritos'];
var phoneNumber = [9, 0, 3, 5, 7, 6, 8];
var orderQueue = [{ takeOut: 'Ice Cream' }, { takeOut: 'Medium Salad'}, { takeOut: 'Burger'}];
var mixedNums = [5, 81, 40, 4, 805, 10, 76, 21, 3, 2, 7, 1, 7];
var mixedWords = ['Dont', 'You', 'Forget', 'About', 'Me'];
var fruitCollection = ['Apple', 'Scissors', 'Pug', 'Lady Bug', 'Banana', 'Pear'];
var gemBox = ['Ruby', 'Diamond', 'Diamond', 'Emerald', 'Moonstone', 'Pizza', 'Sneaker', 'Sapphire', 'Baby', 'Jeans', 'Soda Can', 'Boat'];
var upToTen = [1, 2, 9, 10];
var brownOnly = ['brown', 'brownish', 'ad8fy7iuhj23nrsf', 9813, {}, undefined,  'brown'];
var orderedValues = [4, 5, 6, 7, 8, 9, 10];
var friends = ['Todd', 'Jacoby', 'Miko', 'Joseph', 'Kevin', 'Todd C.'];
var monthNames = ['Jan', 'Feb', 'Mar', 'Apr'];
var bulkNumbers = [5, 5, 6, 6, 9, 9, 2, 2, 2, 5, 2];

// do your work below!

// start of push()
var nameArray = [];
nameArray.push("Ross");
nameArray.push("Wu");
console.log(nameArray);

genericNumberArray.push(6,7,8,9,10);
//end of push()

//start of pop()
var popResult = colors.pop(3);

//end of pop()

//start of reverse
scrambledWords.reverse();
phoneNumber.reverse();
//end of reverse

//start of shift
var nextOrder = orderQueue.shift();

//end of shift

//start of sort
mixedNums.sort();
mixedWords.sort();
//end of sort

//start of splice
var notFruit = fruitCollection.splice(1,3);
// var notFruit = fruitCollection.splice(2, 0, "Pug", "Lady Bug", " Scissors");
//end of splice

//start gemBox
gemBox.splice(5,7,"Sapphire");
//End gemBox

//start of upToTen
upToTen.splice(2,0,3,4,5,6,7,8);
//End upToTen

//start of brownOnly
brownOnly.splice(1,5, 'brown','brown', 'brown');
//End of brownOnly

//start of unshift
var orderedValuesNewLength = orderedValues.unshift(1,2,3);
//end of unshift

//start of Concat
var randomThingsArray = genericNumberArray.concat(colors);
var updatedOrders = orderQueue.concat([{ takeOut: 'Ice Cream' }, { takeOut: 'Medium Salad'}]);
//end of Concat

//start of join
var sentence = scrambledWords.join(" ");
var myFruits = fruitCollection.join(" + ");
//end of join

//start of Slice
var favoriteFriends = friends.slice(1,3);
var owesMoney = friends.slice(3,7);
//end of Slice

//start of to string
var monthNameString = monthNames.toString();
//end of to string

//start of indexof
var favoriteColor = colors.indexOf("Red");
var favoriteEvenNumber = mixedNums.indexOf(76);
//end of indexof

// start of lastIndexOf
var lastNine = bulkNumbers.lastIndexOf(9); 
var lastFive = bulkNumbers.lastIndexOf(5);
// end of lastIndexOf