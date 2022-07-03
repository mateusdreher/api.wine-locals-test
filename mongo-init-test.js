db.createUser({
  user: 'winelocals-test',
  pwd: 'Passw0rd-test',
  roles: [
    {
      role: 'readWrite',
      db: 'wine_locals_test',
    },
  ],
});

db = db.getSiblingDB('wine_locals_test');
db.createCollection('users');
db.users.insert({
  "name": "Cleiton Bom de Guerra",
  "email": "cleitonbomdeguerra@olimpus.com",
  "password": "$2b$10$YH18sgXQFxVCtX1tBCM8NOgPKsL4wglAwNxMSUXuYYsaxe4Fdzdru" //ihatezeus123
});