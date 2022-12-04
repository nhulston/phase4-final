## Summary
Blog creation CRUD app. Users can create, delete, and update blog posts.

## How to run
Starting the front end
1. `cd client`
2. `npm run dev`
3. Make sure port 3000 is not in use

Starting the backend
1. `cd server`
2. `node index.js`
3. Make sure port 3001 is not in use

If SQL auth doesn't work, run the following sql statement:
`ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';`<br>
`flush privileges;`