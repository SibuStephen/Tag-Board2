feed = (function () {

    var watchList = [];

    var stocks = [
        {symbol: "SJ.R5", open: 38.87},
        {symbol: "SJ.R6", open: 25.40},
        {symbol: "SJ.R7", open: 97.05},
        {symbol: "SJ.R8", open: 69.45},
        {symbol: "SJ.R9", open: 83.24},
        {symbol: "SJ.R10", open: 55.76},
        {symbol: "SJ.R11", open: 76.12},
        {symbol: "SJ.R12", open: 61.75},
        {symbol: "SJ.R13", open: 15.84},
        {symbol: "SJ.R14", open: 154.50}
    ];

    stocks.forEach(function(stock) {
        stock.last = stock.open;
        stock.high = stock.open;
        stock.low = stock.open;
    });

    return {

        onChange: function(callback) {

            setInterval(function() {

                var index = Math.floor(Math.random() * stocks.length),
                    stock = stocks[index],
                    maxChange = stock.open * 0.005,
                    change = maxChange - Math.random() * maxChange * 2,
                    last;

                change = Math.round(change * 100) / 100;
                change = change === 0 ? 0.01 : change;

                last = stock.last + change;

                if (last > stock.open * 1.15 || last < stock.open * 0.85)
                {
                    change = -change;
                    last = stock.last + change;
                }

                stock.change = change;
                stock.last = Math.round(last * 100) / 100;
                if (stock.last > stock.high) {
                    stock.high = stock.last;
                }
                if (stock.last < stock.low) {
                    stock.low = stock.last;
                }
                if (watchList.indexOf(stock.symbol) > -1) {
                    callback(stock);
                }
            }, 200);
        },

        watch: function(symbols) {
            console.log(symbols);
            symbols.forEach(function(symbol) {
                if (watchList.indexOf(symbol) < 0) {
                    watchList.push(symbol);
                }
            });
        },
        unwatch: function(symbol) {
            var index = watchList.indexOf(symbol);
            if (index > -1) {
                watchList.splice(index, 1);
            }
        }
    };

}());
