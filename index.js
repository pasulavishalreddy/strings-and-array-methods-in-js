// 1.take two strings with spaces at starting of one string and 
// at the ending of another string remove the spaces and 
// concat the both string and 
// convert the combined string into uppercase string

str1=" widget"
str2="scroll "
c=(str1.trimStart());
d=(str2.trimEnd());
console.log(c);
console.log(d);
e=(c.concat(d));
console.log(e);
f=(e.toUpperCase());
console.log(f);
// ans:
// widget
// scroll
// widgetscroll
// WIDGETSCROLL

// 2.Extract Middle Portion of the string and
//  get the last index of char of extracted string and
//  Convert the portion to Lowercstrase

str1="run,fun,joy,hapiness,sadness";
a=(str1.slice(4,20))
str2="sai"
b=(str2.indexOf('s'))
console.log(a);
console.log(b);
// ans:
// fun,joy,hapiness
// 0

// 3.take a single char and concat string to that char and 
// convert the resulted string to uppercase and 
// then extract the last second char 

char='a'
str1="bunny,sunny";
str2=(str1.toUpperCase())
console.log(char.concat(", ",str2));
str3=("a,bunny,sunny");
console.log(str3.length-1)
str4=str3.slice(10,11);
console.log(str4);
// ans:
// a, BUNNY,SUNNY
// N

// 4.we have 2 string and extract first 3 chars of first string and
//  extra last 3 chars of another string and concat those 2 results together
//  and first char and last char of the resulted concatinated string should as uppercase
 
 str1="universe";
 str2="planets";
 a=str1.slice(0,3);
 b=str2.slice(4,7);
console.log(a);
console.log(b);
c=(a.concat(b));
console.log(c);
d=c.slice(1,c.length-1);
console.log(d);
console.log(c[0].toUpperCase().concat(d).concat(c[5].toUpperCase()));
// ans:
// uni
// ets
// uniets
// niet
// UnietS

// 5.You are given a string with extra spaces at the beginning and end.
//  You need to trim the string, make the first and last characters uppercase, 
//  extract a specific part of the string, 
//  concatenate it with another string

str1=" space "
a=str1.trim();
start_ch=a[0].toUpperCase()
end_ch=a[a.length-1].toUpperCase()
console.log(start_ch.concat(a.slice(1,a.length-1)).concat(end_ch))
// ans:
// pac
// SpacE

// 6."hello there , how are you " find the index of are word in the sentence

str1="hello there , how are you ";
console.log(str1.length-1)
// ans:
// 25

                                    // object Methods 


// 1. Create an object person with properties firstName, lastName, and age. Then:
// Access and print the firstName property.
// Add a new property city with the value "New York" and print the updated object.
var a={Firstname:"Nelson",Lastname:"Mandela",age:70};
console.log(a.Firstname);
a.city="NewYork"
console.log(a);
// ans:
// Nelson
// { Firstname: 'Nelson', Lastname: 'Mandela', age: 70, city: 'NewYork' }


// 2.Create an object product with properties name, price, and inStock. Then:
// Modify the price property to a new value.
// Delete the inStock property from the object and print the updated object.

var a={name:"Rice",price:"1200rs",inStock:"5bags"}
a.price="1350rs"
delete a.inStock;
console.log(a);
// ans:
// { name: 'Rice', price:'1350rs' }

// 3.Create an object library with nested objects for different genres. Each genre has a list of books. Then:
// Add a new genre scienceFiction with a list of two books.
// Access and print the first book in the fantasy genre.
// Delete the mystery genre from the object.

var listofbooks={fantasy:
  ["book1",
  "book2",
  "book3"],mystery:["java","python"]
}
listofbooks.scienceFiction=["book4","book5"];
console.log(listofbooks.fantasy[0]);
// ans:book1
delete listofbooks.mystery;
console.log(listofbooks);
//ans:
// {
//   fantasy: [ 'book1', 'book2', 'book3' ],
//   scienceFiction: [ 'book4', 'book5' ]
// }


// 4.Create an object user with properties username, email, and an address object that contains city, state, and zip. Then:
// Freeze the user object using Object.freeze().
// Try to change the email property and check if the object is frozen using Object.isFrozen().
// Add a new property phone to the user object and observe the result.

var user={ username:"Tommy", email:"tommy@gmail.com", address:"green hills",city:"Trim", state:"Melbourne", zip:"442"}
Object.freeze(user);
user.email="chris@gmail.com";
Object.isFrozen(user);
user.phone="899";
console.log(user);

// string method(freeze)any condition is not possible
// ans:
// {
//   username: 'Tommy',
//   email: 'tommy@gmail.com',
//   address: 'green hills',
//   city: 'Trim',
//   state: 'Melbourne',
//   zip: '442'
// }

// 5.Create an object car with properties make, model, and price. Then:
// Seal the object using Object.seal().
// Try to delete the make property and check if the object is sealed using Object.isSealed().

var car={make:"steel",model:"2019",price:"500000rs"}
Object.seal(car);
delete car.make;
car.make="wood";
Object.isSealed();
console.log(car);

// string method(seal)only reassign is possible
// ans:
// { make: 'wood', model: '2019', price: '500000rs' }