'use strict';

(function () {

    class Genre {
        constructor(n) {
            this.name = n;
        }

        getData = function() {
            return (this.name[0] + this.name[this.name.length-1]).toUpperCase();
        }

    }

    class Movie {
        constructor(t, g, l) {
            this.title = t;
            this.genre = g;
            this.lengthOfMovie = l;
        };

        getData = function() {
            return (this.title + ", " + this.length + "min, " + this.genre.getData());
        } 
       
    }
    

    class Program {
        constructor(d) {
            this.date = d;
            this.movieList = [];  
        };

        getNumberOfMovies() {
            return this.movieList.length;
        };

        addMovie(m) {
            if (!(m instanceof Movie)) {
                throw new Error('Invalid movie input!');
            }
            this.movieList.push(m);
        };

        getTotalLength() {
            var total = 0;
            this.movieList.forEach(function (movie) {
              total += movie.lengthOfMovie;
            });
            return total;
          };

          getData = function() {
            var day = this.date.getDate();
            var month = this.date.getMonth() + 1;
            var year = this.date.getFullYear();
            var result = day + "." + month + "." + year + ", program duration " + this.getTotalLength() + "min";
            this.movieList.forEach(function(movie) {
                result += "\n\t\t" + movie.getData();
            });
            return result;
        }
    
    }
      
        class Festival {
            constructor(n) {
                this.name = n;
                this.programList = [];
            };
          
          getTotalNumberOfMovies() {
            var total = 0;
            this.programList.forEach(function (program) {
              total += program.getNumberOfMovies();
            });
            return total;
          };

          addProgram(p) {
            if (!(p instanceof Program)) {
              throw new Error('Invalid program input!');
            }
            this.programList.push(p);
          };
          
          getData = function() {
            var result =
              this.name +
              ' festival has ' +
              this.getTotalNumberOfMovies() +
              ' movie titles';
            this.programList.forEach(function (program) {
              result += '\n\t' + program.getData();
            });
            return result;
          };
        }
      
        function createMovie(t, l, g) {
          var genre = new Genre(g);
          var movie = new Movie(t, genre, l);
          return movie;
        }
      
        function createProgram(d) {
          return new Program(d);
        }
      
        //Testing
        try {
          var kustendorf = new Festival('Kustendorf');
          var sundayProgram = createProgram('12/24/2022');
          var mondayProgram = createProgram('12/25/2022');
      
          var rushHours = createMovie('Rush Hour', 95, 'action');
          var theRing = createMovie('The Ring', 103, 'horror');
          var frida = createMovie('Frida', 87, 'drama');
          var tropicThunder = createMovie('Tropic Thunder', 91, 'comedy');
      
          sundayProgram.addMovie(rushHours);
          sundayProgram.addMovie(theRing);
          mondayProgram.addMovie(frida);
          mondayProgram.addMovie(tropicThunder);
      
          kustendorf.addProgram(sundayProgram);
          kustendorf.addProgram(mondayProgram);
      
          console.log(kustendorf.getData());
        } catch (error) {
          console.log(error.message);
        }
    }

)();

