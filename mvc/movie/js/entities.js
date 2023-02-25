    class Genre {
        constructor(name) {
            // if(name == " ") {
            //     throw new Error("Genre required");
            // }
            this.name = name;
        }

        getData() {
            return (this.name[0] + this.name[this.name.length-1]).toUpperCase();
        }

    }


    class Movie {
        constructor(title, lengthOfMovie, genre) {
            if(!title || !genre || !lengthOfMovie) {
                throw new Error("Missing input");
            }
            
            if(isNaN(lengthOfMovie)) {
                throw new Error("Please input valid length");
            }
            if (!(genre instanceof Genre)) {
                throw new Error("Invalid genre");
            }
            this.title = title;
            this.genre = genre;
            this.lengthOfMovie = lengthOfMovie;
        };

        getData() {
            return (this.title + ", " + this.lengthOfMovie + "min, " + this.genre.getData());
        } 
       
    }
    



    class Program {
        constructor(date) {
            // if (!date) {
            //     throw new Error("Date missing");
            // }
            this.date = new Date(date);
            this.listOfAllMovies = [];  
        };

        getNumberOfMovies() {
            return this.listOfAllMovies.length;
        };


        addMovie(movie) {
            if (!(movie instanceof Movie)) {
                throw new Error('Invalid movie input!');
            }
            this.listOfAllMovies.push(movie);
        };

        getTotalLength() {
            var total = 0;
            this.listOfAllMovies.forEach(function (movie) {
              total += movie.lengthOfMovie;
            });
            return total;
          };

          getData() {
            var day = this.date.getDate();
            var month = this.date.getMonth() + 1;
            var year = this.date.getFullYear();
            var result = day + "." + month + "." + year + ", program duration " + this.getTotalLength() + "min";
            this.listOfAllMovies.forEach(function(movie) {
                result += "\n\t\t" + movie.getData();
            });
            return result;
        }
    
    }
      

        class Festival {
            constructor() {
                this.listOfAllMovies = [];
                this.programList = [];
            };
          
          getTotalNumberOfMovies() {
            var total = 0;
            this.listOfAllMovies.forEach(function (program) {
              total += program.getNumberOfMovies();
            });
            return total;
          };

          addProgram(program) {
            if (!(program instanceof Program)) {
              throw new Error('Invalid program input!');
            }
            this.listOfAllMovies.push(program);
          };
          
          getData() {
            var result =
              this.name +
              ' festival has ' +
              this.getTotalNumberOfMovies() +
              ' movie titles';
            this.listOfAllMovies.forEach(function (program) {
              result += '\n\t' + program.getData();
            });
            return result;
          };
        }
      
        function createMovie(title, length, genre) {
          var genre = new Genre(genre);
          var movie = new Movie(title, length, genre);
          return movie;
        }
      
        function createProgram(date) {
          return new Program(date);
        }
      
       //var prvifilm = createMovie("Avatar", 150, "action");
       //console.log(prvifilm);

   

