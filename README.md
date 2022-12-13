## How to run
Make sure you have react, express, and mysql installed

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

## Technologies
We used Reactjs, Express, and Mysql to create our application. Our react frontend allowed users to input data into fields which were then passed to the backend through Axios, and this information was then used as input data for the respective mysql stored procedures. Views did not require any specific user inputs. 

## Work distribution
Each of us worked on the project asynchronously through github. We setup the skeleton frontend and backend together and then the work was split up where each of us took one quarter of the stored procedures/views. We each tested our own stored procedures individually as we developed, and after all commits were done we had a finished product. Lastly, we each tested all stored procedures and views to make sure that the code functioned as expected and made any bug fixes as necessary.
