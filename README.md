# skratetask
Task Assignment for Backend Development Intern in skrate

# API Link
My node App deployed on AWS Cloud.
http://3.108.55.92:4000

# Instructions for run the project

```bash
  git clone https://github.com/ajay0988/skratetask.git
```
```bash
  cd skratetask
```
```bash
  npm install
```

```bash
  node index.js
```

# external library used 
1. mongoose
```bash
  I have used this to connect mongodb(NOSQL database) in nodeJS
```
3. express
```bash
  I have used this for create express app
```

5. dotenv
```bash
  Using this , we can manage the env variables in node application. It is work like secret file
```

## API's 

#### Create new User

```http
  POST /users/new
  request body 
  {"username":"value"}
  Note:- Value must be grater than or equal than 6
  response body 
  {
  "UID": "id of user after successfully creation"
  }
```

#### Get all Users

```http
  GET /users/all
  
   response body 
  {
  "users": [
        {
            "_id": "61bb980742411127cd7f169f",
            "username": "ajaykumar1234"
        },
        {
            "_id": "61bb984d42411127cd7f16a1",
            "username": "abhimanyukumar"
        },
  }
```
#### Create a meeting

```http
  POST /meetings/new
  request Body 
  {
  "uid1": "id of first user",
  "uid2":"id of 2nd user",
  "date":"17-12-2021"
  }
  
  response body 
  {
  "UID": "Id of meeting"
  }
  
  
```
#### Get All meetings

```http
  GET /meetings/all
```

