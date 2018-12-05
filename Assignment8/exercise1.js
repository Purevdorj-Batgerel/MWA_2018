Q1.     db.restaurants.find({})     //3772
Q2.     db.restaurants.find({}, {restaurant_id:1, name:1, district:1, cuisine:1})
Q3.     db.restaurants.find({}, {_id:0, restaurant_id:1, name:1, district:1, cuisine:1})
Q4.     db.restaurants.find({}, {_id:0, restaurant_id:1, name:1, district:1, "address.zipcode":1}) //But this will display address object
        db.restaurants.aggregate([{$project: {_id:0, restaurant_id:1, name:1, district:1, cuisine:1, zipcode: "$address.zipcode"}}]) //But this will using Aggragation
Q5.     db.restaurants.find({district:"Bronx"})     //309 results
Q6.     db.restaurants.find({district:"Bronx"}).limit(5)
Q7.     db.restaurants.find({district:"Bronx"}).skip(5).limit(5)
Q8.     db.restaurants.find({"address.coord": {$lt:-95.754168}}) // 3 results
Q9.     db.restaurants.find({cuisine:{$ne:"American "}, "grades.score":{$gt:70},"address.coord": {$lt:-65.754168}}) // 5 results
Q10.    db.restaurants.find({name: {$regex: /^Wil/}}, {restaurant_id:1, name:1, district:1, cuisine:1}) // 3 results
Q11.    db.restaurants.find({name: {$regex: /ces$/}}, {restaurant_id:1, name:1, district:1, cuisine:1}) // 6 results
Q12.    db.restaurants.find({name: {$regex: /Reg/}}, {restaurant_id:1, name:1, district:1, cuisine:1})  // 7 results
Q13.    db.restaurants.find({district:"Bronx", cuisine:{$in:["American ", "Chinese"]}}) // 91 results
Q14.    db.restaurants.find({district:{$in: ["Staten Island", "Queens", "Bronx", "Brooklyn"]}}, {restaurant_id:1, name:1, district:1, cuisine:1})     //1889 results
Q15.    db.restaurants.find({district:{$nin: ["Staten Island", "Queens", "Bronx", "Brooklyn"]}}, {restaurant_id:1, name:1, district:1, cuisine:1})      //1883 results
Q16.    db.restaurants.find({"grades.score":{$lte:10}}, {restaurant_id:1, name:1, district:1, cuisine:1})       // 3529 results
Q17.    db.restaurants.find({"address.coord.1":{$gt:42, $lte:52}}, {restaurant_id:1, name:1, district:1, cuisine:1})    //7 results
Q18.    db.restaurants.find({},{},{sort:['name', 1]})
        db.restaurants.find({}).sort({name:1})
Q19.    db.restaurants.find({}).sort({name:-1})
Q20.    db.restaurants.find({}).sort({cuisine:1, district:-1})
Q21.    db.restaurants.find({"address.street":{$exists: true}}) //3772 results
Q22.    db.restaurants.find({"address.coord":{$type: "double"}}) //3772 results
Q23.    db.restaurants.find({name:{$regex:/^Mad/}}, {name:1, district:1, "address.coord":1, cuisine:1})
        db.restaurants.aggregate([{$project: {name:1, district:1, longitude: {$arrayElemAt: ["$address.coord", 0]}, latitude: {$arrayElemAt:["$address.coord", 1]}, cuisine:1}}])
