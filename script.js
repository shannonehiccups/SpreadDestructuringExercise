// 1a. Create a const variable called mcuShows and set the value to an array with the following values "Loki" and "What If...?"
const mcuShows =["Loki", "What If...?"];

// 1b. Create another const variable called starWarsShows and set the value to an array with the following values "The Mandalorian" and "The Bad Batch"
const starWarsShows =["The Mandalorian", "The Bad Batch"];

// 1c. Create another const variable called disneyPlusShows. Using spread, set the value for disneyPlusShows to the items in the mcuShows and starWarsShows arrays as well as the following string value "Monsters At Work".
const disneyPlusShows = [...mcuShows, ...starWarsShows, "Monsters At Work"];

// 1d. Using a console log, display the value of the disneyPlusShows variable in terminal
console.log(disneyPlusShows);

// 2a. Create another const variable called netflixMovies and set the value to an object with the following key value pairs (key: "action" value: "Extraction") & (key: "crime" value: "The Irishman")
const netflixMovies = {action: "Extraction", crime: "The Irishman"};

// 2b. Create a const variable called amazonPrimeMovies and set the value to an object with the following key value pairs (key: "action" value: "The Tomorrow War") & (key: "drama" value: "One Night In Miami")
const amazonPrimeMovies = {action: "The Tomorrow War", drama: "One Night In Miami"}; 

// 2c. Create another const variable called streamingMovies. Using spread, set the value for streamingMovies to an object with the key value pairs in the netflixMovies and amazonPrimeMovies objects as well as the following key value pair (key: "musical" value: "Hamilton"). Also, spread the netflixMovies and amazonPrimeMovies in the order that will set the value for the "action" key to "Extraction"
const streamingMovies = {...amazonPrimeMovies, ...netflixMovies, musical:"Hamilton"};

// 2d. Console log the value of the streamingMovies variable
console.log(streamingMovies);

// 3a. Create another const variable called disneyJunior and set the value to an array with the following values "Mickey Mouse Clubhouse" and "Spidey and His Amazing Friends"
const disneyJunior = ["Mickey Mouse Clubhouse", "Spidey and His Amazing Friends"];

// 3b. Using destructuring, set the value of the "Mickey Mouse Clubhouse" item to a variable called mickey. Also, set the value of the "Spidey and His Amazing Friends" item to a variable called spidey.
const [mickey, spidey] = disneyJunior; 

// 3c. Using a single console log, display the values of both the mickey and spidey variables in terminal
// console.log(disneyJunior);
console.log(mickey, spidey);

// 4a. Create another const variable called "avengers" and set the value to an object with the following key value pairs (key: "warMachine" value: "James Rhodes") & (key: "theHulk" value: "Bruce Banner")
const avengers = { warMachine: "James Rhodes", theHulk: "Bruce Banner"};

// 4b. Using destructuring, create variables with each key value pair. Have the key be the variable name and the value be the value from the key value pair.
const {warMachine, theHulk}= avengers; 

// 4c. Using a single console log, display the values of the two new variables in terminal
console.log(warMachine, theHulk);

// 4d. Create another const variable called "moreAvengers" and set the value to an object with the following key value pairs (key: "blackWidow" value: "Natasha Romanoff"), (key: "hawkeye" value: "Clint Barton"), & (key: "ironMan" value: "Tony Stark").
const moreAvengers = {blackWidow: "Natasha Romanoff", hawkeye: "Clint Barton", ironMan: "Tony Stark"};

// 4e. Using destructuring again, create brand new variable names for the values in the moreAvengers object. For the "Natasha Romanoff" string value use "nat" for the variable name and for the REST of the key value pairs use "others" for the variable name.
const {blackWidow: nat,...other}= moreAvengers; 

// 4f. Using a single console log, display the values of the two new variables in terminal
console.log(nat, other);

const bonus = {
    first: [1, 2, 3],
    second: [4, 5, 6],
    third: [7, 8, 9]
  };

//   5a. Create a const variable named "all" and use the "bonus" object as well as spread to set the value of the "all" variable to an array with numbers 1 through 9 as the items (Example: [1, 2, 3, 4, 5, 6, 7, 8, 9])
const all= [...bonus["first"],...bonus["second"], ...bonus["third"]]; 

// 5b. Create a variable for each of the nine numbers in the "bonus" object and set the number as the value for that using the spelled out name of each number as the variable name (Example: const one = 1, const two = 2, etc.). Also, must use destructuring to complete this.
const [one, two, three]= bonus.first; 
const [four, five, six]= bonus.second; 
const [seven, eight, nine]= bonus.third; 

// OR
// const {first, second, third}= bonus;
// const [one, two, three]= first; 
// const [four, five, six]= second; 
// const [sever, eight, nine]= third; 

// OR
// const [one, two, three, four, five, six, seven, eight, nine] = all; 
console.log(one, two, three, four, five, six, seven, eight, nine);

