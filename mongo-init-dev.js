db.createUser({
  user: 'winelocals',
  pwd: 'Passw0rd',
  roles: [
    {
      role: 'readWrite',
      db: 'wine_locals',
    },
  ],
});

db = db.getSiblingDB('wine_locals');
db.createCollection('user_auth');
db.createCollection('dishes');
db.createCollection('restaurants');

db.user_auth.insert({
  "email": "cleitonbomdeguerra@olimpus.com",
  "password": "$2b$10$YH18sgXQFxVCtX1tBCM8NOgPKsL4wglAwNxMSUXuYYsaxe4Fdzdru" //ihatezeus123
});

db.restaurants.insert({
  "_id": ObjectId("62c384eb14b88c76c52bc297"),
  "name": "Restaurante 1",
  "address": "Rua HAHAHAH, 250",
  "rating": 4
});
db.restaurants.insert({
  "_id": ObjectId("62c384eb14b88c76c52bc299"),
  "name": "Restaurante 2",
  "address": "Rua HEHEHE, 520",
  "rating": 3.5
});


db.dishes.insert({
  "name": "Prato 1",
  "description": "asdasdasdasd",
  "value": 25.90,
  "restaurant_id": "62c384eb14b88c76c52bc297"
});
db.dishes.insert({
  "name": "Prato 2",
  "description": "kkkkkkkkkkkkk",
  "value": 10.25,
  "restaurant_id": "62c384eb14b88c76c52bc297"
});
db.dishes.insert({
  "name": "Prato 3",
  "description": "aksladskaonvandf",
  "value": 49.99,
  "restaurant_id": "62c384eb14b88c76c52bc299"
});
db.dishes.insert({
  "name": "Prato 4",
  "description": "okosoakdjalsbd",
  "value": 25.90,
  "restaurant_id": "62c384eb14b88c76c52bc299"
});