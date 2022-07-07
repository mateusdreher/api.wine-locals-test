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
  "name": "Silva",
  "address": "Rua HAHAHAH, 250",
  "rating": 4
});
db.restaurants.insert({
  "_id": ObjectId("62c384eb14b88c76c52bc299"),
  "name": "Z Café",
  "address": "Rua HEHEHE, 520",
  "rating": 3.5
});
db.restaurants.insert({
  "_id": ObjectId("62c384eb14b88c76c52bc245"),
  "name": "Canal Café - PUCRS",
  "address": "Rua HEHEHE, 520",
  "rating": 5
});
db.restaurants.insert({
  "_id": ObjectId("62c384eb14b88c76c52bc233"),
  "name": "Palatus - PUCRS",
  "address": "Rua HEHEHE, 520",
  "rating": 4.5
});
db.restaurants.insert({
  "_id": ObjectId("62c384eb14b88c76c52bc285"),
  "name": "Ponto Onze - PUCRS",
  "address": "Rua HEHEHE, 520",
  "rating": 2
});


db.dishes.insert({
  "name": "X Bacon",
  "description": "Cat ipsum dolor sit amet, caticus cuteicus bathe private parts with tongue then lick",
  "value": 25.90,
  "restaurant_id": "62c384eb14b88c76c52bc297"
});
db.dishes.insert({
  "name": "X Salada",
  "description": "Cat ipsum dolor sit amet, caticus cuteicus bathe private parts with tongue then lick",
  "value": 10.25,
  "restaurant_id": "62c384eb14b88c76c52bc297"
});
db.dishes.insert({
  "name": "X Egg",
  "description": "Cat ipsum dolor sit amet, caticus cuteicus bathe private parts with tongue then lick",
  "value": 20.99,
  "restaurant_id": "62c384eb14b88c76c52bc299"
});
db.dishes.insert({
  "name": "Prato Executivo",
  "description": "Cat ipsum dolor sit amet, caticus cuteicus bathe private parts with tongue then lick",
  "value": 44.90,
  "restaurant_id": "62c384eb14b88c76c52bc299"
});
db.dishes.insert({
  "name": "X Bacon",
  "description": "Cat ipsum dolor sit amet, caticus cuteicus bathe private parts with tongue then lick",
  "value": 23.90,
  "restaurant_id": "62c384eb14b88c76c52bc285"
});
db.dishes.insert({
  "name": "X Salada",
  "description": "Cat ipsum dolor sit amet, caticus cuteicus bathe private parts with tongue then lick",
  "value": 10.25,
  "restaurant_id": "62c384eb14b88c76c52bc233"
});
db.dishes.insert({
  "name": "X Salada",
  "description": "Cat ipsum dolor sit amet, caticus cuteicus bathe private parts with tongue then lick",
  "value": 15.25,
  "restaurant_id": "62c384eb14b88c76c52bc245"
});
db.dishes.insert({
  "name": "X Salada Duplo",
  "description": "Cat ipsum dolor sit amet, caticus cuteicus bathe private parts with tongue then lick",
  "value": 19.25,
  "restaurant_id": "62c384eb14b88c76c52bc245"
});
db.dishes.insert({
  "name": "X Bacon Cheddar",
  "description": "Cat ipsum dolor sit amet, caticus cuteicus bathe private parts with tongue then lick",
  "value": 23.95,
  "restaurant_id": "62c384eb14b88c76c52bc245"
});