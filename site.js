/* SITE.JS: THIS FILE CONTAINS THE METHODS/FUNCTIONS AND VARIABLES CONTROLLING YOUR SITE
//
*/

/* NOTE: MOVIES.JSON CONTAINS A LIST OF MOVIES AND ACCOMPANYING METADATA
//
//    They are in the following format:
//    title (String): the name of the movie
//    iscore (Number): the IMDB score
//    rating (String): the movie's MPAA rating
//    released (Array): the release date. Note that the order of the array is:  YYYY, MM, DD
//    country (String): the country of production
//    posters (Array): an array of String values with the URL to movie posters (in your img/ directory)
//    imdb (String): the URL to the corresponding IMDB website
//    website (String): the URL to the corresponding official website
//    likes (Number): a fictitious number of user likes
//    dislikes (Number): a fictitious number of user dislikes
//    posterindex (Number): a counter to use with the "posters" array to keep track of the current displayed poster index
//
// FOR STEP 16, ADD THREE OF YOUR OWN FAVORITE MOVIES WITH METADATA TO THE END OF THE JSON FILE LIST
*/


const vue_app = Vue.createApp({
      // This automatically imports your movies.json file and puts it into
      //   the variable: movies
      created () {
            fetch('movies.json').then(response => response.json()).then(json => {
                  this.movies = json
            })
      },
      data() {
        return {
            // This holds your movies.json data.
            movies: [],
            title: "IMDB + Preston's Top 8 Movies",
            owner: "Preston",
            github: "https://123pstewart.github.io/Stewart-P3/",
           
            /* ADD ADDITIONAL VARIABLES FOR STEP 3 HERE */
      
      }
    },
      methods: {
            /* ADD FUNCTIONS/METHODS FOR STEP 7 HERE */
            getMonthTest(dataArray){
            //       switch(dataArray){     
            //       case 0:
            //             return "January " + data Arry[2] + ", " + dataArray[0];
            //       break;
            //       case 1:
            //             return "Feburary " + data Arry[2] + ", " + dataArray[0];
            //       break;
            //       case 2:
            //             return "March " + data Arry[2] + ", " + dataArray[0];
            //       break;
            //       case 3:
            //             return "April " + data Arry[2] + ", " + dataArray[0];
            //       break;
            //       case 4:
            //             return "May " + data Arry[2] + ", " + dataArray[0];
            //       break;
            //       case 5:
            //             return "June " + data Arry[2] + ", " + dataArray[0];
            //       break;
            //       case 6:
            //             return "July " + data Arry[2] + ", " + dataArray[0];
            //       break;
            //       case 7:
            //             return "August " + data Arry[2] + ", " + dataArray[0];
            //       break;
            //       case 8:
            //             return "September " + data Arry[2] + ", " + dataArray[0];
            //       break;
            //       case 9:
            //             return "October " + data Arry[2] + ", " + dataArray[0];
            //       break;
            //       case 10:
            //             return "November " + data Arry[2] + ", " + dataArray[0];
            //       break;
            //       case 11:
            //              return "December " + data Arry[2] + ", " + dataArray[0];
            //       break;
            //      default:
            //       return: "error";
            //       break;
            // }
            },
            posterClick(index){
                  let x = this.movirs[index].posters.length(); 
                  let y = this.movirs[index].posterIndex; 

                  console.log(x);
                  console.log(y);

                  if(x < y-1) {
                        this.movies[index].posterIndex++
                  }
                  else{
                        this.movies[index].posterindex = 0
                  }
            },
            timeText(minutes){
                  let hour = Math.trunc(minutes/60);
                  let min = minutes % 60
                  return hour + "h " + min + "m";
            }
      },



})



vue_app.mount("#vue_app")