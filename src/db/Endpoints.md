# CookieCliker API Endpoints

### Users

#### /register 
Add a new user in the db
##### body

```` javascript
POST
{
    "pseudo": String,
    "pwd": String
}
````


#### /login 
Login and create a new acces and refresh token
#### body

```` javascript
POST
{
    "pseudo": String,
    "pwd": String
}
````

#### /refresh 
Send a new acces token

```` javascript
POST
````

#### /logout 
Deleting the refresh cookie
```` javascript
POST
````

### Scores

#### /scores 
Get the score of the player attached to the acces token

```` javascript
GET
````

#### /scores 
Set the score of the player attached to the acces token
#### body

```` javascript
POST
{
  "score": [
    {"base":number, "multiplier":String},
    ...
    ]
}
````

### Inventorys

#### /inventorys 
Get the inventory of the player attached to the acces token

```` javascript
GET
````
#### /inventorys 
Set the inventory of the player attached to the acces token
#### body

```` javascript
POST
{
  "bonus":[
    {
      "bonusName": String,
      "amount": number
    },
    ...
  ]
}
````

### Bonus

#### /bonus 
Get all available bonus

```` javascript
GET
````

#### bonus/:id
Get the bonus named id
```` javascript
GET
````


### Multipliers

#### /multipliers 
Get all available multipliers

```` javascript
GET
````

#### multipliers/:id
Get the multipliers named id
```` javascript
GET
````



