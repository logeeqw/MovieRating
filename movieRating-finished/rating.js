/**
 * @author Logee, Quinn
 * @version 0.01
 *@summary rates movies
 * @todo nothing
 */

const PROMPT = require(`readline-sync`);
const    MAX_CHANCES = 3;
let continueResponse;
let movieTitle;
let rateMovie;

/**
 * @method
 * @desc The dispatch method for the program
 * @return (null)
 */
function main() {
    setContinueResponse();
    while (continueResponse === 1) {
        setMovieTitle();
        setRateMovie();
        setContinueResponse();
    }
    for (let i = 0; i < MAX_CHANCES; i++) {
        printGoodbye();
    }
}

main();

    /**
     * @method
     * @desc continue Response mutator
     * @returns null
     */
    function setContinueResponse() {
    if (continueResponse === 1 || continueResponse === 0) {
        continueResponse = Number(PROMPT.question(`\nDo you want to continue? (0=no, 1=yes): `));
        while (continueResponse !== 0 && continueResponse !== 1) {
            console.log(`${continueResponse} is an incorrect value. Please try again.`);
            continueResponse = Number(PROMPT.question(`\nDo you want to continue? (0=no, 1=yes): `));
        }
    } else {
        continueResponse = 1;
    }
}

/**
 * @method
 * @desc sets a movie title
 * @returns null
 */
function setMovieTitle() {
    movieTitle = PROMPT.question(`\nPlease enter a movie title: `)
}

/**
 * @method
 * @desc lets the customer rate the movie
 * @returns null
 */
function setRateMovie() {
   const MAX_STARS = 5;
    rateMovie = PROMPT.question(`\nPlease enter a rating for this movie (1-5 stars): `);
    while (rateMovie !== null && rateMovie > MAX_STARS)
         {
            console.log(`${rateMovie} is an incorrect value. Please try again.`);
            continueResponse = Number(PROMPT.question(`\nPlease enter a rating for this movie (1-5 stars): `));
        }

}

/**
 * @method
 * @desc Print goodbye utility method
 * @returns {null}
 */
function printGoodbye() {
    console.log(`\tGoodbye.`);
}