# How to Use
- Clone the repository `https://github.com/alexrossetti/dashboard.git`
- Set the MySQL 'user' and 'password' variables in 'index.js' in the main project folder
- In the terminal, navigate to the project folder and run `mysql --local-infile=1 -u root -p < db.sql` to create and populate the database from the .csv files in the data folder. (If this doesn't work, enter mysql and run `set global local_infile=true;`, then try again.)
- In the terminal type 'npm start' in the main project folder and the client folder to run the project at `https://localhost:3000` in your browser.


# Preview

<img width="600" alt="1" src="https://user-images.githubusercontent.com/45094226/56356054-b851bd80-61cf-11e9-9da1-a50a006146a9.png">
<img width="600" alt="2" src="https://user-images.githubusercontent.com/45094226/56356058-bbe54480-61cf-11e9-8546-39513af36b80.png">
<img width="600" alt="3" src="https://user-images.githubusercontent.com/45094226/56356059-bbe54480-61cf-11e9-9b3b-ee7c44046378.png">
