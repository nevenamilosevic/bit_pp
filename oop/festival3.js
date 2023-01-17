"use strict";

(function () {
    console.log("Hi!");

    class Genre {
        constructor(name) {
            if(!name) {
                throw new Error("Genre required");
            }
            this.name = name;
        }
        
        getData = function() {
            return (this.name[0] + this.name[this.name.length-1]).toUpperCase();
        }
    }

    class Movie {
        constructor (title, genre, length) {
            if(!title || !genre || !length) {
                throw new Error("Missing input");
            }
            if(isNaN(length)) {
                throw new Error("Please input valid length");
            }
            if (!(genre instanceof Genre)) {
                throw new Error("Invalid genre");
            }
            this.title = title;
            this.genre = genre;
            this.length = length;
        }
        
        getData = function() {
            return (this.title + ", " + this.length + "min, " + this.genre.getData());
        } 
    }

    var genreCounter = function(list) {
        var numOfGenre = list.reduce(function(count, item) {
            if (!count[item.genre]) {
                count[item.genre] = 1;
            } else {
                count[item.genre]++;
            }
            return count;
        }, {});
        return Math.max(...Object.values(numOfGenre));
    }

    class Program {
        constructor(date) {
            if (!date) {
                throw new Error("Date missing");
            }
            this.date = new Date(date);
            this.movieList = [];
        }
        
        getNumOfMovies = function() {
            return this.movieList.length;
        }
        
        addMovie = function(movie) {
            if (!(movie instanceof Movie)) {
                throw new Error("Invalid input");
            }
            if (genreCounter(this.movieList) > 4) {
                throw new Error("Genre limit reached");
            }
            var totalLength = this.getTotalLength() + movie.length;
            if (totalLength > 480) {
                throw new Error("Total movie length cannot exceed 8 hours");
            };
            this.movieList.push(movie);
        }
        
        getTotalLength = function() {
            var total = 0;
            this.movieList.forEach(function (movie) {
                total += movie.length;
            });
            return total;
        }
        
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
        constructor(name, maxNumOfMovies) {
            if(!name) {
                throw new Error("Invalid name input")
            }
            this.name = name;
            this.programList = [];
            this.maxNumOfMovies = maxNumOfMovies;
            if (isNaN(this.maxNumOfMovies)) {
                throw new Error("Please input a number")
            }
        }
        
        getTotalNumOfMovies = function() {
            var total = 0;
            this.programList.forEach(function (program) {
                total += program.getNumOfMovies();
            });
            return total;
        }
        
        addProgram = function(program) {
            if (!(program instanceof Program)) {
                throw new Error("Invalid program input");
            }
            if (this.maxNumOfMovies !== 0 && this.getTotalNumOfMovies() + program.getNumOfMovies() > this.maxNumOfMovies) {
                throw new Error("Maximum number of movies exceeded");
            }
            this.programList.push(program);
        }
        
        getData = function() {
            var output;
            if (this.getTotalNumOfMovies() === 0) {
                output = this.name + "\n\t" + "Program to be announced";
            } else {
                output = this.name + " festival has " + this.getTotalNumOfMovies() + " movie titles ";
                this.programList.forEach(function(program) {
                    output += "\n\t" + program.getData();
                });
            }
            return output;
        }
    }
    
    function createMovie(title, length, genre) {
        var genre = new Genre(genre);
        var movie = new Movie(title, genre, length);
        return movie;
    }

    function createProgram(date) {
        return new Program(date);
    }

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
   
})()