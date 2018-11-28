{
    const {
        from
    } = require('rxjs');

    /* Normal Implementation */
    String.prototype.filterWords = function (filterWords) {
        let asd = this + "";
        for (const word of filterWords) {
            asd = asd.replace(word, "***");
        }
        return asd;
    }

    /** Implementation without loop */
    String.prototype.filterWords = function (filterWords) {
        return this
            .split(/\s/gm)
            .map(word => filterWords.includes(word) ? "***" : word)
            .join(" ");
    }

    /** To test first two implementation */
    // console.log("This house is nice".filterWords(["house", "nice"]));
    // console.log("Finished");



    /** Promise */
    const doFilter = function () {
        return new Promise((resolve, reject) => {
            resolve("This house is nice".filterWords(["house", "nice"]));
        })
    }

    // doFilter()
    //     .then(data => console.log(data));
    // console.log("Finished");


    
    /** Async Await */
    async function doFilterAsync() {
        let result = await doFilter();
        console.log(result);
    }

    // doFilterAsync();
    // console.log("Finished");



    /** Obserables */
    from(doFilter())
        .subscribe(e => console.log(e));
}