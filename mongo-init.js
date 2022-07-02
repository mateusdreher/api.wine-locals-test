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
db.createCollection('users');
db.users.insert({
  "name": "Cleiton Bom de Guerra",
  "email": "cleitonbomdeguerra@olimpus.com",
  "password": "$2b$10$YH18sgXQFxVCtX1tBCM8NOgPKsL4wglAwNxMSUXuYYsaxe4Fdzdru" //ihatezeus123
});