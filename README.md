# How to Use
- Set the MySQL 'user' and 'password' variables in 'index.js' in the main project folder
- In the terminal, navigate to the project folder and run 'mysql --local-infile=1 -u root -p < db.sql' to create and populate the database from the .csv files in the data folder. (If this doesn't work, enter mysql and run 'set global local_infile=true;', then try again.)
- In the terminal type 'npm start' in the main project folder and the client folder to run the project at 'https://localhost:3000' in your browser.
- Screenshots are available in the screenshots folder