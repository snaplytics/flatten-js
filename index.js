/**
 * Created by Alex Bol on 2/18/2017.
 */
'use strict';

let Utils = require("./utils/utils");
let Errors = require("./utils/errors");

/**
 * FlattenJS - library for 2d geometry
 * @type {Flatten}
 */
let Flatten = class Flatten {
    constructor() {
        this.DP_TOL = Utils.DP_TOL;
        this.CCW = true;
        this.CW = false;
        this.ORIENTATION = {CCW:-1, CW:1, NOT_ORIENTABLE: 0};
        this.PIx2 = 2 * Math.PI;
        // this.PI_2 = 0.5 * Math.PI;
        this.INSIDE = 1;
        this.OUTSIDE = 0;
        this.BOUNDARY = 2;
        this.CONTAINS = 3;
        this.INTERLACE = 4;
        this.OVERLAP_SAME = 1;
        this.OVERLAP_OPPOSITE = 2;
        this.Utils = Utils;
        this.Errors = Errors;
    }
};

let f = new Flatten();

require("./classes/matrix")(f);
require("./data_structures/planar_set")(f);
require("./classes/point")(f);
require("./classes/vector")(f);
require("./classes/line")(f);
require("./classes/circle")(f);
require("./classes/segment")(f);
require("./classes/arc")(f);
require("./classes/box")(f);
require("./classes/edge")(f);
require("./classes/face")(f);
require("./classes/ray")(f);
require("./algorithms/ray_shooting")(f);
require("./classes/polygon")(f);
require("./algorithms/distance")(f);

module.exports = f;
