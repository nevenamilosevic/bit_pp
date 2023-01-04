'use strict';

(function () {
    console.log("Hi");


    function Genre(n) {
        if (!n) {
            throw new Error("Property name is required");
        }

        this.name = n;
        this.getData = function () {
            var firstLetter = this.name[0];
            var lastLetter = this.name[this.name.length - 1];
            var result = firstLetter + lastLetter;
            return result.toUpperCase();
        };
    }

    function Movie(t, g, l) {
        if (!t || !g || !l) {
            throw new Error("Missing properties");
        }

        this.title = t;
        this.genre = g;
        this.lengthOfMovie = l;

        this.getDate = function () {
            return (
                this.title + ", " + this.lengthOfMovie + "min, " + this.genre.getData()
            );
        };
    }

    function Program (d) {
        if (!d) {
            throw new Error("Missing propertie");
        }

        this.date = d;
        this.movieList = [];
        this.getNumbersOfMovies = function () {
            return this.movieList.length;
        };

        this.addMovie = function (m) {
            if (!(m instanceof Movie)) {
                throw new Error('Invalid movie input!');
            }
            this.movieList.push(m);
        };

        
    }

})();




