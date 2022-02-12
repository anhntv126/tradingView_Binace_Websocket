__customIndicators = [
  {
    name: "ma7",
    metainfo: {
        "_metainfoVersion": 40,
        "id": "ma7@tv-basicstudies-1",
        "scriptIdPart": "",
        "name": "ma7",
        "description": "MA7 Indicator",
        "shortDescription": "MA",
        "is_hidden_study": false,
        "is_price_study": true,
        "isCustomIndicator": true,
        "plots": [
            {"id": "plot_0", "type": "line"},
        ],
        "defaults": {
            inputs: {
				period: 7,
			},
            "styles": {
                "plot_0": {
                    "linestyle": 0,
                    "visible": true,
                    "linewidth": 2,
                    "plottype": 2,
                    "trackPrice": false,
                    "transparency": 40,
                    "color": "#cd5def"
                },
            },
            "precision": 8,
        },
        "styles": {
            "plot_0": {
                // Output name will be displayed in the Style window
                "title": "MA7",
                "histogramBase": 0,
            },
        },
        "inputs": [
            {
				id: 'period',
				type: 'integer',
				name: 'period',
				defval: 7
            },
        ]
    },

    constructor: function() {
        this.init = function(context, inputCallback) {
            this._context = context;
            this._input = inputCallback;
            var symbol = PineJS.Std.ticker(this._context);
            this._context.new_sym(symbol, PineJS.Std.period(this._context), PineJS.Std.period(this._context));
        };

        this.main = function(context, inputCallback) {
            this._context = context;
            this._input = inputCallback;
            this._context.select_sym(1);
            var close = this._context.new_var(PineJS.Std.close(this._context));
            var sma = PineJS.Std.sma(close, this._input(0), this._context);
			return [sma];
        }
    }
  },
  {
    name: "ma25",
    metainfo: {
        "_metainfoVersion": 40,
        "id": "ma25@tv-basicstudies-1",
        "scriptIdPart": "",
        "name": "ma25",
        "description": "MA25 Indicator",
        "shortDescription": "MA",
        "is_hidden_study": false,
        "is_price_study": true,
        "isCustomIndicator": true,
        "plots": [
            {"id": "plot_0", "type": "line"},
        ],
        "defaults": {
            inputs: {
				period: 25,
			},
            "styles": {
                "plot_0": {
                    "linestyle": 0,
                    "visible": true,
                    "linewidth": 2,
                    "plottype": 2,
                    "trackPrice": false,
                    "transparency": 40,
                    "color": "#d45863"
                }
            },
            "precision": 8,
        },
        "styles": {
            "plot_0": {
                // Output name will be displayed in the Style window
                "title": "MA25",
                "histogramBase": 0,
            },
        },
        "inputs": [
            {
				id: 'period',
				type: 'integer',
				name: 'period',
				defval: 25
            },
        ]
    },

    constructor: function() {
        this.init = function(context, inputCallback) {
            this._context = context;
            this._input = inputCallback;
            var symbol = PineJS.Std.ticker(this._context);
            this._context.new_sym(symbol, PineJS.Std.period(this._context), PineJS.Std.period(this._context));
        };

        this.main = function(context, inputCallback) {
            this._context = context;
            this._input = inputCallback;
            this._context.select_sym(1);
            var close = this._context.new_var(PineJS.Std.close(this._context));
            var sma = PineJS.Std.sma(close, this._input(0), this._context);
			return [sma];
        }
    }
  },
  {
    name: "ma99",
    metainfo: {
        "_metainfoVersion": 40,
        "id": "ma99@tv-basicstudies-1",
        "scriptIdPart": "",
        "name": "ma99",
        "description": "MA99 Indicator",
        "shortDescription": "MA",
        "is_hidden_study": true,
        "is_price_study": true,
        "isCustomIndicator": true,
        "plots": [
            {"id": "plot_0", "type": "line"},
        ],
        "defaults": {
            inputs: {
				period: 99,
			},
            "styles": {
                "plot_0": {
                    "linestyle": 0,
                    "visible": true,
                    "linewidth": 2,
                    "plottype": 2,
                    "trackPrice": false,
                    "transparency": 40,
                    "color": "#52b987"
                }
            },
            "precision": 8,
        },
        "styles": {
            "plot_0": {
                // Output name will be displayed in the Style window
                "title": "MA99",
                "histogramBase": 0,
            },
        },
        "inputs": [
            {
				id: 'period',
				type: 'integer',
				name: 'period',
				defval: 99
            },
        ]
    },

    constructor: function() {
        this.init = function(context, inputCallback) {
            this._context = context;
            this._input = inputCallback;
            var symbol = PineJS.Std.ticker(this._context);
            this._context.new_sym(symbol, PineJS.Std.period(this._context), PineJS.Std.period(this._context));
        };

        this.main = function(context, inputCallback) {
            this._context = context;
            this._input = inputCallback;
            this._context.select_sym(1);
            var close = this._context.new_var(PineJS.Std.close(this._context));
            var sma = PineJS.Std.sma(close, this._input(0), this._context);
			return [sma];
        }
    }
  },
  {
    name: "kst",
    metainfo: {
        "_metainfoVersion": 40,
        "id": "kst@tv-basicstudies-0",
        "scriptIdPart": "",
        "name": "kst",
        "description": "KST",
        "shortDescription": "KST",
        "is_hidden_study": true,
        "is_price_study": false,
        "isCustomIndicator": true,
        "plots": [
            {"id": "plot_0", "type": "line"},
            {"id": "plot_1", "type": "line"},
        ],
        "defaults": {
            inputs: {
                Roclen1: 10,
                Roclen2: 15,
                Roclen3: 20,
                Roclen4: 30,
                Smalen1: 10,
                Smalen2: 10,
                Smalen3: 10,
                Smalen4: 15,
                Signlen: 9
			},
            styles: {
                "plot_0": {
                    "linestyle": 0,
                    "visible": true,
                    "linewidth": 2,
                    "plottype": 2,
                    "trackPrice": false,
                    "transparency": 40,
                    "color": "green"
                },
                "plot_1": {
                    "linestyle": 0,
                    "visible": true,
                    "linewidth": 2,
                    "plottype": 2,
                    "trackPrice": false,
                    "transparency": 40,
                    "color": "red"
                },

            },
            "precision": 8,
        },
        "styles": {
            "plot_0": {
                // Output name will be displayed in the Style window
                "title": "KST",
                "histogramBase": 1,
            },
            "plot_0": {
                // Output name will be displayed in the Style window
                "title": "KST",
                "histogramBase": 1,
            },
        },
        "inputs": [
            {
				id: 'Roclen1',
				type: 'integer',
				name: 'Roclen1',
				defval: 10
            },
            {
				id: 'Roclen2',
				type: 'integer',
				name: 'Roclen2',
				defval: 15
            },
            {
				id: 'Roclen3',
				type: 'integer',
				name: 'Roclen3',
				defval: 20
            },
            {
				id: 'Roclen4',
				type: 'integer',
				name: 'Roclen4',
				defval: 30
            },
            {
				id: 'Smalen1',
				type: 'integer',
				name: 'Smalen1',
				defval: 10
            },
            {
				id: 'Smalen2',
				type: 'integer',
				name: 'Smalen2',
				defval: 10
            },
            {
				id: 'Smalen3',
				type: 'integer',
				name: 'Smalen3',
				defval: 10
            },
            {
				id: 'Smalen4',
				type: 'integer',
				name: 'Smalen4',
				defval: 15
            },
            {
				id: 'Signlen',
				type: 'integer',
				name: 'Signlen',
				defval: 9
            },
        ]
    },

    constructor: function() {
        this.init = function(context, inputCallback) {
            this._context = context;
            this._input = inputCallback;
            const symbol = PineJS.Std.ticker(this._context);
            this._context.new_sym(symbol, PineJS.Std.period(this._context), PineJS.Std.period(this._context));
        };

        this.main = function(context, inputCallback) {
            this._context = context;
            this._input = inputCallback;
            this._context.select_sym(1);
            var close = this._context.new_var(PineJS.Std.close(this._context));
            
            const roc1 = this._context.new_var(PineJS.Std.roc(close, this._input(0)));
            const rcma1 = PineJS.Std.sma(roc1, this._input(4), this._context);
            const roc2 = this._context.new_var(PineJS.Std.roc(close, this._input(1)));
            const rcma2 = PineJS.Std.sma(roc2, this._input(5), this._context);
            const roc3 = this._context.new_var(PineJS.Std.roc(close, this._input(2)));
            const rcma3 = PineJS.Std.sma(roc3, this._input(6), this._context);
            const roc4 = this._context.new_var(PineJS.Std.roc(close, this._input(3)));
            const rcma4 = PineJS.Std.sma(roc4, this._input(7), this._context);
            const kst = (rcma1 * 1) + (rcma2 * 2) + (rcma3 * 3) + (rcma4 * 4);
            const sign = PineJS.Std.sma(this._context.new_var(kst), this._input(8), this._context);
			return [kst, sign];
        }
    }
  }
];