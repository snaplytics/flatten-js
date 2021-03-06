module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./algorithms/distance.js":
/*!********************************!*\
  !*** ./algorithms/distance.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var IntervalTree = __webpack_require__(/*! flatten-interval-tree */ "./node_modules/flatten-interval-tree/index.js");

module.exports = function (Flatten) {
    var Polygon = Flatten.Polygon,
        Point = Flatten.Point,
        Segment = Flatten.Segment,
        Arc = Flatten.Arc,
        Circle = Flatten.Circle,
        Line = Flatten.Line,
        Ray = Flatten.Ray,
        Vector = Flatten.Vector;
    var vector = Flatten.vector;


    Flatten.Distance = function () {
        function Distance() {
            _classCallCheck(this, Distance);
        }

        _createClass(Distance, null, [{
            key: "point2point",

            /**
             * Calculate distance and shortest segment between points
             * @param pt1
             * @param pt2
             * @returns {Number | Segment} - distance and shortest segment
             */
            value: function point2point(pt1, pt2) {
                return pt1.distanceTo(pt2);
            }

            /**
             * Calculate distance and shortest segment between point and line
             * @param pt
             * @param line
             * @returns {Number | Segment} - distance and shortest segment
             */

        }, {
            key: "point2line",
            value: function point2line(pt, line) {
                var closest_point = pt.projectionOn(line);
                var vec = vector(pt, closest_point);
                return [vec.length, new Segment(pt, closest_point)];
            }

            /**
             * Calculate distance and shortest segment between point and circle
             * @param pt
             * @param circle
             * @returns {Number | Segment} - distance and shortest segment
             */

        }, {
            key: "point2circle",
            value: function point2circle(pt, circle) {
                var _pt$distanceTo = pt.distanceTo(circle.center),
                    _pt$distanceTo2 = _slicedToArray(_pt$distanceTo, 2),
                    dist2center = _pt$distanceTo2[0],
                    shortest_dist = _pt$distanceTo2[1];

                if (Flatten.Utils.EQ_0(dist2center)) {
                    return [circle.r, new Segment(pt, circle.toArc().start)];
                } else {
                    var dist = Math.abs(dist2center - circle.r);
                    var v = vector(circle.pc, pt).normalize().multiply(circle.r);
                    var closest_point = circle.pc.translate(v);
                    return [dist, new Segment(pt, closest_point)];
                }
            }

            /**
             * Calculate distance and shortest segment between point and segment
             * @param pt
             * @param segment
             * @returns {Number | Segment} - distance and shortest segment
             */

        }, {
            key: "point2segment",
            value: function point2segment(pt, segment) {
                /* Degenerated case of zero-length segment */
                if (segment.start.equalTo(segment.end)) {
                    return Distance.point2point(pt, segment.start);
                }

                var v_seg = new Flatten.Vector(segment.start, segment.end);
                var v_ps2pt = new Flatten.Vector(segment.start, pt);
                var v_pe2pt = new Flatten.Vector(segment.end, pt);
                var start_sp = v_seg.dot(v_ps2pt);
                /* dot product v_seg * v_ps2pt */
                var end_sp = -v_seg.dot(v_pe2pt);
                /* minus dot product v_seg * v_pe2pt */

                var dist = void 0;
                var closest_point = void 0;
                if (Flatten.Utils.GE(start_sp, 0) && Flatten.Utils.GE(end_sp, 0)) {
                    /* point inside segment scope */
                    var v_unit = segment.tangentInStart(); // new Flatten.Vector(v_seg.x / this.length, v_seg.y / this.length);
                    /* unit vector ||v_unit|| = 1 */
                    dist = Math.abs(v_unit.cross(v_ps2pt));
                    /* dist = abs(v_unit x v_ps2pt) */
                    closest_point = segment.start.translate(v_unit.multiply(v_unit.dot(v_ps2pt)));
                    return [dist, new Segment(pt, closest_point)];
                } else if (start_sp < 0) {
                    /* point is out of scope closer to ps */
                    return pt.distanceTo(segment.start);
                } else {
                    /* point is out of scope closer to pe */
                    return pt.distanceTo(segment.end);
                }
            }
        }, {
            key: "point2arc",


            /**
             * Calculate distance and shortest segment between point and arc
             * @param pt
             * @param arc
             * @returns {Number | Segment} - distance and shortest segment
             */
            value: function point2arc(pt, arc) {
                var circle = new Flatten.Circle(arc.pc, arc.r);
                var dist_and_segment = [];
                var dist = void 0,
                    shortest_segment = void 0;

                var _Distance$point2circl = Distance.point2circle(pt, circle);

                var _Distance$point2circl2 = _slicedToArray(_Distance$point2circl, 2);

                dist = _Distance$point2circl2[0];
                shortest_segment = _Distance$point2circl2[1];

                if (shortest_segment.end.on(arc)) {
                    dist_and_segment.push(Distance.point2circle(pt, circle));
                }
                dist_and_segment.push(Distance.point2point(pt, arc.start));
                dist_and_segment.push(Distance.point2point(pt, arc.end));

                Distance.sort(dist_and_segment);

                return dist_and_segment[0];
            }

            /**
             * Calculate distance and shortest segment between segment and line
             * @param seg
             * @param line
             * @returns {Number | Segment}
             */

        }, {
            key: "segment2line",
            value: function segment2line(seg, line) {
                var ip = seg.intersect(line);
                if (ip.length > 0) {
                    return [0, new Segment(ip[0], ip[0])]; // distance = 0, closest point is the first point
                }
                var dist_and_segment = [];
                dist_and_segment.push(Distance.point2line(seg.start, line));
                dist_and_segment.push(Distance.point2line(seg.end, line));

                Distance.sort(dist_and_segment);
                return dist_and_segment[0];
            }

            /**
             * Calculate distance and shortest segment between two segments
             * @param seg1
             * @param seg2
             * @returns {Number | Segment} - distance and shortest segment
             */

        }, {
            key: "segment2segment",
            value: function segment2segment(seg1, seg2) {
                var ip = Segment.intersectSegment2Segment(seg1, seg2);
                if (ip.length > 0) {
                    return [0, new Segment(ip[0], ip[0])]; // distance = 0, closest point is the first point
                }

                // Seg1 and seg2 not intersected
                var dist_and_segment = [];

                dist_and_segment.push(Distance.point2segment(seg2.start, seg1));
                dist_and_segment.push(Distance.point2segment(seg2.end, seg1));
                dist_and_segment.push(Distance.point2segment(seg1.start, seg2));
                dist_and_segment.push(Distance.point2segment(seg1.end, seg2));

                Distance.sort(dist_and_segment);
                return dist_and_segment[0];
            }

            /**
             * Calculate distance and shortest segment between segment and circle
             * @param seg
             * @param circle
             * @returns {Number | Segment} - distance and shortest segment
             */

        }, {
            key: "segment2circle",
            value: function segment2circle(seg, circle) {
                /* Case 1 Segment and circle intersected. Return the first point and zero distance */
                var ip = seg.intersect(circle);
                if (ip.length > 0) {
                    return [0, new Segment(ip[0], ip[0])];
                }

                // No intersection between segment and circle

                /* Case 2. Distance to projection of center point to line bigger than radius
                 * And projection point belong to segment
                  * Then measure again distance from projection to circle and return it */
                var line = new Flatten.Line(seg.ps, seg.pe);

                var _Distance$point2line = Distance.point2line(circle.center, line),
                    _Distance$point2line2 = _slicedToArray(_Distance$point2line, 2),
                    dist = _Distance$point2line2[0],
                    shortest_segment = _Distance$point2line2[1];

                if (Flatten.Utils.GE(dist, circle.r) && shortest_segment.end.on(seg)) {
                    return Distance.point2circle(shortest_segment.end, circle);
                }
                /* Case 3. Otherwise closest point is one of the end points of the segment */
                else {
                        var _Distance$point2circl3 = Distance.point2circle(seg.start, circle),
                            _Distance$point2circl4 = _slicedToArray(_Distance$point2circl3, 2),
                            dist_from_start = _Distance$point2circl4[0],
                            shortest_segment_from_start = _Distance$point2circl4[1];

                        var _Distance$point2circl5 = Distance.point2circle(seg.end, circle),
                            _Distance$point2circl6 = _slicedToArray(_Distance$point2circl5, 2),
                            dist_from_end = _Distance$point2circl6[0],
                            shortest_segment_from_end = _Distance$point2circl6[1];

                        return Flatten.Utils.LT(dist_from_start, dist_from_end) ? [dist_from_start, shortest_segment_from_start] : [dist_from_end, shortest_segment_from_end];
                    }
            }

            /**
             * Calculate distance and shortest segment between segment and arc
             * @param seg
             * @param arc
             * @returns {Number | Segment} - distance and shortest segment
             */

        }, {
            key: "segment2arc",
            value: function segment2arc(seg, arc) {
                /* Case 1 Segment and arc intersected. Return the first point and zero distance */
                var ip = seg.intersect(arc);
                if (ip.length > 0) {
                    return [0, new Segment(ip[0], ip[0])];
                }

                // No intersection between segment and arc
                var line = new Flatten.Line(seg.ps, seg.pe);
                var circle = new Flatten.Circle(arc.pc, arc.r);

                /* Case 2. Distance to projection of center point to line bigger than radius AND
                 * projection point belongs to segment AND
                   * distance from projection point to circle belongs to arc  =>
                   * return this distance from projection to circle */

                var _Distance$point2line3 = Distance.point2line(circle.center, line),
                    _Distance$point2line4 = _slicedToArray(_Distance$point2line3, 2),
                    dist_from_center = _Distance$point2line4[0],
                    shortest_segment_from_center = _Distance$point2line4[1];

                if (Flatten.Utils.GE(dist_from_center, circle.r) && shortest_segment_from_center.end.on(seg)) {
                    var _Distance$point2circl7 = Distance.point2circle(shortest_segment_from_center.end, circle),
                        _Distance$point2circl8 = _slicedToArray(_Distance$point2circl7, 2),
                        dist_from_projection = _Distance$point2circl8[0],
                        shortest_segment_from_projection = _Distance$point2circl8[1];

                    if (shortest_segment_from_projection.end.on(arc)) {
                        return [dist_from_projection, shortest_segment_from_projection];
                    }
                }
                /* Case 3. Otherwise closest point is one of the end points of the segment */
                var dist_and_segment = [];
                dist_and_segment.push(Distance.point2arc(seg.start, arc));
                dist_and_segment.push(Distance.point2arc(seg.end, arc));

                var dist_tmp = void 0,
                    segment_tmp = void 0;

                var _Distance$point2segme = Distance.point2segment(arc.start, seg);

                var _Distance$point2segme2 = _slicedToArray(_Distance$point2segme, 2);

                dist_tmp = _Distance$point2segme2[0];
                segment_tmp = _Distance$point2segme2[1];

                dist_and_segment.push([dist_tmp, segment_tmp.reverse()]);

                var _Distance$point2segme3 = Distance.point2segment(arc.end, seg);

                var _Distance$point2segme4 = _slicedToArray(_Distance$point2segme3, 2);

                dist_tmp = _Distance$point2segme4[0];
                segment_tmp = _Distance$point2segme4[1];

                dist_and_segment.push([dist_tmp, segment_tmp.reverse()]);

                Distance.sort(dist_and_segment);
                return dist_and_segment[0];
            }

            /**
             * Calculate distance and shortest segment between two circles
             * @param circle1
             * @param circle2
             * @returns {Number | Segment} - distance and shortest segment
             */

        }, {
            key: "circle2circle",
            value: function circle2circle(circle1, circle2) {
                var ip = circle1.intersect(circle2);
                if (ip.length > 0) {
                    return [0, new Segment(ip[0], ip[0])];
                }

                // Case 1. Concentric circles. Convert to arcs and take distance between two arc starts
                if (circle1.center.equalTo(circle2.center)) {
                    var arc1 = circle1.toArc();
                    var arc2 = circle2.toArc();
                    return Distance.point2point(arc1.start, arc2.start);
                } else {
                    // Case 2. Not concentric circles
                    var line = new Line(circle1.center, circle2.center);
                    var ip1 = line.intersect(circle1);
                    var ip2 = line.intersect(circle2);

                    var dist_and_segment = [];

                    dist_and_segment.push(Distance.point2point(ip1[0], ip2[0]));
                    dist_and_segment.push(Distance.point2point(ip1[0], ip2[1]));
                    dist_and_segment.push(Distance.point2point(ip1[1], ip2[0]));
                    dist_and_segment.push(Distance.point2point(ip1[1], ip2[1]));

                    Distance.sort(dist_and_segment);
                    return dist_and_segment[0];
                }
            }

            /**
             * Calculate distance and shortest segment between two circles
             * @param circle
             * @param line
             * @returns {Number | Segment} - distance and shortest segment
             */

        }, {
            key: "circle2line",
            value: function circle2line(circle, line) {
                var ip = circle.intersect(line);
                if (ip.length > 0) {
                    return [0, new Segment(ip[0], ip[0])];
                }

                var _Distance$point2line5 = Distance.point2line(circle.center, line),
                    _Distance$point2line6 = _slicedToArray(_Distance$point2line5, 2),
                    dist_from_center = _Distance$point2line6[0],
                    shortest_segment_from_center = _Distance$point2line6[1];

                var _Distance$point2circl9 = Distance.point2circle(shortest_segment_from_center.end, circle),
                    _Distance$point2circl10 = _slicedToArray(_Distance$point2circl9, 2),
                    dist = _Distance$point2circl10[0],
                    shortest_segment = _Distance$point2circl10[1];

                shortest_segment = shortest_segment.reverse();
                return [dist, shortest_segment];
            }

            /**
             * Calculate distance and shortest segment between arc and line
             * @param arc
             * @param line
             * @returns {Number | Segment} - distance and shortest segment
             */

        }, {
            key: "arc2line",
            value: function arc2line(arc, line) {
                /* Case 1 Line and arc intersected. Return the first point and zero distance */
                var ip = line.intersect(arc);
                if (ip.length > 0) {
                    return [0, new Segment(ip[0], ip[0])];
                }

                var circle = new Flatten.Circle(arc.center, arc.r);

                /* Case 2. Distance to projection of center point to line bigger than radius AND
                 * projection point belongs to segment AND
                   * distance from projection point to circle belongs to arc  =>
                   * return this distance from projection to circle */

                var _Distance$point2line7 = Distance.point2line(circle.center, line),
                    _Distance$point2line8 = _slicedToArray(_Distance$point2line7, 2),
                    dist_from_center = _Distance$point2line8[0],
                    shortest_segment_from_center = _Distance$point2line8[1];

                if (Flatten.Utils.GE(dist_from_center, circle.r)) {
                    var _Distance$point2circl11 = Distance.point2circle(shortest_segment_from_center.end, circle),
                        _Distance$point2circl12 = _slicedToArray(_Distance$point2circl11, 2),
                        dist_from_projection = _Distance$point2circl12[0],
                        shortest_segment_from_projection = _Distance$point2circl12[1];

                    if (shortest_segment_from_projection.end.on(arc)) {
                        return [dist_from_projection, shortest_segment_from_projection];
                    }
                } else {
                    var dist_and_segment = [];
                    dist_and_segment.push(Distance.point2line(arc.start, line));
                    dist_and_segment.push(Distance.point2line(arc.end, line));

                    Distance.sort(dist_and_segment);
                    return dist_and_segment[0];
                }
            }

            /**
             * Calculate distance and shortest segment between arc and circle
             * @param arc
             * @param circle2
             * @returns {Number | Segment} - distance and shortest segment
             */

        }, {
            key: "arc2circle",
            value: function arc2circle(arc, circle2) {
                var ip = arc.intersect(circle2);
                if (ip.length > 0) {
                    return [0, new Segment(ip[0], ip[0])];
                }

                var circle1 = new Flatten.Circle(arc.center, arc.r);

                var _Distance$circle2circ = Distance.circle2circle(circle1, circle2),
                    _Distance$circle2circ2 = _slicedToArray(_Distance$circle2circ, 2),
                    dist = _Distance$circle2circ2[0],
                    shortest_segment = _Distance$circle2circ2[1];

                if (shortest_segment.start.on(arc)) {
                    return [dist, shortest_segment];
                } else {
                    var dist_and_segment = [];

                    dist_and_segment.push(Distance.point2circle(arc.start, circle2));
                    dist_and_segment.push(Distance.point2circle(arc.end, circle2));

                    Distance.sort(dist_and_segment);

                    return dist_and_segment[0];
                }
            }

            /**
             * Calculate distance and shortest segment between two arcs
             * @param arc1
             * @param arc2
             * @returns {Number | Segment} - distance and shortest segment
             */

        }, {
            key: "arc2arc",
            value: function arc2arc(arc1, arc2) {
                var ip = arc1.intersect(arc2);
                if (ip.length > 0) {
                    return [0, new Segment(ip[0], ip[0])];
                }

                var circle1 = new Flatten.Circle(arc1.center, arc1.r);
                var circle2 = new Flatten.Circle(arc2.center, arc2.r);

                var _Distance$circle2circ3 = Distance.circle2circle(circle1, circle2),
                    _Distance$circle2circ4 = _slicedToArray(_Distance$circle2circ3, 2),
                    dist = _Distance$circle2circ4[0],
                    shortest_segment = _Distance$circle2circ4[1];

                if (shortest_segment.start.on(arc1) && shortest_segment.end.on(arc2)) {
                    return [dist, shortest_segment];
                } else {
                    var dist_and_segment = [];

                    var dist_tmp = void 0,
                        segment_tmp = void 0;

                    var _Distance$point2arc = Distance.point2arc(arc1.start, arc2);

                    var _Distance$point2arc2 = _slicedToArray(_Distance$point2arc, 2);

                    dist_tmp = _Distance$point2arc2[0];
                    segment_tmp = _Distance$point2arc2[1];

                    if (segment_tmp.end.on(arc2)) {
                        dist_and_segment.push([dist_tmp, segment_tmp]);
                    }

                    var _Distance$point2arc3 = Distance.point2arc(arc1.end, arc2);

                    var _Distance$point2arc4 = _slicedToArray(_Distance$point2arc3, 2);

                    dist_tmp = _Distance$point2arc4[0];
                    segment_tmp = _Distance$point2arc4[1];

                    if (segment_tmp.end.on(arc2)) {
                        dist_and_segment.push([dist_tmp, segment_tmp]);
                    }

                    var _Distance$point2arc5 = Distance.point2arc(arc2.start, arc1);

                    var _Distance$point2arc6 = _slicedToArray(_Distance$point2arc5, 2);

                    dist_tmp = _Distance$point2arc6[0];
                    segment_tmp = _Distance$point2arc6[1];

                    if (segment_tmp.end.on(arc1)) {
                        dist_and_segment.push([dist_tmp, segment_tmp.reverse()]);
                    }

                    var _Distance$point2arc7 = Distance.point2arc(arc2.end, arc1);

                    var _Distance$point2arc8 = _slicedToArray(_Distance$point2arc7, 2);

                    dist_tmp = _Distance$point2arc8[0];
                    segment_tmp = _Distance$point2arc8[1];

                    if (segment_tmp.end.on(arc1)) {
                        dist_and_segment.push([dist_tmp, segment_tmp.reverse()]);
                    }

                    var _Distance$point2point = Distance.point2point(arc1.start, arc2.start);

                    var _Distance$point2point2 = _slicedToArray(_Distance$point2point, 2);

                    dist_tmp = _Distance$point2point2[0];
                    segment_tmp = _Distance$point2point2[1];

                    dist_and_segment.push([dist_tmp, segment_tmp]);

                    var _Distance$point2point3 = Distance.point2point(arc1.start, arc2.end);

                    var _Distance$point2point4 = _slicedToArray(_Distance$point2point3, 2);

                    dist_tmp = _Distance$point2point4[0];
                    segment_tmp = _Distance$point2point4[1];

                    dist_and_segment.push([dist_tmp, segment_tmp]);

                    var _Distance$point2point5 = Distance.point2point(arc1.end, arc2.start);

                    var _Distance$point2point6 = _slicedToArray(_Distance$point2point5, 2);

                    dist_tmp = _Distance$point2point6[0];
                    segment_tmp = _Distance$point2point6[1];

                    dist_and_segment.push([dist_tmp, segment_tmp]);

                    var _Distance$point2point7 = Distance.point2point(arc1.end, arc2.end);

                    var _Distance$point2point8 = _slicedToArray(_Distance$point2point7, 2);

                    dist_tmp = _Distance$point2point8[0];
                    segment_tmp = _Distance$point2point8[1];

                    dist_and_segment.push([dist_tmp, segment_tmp]);

                    Distance.sort(dist_and_segment);

                    return dist_and_segment[0];
                }
            }

            /**
             * Calculate distance and shortest segment between point and polygon
             * @param point
             * @param polygon
             * @returns {Number | Segment} - distance and shortest segment
             */

        }, {
            key: "point2polygon",
            value: function point2polygon(point, polygon) {
                var min_dist_and_segment = [Number.POSITIVE_INFINITY, new Segment()];
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = polygon.edges[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var edge = _step.value;

                        var _ref = edge.shape instanceof Segment ? Distance.point2segment(point, edge.shape) : Distance.point2arc(point, edge.shape),
                            _ref2 = _slicedToArray(_ref, 2),
                            dist = _ref2[0],
                            shortest_segment = _ref2[1];

                        if (Flatten.Utils.LT(dist, min_dist_and_segment[0])) {
                            min_dist_and_segment = [dist, shortest_segment];
                        }
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }

                return min_dist_and_segment;
            }
        }, {
            key: "shape2polygon",
            value: function shape2polygon(shape, polygon) {
                var min_dist_and_segment = [Number.POSITIVE_INFINITY, new Segment()];
                var _iteratorNormalCompletion2 = true;
                var _didIteratorError2 = false;
                var _iteratorError2 = undefined;

                try {
                    for (var _iterator2 = polygon.edges[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                        var edge = _step2.value;

                        var _shape$distanceTo = shape.distanceTo(edge.shape),
                            _shape$distanceTo2 = _slicedToArray(_shape$distanceTo, 2),
                            dist = _shape$distanceTo2[0],
                            shortest_segment = _shape$distanceTo2[1];

                        if (Flatten.Utils.LT(dist, min_dist_and_segment[0])) {
                            min_dist_and_segment = [dist, shortest_segment];
                        }
                    }
                } catch (err) {
                    _didIteratorError2 = true;
                    _iteratorError2 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion2 && _iterator2.return) {
                            _iterator2.return();
                        }
                    } finally {
                        if (_didIteratorError2) {
                            throw _iteratorError2;
                        }
                    }
                }

                return min_dist_and_segment;
            }

            /*
                    static arc2polygon(arc, polygon) {
                        let ip = arc.intersect(polygon);
                        if (ip.length > 0) {
                            return [0, new Segment(ip[0], ip[0])];
                        }
            
                        let min_dist_and_segment = [Number.POSITIVE_INFINITY, new Segment()];
                        for (let edge of polygon.edges) {
                            let [dist, shortest_segment] = arc.distanceTo(edge.shape);
                            if (Flatten.Utils.LT(dist, min_dist_and_segment[0])) {
                                min_dist_and_segment = [dist, shortest_segment];
                            }
                        }
                        return min_dist_and_segment;
                    }
            
                    static line2polygon(line, polygon) {
                        let ip = line.intersect(polygon);
                        if (ip.length > 0) {
                            return [0, new Segment(ip[0], ip[0])];
                        }
            
                        let min_dist_and_segment = [Number.POSITIVE_INFINITY, new Segment()];
                        for (let edge of polygon.edges) {
                            let [dist, shortest_segment] = line.distanceTo(edge.shape);
                            if (Flatten.Utils.LT(dist, min_dist_and_segment[0])) {
                                min_dist_and_segment = [dist, shortest_segment];
                            }
                        }
                        return min_dist_and_segment;
                    }
            
                    static circle2polygon(circle, polygon) {
                        let ip = circle.intersect(polygon);
                        if (ip.length > 0) {
                            return [0, new Segment(ip[0], ip[0])];
                        }
            
                        let min_dist_and_segment = [Number.POSITIVE_INFINITY, new Segment()];
                        for (let edge of polygon.edges) {
                            let [dist, shortest_segment] = circle.distanceTo(edge.shape);
                            if (Flatten.Utils.LT(dist, min_dist_and_segment[0])) {
                                min_dist_and_segment = [dist, shortest_segment];
                            }
                        }
                        return min_dist_and_segment;
                    }
            */

            /**
             * Calculate distance and shortest segment between two polygons
             * @param polygon1
             * @param polygon2
             * @returns {Number | Segment} - distance and shortest segment
             */

        }, {
            key: "polygon2polygon",
            value: function polygon2polygon(polygon1, polygon2) {
                var min_dist_and_segment = [Number.POSITIVE_INFINITY, new Flatten.Segment()];
                var _iteratorNormalCompletion3 = true;
                var _didIteratorError3 = false;
                var _iteratorError3 = undefined;

                try {
                    for (var _iterator3 = polygon1.edges[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                        var edge1 = _step3.value;
                        var _iteratorNormalCompletion4 = true;
                        var _didIteratorError4 = false;
                        var _iteratorError4 = undefined;

                        try {
                            for (var _iterator4 = polygon2.edges[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                                var edge2 = _step4.value;

                                var _edge1$shape$distance = edge1.shape.distanceTo(edge2.shape),
                                    _edge1$shape$distance2 = _slicedToArray(_edge1$shape$distance, 2),
                                    dist = _edge1$shape$distance2[0],
                                    shortest_segment = _edge1$shape$distance2[1];

                                if (Flatten.Utils.LT(dist, min_dist_and_segment[0])) {
                                    min_dist_and_segment = [dist, shortest_segment];
                                }
                            }
                        } catch (err) {
                            _didIteratorError4 = true;
                            _iteratorError4 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion4 && _iterator4.return) {
                                    _iterator4.return();
                                }
                            } finally {
                                if (_didIteratorError4) {
                                    throw _iteratorError4;
                                }
                            }
                        }
                    }
                } catch (err) {
                    _didIteratorError3 = true;
                    _iteratorError3 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion3 && _iterator3.return) {
                            _iterator3.return();
                        }
                    } finally {
                        if (_didIteratorError3) {
                            throw _iteratorError3;
                        }
                    }
                }

                return min_dist_and_segment;
            }

            /**
             * Returns [mindist, maxdist] array of squared minimal and maximal distance between boxes
             * Minimal distance by x is
             *    (box2.xmin - box1.xmax), if box1 is left to box2
             *    (box1.xmin - box2.xmax), if box2 is left to box1
             *    0,                       if box1 and box2 are intersected by x
             * Minimal distance by y is defined in the same way
             *
             * Maximal distance is estimated as a sum of squared dimensions of the merged box
             *
             * @param box1
             * @param box2
             * @returns {Number | Number} - minimal and maximal distance
             */

        }, {
            key: "box2box_minmax",
            value: function box2box_minmax(box1, box2) {
                var mindist_x = Math.max(Math.max(box1.xmin - box2.xmax, 0), Math.max(box2.xmin - box1.xmax, 0));
                var mindist_y = Math.max(Math.max(box1.ymin - box2.ymax, 0), Math.max(box2.ymin - box1.ymax, 0));
                var mindist = mindist_x * mindist_x + mindist_y * mindist_y;

                var box = box1.merge(box2);
                var dx = box.xmax - box.xmin;
                var dy = box.ymax - box.ymin;
                var maxdist = dx * dx + dy * dy;

                return [mindist, maxdist];
            }
        }, {
            key: "minmax_tree_process_level",
            value: function minmax_tree_process_level(shape, level, min_stop, tree) {
                // Calculate minmax distance to each shape in current level
                // Insert result into the interval tree for further processing
                // update min_stop with maxdist, it will be the new stop distance
                var mindist = void 0,
                    maxdist = void 0;
                var _iteratorNormalCompletion5 = true;
                var _didIteratorError5 = false;
                var _iteratorError5 = undefined;

                try {
                    for (var _iterator5 = level[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                        var node = _step5.value;

                        // [mindist, maxdist] = Distance.box2box_minmax(shape.box, node.max);
                        // if (Flatten.Utils.GT(mindist, min_stop))
                        //     continue;

                        // Estimate min-max dist to the shape stored in the node.item, using node.item.key which is shape's box

                        var _Distance$box2box_min3 = Distance.box2box_minmax(shape.box, node.item.key);

                        var _Distance$box2box_min4 = _slicedToArray(_Distance$box2box_min3, 2);

                        mindist = _Distance$box2box_min4[0];
                        maxdist = _Distance$box2box_min4[1];

                        if (node.item.value instanceof Flatten.Edge) {
                            tree.insert([mindist, maxdist], node.item.value.shape);
                        } else {
                            tree.insert([mindist, maxdist], node.item.value);
                        }
                        if (Flatten.Utils.LT(maxdist, min_stop)) {
                            min_stop = maxdist; // this will be the new distance estimation
                        }
                    }
                } catch (err) {
                    _didIteratorError5 = true;
                    _iteratorError5 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion5 && _iterator5.return) {
                            _iterator5.return();
                        }
                    } finally {
                        if (_didIteratorError5) {
                            throw _iteratorError5;
                        }
                    }
                }

                if (level.length === 0) return min_stop;

                // Calculate new level from left and right children of the current
                var new_level_left = level.map(function (node) {
                    return node.left.isNil() ? undefined : node.left;
                }).filter(function (node) {
                    return node !== undefined;
                });
                var new_level_right = level.map(function (node) {
                    return node.right.isNil() ? undefined : node.right;
                }).filter(function (node) {
                    return node !== undefined;
                });
                // Merge left and right subtrees and leave only relevant subtrees
                var new_level = [].concat(_toConsumableArray(new_level_left), _toConsumableArray(new_level_right)).filter(function (node) {
                    // Node subtree quick reject, node.max is a subtree box
                    var _Distance$box2box_min = Distance.box2box_minmax(shape.box, node.max),
                        _Distance$box2box_min2 = _slicedToArray(_Distance$box2box_min, 2),
                        mindist = _Distance$box2box_min2[0],
                        maxdist = _Distance$box2box_min2[1];

                    return Flatten.Utils.LE(mindist, min_stop);
                });

                min_stop = Distance.minmax_tree_process_level(shape, new_level, min_stop, tree);
                return min_stop;
            }

            /**
             * Calculates sorted tree of [mindist, maxdist] intervals between query shape
             * and shapes of the planar set.
             * @param shape
             * @param set
             */

        }, {
            key: "minmax_tree",
            value: function minmax_tree(shape, set, min_stop) {
                var tree = new IntervalTree();
                var level = [set.index.root];
                var squared_min_stop = min_stop < Number.POSITIVE_INFINITY ? min_stop * min_stop : Number.POSITIVE_INFINITY;
                squared_min_stop = Distance.minmax_tree_process_level(shape, level, squared_min_stop, tree);
                return tree;
            }
        }, {
            key: "minmax_tree_calc_distance",
            value: function minmax_tree_calc_distance(shape, node, min_dist_and_segment) {
                var min_dist_and_segment_new = void 0,
                    stop = void 0;
                if (node != null && !node.isNil()) {
                    var _Distance$minmax_tree = Distance.minmax_tree_calc_distance(shape, node.left, min_dist_and_segment);

                    var _Distance$minmax_tree2 = _slicedToArray(_Distance$minmax_tree, 2);

                    min_dist_and_segment_new = _Distance$minmax_tree2[0];
                    stop = _Distance$minmax_tree2[1];


                    if (stop) {
                        return [min_dist_and_segment_new, stop];
                    }

                    if (Flatten.Utils.LT(min_dist_and_segment_new[0], Math.sqrt(node.item.key.low))) {
                        return [min_dist_and_segment_new, true]; // stop condition
                    }

                    var _Distance$distance = Distance.distance(shape, node.item.value),
                        _Distance$distance2 = _slicedToArray(_Distance$distance, 2),
                        dist = _Distance$distance2[0],
                        shortest_segment = _Distance$distance2[1];
                    // console.log(dist)


                    if (Flatten.Utils.LT(dist, min_dist_and_segment_new[0])) {
                        min_dist_and_segment_new = [dist, shortest_segment];
                    }

                    var _Distance$minmax_tree3 = Distance.minmax_tree_calc_distance(shape, node.right, min_dist_and_segment_new);

                    var _Distance$minmax_tree4 = _slicedToArray(_Distance$minmax_tree3, 2);

                    min_dist_and_segment_new = _Distance$minmax_tree4[0];
                    stop = _Distance$minmax_tree4[1];


                    return [min_dist_and_segment_new, stop];
                }

                return [min_dist_and_segment, false];
            }

            /**
             * Calculates distance between shape and Planar Set of shapes
             * @param shape
             * @param {PlanarSet} set
             * @param {Number} min_stop
             * @returns {*}
             */

        }, {
            key: "shape2planarSet",
            value: function shape2planarSet(shape, set) {
                var min_stop = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Number.POSITIVE_INFINITY;

                var min_dist_and_segment = [min_stop, new Flatten.Segment()];
                var stop = false;
                if (set instanceof Flatten.PlanarSet) {
                    var tree = Distance.minmax_tree(shape, set, min_stop);

                    var _Distance$minmax_tree5 = Distance.minmax_tree_calc_distance(shape, tree.root, min_dist_and_segment);

                    var _Distance$minmax_tree6 = _slicedToArray(_Distance$minmax_tree5, 2);

                    min_dist_and_segment = _Distance$minmax_tree6[0];
                    stop = _Distance$minmax_tree6[1];
                }
                return min_dist_and_segment;
            }
        }, {
            key: "sort",
            value: function sort(dist_and_segment) {
                dist_and_segment.sort(function (d1, d2) {
                    if (Flatten.Utils.LT(d1[0], d2[0])) {
                        return -1;
                    }
                    if (Flatten.Utils.GT(d1[0], d2[0])) {
                        return 1;
                    }
                    return 0;
                });
            }
        }, {
            key: "distance",
            value: function distance(shape1, shape2) {
                return shape1.distanceTo(shape2);
            }
        }]);

        return Distance;
    }();
};

/***/ }),

/***/ "./algorithms/ray_shooting.js":
/*!************************************!*\
  !*** ./algorithms/ray_shooting.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



module.exports = function (Flatten) {
    var Polygon = Flatten.Polygon,
        Point = Flatten.Point,
        Segment = Flatten.Segment,
        Arc = Flatten.Arc,
        Line = Flatten.Line,
        Ray = Flatten.Ray;


    Flatten.ray_shoot = function (polygon, point) {
        var contains = undefined;

        // if (!(polygon instanceof Polygon && point instanceof Point)) {
        //     throw Flatten.Errors.ILLEGAL_PARAMETERS;
        // }

        // 1. Quick reject
        if (polygon.box.not_intersect(point.box)) {
            return Flatten.OUTSIDE;
        }

        var ray = new Ray(point);
        var line = new Line(ray.pt, ray.norm);

        // 2. Locate relevant edges of the polygon
        var resp_edges = polygon.edges.search(ray.box);

        if (resp_edges.length == 0) {
            return Flatten.OUTSIDE;
        }

        // 3. Calculate intersections
        var intersections = [];
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = resp_edges[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var edge = _step.value;
                var _iteratorNormalCompletion2 = true;
                var _didIteratorError2 = false;
                var _iteratorError2 = undefined;

                try {
                    for (var _iterator2 = ray.intersect(edge.shape)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                        var ip = _step2.value;


                        // If intersection is equal to query point then point lays on boundary
                        if (ip.equalTo(point)) {
                            return Flatten.BOUNDARY;
                        }

                        intersections.push({
                            pt: ip,
                            edge: edge
                        });
                    }
                } catch (err) {
                    _didIteratorError2 = true;
                    _iteratorError2 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion2 && _iterator2.return) {
                            _iterator2.return();
                        }
                    } finally {
                        if (_didIteratorError2) {
                            throw _iteratorError2;
                        }
                    }
                }
            }

            // 4. Sort intersection in x-ascending order
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }

        intersections.sort(function (i1, i2) {
            if (Flatten.Utils.LT(i1.pt.x, i2.pt.x)) {
                return -1;
            }
            if (Flatten.Utils.GT(i1.pt.x, i2.pt.x)) {
                return 1;
            }
            return 0;
        });

        // 5. Count real intersections, exclude touching
        var counter = 0;

        for (var i = 0; i < intersections.length; i++) {
            var intersection = intersections[i];
            if (intersection.pt.equalTo(intersection.edge.shape.start)) {
                /* skip same point between same edges if already counted */
                if (i > 0 && intersection.pt.equalTo(intersections[i - 1].pt) && intersection.edge.prev === intersections[i - 1].edge) {
                    continue;
                }
                var prev_edge = intersection.edge.prev;
                while (Flatten.Utils.EQ_0(prev_edge.length)) {
                    prev_edge = prev_edge.prev;
                }
                var prev_tangent = prev_edge.shape.tangentInEnd();
                var prev_point = intersection.pt.translate(prev_tangent);

                var cur_tangent = intersection.edge.shape.tangentInStart();
                var cur_point = intersection.pt.translate(cur_tangent);

                var prev_on_the_left = prev_point.leftTo(line);
                var cur_on_the_left = cur_point.leftTo(line);

                if (prev_on_the_left && !cur_on_the_left || !prev_on_the_left && cur_on_the_left) {
                    counter++;
                }
            } else if (intersection.pt.equalTo(intersection.edge.shape.end)) {
                /* skip same point between same edges if already counted */
                if (i > 0 && intersection.pt.equalTo(intersections[i - 1].pt) && intersection.edge.next === intersections[i - 1].edge) {
                    continue;
                }
                var next_edge = intersection.edge.next;
                while (Flatten.Utils.EQ_0(next_edge.length)) {
                    next_edge = next_edge.next;
                }
                var next_tangent = next_edge.shape.tangentInStart();
                var next_point = intersection.pt.translate(next_tangent);

                var _cur_tangent = intersection.edge.shape.tangentInEnd();
                var _cur_point = intersection.pt.translate(_cur_tangent);

                var next_on_the_left = next_point.leftTo(line);
                var _cur_on_the_left = _cur_point.leftTo(line);

                if (next_on_the_left && !_cur_on_the_left || !next_on_the_left && _cur_on_the_left) {
                    counter++;
                }
            } else {
                /* intersection point is not a coincident with a vertex */
                if (intersection.edge.shape instanceof Segment) {
                    counter++;
                } else {
                    /* Check if ray does not touch the curve in the extremal (top or bottom) point */
                    var box = intersection.edge.shape.box;
                    if (!(Flatten.Utils.EQ(intersection.pt.y, box.ymin) || Flatten.Utils.EQ(intersection.pt.y, box.ymax))) {
                        counter++;
                    }
                }
            }
        }

        // 6. Odd or even?
        contains = counter % 2 == 1 ? Flatten.INSIDE : Flatten.OUTSIDE;

        return contains;
    };
};

/***/ }),

/***/ "./classes/arc.js":
/*!************************!*\
  !*** ./classes/arc.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Created by Alex Bol on 3/10/2017.
 */



var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

module.exports = function (Flatten) {
    /**
     * Class representing a circular arc
     * @type {Arc}
     */
    Flatten.Arc = function () {
        /**
         *
         * @param {Point} pc - arc center
         * @param {number} r - arc radius
         * @param {number} startAngle - start angle in radians from 0 to 2*PI
         * @param {number} endAngle - end angle in radians from 0 to 2*PI
         * @param {boolean} counterClockwise - arc direction, true - clockwise, false - counter clockwise
         */
        function Arc() {
            _classCallCheck(this, Arc);

            /**
             * Arc center
             * @type {Point}
             */
            this.pc = new Flatten.Point();
            /**
             * Arc radius
             * @type {number}
             */
            this.r = 1;
            /**
             * Arc start angle in radians
             * @type {number}
             */
            this.startAngle = 0;
            /**
             * Arc end angle in radians
             * @type {number}
             */
            this.endAngle = 2 * Math.PI;
            /**
             * Arc orientation
             * @type {boolean}
             */
            this.counterClockwise = Flatten.CCW;

            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            if (args.length == 0) return;

            if (args.length == 1 && args[0] instanceof Object && args[0].name === "arc") {
                var _args$ = args[0],
                    pc = _args$.pc,
                    r = _args$.r,
                    startAngle = _args$.startAngle,
                    endAngle = _args$.endAngle,
                    counterClockwise = _args$.counterClockwise;

                this.pc = new Flatten.Point(pc.x, pc.y);
                this.r = r;
                this.startAngle = startAngle;
                this.endAngle = endAngle;
                this.counterClockwise = counterClockwise;
                return;
            } else {
                var _ref = [].concat(args),
                    _pc = _ref[0],
                    _r = _ref[1],
                    _startAngle = _ref[2],
                    _endAngle = _ref[3],
                    _counterClockwise = _ref[4];

                if (_pc && _pc instanceof Flatten.Point) this.pc = _pc.clone();
                if (_r !== undefined) this.r = _r;
                if (_startAngle !== undefined) this.startAngle = _startAngle;
                if (_endAngle !== undefined) this.endAngle = _endAngle;
                if (_counterClockwise !== undefined) this.counterClockwise = _counterClockwise;
                return;
            }

            throw Flatten.Errors.ILLEGAL_PARAMETERS;
        }

        /**
         * Return new instance of arc
         * @returns {Arc}
         */


        _createClass(Arc, [{
            key: "clone",
            value: function clone() {
                return new Flatten.Arc(this.pc.clone(), this.r, this.startAngle, this.endAngle, this.counterClockwise);
            }

            /**
             * Get sweep angle in radians. Sweep angle is non-negative number from 0 to 2*PI
             * @returns {number}
             */

        }, {
            key: "contains",


            /**
             * Returns true if arc contains point, false otherwise
             * @param {Point} pt - point to test
             * @returns {boolean}
             */
            value: function contains(pt) {
                // first check if  point on circle (pc,r)
                if (!Flatten.Utils.EQ(this.pc.distanceTo(pt)[0], this.r)) return false;

                // point on circle

                if (pt.equalTo(this.start)) return true;

                var angle = new Flatten.Vector(this.pc, pt).slope;
                var test_arc = new Flatten.Arc(this.pc, this.r, this.startAngle, angle, this.counterClockwise);
                return Flatten.Utils.LE(test_arc.length, this.length);
            }

            /**
             * When given point belongs to arc, return array of two arcs split by this point. If points is incident
             * to start or end point of the arc, return clone of the arc. If point does not belong to the arcs, return
             * empty array.
             * @param {Point} pt Query point
             * @returns {Arc[]}
             */

        }, {
            key: "split",
            value: function split(pt) {
                if (!this.contains(pt)) return [];

                if (Flatten.Utils.EQ_0(this.sweep)) return [this.clone()];

                if (this.start.equalTo(pt) || this.end.equalTo(pt)) return [this.clone()];

                var angle = new Flatten.Vector(this.pc, pt).slope;

                return [new Flatten.Arc(this.pc, this.r, this.startAngle, angle, this.counterClockwise), new Flatten.Arc(this.pc, this.r, angle, this.endAngle, this.counterClockwise)];
            }

            /**
             * Return middle point of the arc
             * @returns {Point}
             */

        }, {
            key: "middle",
            value: function middle() {
                var endAngle = this.counterClockwise ? this.startAngle + this.sweep / 2 : this.startAngle - this.sweep / 2;
                var arc = new Flatten.Arc(this.pc, this.r, this.startAngle, endAngle, this.counterClockwise);
                return arc.end;
            }

            /**
             * Returns chord height ("sagitta") of the arc
             * @returns {number}
             */

        }, {
            key: "chordHeight",
            value: function chordHeight() {
                return (1.0 - Math.cos(Math.abs(this.sweep / 2.0))) * this.r;
            }

            /**
             * Returns array of intersection points between arc and other shape
             * @param {Shape} shape Shape of the one of supported types <br/>
             * @returns {Points[]}
             */

        }, {
            key: "intersect",
            value: function intersect(shape) {
                if (shape instanceof Flatten.Point) {
                    return this.contains(shape) ? [shape] : [];
                }
                if (shape instanceof Flatten.Line) {
                    return shape.intersect(this);
                }
                if (shape instanceof Flatten.Circle) {
                    return Arc.intersectArc2Circle(this, shape);
                }
                if (shape instanceof Flatten.Segment) {
                    return shape.intersect(this);
                }
                if (shape instanceof Flatten.Arc) {
                    return Arc.intersectArc2Arc(this, shape);
                }
                if (shape instanceof Flatten.Polygon) {
                    return Flatten.Polygon.intersectShape2Polygon(this, shape);
                }
            }

            /**
             * Calculate distance and shortest segment from arc to shape and return array [distance, shortest segment]
             * @param {Shape} shape Shape of the one of supported types Point, Line, Circle, Segment, Arc, Polygon or Planar Set
             * @returns {number} distance from arc to shape
             * @returns {Segment} shortest segment between arc and shape (started at arc, ended at shape)
               */

        }, {
            key: "distanceTo",
            value: function distanceTo(shape) {
                var Distance = Flatten.Distance;


                if (shape instanceof Flatten.Point) {
                    var _Distance$point2arc = Distance.point2arc(shape, this),
                        _Distance$point2arc2 = _slicedToArray(_Distance$point2arc, 2),
                        dist = _Distance$point2arc2[0],
                        shortest_segment = _Distance$point2arc2[1];

                    shortest_segment = shortest_segment.reverse();
                    return [dist, shortest_segment];
                }

                if (shape instanceof Flatten.Circle) {
                    var _Distance$arc2circle = Distance.arc2circle(this, shape),
                        _Distance$arc2circle2 = _slicedToArray(_Distance$arc2circle, 2),
                        _dist = _Distance$arc2circle2[0],
                        _shortest_segment = _Distance$arc2circle2[1];

                    return [_dist, _shortest_segment];
                }

                if (shape instanceof Flatten.Line) {
                    var _Distance$arc2line = Distance.arc2line(this, shape),
                        _Distance$arc2line2 = _slicedToArray(_Distance$arc2line, 2),
                        _dist2 = _Distance$arc2line2[0],
                        _shortest_segment2 = _Distance$arc2line2[1];

                    return [_dist2, _shortest_segment2];
                }

                if (shape instanceof Flatten.Segment) {
                    var _Distance$segment2arc = Distance.segment2arc(shape, this),
                        _Distance$segment2arc2 = _slicedToArray(_Distance$segment2arc, 2),
                        _dist3 = _Distance$segment2arc2[0],
                        _shortest_segment3 = _Distance$segment2arc2[1];

                    _shortest_segment3 = _shortest_segment3.reverse();
                    return [_dist3, _shortest_segment3];
                }

                if (shape instanceof Flatten.Arc) {
                    var _Distance$arc2arc = Distance.arc2arc(this, shape),
                        _Distance$arc2arc2 = _slicedToArray(_Distance$arc2arc, 2),
                        _dist4 = _Distance$arc2arc2[0],
                        _shortest_segment4 = _Distance$arc2arc2[1];

                    return [_dist4, _shortest_segment4];
                }

                if (shape instanceof Flatten.Polygon) {
                    var _Distance$shape2polyg = Distance.shape2polygon(this, shape),
                        _Distance$shape2polyg2 = _slicedToArray(_Distance$shape2polyg, 2),
                        _dist5 = _Distance$shape2polyg2[0],
                        _shortest_segment5 = _Distance$shape2polyg2[1];

                    return [_dist5, _shortest_segment5];
                }

                if (shape instanceof Flatten.PlanarSet) {
                    var _Distance$shape2plana = Distance.shape2planarSet(this, shape),
                        _Distance$shape2plana2 = _slicedToArray(_Distance$shape2plana, 2),
                        _dist6 = _Distance$shape2plana2[0],
                        _shortest_segment6 = _Distance$shape2plana2[1];

                    return [_dist6, _shortest_segment6];
                }
            }

            /**
             * Breaks arc in extreme point 0, pi/2, pi, 3*pi/2 and returns array of sub-arcs
             * @returns {Arcs[]}
             */

        }, {
            key: "breakToFunctional",
            value: function breakToFunctional() {
                var func_arcs_array = [];
                var angles = [0, Math.PI / 2, 2 * Math.PI / 2, 3 * Math.PI / 2];
                var pts = [this.pc.translate(this.r, 0), this.pc.translate(0, this.r), this.pc.translate(-this.r, 0), this.pc.translate(0, -this.r)];

                // If arc contains extreme point,
                // create test arc started at start point and ended at this extreme point
                var test_arcs = [];
                for (var i = 0; i < 4; i++) {
                    if (pts[i].on(this)) {
                        test_arcs.push(new Flatten.Arc(this.pc, this.r, this.startAngle, angles[i], this.counterClockwise));
                    }
                }

                if (test_arcs.length == 0) {
                    // arc does contain any extreme point
                    func_arcs_array.push(this.clone());
                } else {
                    // arc passes extreme point
                    // sort these arcs by length
                    test_arcs.sort(function (arc1, arc2) {
                        return arc1.length - arc2.length;
                    });

                    for (var _i = 0; _i < test_arcs.length; _i++) {
                        var _prev_arc = func_arcs_array.length > 0 ? func_arcs_array[func_arcs_array.length - 1] : undefined;
                        var _new_arc = void 0;
                        if (_prev_arc) {
                            _new_arc = new Flatten.Arc(this.pc, this.r, _prev_arc.endAngle, test_arcs[_i].endAngle, this.counterClockwise);
                        } else {
                            _new_arc = new Flatten.Arc(this.pc, this.r, this.startAngle, test_arcs[_i].endAngle, this.counterClockwise);
                        }
                        if (!Flatten.Utils.EQ_0(_new_arc.length)) {
                            func_arcs_array.push(_new_arc.clone());
                        }
                    }

                    // add last sub arc
                    var prev_arc = func_arcs_array.length > 0 ? func_arcs_array[func_arcs_array.length - 1] : undefined;
                    var new_arc = void 0;
                    if (prev_arc) {
                        new_arc = new Flatten.Arc(this.pc, this.r, prev_arc.endAngle, this.endAngle, this.counterClockwise);
                    } else {
                        new_arc = new Flatten.Arc(this.pc, this.r, this.startAngle, this.endAngle, this.counterClockwise);
                    }
                    if (!Flatten.Utils.EQ_0(new_arc.length)) {
                        func_arcs_array.push(new_arc.clone());
                    }
                }
                return func_arcs_array;
            }

            /**
             * Return tangent unit vector in the start point in the direction from start to end
             * @returns {Vector}
             */

        }, {
            key: "tangentInStart",
            value: function tangentInStart() {
                var vec = new Flatten.Vector(this.pc, this.start);
                var angle = this.counterClockwise ? Math.PI / 2. : -Math.PI / 2.;
                var tangent = vec.rotate(angle).normalize();
                return tangent;
            }

            /**
             * Return tangent unit vector in the end point in the direction from end to start
             * @returns {Vector}
             */

        }, {
            key: "tangentInEnd",
            value: function tangentInEnd() {
                var vec = new Flatten.Vector(this.pc, this.end);
                var angle = this.counterClockwise ? -Math.PI / 2. : Math.PI / 2.;
                var tangent = vec.rotate(angle).normalize();
                return tangent;
            }

            /**
             * Returns new arc with swapped start and end angles and reversed direction
             * @returns {Arc}
             */

        }, {
            key: "reverse",
            value: function reverse() {
                return new Arc(this.pc, this.r, this.endAngle, this.startAngle, !this.counterClockwise);
            }

            /**
             * Returns new arc translated by vector vec
             * @param {Vector} vec
             * @returns {Segment}
             */

        }, {
            key: "translate",
            value: function translate() {
                var _pc2;

                var arc = this.clone();
                arc.pc = (_pc2 = this.pc).translate.apply(_pc2, arguments);
                return arc;
            }

            /**
             * Return new segment rotated by given angle around given point
             * If point omitted, rotate around origin (0,0)
             * Positive value of angle defines rotation counter clockwise, negative - clockwise
             * @param {number} angle - rotation angle in radians
             * @param {Point} center - center point, default is (0,0)
             * @returns {Arc}
             */

        }, {
            key: "rotate",
            value: function rotate() {
                var angle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                var center = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Flatten.Point();

                var m = new Flatten.Matrix();
                m = m.translate(center.x, center.y).rotate(angle).translate(-center.x, -center.y);
                return this.transform(m);
            }

            /**
             * Return new arc transformed using affine transformation matrix <br/>
             * Note, that non-equal scaling by x and y (matrix[0] != matrix[3]) produce illegal result
             * TODO: support non-equal scaling arc to ellipse or throw exception ?
             * @param {Matrix} matrix - affine transformation matrix
             * @returns {Arc}
             */

        }, {
            key: "transform",
            value: function transform() {
                var matrix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Flatten.Matrix();

                var newStart = this.start.transform(matrix);
                var newEnd = this.end.transform(matrix);
                var newCenter = this.pc.transform(matrix);
                var arc = Arc.arcSE(newCenter, newStart, newEnd, this.counterClockwise);
                return arc;
            }
        }, {
            key: "definiteIntegral",
            value: function definiteIntegral() {
                var ymin = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

                var f_arcs = this.breakToFunctional();
                var area = f_arcs.reduce(function (acc, arc) {
                    return acc + arc.circularSegmentDefiniteIntegral(ymin);
                }, 0.0);
                return area;
            }
        }, {
            key: "circularSegmentDefiniteIntegral",
            value: function circularSegmentDefiniteIntegral(ymin) {
                var line = new Flatten.Line(this.start, this.end);
                var onLeftSide = this.pc.leftTo(line);
                var segment = new Flatten.Segment(this.start, this.end);
                var areaTrapez = segment.definiteIntegral(ymin);
                var areaCircularSegment = this.circularSegmentArea();
                var area = onLeftSide ? areaTrapez - areaCircularSegment : areaTrapez + areaCircularSegment;
                return area;
            }
        }, {
            key: "circularSegmentArea",
            value: function circularSegmentArea() {
                return 0.5 * this.r * this.r * (this.sweep - Math.sin(this.sweep));
            }

            /**
             * Return string to draw arc in svg
             * @param {Object} attrs - json structure with attributes of svg path element,
             * like "stroke", "strokeWidth", "fill" <br/>
             * Defaults are stroke:"black", strokeWidth:"1", fill:"none"
             * @returns {string}
             */

        }, {
            key: "svg",
            value: function svg() {
                var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

                var largeArcFlag = this.sweep <= Math.PI ? "0" : "1";
                var sweepFlag = this.counterClockwise ? "1" : "0";
                var stroke = attrs.stroke,
                    strokeWidth = attrs.strokeWidth,
                    fill = attrs.fill,
                    id = attrs.id,
                    className = attrs.className;
                // let rest_str = Object.keys(rest).reduce( (acc, key) => acc += ` ${key}="${rest[key]}"`, "");

                var id_str = id && id.length > 0 ? "id=\"" + id + "\"" : "";
                var class_str = className && className.length > 0 ? "class=\"" + className + "\"" : "";

                if (Flatten.Utils.EQ(this.sweep, 2 * Math.PI)) {
                    var circle = new Flatten.Circle(this.pc, this.r);
                    return circle.svg(attrs);
                } else {
                    return "\n<path d=\"M" + this.start.x + "," + this.start.y + "\n                             A" + this.r + "," + this.r + " 0 " + largeArcFlag + "," + sweepFlag + " " + this.end.x + "," + this.end.y + "\"\n                    stroke=\"" + (stroke || "black") + "\" stroke-width=\"" + (strokeWidth || 1) + "\" fill=\"" + (fill || "none") + "\" " + id_str + " " + class_str + " />";
                }
            }

            /**
             * Returns JSON object. This method defines how data will be
             * serialized when called JSON.stringify method with this object
             * @returns {Object}
             */

        }, {
            key: "toJSON",
            value: function toJSON() {
                return Object.assign({}, this, { name: "arc" });
            }
        }, {
            key: "sweep",
            get: function get() {
                if (Flatten.Utils.EQ(this.startAngle, this.endAngle)) return 0.0;
                if (Flatten.Utils.EQ(Math.abs(this.startAngle - this.endAngle), Flatten.PIx2)) {
                    return Flatten.PIx2;
                }
                var sweep = void 0;
                if (this.counterClockwise) {
                    sweep = Flatten.Utils.GT(this.endAngle, this.startAngle) ? this.endAngle - this.startAngle : this.endAngle - this.startAngle + Flatten.PIx2;
                } else {
                    sweep = Flatten.Utils.GT(this.startAngle, this.endAngle) ? this.startAngle - this.endAngle : this.startAngle - this.endAngle + Flatten.PIx2;
                }

                if (Flatten.Utils.GT(sweep, Flatten.PIx2)) {
                    sweep -= Flatten.PIx2;
                }
                if (Flatten.Utils.LT(sweep, 0)) {
                    sweep += Flatten.PIx2;
                }
                return sweep;
            }

            /**
             * Get start point of arc
             * @returns {Point}
             */

        }, {
            key: "start",
            get: function get() {
                var p0 = new Flatten.Point(this.pc.x + this.r, this.pc.y);
                return p0.rotate(this.startAngle, this.pc);
            }

            /**
             * Get end point of arc
             * @returns {Point}
             */

        }, {
            key: "end",
            get: function get() {
                var p0 = new Flatten.Point(this.pc.x + this.r, this.pc.y);
                return p0.rotate(this.endAngle, this.pc);
            }

            /**
             * Get center of arc
             * @returns {Point}
             */

        }, {
            key: "center",
            get: function get() {
                return this.pc.clone();
            }
        }, {
            key: "vertices",
            get: function get() {
                return [this.start.clone(), this.end.clone()];
            }

            /**
             * Get arc length
             * @returns {number}
             */

        }, {
            key: "length",
            get: function get() {
                return Math.abs(this.sweep * this.r);
            }

            /**
             * Get bounding box of the arc
             * @returns {Box}
             */

        }, {
            key: "box",
            get: function get() {
                var func_arcs = this.breakToFunctional();
                var box = func_arcs.reduce(function (acc, arc) {
                    return acc.merge(arc.start.box);
                }, new Flatten.Box());
                box = box.merge(this.end.box);
                return box;
            }
        }], [{
            key: "arcSE",
            value: function arcSE(center, start, end, counterClockwise) {
                var vector = Flatten.vector;

                var startAngle = vector(center, start).slope;
                var endAngle = vector(center, end).slope;
                if (Flatten.Utils.EQ(startAngle, endAngle)) {
                    endAngle += 2 * Math.PI;
                    counterClockwise = true;
                }
                var r = vector(center, start).length;

                return new Arc(center, r, startAngle, endAngle, counterClockwise);
            }
        }, {
            key: "intersectArc2Arc",
            value: function intersectArc2Arc(arc1, arc2) {
                var ip = [];

                if (arc1.box.not_intersect(arc2.box)) {
                    return ip;
                }

                // Special case: overlapping arcs
                // May return up to 4 intersection points
                if (arc1.pc.equalTo(arc2.pc) && Flatten.Utils.EQ(arc1.r, arc2.r)) {
                    var pt = void 0;

                    pt = arc1.start;
                    if (pt.on(arc2)) ip.push(pt);

                    pt = arc1.end;
                    if (pt.on(arc2)) ip.push(pt);

                    pt = arc2.start;
                    if (pt.on(arc1)) ip.push(pt);

                    pt = arc2.end;
                    if (pt.on(arc1)) ip.push(pt);

                    return ip;
                }

                // Common case
                var circle1 = new Flatten.Circle(arc1.pc, arc1.r);
                var circle2 = new Flatten.Circle(arc2.pc, arc2.r);
                var ip_tmp = circle1.intersect(circle2);
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = ip_tmp[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var _pt = _step.value;

                        if (_pt.on(arc1) && _pt.on(arc2)) {
                            ip.push(_pt);
                        }
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }

                return ip;
            }
        }, {
            key: "intersectArc2Circle",
            value: function intersectArc2Circle(arc, circle) {
                var ip = [];

                if (arc.box.not_intersect(circle.box)) {
                    return ip;
                }

                // Case when arc center incident to circle center
                // Return arc's end points as 2 intersection points
                if (circle.pc.equalTo(arc.pc) && Flatten.Utils.EQ(circle.r, arc.r)) {
                    ip.push(arc.start);
                    ip.push(arc.end);
                    return ip;
                }

                // Common case
                var circle1 = circle;
                var circle2 = new Flatten.Circle(arc.pc, arc.r);
                var ip_tmp = circle1.intersect(circle2);
                var _iteratorNormalCompletion2 = true;
                var _didIteratorError2 = false;
                var _iteratorError2 = undefined;

                try {
                    for (var _iterator2 = ip_tmp[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                        var pt = _step2.value;

                        if (pt.on(arc)) {
                            ip.push(pt);
                        }
                    }
                } catch (err) {
                    _didIteratorError2 = true;
                    _iteratorError2 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion2 && _iterator2.return) {
                            _iterator2.return();
                        }
                    } finally {
                        if (_didIteratorError2) {
                            throw _iteratorError2;
                        }
                    }
                }

                return ip;
            }
        }]);

        return Arc;
    }();

    /**
     * Function to create arc equivalent to "new" constructor
     * @param args
     */
    Flatten.arc = function () {
        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
        }

        return new (Function.prototype.bind.apply(Flatten.Arc, [null].concat(args)))();
    };
};

/***/ }),

/***/ "./classes/box.js":
/*!************************!*\
  !*** ./classes/box.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Created by Alex Bol on 3/7/2017.
 */


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

module.exports = function (Flatten) {
    /**
     * Class Box represent bounding box of the shape
     * @type {Box}
     */
    Flatten.Box = function () {
        /**
         *
         * @param {number} xmin - minimal x coordinate
         * @param {number} ymin - minimal y coordinate
         * @param {number} xmax - maximal x coordinate
         * @param {number} ymax - maximal y coordinate
         */
        function Box() {
            var xmin = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
            var ymin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
            var xmax = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
            var ymax = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;

            _classCallCheck(this, Box);

            /**
             * Minimal x coordinate
             * @type {number}
             */
            this.xmin = xmin;
            /**
             * Minimal y coordinate
             * @type {number}
             */
            this.ymin = ymin;
            /**
             * Maximal x coordinate
             * @type {number}
             */
            this.xmax = xmax;
            /**
             * Maximal y coordinate
             * @type {number}
             */
            this.ymax = ymax;
        }

        /**
         * Clones and returns new instance of box
         * @returns {Box}
         */


        _createClass(Box, [{
            key: "clone",
            value: function clone() {
                return new Box(this.xmin, this.ymin, this.xmax, this.ymax);
            }

            /**
             * Property low need for interval tree interface
             * @returns {Point}
             */

        }, {
            key: "not_intersect",


            /**
             * Returns true if not intersected with other box
             * @param {Box} other_box - other box to test
             * @returns {boolean}
             */
            value: function not_intersect(other_box) {
                return this.xmax < other_box.xmin || this.xmin > other_box.xmax || this.ymax < other_box.ymin || this.ymin > other_box.ymax;
            }

            /**
             * Returns true if intersected with other box
             * @param {Box} other_box - Query box
             * @returns {boolean}
             */

        }, {
            key: "intersect",
            value: function intersect(other_box) {
                return !this.not_intersect(other_box);
            }

            /**
             * Returns new box merged with other box
             * @param {Box} other_box - Other box to merge with
             * @returns {Box}
             */

        }, {
            key: "merge",
            value: function merge(other_box) {
                return new Box(this.xmin === undefined ? other_box.xmin : Math.min(this.xmin, other_box.xmin), this.ymin === undefined ? other_box.ymin : Math.min(this.ymin, other_box.ymin), this.xmax === undefined ? other_box.xmax : Math.max(this.xmax, other_box.xmax), this.ymax === undefined ? other_box.ymax : Math.max(this.ymax, other_box.ymax));
            }

            /**
             * Defines predicate "less than" between two boxes. Need for interval index
             * @param {Box} other_box - other box
             * @returns {boolean} - true if this box less than other box, false otherwise
             */

        }, {
            key: "less_than",
            value: function less_than(other_box) {
                if (this.low.lessThan(other_box.low)) return true;
                if (this.low.equalTo(other_box.low) && this.high.lessThan(other_box.high)) return true;
                return false;
            }

            /**
             * Returns true if this box is equal to other box, false otherwise
             * @param {Box} other_box - query box
             * @returns {boolean}
             */

        }, {
            key: "equal_to",
            value: function equal_to(other_box) {
                return this.low.equalTo(other_box.low) && this.high.equalTo(other_box.high);
            }
        }, {
            key: "output",
            value: function output() {
                return this.clone();
            }
        }, {
            key: "maximal_val",
            value: function maximal_val(box1, box2) {
                // return pt1.lessThan(pt2) ? pt2.clone() : pt1.clone();
                return box1.merge(box2);
            }
        }, {
            key: "val_less_than",
            value: function val_less_than(pt1, pt2) {
                return pt1.lessThan(pt2);
            }

            /**
             * Set new values to the box object
             * @param {number} xmin - miminal x coordinate
             * @param {number} ymin - minimal y coordinate
             * @param {number} xmax - maximal x coordinate
             * @param {number} ymax - maximal y coordinate
             */

        }, {
            key: "set",
            value: function set(xmin, ymin, xmax, ymax) {
                this.xmin = xmin;
                this.ymin = ymin;
                this.xmax = xmax;
                this.ymax = ymax;
            }

            /**
             * Return string to draw circle in svg
             * @param {Object} attrs - json structure with attributes of svg rectangle element,
             * like "stroke", "strokeWidth", "fill" <br/>
             * Defaults are stroke:"black", strokeWidth:"1", fill:"none"
             * @returns {string}
             */

        }, {
            key: "svg",
            value: function svg() {
                var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                var stroke = attrs.stroke,
                    strokeWidth = attrs.strokeWidth,
                    fill = attrs.fill,
                    id = attrs.id,
                    className = attrs.className;
                // let rest_str = Object.keys(rest).reduce( (acc, key) => acc += ` ${key}="${rest[key]}"`, "");

                var id_str = id && id.length > 0 ? "id=\"" + id + "\"" : "";
                var class_str = className && className.length > 0 ? "class=\"" + className + "\"" : "";
                var width = this.xmax - this.xmin;
                var height = this.ymax - this.ymin;

                return "\n<rect x=\"" + this.xmin + "\" y=\"" + this.ymin + "\" width=" + width + " height=" + height + " stroke=\"" + (stroke || "black") + "\" stroke-width=\"" + (strokeWidth || 1) + "\" fill=\"" + (fill || "none") + "\" " + id_str + " " + class_str + " />";
            }
        }, {
            key: "low",
            get: function get() {
                return new Flatten.Point(this.xmin, this.ymin);
            }

            /**
             * Property high need for interval tree interface
             * @returns {Point}
             */

        }, {
            key: "high",
            get: function get() {
                return new Flatten.Point(this.xmax, this.ymax);
            }

            /**
             * Property max returns the box itself !
             * @returns {Box}
             */

        }, {
            key: "max",
            get: function get() {
                return this.clone();
            }

            /**
             * Return center of the box
             * @returns {Point}
             */

        }, {
            key: "center",
            get: function get() {
                return new Flatten.Point((this.xmin + this.xmax) / 2, (this.ymin + this.ymax) / 2);
            }
        }]);

        return Box;
    }();

    /**
     * Shortcut to create new circle
     * @param args
     * @returns {Box}
     */
    Flatten.box = function () {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return new (Function.prototype.bind.apply(Flatten.Box, [null].concat(args)))();
    };
};

/***/ }),

/***/ "./classes/circle.js":
/*!***************************!*\
  !*** ./classes/circle.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Created by Alex Bol on 3/6/2017.
 */



var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

module.exports = function (Flatten) {
    var Arc = Flatten.Arc,
        vector = Flatten.vector;
    /**
     * Class representing a circle
     * @type {Circle}
     */

    Flatten.Circle = function () {
        /**
         *
         * @param {Point} pc - circle center point
         * @param {number} r - circle radius
         */
        function Circle() {
            _classCallCheck(this, Circle);

            /**
             * Circle center
             * @type {Point}
             */
            this.pc = new Flatten.Point();
            /**
             * Circle radius
             * @type {number}
             */
            this.r = 1;

            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            if (args.length == 1 && args[0] instanceof Object && args[0].name === "circle") {
                var _args$ = args[0],
                    pc = _args$.pc,
                    r = _args$.r;

                this.pc = new Flatten.Point(pc);
                this.r = r;
                return;
            } else {
                var _ref = [].concat(args),
                    _pc = _ref[0],
                    _r = _ref[1];

                if (_pc && _pc instanceof Flatten.Point) this.pc = _pc.clone();
                if (_r !== undefined) this.r = _r;
                return;
            }

            throw Flatten.Errors.ILLEGAL_PARAMETERS;
        }

        /**
         * Method clone returns new instance of a Circle
         * @returns {Circle}
         */


        _createClass(Circle, [{
            key: "clone",
            value: function clone() {
                return new Flatten.Circle(this.pc.clone(), this.r);
            }

            /**
             * Circle center
             * @returns {Point}
             */

        }, {
            key: "contains",


            /**
             * Return true if circle contains point
             * @param {Point} pt - test point
             * @returns {boolean}
             */
            value: function contains(pt) {
                return Flatten.Utils.LE(pt.distanceTo(this.center)[0], this.r);
            }

            /**
             * Transform circle to closed arc
             * @param {boolean} counterclockwise
             * @returns {Arc}
             */

        }, {
            key: "toArc",
            value: function toArc() {
                var counterclockwise = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

                return new Flatten.Arc(this.center, this.r, Math.PI, -Math.PI, counterclockwise);
            }

            /**
             * Returns array of intersection points between circle and other shape
             * @param {Shape} shape Shape of the one of supported types
             * @returns {Point[]}
             */

        }, {
            key: "intersect",
            value: function intersect(shape) {
                if (shape instanceof Flatten.Point) {
                    return this.contains(shape) ? [shape] : [];
                }
                if (shape instanceof Flatten.Line) {
                    return shape.intersect(this);
                }

                if (shape instanceof Flatten.Segment) {
                    return shape.intersect(this);
                }

                if (shape instanceof Flatten.Circle) {
                    return Circle.intersectCirle2Circle(this, shape);
                }

                if (shape instanceof Flatten.Arc) {
                    return shape.intersect(this);
                }
                if (shape instanceof Flatten.Polygon) {
                    return Flatten.Polygon.intersectShape2Polygon(this, shape);
                }
            }

            /**
             * Calculate distance and shortest segment from circle to shape and return array [distance, shortest segment]
             * @param {Shape} shape Shape of the one of supported types Point, Line, Circle, Segment, Arc, Polygon or Planar Set
             * @returns {number} distance from circle to shape
             * @returns {Segment} shortest segment between circle and shape (started at circle, ended at shape)
               */

        }, {
            key: "distanceTo",
            value: function distanceTo(shape) {
                var Distance = Flatten.Distance;
                var point2circle = Distance.point2circle,
                    circle2circle = Distance.circle2circle,
                    circle2line = Distance.circle2line,
                    segment2circle = Distance.segment2circle,
                    arc2circle = Distance.arc2circle;


                if (shape instanceof Flatten.Point) {
                    var _point2circle = point2circle(shape, this),
                        _point2circle2 = _slicedToArray(_point2circle, 2),
                        distance = _point2circle2[0],
                        shortest_segment = _point2circle2[1];

                    shortest_segment = shortest_segment.reverse();
                    return [distance, shortest_segment];
                }

                if (shape instanceof Flatten.Circle) {
                    var _circle2circle = circle2circle(this, shape),
                        _circle2circle2 = _slicedToArray(_circle2circle, 2),
                        _distance = _circle2circle2[0],
                        _shortest_segment = _circle2circle2[1];

                    return [_distance, _shortest_segment];
                }

                if (shape instanceof Flatten.Line) {
                    var _circle2line = circle2line(this, shape),
                        _circle2line2 = _slicedToArray(_circle2line, 2),
                        _distance2 = _circle2line2[0],
                        _shortest_segment2 = _circle2line2[1];

                    return [_distance2, _shortest_segment2];
                }

                if (shape instanceof Flatten.Segment) {
                    var _segment2circle = segment2circle(shape, this),
                        _segment2circle2 = _slicedToArray(_segment2circle, 2),
                        _distance3 = _segment2circle2[0],
                        _shortest_segment3 = _segment2circle2[1];

                    _shortest_segment3 = _shortest_segment3.reverse();
                    return [_distance3, _shortest_segment3];
                }

                if (shape instanceof Flatten.Arc) {
                    var _arc2circle = arc2circle(shape, this),
                        _arc2circle2 = _slicedToArray(_arc2circle, 2),
                        _distance4 = _arc2circle2[0],
                        _shortest_segment4 = _arc2circle2[1];

                    _shortest_segment4 = _shortest_segment4.reverse();
                    return [_distance4, _shortest_segment4];
                }

                if (shape instanceof Flatten.Polygon) {
                    var _Distance$shape2polyg = Distance.shape2polygon(this, shape),
                        _Distance$shape2polyg2 = _slicedToArray(_Distance$shape2polyg, 2),
                        _distance5 = _Distance$shape2polyg2[0],
                        _shortest_segment5 = _Distance$shape2polyg2[1];

                    return [_distance5, _shortest_segment5];
                }

                if (shape instanceof Flatten.PlanarSet) {
                    var _Distance$shape2plana = Distance.shape2planarSet(this, shape),
                        _Distance$shape2plana2 = _slicedToArray(_Distance$shape2plana, 2),
                        dist = _Distance$shape2plana2[0],
                        _shortest_segment6 = _Distance$shape2plana2[1];

                    return [dist, _shortest_segment6];
                }
            }
        }, {
            key: "svg",


            /**
             * Return string to draw circle in svg
             * @param {Object} attrs - json structure with attributes of svg circle element,
             * like "stroke", "strokeWidth", "fill" <br/>
             * Defaults are stroke:"black", strokeWidth:"1", fill:"none"
             * @returns {string}
             */
            value: function svg() {
                var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                var stroke = attrs.stroke,
                    strokeWidth = attrs.strokeWidth,
                    fill = attrs.fill,
                    fillOpacity = attrs.fillOpacity,
                    id = attrs.id,
                    className = attrs.className;
                // let rest_str = Object.keys(rest).reduce( (acc, key) => acc += ` ${key}="${rest[key]}"`, "");

                var id_str = id && id.length > 0 ? "id=\"" + id + "\"" : "";
                var class_str = className && className.length > 0 ? "class=\"" + className + "\"" : "";

                return "\n<circle cx=\"" + this.pc.x + "\" cy=\"" + this.pc.y + "\" r=\"" + this.r + "\" stroke=\"" + (stroke || "black") + "\" stroke-width=\"" + (strokeWidth || 1) + "\" fill=\"" + (fill || "none") + "\" fill-opacity=\"" + (fillOpacity || 1.0) + "\" " + id_str + " " + class_str + " />";
            }

            /**
             * Returns JSON object. This method defines how data will be
             * serialized when called JSON.stringify method with this object
             * @returns {Object}
             */

        }, {
            key: "toJSON",
            value: function toJSON() {
                return Object.assign({}, this, { name: "circle" });
            }
        }, {
            key: "center",
            get: function get() {
                return this.pc;
            }

            /**
             * Circle bounding box
             * @returns {Box}
             */

        }, {
            key: "box",
            get: function get() {
                return new Flatten.Box(this.pc.x - this.r, this.pc.y - this.r, this.pc.x + this.r, this.pc.y + this.r);
            }
        }], [{
            key: "intersectCirle2Circle",
            value: function intersectCirle2Circle(circle1, circle2) {
                var ip = [];

                if (circle1.box.not_intersect(circle2.box)) {
                    return ip;
                }

                var vec = new Flatten.Vector(circle1.pc, circle2.pc);

                var r1 = circle1.r;
                var r2 = circle2.r;

                // Degenerated circle
                if (Flatten.Utils.EQ_0(r1) || Flatten.Utils.EQ_0(r2)) return ip;

                // In case of equal circles return one leftmost point
                if (Flatten.Utils.EQ_0(vec.x) && Flatten.Utils.EQ_0(vec.y) && Flatten.Utils.EQ(r1, r2)) {
                    ip.push(circle1.pc.translate(-r1, 0));
                    return ip;
                }

                var dist = circle1.pc.distanceTo(circle2.pc)[0];

                if (Flatten.Utils.GT(dist, r1 + r2)) // circles too far, no intersections
                    return ip;

                if (Flatten.Utils.LT(dist, Math.abs(r1 - r2))) // one circle is contained within another, no intersections
                    return ip;

                // Normalize vector.
                vec.x /= dist;
                vec.y /= dist;

                var pt = void 0;

                // Case of touching from outside or from inside - single intersection point
                // TODO: check this specifically not sure if correct
                if (Flatten.Utils.EQ(dist, r1 + r2) || Flatten.Utils.EQ(dist, Math.abs(r1 - r2))) {
                    pt = circle1.pc.translate(r1 * vec.x, r1 * vec.y);
                    ip.push(pt);
                    return ip;
                }

                // Case of two intersection points

                // Distance from first center to center of common chord:
                //   a = (r1^2 - r2^2 + d^2) / 2d
                // Separate for better accuracy
                var a = r1 * r1 / (2 * dist) - r2 * r2 / (2 * dist) + dist / 2;

                var mid_pt = circle1.pc.translate(a * vec.x, a * vec.y);
                var h = Math.sqrt(r1 * r1 - a * a);
                // let norm;

                // norm = vec.rotate90CCW().multiply(h);
                pt = mid_pt.translate(vec.rotate90CCW().multiply(h));
                ip.push(pt);

                // norm = vec.rotate90CW();
                pt = mid_pt.translate(vec.rotate90CW().multiply(h));
                ip.push(pt);

                return ip;
            }
        }]);

        return Circle;
    }();

    /**
     * Shortcut to create new circle
     * @param args
     */
    Flatten.circle = function () {
        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
        }

        return new (Function.prototype.bind.apply(Flatten.Circle, [null].concat(args)))();
    };
};

/***/ }),

/***/ "./classes/edge.js":
/*!*************************!*\
  !*** ./classes/edge.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by Alex Bol on 3/17/2017.
 */

module.exports = function (Flatten) {
    /**
     * Class representing an edge of polygon. Edge shape may be Segment or Arc.
     * Each edge contains references to the next and previous edges in the face of the polygon.
     *
     * @type {Edge}
     */
    Flatten.Edge = function () {
        /**
         * Construct new instance of edge
         * @param {Shape} shape Shape of type Segment of Arc
         */
        function Edge(shape) {
            _classCallCheck(this, Edge);

            /**
             * Shape of the edge: Segment or Arc
             */
            this.shape = shape;
            /**
             * Pointer to the next edge in the face
             */
            this.next;
            /**
             * Pointer to the previous edge in the face
             */
            this.prev;
            /**
             * Pointer to the face containing this edge
             * @type {Face}
             */
            this.face;
            /**
             * "Arc distance" from the face start
             * @type {number}
             */
            this.arc_length = 0;
            /**
             * Start inclusion flag (inside/outside/boundary)
             * @type {Boolean}
             */
            this.bvStart = undefined;
            /**
             * End inclusion flag (inside/outside/boundary)
             * @type {Boolean}
             */
            this.bvEnd = undefined;
            /**
             * Edge inclusion flag (Flatten.INSIDE, Flatten.OUTSIDE, Flatten.BOUNDARY)
             * @type {*}
             */
            this.bv = undefined;
            /**
             * Overlap flag for boundary edge (Flatten.OVERLAP_SAME/Flatten.OVERLAP_OPPOSITE)
             * @type {*}
             */
            this.overlap = undefined;
        }

        /**
         * Get edge start point
         */


        _createClass(Edge, [{
            key: "isSegment",
            value: function isSegment() {
                return this.shape instanceof Flatten.Segment;
            }
        }, {
            key: "isArc",
            value: function isArc() {
                return this.shape instanceof Flatten.Arc;
            }
            /**
             * Get middle point of the edge
             * @returns {Point}
             */

        }, {
            key: "middle",
            value: function middle() {
                return this.shape.middle();
            }

            /**
             * Returns true if point belongs to the edge, false otherwise
             * @param {Point} pt - test point
             */

        }, {
            key: "contains",
            value: function contains(pt) {
                return this.shape.contains(pt);
            }

            /**
             * Set inclusion flag of the edge with respect to another polygon
             * Inclusion flag is one of Flatten.INSIDE, Flatten.OUTSIDE, Flatten.BOUNDARY
             * @param polygon
             */

        }, {
            key: "setInclusion",
            value: function setInclusion(polygon) {
                if (this.bv !== undefined) return this.bv;

                if (this.bvStart === undefined) {
                    this.bvStart = Flatten.ray_shoot(polygon, this.start);
                }
                if (this.bvEnd === undefined) {
                    this.bvEnd = Flatten.ray_shoot(polygon, this.end);
                }
                /* At least one end outside - the whole edge outside */
                if (this.bvStart === Flatten.OUTSIDE || this.bvEnd == Flatten.OUTSIDE) {
                    this.bv = Flatten.OUTSIDE;
                }
                /* At least one end inside - the whole edge inside */
                else if (this.bvStart === Flatten.INSIDE || this.bvEnd == Flatten.INSIDE) {
                        this.bv = Flatten.INSIDE;
                    }
                    /* Both are boundary - check the middle point */
                    else {
                            var bvMiddle = Flatten.ray_shoot(polygon, this.middle());
                            this.bv = bvMiddle;
                        }
                return this.bv;
            }

            /**
             * Set overlapping between two coincident boundary edges
             * Overlapping flag is one of Flatten.OVERLAP_SAME or Flatten.OVERLAP_OPPOSITE
             * @param edge
             */

        }, {
            key: "setOverlap",
            value: function setOverlap(edge) {
                var flag = undefined;
                var shape1 = this.shape;
                var shape2 = edge.shape;

                if (shape1 instanceof Flatten.Segment && shape2 instanceof Flatten.Segment) {
                    if (shape1.start.equalTo(shape2.start) && shape1.end.equalTo(shape2.end)) {
                        flag = Flatten.OVERLAP_SAME;
                    } else if (shape1.start.equalTo(shape2.end) && shape1.end.equalTo(shape2.start)) {
                        flag = Flatten.OVERLAP_OPPOSITE;
                    }
                } else if (shape1 instanceof Flatten.Arc && shape2 instanceof Flatten.Arc) {
                    if (shape1.start.equalTo(shape2.start) && shape1.end.equalTo(shape2.end) && /*shape1.counterClockwise === shape2.counterClockwise &&*/
                    shape1.middle().equalTo(shape2.middle())) {
                        flag = Flatten.OVERLAP_SAME;
                    } else if (shape1.start.equalTo(shape2.end) && shape1.end.equalTo(shape2.start) && /*shape1.counterClockwise !== shape2.counterClockwise &&*/
                    shape1.middle().equalTo(shape2.middle())) {
                        flag = Flatten.OVERLAP_OPPOSITE;
                    }
                } else if (shape1 instanceof Flatten.Segment && shape2 instanceof Flatten.Arc || shape1 instanceof Flatten.Arc && shape2 instanceof Flatten.Segment) {
                    if (shape1.start.equalTo(shape2.start) && shape1.end.equalTo(shape2.end) && shape1.middle().equalTo(shape2.middle())) {
                        flag = Flatten.OVERLAP_SAME;
                    } else if (shape1.start.equalTo(shape2.end) && shape1.end.equalTo(shape2.start) && shape1.middle().equalTo(shape2.middle())) {
                        flag = Flatten.OVERLAP_OPPOSITE;
                    }
                }

                /* Do not update overlap flag if already set on previous chain */
                if (this.overlap === undefined) this.overlap = flag;
                if (edge.overlap === undefined) edge.overlap = flag;
            }
        }, {
            key: "svg",
            value: function svg() {
                if (this.shape instanceof Flatten.Segment) {
                    return " L" + this.shape.end.x + "," + this.shape.end.y;
                } else if (this.shape instanceof Flatten.Arc) {
                    var arc = this.shape;
                    var largeArcFlag = void 0;
                    var sweepFlag = arc.counterClockwise ? "1" : "0";

                    // Draw full circe arc as special case: split it into two half-circles
                    if (Flatten.Utils.EQ(arc.sweep, 2 * Math.PI)) {
                        var sign = arc.counterClockwise ? 1 : -1;
                        var halfArc1 = new Flatten.Arc(arc.pc, arc.r, arc.startAngle, arc.startAngle + sign * Math.PI, arc.counterClockwise);
                        var halfArc2 = new Flatten.Arc(arc.pc, arc.r, arc.startAngle + sign * Math.PI, arc.endAngle, arc.counterClockwise);

                        largeArcFlag = "0";

                        return " A" + halfArc1.r + "," + halfArc1.r + " 0 " + largeArcFlag + "," + sweepFlag + " " + halfArc1.end.x + "," + halfArc1.end.y + "\n                    A" + halfArc2.r + "," + halfArc2.r + " 0 " + largeArcFlag + "," + sweepFlag + " " + halfArc2.end.x + "," + halfArc2.end.y;
                    } else {
                        largeArcFlag = arc.sweep <= Math.PI ? "0" : "1";

                        return " A" + arc.r + "," + arc.r + " 0 " + largeArcFlag + "," + sweepFlag + " " + arc.end.x + "," + arc.end.y;
                    }
                }
            }
        }, {
            key: "toJSON",
            value: function toJSON() {
                return this.shape.toJSON();
            }
        }, {
            key: "start",
            get: function get() {
                return this.shape.start;
            }

            /**
             * Get edge end point
             */

        }, {
            key: "end",
            get: function get() {
                return this.shape.end;
            }

            /**
             * Get edge length
             */

        }, {
            key: "length",
            get: function get() {
                return this.shape.length;
            }

            /**
             * Get bounding box of the edge
             * @returns {Box}
             */

        }, {
            key: "box",
            get: function get() {
                return this.shape.box;
            }
        }]);

        return Edge;
    }();
};

/***/ }),

/***/ "./classes/face.js":
/*!*************************!*\
  !*** ./classes/face.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Created by Alex Bol on 3/17/2017.
 */



var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

module.exports = function (Flatten) {
    var Point = Flatten.Point,
        point = Flatten.point,
        Segment = Flatten.Segment,
        segment = Flatten.segment,
        Arc = Flatten.Arc,
        Box = Flatten.Box,
        Edge = Flatten.Edge,
        Circle = Flatten.Circle;

    /**
     * Class representing a face (closed loop) in a [polygon]{@link Flatten.Polygon} object.
     * Face is a circular bidirectional linked list of [edges]{@link Flatten.Edge}.
     * Face object cannot be instantiated with a constructor.
     * Instead, use [polygon.addFace()]{@link Flatten.Polygon#addFace} method.
     * <br/>
     * Note, that face only set entry point to the linked list of edges but does not contain edges by itself.
     * Container of edges is a property of the polygon object. <br/>
     *
     * @example
     * // Face implements "next" iterator which enables to iterate edges in for loop:
     * for (let edge of face) {
     *      console.log(edge.shape.length)     // do something
     * }
     *
     * // Instead, it is possible to iterate edges as linked list, starting from face.first:
     * let edge = face.first;
     * do {
     *   console.log(edge.shape.length);   // do something
     *   edge = edge.next;
     * } while (edge != face.first)
     */

    Flatten.Face = function () {
        function Face(polygon) {
            _classCallCheck(this, Face);

            /**
             * Reference to the first edge in face
             */
            this.first;
            /**
             * Reference to the last edge in face
             */
            this.last;

            this._box = undefined; // new Box();
            this._orientation = undefined;

            for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                args[_key - 1] = arguments[_key];
            }

            if (args.length == 0) {
                return;
            }

            /* If passed an array it supposed to be:
             1) array of shapes that performs close loop or
             2) array of points that performs set of vertices
             */
            if (args.length == 1) {
                if (args[0] instanceof Array) {
                    // let argsArray = args[0];
                    var shapes = args[0]; // argsArray[0];
                    if (shapes.length == 0) return;

                    if (shapes.every(function (shape) {
                        return shape instanceof Point;
                    })) {
                        var segments = Face.points2segments(shapes);
                        this.shapes2face(polygon.edges, segments);
                    } else if (shapes.every(function (shape) {
                        return shape instanceof Segment || shape instanceof Arc;
                    })) {
                        this.shapes2face(polygon.edges, shapes);
                    }
                    // this is from JSON.parse object
                    else if (shapes.every(function (shape) {
                            return shape.name === "segment" || shape.name === "arc";
                        })) {
                            var flattenShapes = [];
                            var _iteratorNormalCompletion = true;
                            var _didIteratorError = false;
                            var _iteratorError = undefined;

                            try {
                                for (var _iterator = shapes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                                    var shape = _step.value;

                                    var flattenShape = void 0;
                                    if (shape.name === "segment") {
                                        flattenShape = new Segment(shape);
                                    } else {
                                        flattenShape = new Arc(shape);
                                    }
                                    flattenShapes.push(flattenShape);
                                }
                            } catch (err) {
                                _didIteratorError = true;
                                _iteratorError = err;
                            } finally {
                                try {
                                    if (!_iteratorNormalCompletion && _iterator.return) {
                                        _iterator.return();
                                    }
                                } finally {
                                    if (_didIteratorError) {
                                        throw _iteratorError;
                                    }
                                }
                            }

                            this.shapes2face(polygon.edges, flattenShapes);
                        }
                }
                /* Create new face and copy edges into polygon.edges set */
                else if (args[0] instanceof Face) {
                        var face = args[0];
                        this.first = face.first;
                        this.last = face.last;
                        var _iteratorNormalCompletion2 = true;
                        var _didIteratorError2 = false;
                        var _iteratorError2 = undefined;

                        try {
                            for (var _iterator2 = face[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                                var edge = _step2.value;

                                polygon.edges.add(edge);
                            }
                        } catch (err) {
                            _didIteratorError2 = true;
                            _iteratorError2 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                                    _iterator2.return();
                                }
                            } finally {
                                if (_didIteratorError2) {
                                    throw _iteratorError2;
                                }
                            }
                        }
                    }
                    /* Instantiate face from circle circle in CCW orientation */
                    else if (args[0] instanceof Circle) {
                            this.shapes2face(polygon.edges, [args[0].toArc(Flatten.CCW)]);
                        }
                        /* Instantiate face from a box in CCW orientation */
                        else if (args[0] instanceof Box) {
                                var box = args[0];
                                this.shapes2face(polygon.edges, [segment(point(box.xmin, box.ymin), point(box.xmax, box.ymin)), segment(point(box.xmax, box.ymin), point(box.xmax, box.ymax)), segment(point(box.xmax, box.ymax), point(box.xmin, box.ymax)), segment(point(box.xmin, box.ymax), point(box.xmin, box.ymin))]);
                            }
            }
            /* If passed two edges, consider them as start and end of the face loop */
            /* THIS METHOD WILL BE USED BY BOOLEAN OPERATIONS */
            /* Assume that edges already copied to polygon.edges set in the clip algorithm !!! */
            if (args.length == 2 && args[0] instanceof Edge && args[1] instanceof Edge) {
                this.first = args[0]; // first edge in face or undefined
                this.last = args[1]; // last edge in face or undefined
                this.last.next = this.first;
                this.first.prev = this.last;

                // set arc length
                this.setArcLength();
                /*
                 let edge = this.first;
                 edge.arc_length = 0;
                 edge = edge.next;
                 while (edge !== this.first) {
                 edge.arc_length = edge.prev.arc_length + edge.prev.length;
                 edge = edge.next;
                 }
                 */

                // this.box = this.getBox();
                // this.orientation = this.getOrientation();      // face direction cw or ccw
            }
        }

        _createClass(Face, [{
            key: Symbol.iterator,
            value: function value() {
                var _this = this;

                var edge = undefined;
                return {
                    next: function next() {
                        var value = edge ? edge : _this.first;
                        var done = _this.first ? edge ? edge === _this.first : false : true;
                        edge = value ? value.next : undefined;
                        return { value: value, done: done };
                    }
                };
            }
        }, {
            key: "shapes2face",
            value: function shapes2face(edges, shapes) {
                var _iteratorNormalCompletion3 = true;
                var _didIteratorError3 = false;
                var _iteratorError3 = undefined;

                try {
                    for (var _iterator3 = shapes[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                        var shape = _step3.value;

                        var edge = new Edge(shape);
                        this.append(edges, edge);
                        // this.box = this.box.merge(shape.box);
                        // edges.add(edge);
                    }
                    // this.orientation = this.getOrientation();              // face direction cw or ccw
                } catch (err) {
                    _didIteratorError3 = true;
                    _iteratorError3 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion3 && _iterator3.return) {
                            _iterator3.return();
                        }
                    } finally {
                        if (_didIteratorError3) {
                            throw _iteratorError3;
                        }
                    }
                }
            }

            /**
             * Returns true if face is empty, false otherwise
             * @returns {boolean}
             */

        }, {
            key: "isEmpty",
            value: function isEmpty() {
                return this.first === undefined && this.last === undefined;
            }

            /**
             * Append given edge after the last edge (and before the first edge). <br/>
             * This method mutates current object and does not return any value
             * @param {PlanarSet} edges - Container of edges
             * @param {Edge} edge - Edge to be appended to the linked list
             */

        }, {
            key: "append",
            value: function append(edges, edge) {
                if (this.first === undefined) {
                    edge.prev = edge;
                    edge.next = edge;
                    this.first = edge;
                    this.last = edge;
                    edge.arc_length = 0;
                } else {
                    // append to end
                    edge.prev = this.last;
                    this.last.next = edge;

                    // update edge to be last
                    this.last = edge;

                    // restore circular links
                    this.last.next = this.first;
                    this.first.prev = this.last;

                    // set arc length
                    edge.arc_length = edge.prev.arc_length + edge.prev.length;
                }
                edge.face = this;

                edges.add(edge); // Add new edges into edges container
            }

            /**
             * Insert edge newEdge into the linked list after the edge edgeBefore <br/>
             * This method mutates current object and does not return any value
             * @param {PlanarSet} edges - Container of edges
             * @param {Edge} newEdge - Edge to be inserted into linked list
             * @param {Edge} edgeBefore - Edge to insert newEdge after it
             */

        }, {
            key: "insert",
            value: function insert(edges, newEdge, edgeBefore) {
                if (this.first === undefined) {
                    newEdge.prev = newEdge;
                    newEdge.next = newEdge;
                    this.first = newEdge;
                    this.last = newEdge;
                } else {
                    /* set links to new edge */
                    var edgeAfter = edgeBefore.next;
                    edgeBefore.next = newEdge;
                    edgeAfter.prev = newEdge;

                    /* set links from new edge */
                    newEdge.prev = edgeBefore;
                    newEdge.next = edgeAfter;

                    /* extend chain if new edge added after last edge */
                    if (this.last === edgeBefore) this.first = newEdge;
                }
                newEdge.face = this;

                // set arc length
                if (newEdge.prev === this.last) {
                    newEdge.arc_length = 0;
                } else {
                    newEdge.arc_length = newEdge.prev.arc_length + newEdge.prev.length;
                }

                edges.add(newEdge); // Add new edges into edges container
            }

            /**
             * Remove the given edge from the linked list of the face <br/>
             * This method mutates current object and does not return any value
             * @param {PlanarSet} edges - Container of edges
             * @param {Edge} edge - Edge to be removed
             */

        }, {
            key: "remove",
            value: function remove(edges, edge) {
                // special case if last edge removed
                if (edge === this.first && edge === this.last) {
                    this.first = undefined;
                    this.last = undefined;
                } else {
                    // update linked list
                    edge.prev.next = edge.next;
                    edge.next.prev = edge.prev;
                    // update first if need
                    if (edge === this.first) {
                        this.first = edge.next;
                    }
                    // update last if need
                    if (edge === this.last) {
                        this.last = edge.prev;
                    }
                }
                edges.delete(edge); // delete from PlanarSet of edges and update index
            }

            /**
             * Reverse orientation of the face: first edge become last and vice a verse,
             * all edges starts and ends swapped, direction of arcs inverted.
             */

        }, {
            key: "reverse",
            value: function reverse() {
                // collect edges in revert order with reverted shapes
                var edges = [];
                var edge_tmp = this.last;
                do {
                    // reverse shape
                    edge_tmp.shape = edge_tmp.shape.reverse();
                    edges.push(edge_tmp);
                    edge_tmp = edge_tmp.prev;
                } while (edge_tmp !== this.last);

                // restore linked list
                this.first = undefined;
                this.last = undefined;
                var _iteratorNormalCompletion4 = true;
                var _didIteratorError4 = false;
                var _iteratorError4 = undefined;

                try {
                    for (var _iterator4 = edges[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                        var edge = _step4.value;

                        if (this.first === undefined) {
                            edge.prev = edge;
                            edge.next = edge;
                            this.first = edge;
                            this.last = edge;
                            edge.arc_length = 0;
                        } else {
                            // append to end
                            edge.prev = this.last;
                            this.last.next = edge;

                            // update edge to be last
                            this.last = edge;

                            // restore circular links
                            this.last.next = this.first;
                            this.first.prev = this.last;

                            // set arc length
                            edge.arc_length = edge.prev.arc_length + edge.prev.length;
                        }
                    }

                    // Recalculate orientation, if set
                } catch (err) {
                    _didIteratorError4 = true;
                    _iteratorError4 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion4 && _iterator4.return) {
                            _iterator4.return();
                        }
                    } finally {
                        if (_didIteratorError4) {
                            throw _iteratorError4;
                        }
                    }
                }

                if (this._orientation !== undefined) {
                    this._orientation = undefined;
                    this._orientation = this.orientation();
                }
            }

            /**
             * Set arc_length property for each of the edges in the face.
             * Arc_length of the edge it the arc length from the first edge of the face
             */

        }, {
            key: "setArcLength",
            value: function setArcLength() {
                var _iteratorNormalCompletion5 = true;
                var _didIteratorError5 = false;
                var _iteratorError5 = undefined;

                try {
                    for (var _iterator5 = this[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                        var edge = _step5.value;

                        if (edge === this.first) {
                            edge.arc_length = 0.0;
                        } else {
                            edge.arc_length = edge.prev.arc_length + edge.prev.length;
                        }
                        edge.face = this;
                    }
                } catch (err) {
                    _didIteratorError5 = true;
                    _iteratorError5 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion5 && _iterator5.return) {
                            _iterator5.return();
                        }
                    } finally {
                        if (_didIteratorError5) {
                            throw _iteratorError5;
                        }
                    }
                }
            }

            /**
             * Returns the absolute value of the area of the face
             * @returns {number}
             */

        }, {
            key: "area",
            value: function area() {
                return Math.abs(this.signedArea());
            }

            /**
             * Returns signed area of the simple face.
             * Face is simple if it has no self intersections that change its orientation.
             * Then the area will be positive if the orientation of the face is clockwise,
             * and negative if orientation is counterclockwise.
             * It may be zero if polygon is degenerated.
             * @returns {number}
             */

        }, {
            key: "signedArea",
            value: function signedArea() {
                var sArea = 0;
                var ymin = this.box.ymin;
                var _iteratorNormalCompletion6 = true;
                var _didIteratorError6 = false;
                var _iteratorError6 = undefined;

                try {
                    for (var _iterator6 = this[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                        var edge = _step6.value;

                        sArea += edge.shape.definiteIntegral(ymin);
                    }
                } catch (err) {
                    _didIteratorError6 = true;
                    _iteratorError6 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion6 && _iterator6.return) {
                            _iterator6.return();
                        }
                    } finally {
                        if (_didIteratorError6) {
                            throw _iteratorError6;
                        }
                    }
                }

                return sArea;
            }

            /**
             * Return face orientation: one of Flatten.ORIENTATION.CCW, Flatten.ORIENTATION.CW, Flatten.ORIENTATION.NOT_ORIENTABLE <br/>
             * According to Green theorem the area of a closed curve may be calculated as double integral,
             * and the sign of the integral will be defined by the direction of the curve.
             * When the integral ("signed area") will be negative, direction is counter clockwise,
             * when positive - clockwise and when it is zero, polygon is not orientable.
             * See {@link https://mathinsight.org/greens_theorem_find_area}
             * @returns {number}
             */

        }, {
            key: "orientation",
            value: function orientation() {
                if (this._orientation === undefined) {
                    var area = this.signedArea();
                    if (Flatten.Utils.EQ_0(area)) {
                        this._orientation = Flatten.ORIENTATION.NOT_ORIENTABLE;
                    } else if (Flatten.Utils.LT(area, 0)) {
                        this._orientation = Flatten.ORIENTATION.CCW;
                    } else {
                        this._orientation = Flatten.ORIENTATION.CW;
                    }
                }
                return this._orientation;
            }

            /**
             * Returns true if face of the polygon is simple (no self-intersection points found)
             * NOTE: this method is incomplete because it doe not exclude touching points
             * Real self intersection inverts orientation of the polygon.
             * But this is also good enough for the demonstration of the idea
             * @param {Edges} edges - reference to polygon.edges to provide search index
             * @returns {boolean}
             */

        }, {
            key: "isSimple",
            value: function isSimple(edges) {
                var ip = Face.getSelfIntersections(this, edges, true);
                return ip.length == 0;
            }
        }, {
            key: "toJSON",
            value: function toJSON() {
                return this.edges.map(function (edge) {
                    return edge.toJSON();
                });
            }

            /**
             * Returns string to be assigned to "d" attribute inside defined "path"
             * @returns {string}
             */

        }, {
            key: "svg",
            value: function svg() {
                var svgStr = "\nM" + this.first.start.x + "," + this.first.start.y;
                var _iteratorNormalCompletion7 = true;
                var _didIteratorError7 = false;
                var _iteratorError7 = undefined;

                try {
                    for (var _iterator7 = this[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
                        var edge = _step7.value;

                        svgStr += edge.svg();
                    }
                } catch (err) {
                    _didIteratorError7 = true;
                    _iteratorError7 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion7 && _iterator7.return) {
                            _iterator7.return();
                        }
                    } finally {
                        if (_didIteratorError7) {
                            throw _iteratorError7;
                        }
                    }
                }

                svgStr += " z";
                return svgStr;
            }
        }, {
            key: "edges",


            /**
             * Return array of edges from first to last
             * @returns {Array}
             */
            get: function get() {
                var face_edges = [];
                var _iteratorNormalCompletion8 = true;
                var _didIteratorError8 = false;
                var _iteratorError8 = undefined;

                try {
                    for (var _iterator8 = this[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
                        var edge = _step8.value;

                        face_edges.push(edge);
                    }
                } catch (err) {
                    _didIteratorError8 = true;
                    _iteratorError8 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion8 && _iterator8.return) {
                            _iterator8.return();
                        }
                    } finally {
                        if (_didIteratorError8) {
                            throw _iteratorError8;
                        }
                    }
                }

                return face_edges;
            }

            /**
             * Return number of edges in the face
             * @returns {number}
             */

        }, {
            key: "size",
            get: function get() {
                var counter = 0;
                var _iteratorNormalCompletion9 = true;
                var _didIteratorError9 = false;
                var _iteratorError9 = undefined;

                try {
                    for (var _iterator9 = this[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
                        var edge = _step9.value;

                        counter++;
                    }
                } catch (err) {
                    _didIteratorError9 = true;
                    _iteratorError9 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion9 && _iterator9.return) {
                            _iterator9.return();
                        }
                    } finally {
                        if (_didIteratorError9) {
                            throw _iteratorError9;
                        }
                    }
                }

                return counter;
            }

            /**
             * Return bounding box of the face
             * @returns {Box}
             */

        }, {
            key: "box",
            get: function get() {
                if (this._box === undefined) {
                    var box = new Flatten.Box();
                    var _iteratorNormalCompletion10 = true;
                    var _didIteratorError10 = false;
                    var _iteratorError10 = undefined;

                    try {
                        for (var _iterator10 = this[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
                            var edge = _step10.value;

                            box = box.merge(edge.box);
                        }
                    } catch (err) {
                        _didIteratorError10 = true;
                        _iteratorError10 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion10 && _iterator10.return) {
                                _iterator10.return();
                            }
                        } finally {
                            if (_didIteratorError10) {
                                throw _iteratorError10;
                            }
                        }
                    }

                    this._box = box;
                }
                return this._box;
            }
        }], [{
            key: "points2segments",
            value: function points2segments(points) {
                var segments = [];
                for (var i = 0; i < points.length; i++) {
                    segments.push(new Segment(points[i], points[(i + 1) % points.length]));
                }
                return segments;
            }
        }, {
            key: "getSelfIntersections",
            value: function getSelfIntersections(face, edges) {
                var exitOnFirst = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

                var int_points = [];

                // calculate intersections
                var _iteratorNormalCompletion11 = true;
                var _didIteratorError11 = false;
                var _iteratorError11 = undefined;

                try {
                    for (var _iterator11 = face[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
                        var edge1 = _step11.value;


                        // request edges of polygon in the box of edge1
                        var resp = edges.search(edge1.box);

                        // for each edge2 in response
                        var _iteratorNormalCompletion12 = true;
                        var _didIteratorError12 = false;
                        var _iteratorError12 = undefined;

                        try {
                            for (var _iterator12 = resp[Symbol.iterator](), _step12; !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
                                var edge2 = _step12.value;


                                // Skip itself
                                if (edge1 === edge2) continue;

                                // Skip next and previous edge if both are segment (if one of them arc - calc intersection)
                                if (edge1.shape instanceof Flatten.Segment && edge2.shape instanceof Flatten.Segment && (edge1.next === edge2 || edge1.prev === edge2)) continue;

                                // calculate intersections between edge1 and edge2
                                var ip = edge1.shape.intersect(edge2.shape);

                                // for each intersection point
                                var _iteratorNormalCompletion13 = true;
                                var _didIteratorError13 = false;
                                var _iteratorError13 = undefined;

                                try {
                                    for (var _iterator13 = ip[Symbol.iterator](), _step13; !(_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done); _iteratorNormalCompletion13 = true) {
                                        var pt = _step13.value;


                                        // skip start-end connections
                                        if (pt.equalTo(edge1.start) && pt.equalTo(edge2.end) && edge2 === edge1.prev) continue;
                                        if (pt.equalTo(edge1.end) && pt.equalTo(edge2.start) && edge2 === edge1.next) continue;

                                        int_points.push(pt);

                                        if (exitOnFirst) break;
                                    }
                                } catch (err) {
                                    _didIteratorError13 = true;
                                    _iteratorError13 = err;
                                } finally {
                                    try {
                                        if (!_iteratorNormalCompletion13 && _iterator13.return) {
                                            _iterator13.return();
                                        }
                                    } finally {
                                        if (_didIteratorError13) {
                                            throw _iteratorError13;
                                        }
                                    }
                                }

                                if (int_points.length > 0 && exitOnFirst) break;
                            }
                        } catch (err) {
                            _didIteratorError12 = true;
                            _iteratorError12 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion12 && _iterator12.return) {
                                    _iterator12.return();
                                }
                            } finally {
                                if (_didIteratorError12) {
                                    throw _iteratorError12;
                                }
                            }
                        }

                        if (int_points.length > 0 && exitOnFirst) break;
                    }
                } catch (err) {
                    _didIteratorError11 = true;
                    _iteratorError11 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion11 && _iterator11.return) {
                            _iterator11.return();
                        }
                    } finally {
                        if (_didIteratorError11) {
                            throw _iteratorError11;
                        }
                    }
                }

                return int_points;
            }
        }]);

        return Face;
    }();
};

/***/ }),

/***/ "./classes/line.js":
/*!*************************!*\
  !*** ./classes/line.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Created by Alex Bol on 2/20/2017.
 */


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

module.exports = function (Flatten) {
    /**
     * Class representing a line
     * @type {Line}
     */
    Flatten.Line = function () {
        /**
         * Line may be constructed by point and normal vector or by two points that a line passes through
         * @param {Point} pt - point that a line passes through
         * @param {Vector|Point} norm - normal vector to a line or second point a line passes through
         */
        function Line() {
            _classCallCheck(this, Line);

            /**
             * Point a line passes through
             * @type {Point}
             */
            this.pt = new Flatten.Point();
            /**
             * Normal vector to a line <br/>
             * Vector is normalized (length == 1)
             * @type {Vector}
             */
            this.norm = new Flatten.Vector(0, 1);

            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            if (args.length == 0) {
                return;
            }

            if (args.length == 1 && args[0] instanceof Object && args[0].name === "line") {
                var _args$ = args[0],
                    pt = _args$.pt,
                    norm = _args$.norm;

                this.pt = new Flatten.Point(pt);
                this.norm = new Flatten.Vector(norm);
                return;
            }

            if (args.length == 2) {
                var a1 = args[0];
                var a2 = args[1];

                if (a1 instanceof Flatten.Point && a2 instanceof Flatten.Point) {
                    this.pt = a1;
                    this.norm = Line.points2norm(a1, a2);
                    return;
                }

                if (a1 instanceof Flatten.Point && a2 instanceof Flatten.Vector) {
                    if (Flatten.Utils.EQ_0(a2.x) && Flatten.Utils.EQ_0(a2.y)) {
                        throw Flatten.Errors.ILLEGAL_PARAMETERS;
                    }
                    this.pt = a1.clone();
                    this.norm = a2.clone();
                    this.norm = this.norm.normalize();
                    return;
                }

                if (a1 instanceof Flatten.Vector && a2 instanceof Flatten.Point) {
                    if (Flatten.Utils.EQ_0(a1.x) && Flatten.Utils.EQ_0(a1.y)) {
                        throw Flatten.Errors.ILLEGAL_PARAMETERS;
                    }
                    this.pt = a2.clone();
                    this.norm = a1.clone();
                    this.norm = this.norm.normalize();
                    return;
                }
            }

            throw Flatten.Errors.ILLEGAL_PARAMETERS;
        }

        /**
         * Returns cloned new instance of a line
         * @returns {Line}
         */


        _createClass(Line, [{
            key: "clone",
            value: function clone() {
                return new Flatten.Line(this.pt, this.norm);
            }

            /**
             * Slope of the line - angle in radians between line and axe x from 0 to 2PI
             * @returns {number} - slope of the line
             */

        }, {
            key: "parallelTo",


            /**
             * Return true if parallel or incident to other line
             * @param {Line} other_line - line to check
             * @returns {boolean}
             */
            value: function parallelTo(other_line) {
                return Flatten.Utils.EQ_0(this.norm.cross(other_line.norm));
            }

            /**
             * Returns true if incident to other line
             * @param {Line} other_line - line to check
             * @returns {boolean}
             */

        }, {
            key: "incidentTo",
            value: function incidentTo(other_line) {
                return this.parallelTo(other_line) && this.pt.on(other_line);
            }

            /**
             * Returns true if point belongs to line
             * @param {Point} pt Query point
             * @returns {boolean}
             */

        }, {
            key: "contains",
            value: function contains(pt) {
                if (this.pt.equalTo(pt)) {
                    return true;
                }
                /* Line contains point if vector to point is orthogonal to the line normal vector */
                var vec = new Flatten.Vector(this.pt, pt);
                return Flatten.Utils.EQ_0(this.norm.dot(vec));
            }

            /**
             * Returns array of intersection points
             * @param {Shape} shape - shape to intersect with
             * @returns {Point[]}
             */

        }, {
            key: "intersect",
            value: function intersect(shape) {
                if (shape instanceof Flatten.Point) {
                    return this.contains(shape) ? [shape] : [];
                }

                if (shape instanceof Flatten.Line) {
                    return Line.intersectLine2Line(this, shape);
                }

                if (shape instanceof Flatten.Circle) {
                    return Line.intersectLine2Circle(this, shape);
                }

                if (shape instanceof Flatten.Segment) {
                    return shape.intersect(this);
                }

                if (shape instanceof Flatten.Arc) {
                    return Line.intersectLine2Arc(this, shape);
                }

                if (shape instanceof Flatten.Polygon) {
                    return Flatten.Polygon.intersectLine2Polygon(this, shape);
                }
            }

            /**
             * Calculate distance and shortest segment from line to shape and returns array [distance, shortest_segment]
             * @param {Shape} shape Shape of the one of the types Point, Circle, Segment, Arc, Polygon
             * @returns {Number}
             * @returns {Segment}
             */

        }, {
            key: "distanceTo",
            value: function distanceTo(shape) {
                var Distance = Flatten.Distance;


                if (shape instanceof Flatten.Point) {
                    var _Distance$point2line = Distance.point2line(shape, this),
                        _Distance$point2line2 = _slicedToArray(_Distance$point2line, 2),
                        distance = _Distance$point2line2[0],
                        shortest_segment = _Distance$point2line2[1];

                    shortest_segment = shortest_segment.reverse();
                    return [distance, shortest_segment];
                }

                if (shape instanceof Flatten.Circle) {
                    var _Distance$circle2line = Distance.circle2line(shape, this),
                        _Distance$circle2line2 = _slicedToArray(_Distance$circle2line, 2),
                        _distance = _Distance$circle2line2[0],
                        _shortest_segment = _Distance$circle2line2[1];

                    _shortest_segment = _shortest_segment.reverse();
                    return [_distance, _shortest_segment];
                }

                if (shape instanceof Flatten.Segment) {
                    var _Distance$segment2lin = Distance.segment2line(shape, this),
                        _Distance$segment2lin2 = _slicedToArray(_Distance$segment2lin, 2),
                        _distance2 = _Distance$segment2lin2[0],
                        _shortest_segment2 = _Distance$segment2lin2[1];

                    return [_distance2, _shortest_segment2.reverse()];
                }

                if (shape instanceof Flatten.Arc) {
                    var _Distance$arc2line = Distance.arc2line(shape, this),
                        _Distance$arc2line2 = _slicedToArray(_Distance$arc2line, 2),
                        _distance3 = _Distance$arc2line2[0],
                        _shortest_segment3 = _Distance$arc2line2[1];

                    return [_distance3, _shortest_segment3.reverse()];
                }

                if (shape instanceof Flatten.Polygon) {
                    var _Distance$shape2polyg = Distance.shape2polygon(this, shape),
                        _Distance$shape2polyg2 = _slicedToArray(_Distance$shape2polyg, 2),
                        _distance4 = _Distance$shape2polyg2[0],
                        _shortest_segment4 = _Distance$shape2polyg2[1];

                    return [_distance4, _shortest_segment4];
                }
            }

            /**
             * Return string to draw svg segment representing line inside given box
             * @param {Box} box Box representing drawing area
             * @param {Object} attrs - json structure with attributes of svg circle element
             */

        }, {
            key: "svg",
            value: function svg(box) {
                var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

                var ip = Line.intersectLine2Box(this, box);
                if (ip.length === 0) return "";
                var ps = ip[0];
                var pe = ip.length == 2 ? ip[1] : ip.find(function (pt) {
                    return !pt.equalTo(ps);
                });
                if (pe === undefined) pe = ps;
                var segment = new Flatten.Segment(ps, pe);
                return segment.svg(attrs);
            }

            /**
             * Returns JSON object. This method defines how data will be
             * serialized when called JSON.stringify method with this object
             * @returns {Object}
             */

        }, {
            key: "toJSON",
            value: function toJSON() {
                return Object.assign({}, this, { name: "line" });
            }
        }, {
            key: "slope",
            get: function get() {
                var vec = new Flatten.Vector(this.norm.y, -this.norm.x);
                return vec.slope;
            }

            /**
             * Get coefficients [A,B,C] of a standard line equation in the form Ax + By = C
             * @code [A, B, C] = line.standard
             * @returns {number[]} - array of coefficients
             */

        }, {
            key: "standard",
            get: function get() {
                var A = this.norm.x;
                var B = this.norm.y;
                var C = this.norm.dot(this.pt);

                return [A, B, C];
            }
        }], [{
            key: "points2norm",
            value: function points2norm(pt1, pt2) {
                if (pt1.equalTo(pt2)) {
                    throw Flatten.Errors.ILLEGAL_PARAMETERS;
                }
                var vec = new Flatten.Vector(pt1, pt2);
                var unit = vec.normalize();
                return unit.rotate90CCW();
            }
        }, {
            key: "intersectLine2Line",
            value: function intersectLine2Line(line1, line2) {
                var ip = [];

                var _line1$standard = _slicedToArray(line1.standard, 3),
                    A1 = _line1$standard[0],
                    B1 = _line1$standard[1],
                    C1 = _line1$standard[2];

                var _line2$standard = _slicedToArray(line2.standard, 3),
                    A2 = _line2$standard[0],
                    B2 = _line2$standard[1],
                    C2 = _line2$standard[2];

                /* Cramer's rule */


                var det = A1 * B2 - B1 * A2;
                var detX = C1 * B2 - B1 * C2;
                var detY = A1 * C2 - C1 * A2;

                if (!Flatten.Utils.EQ_0(det)) {
                    var new_ip = new Flatten.Point(detX / det, detY / det);
                    ip.push(new_ip);
                }
                return ip;
            }
        }, {
            key: "intersectLine2Circle",
            value: function intersectLine2Circle(line, circle) {
                var ip = [];
                var prj = circle.pc.projectionOn(line); // projection of circle center on line
                var dist = circle.pc.distanceTo(prj)[0]; // distance from circle center to projection

                if (Flatten.Utils.EQ(dist, circle.r)) {
                    // line tangent to circle - return single intersection point
                    ip.push(prj);
                } else if (Flatten.Utils.LT(dist, circle.r)) {
                    // return two intersection points
                    var delta = Math.sqrt(circle.r * circle.r - dist * dist);
                    var v_trans = void 0,
                        pt = void 0;

                    v_trans = line.norm.rotate90CCW().multiply(delta);
                    pt = prj.translate(v_trans);
                    ip.push(pt);

                    v_trans = line.norm.rotate90CW().multiply(delta);
                    pt = prj.translate(v_trans);
                    ip.push(pt);
                }
                return ip;
            }
        }, {
            key: "intersectLine2Box",
            value: function intersectLine2Box(line, box) {
                var pts = [new Flatten.Point(box.xmin, box.ymin), new Flatten.Point(box.xmax, box.ymin), new Flatten.Point(box.xmax, box.ymax), new Flatten.Point(box.xmin, box.ymax)];
                var segs = [new Flatten.Segment(pts[0], pts[1]), new Flatten.Segment(pts[1], pts[2]), new Flatten.Segment(pts[2], pts[3]), new Flatten.Segment(pts[3], pts[0])];

                var ips = [];

                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = segs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var seg = _step.value;

                        var ips_tmp = seg.intersect(line);
                        var _iteratorNormalCompletion2 = true;
                        var _didIteratorError2 = false;
                        var _iteratorError2 = undefined;

                        try {
                            for (var _iterator2 = ips_tmp[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                                var ip = _step2.value;

                                ips.push(ip);
                            }
                        } catch (err) {
                            _didIteratorError2 = true;
                            _iteratorError2 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                                    _iterator2.return();
                                }
                            } finally {
                                if (_didIteratorError2) {
                                    throw _iteratorError2;
                                }
                            }
                        }
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }

                ;
                return ips;
            }
        }, {
            key: "intersectLine2Arc",
            value: function intersectLine2Arc(line, arc) {
                var ip = [];

                if (Line.intersectLine2Box(line, arc.box).length == 0) {
                    return ip;
                }

                var circle = new Flatten.Circle(arc.pc, arc.r);
                var ip_tmp = line.intersect(circle);
                var _iteratorNormalCompletion3 = true;
                var _didIteratorError3 = false;
                var _iteratorError3 = undefined;

                try {
                    for (var _iterator3 = ip_tmp[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                        var pt = _step3.value;

                        if (pt.on(arc)) {
                            ip.push(pt);
                        }
                    }
                } catch (err) {
                    _didIteratorError3 = true;
                    _iteratorError3 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion3 && _iterator3.return) {
                            _iterator3.return();
                        }
                    } finally {
                        if (_didIteratorError3) {
                            throw _iteratorError3;
                        }
                    }
                }

                return ip;
            }
        }]);

        return Line;
    }();

    /**
     * Function to create line equivalent to "new" constructor
     * @param args
     */
    Flatten.line = function () {
        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
        }

        return new (Function.prototype.bind.apply(Flatten.Line, [null].concat(args)))();
    };
};

/***/ }),

/***/ "./classes/matrix.js":
/*!***************************!*\
  !*** ./classes/matrix.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

module.exports = function (Flatten) {
    /**
     * Class representing an affine transformation 3x3 matrix:
     * <pre>
     *      [ a  c  tx
     * A =    b  d  ty
     *        0  0  1  ]
     * </pre
     * @type {Matrix}
     */
    Flatten.Matrix = function () {
        /**
         * Construct new instance of affine transformation matrix <br/>
         * If parameters omitted, construct identity matrix a = 1, d = 1
         * @param {number} a - position(0,0)   sx*cos(alpha)
         * @param {number} b - position (0,1)  sx*sin(alpha)
         * @param {number} c - position (1,0)  -sy*sin(alpha)
         * @param {number} d - position (1,1)  sy*cos(alpha)
         * @param {number} tx - position (2,0) translation by x
         * @param {number} ty - position (2,1) translation by y
         */
        function Matrix() {
            var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
            var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            var c = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
            var d = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
            var tx = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
            var ty = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

            _classCallCheck(this, Matrix);

            this.a = a;
            this.b = b;
            this.c = c;
            this.d = d;
            this.tx = tx;
            this.ty = ty;
        }

        /**
         * Returns a clone of the Matrix instance.
         * @return {Matrix}
         **/


        _createClass(Matrix, [{
            key: "clone",
            value: function clone() {
                return new Matrix(this.a, this.b, this.c, this.d, this.tx, this.ty);
            }
        }, {
            key: "transform",


            /**
             * Transform vector [x,y] using transformation matrix. <br/>
             * Vector [x,y] is an abstract array[2] of numbers and not a FlattenJS object <br/>
             * The result is also an abstract vector [x',y'] = A * [x,y]:
             * <code>
             * [x'       [ ax + by + tx
             *  y'   =     cx + dy + ty
             *  1]                    1 ]
             * </code>
             * @param {number[]} vector - array[2] of numbers
             * @returns {number[]} transformation result - array[2] of numbers
             */
            value: function transform(vector) {
                return [vector[0] * this.a + vector[1] * this.c + this.tx, vector[0] * this.b + vector[1] * this.d + this.ty];
            }
        }, {
            key: "multiply",


            /**
             * Returns result of multiplication of this matrix by other matrix
             * @param {Matrix} other_matrix - matrix to multiply by
             * @returns {Matrix}
             */
            value: function multiply(other_matrix) {
                return new Matrix(this.a * other_matrix.a + this.c * other_matrix.b, this.b * other_matrix.a + this.d * other_matrix.b, this.a * other_matrix.c + this.c * other_matrix.d, this.b * other_matrix.c + this.d * other_matrix.d, this.a * other_matrix.tx + this.c * other_matrix.ty + this.tx, this.b * other_matrix.tx + this.d * other_matrix.ty + this.ty);
            }
        }, {
            key: "translate",


            /**
             * Return new matrix as a result of multiplication of the current matrix
             * by the matrix(1,0,0,1,tx,ty)
             * @param {number} tx - translation by x
             * @param {number} ty - translation by y
             * @returns {Matrix}
             */
            value: function translate() {
                var tx = void 0,
                    ty = void 0;

                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }

                if (args.length == 1 && args[0] instanceof Flatten.Vector) {
                    tx = args[0].x;
                    ty = args[0].y;
                } else if (args.length == 2 && typeof args[0] == "number" && typeof args[1] == "number") {
                    tx = args[0];
                    ty = args[1];
                } else {
                    throw Flatten.Errors.ILLEGAL_PARAMETERS;
                }
                return this.multiply(new Matrix(1, 0, 0, 1, tx, ty));
            }
        }, {
            key: "rotate",


            /**
             * Return new matrix as a result of multiplication of the current matrix
             * by the matrix that defines rotation by given angle (in radians) around
             * point (0,0) in counter clockwise direction
             * @param angle
             * @returns {Matrix}
             */
            value: function rotate(angle) {
                var cos = Math.cos(angle);
                var sin = Math.sin(angle);
                return this.multiply(new Matrix(cos, sin, -sin, cos, 0, 0));
            }
        }, {
            key: "scale",


            /**
             * Return new matrix as a result of multiplication of the current matrix
             * by the matrix (sx,0,0,sy,0,0) that defines scaling
             * @param sx
             * @param sy
             * @returns {Matrix}
             */
            value: function scale(sx, sy) {
                return this.multiply(new Matrix(sx, 0, 0, sy, 0, 0));
            }
        }, {
            key: "equalTo",


            /**
             * Returns true if two matrix are equal parameter by parameter
             * @param {Matrix} matrix - other matrix
             * @returns {boolean} true if equal, false otherwise
             */
            value: function equalTo(matrix) {
                if (!Flatten.Utils.EQ(this.tx, matrix.tx)) return false;
                if (!Flatten.Utils.EQ(this.ty, matrix.ty)) return false;
                if (!Flatten.Utils.EQ(this.a, matrix.a)) return false;
                if (!Flatten.Utils.EQ(this.b, matrix.b)) return false;
                if (!Flatten.Utils.EQ(this.c, matrix.c)) return false;
                if (!Flatten.Utils.EQ(this.d, matrix.d)) return false;
                return true;
            }
        }]);

        return Matrix;
    }();

    /**
     * Function to create matrix equivalent to "new" constructor
     * @param args
     */
    Flatten.matrix = function () {
        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
        }

        return new (Function.prototype.bind.apply(Flatten.Matrix, [null].concat(args)))();
    };
};

/***/ }),

/***/ "./classes/point.js":
/*!**************************!*\
  !*** ./classes/point.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by Alex Bol on 2/18/2017.
 */

/**
 *
 * @param Flatten
 */
module.exports = function (Flatten) {
    /**
     *
     * Class representing a point
     * @type {Point}
     */
    Flatten.Point = function () {
        /**
         * Point may be constructed by two numbers, or by array of two numbers
         * @param {number} x - x-coordinate (float number)
         * @param {number} y - y-coordinate (float number)
         */
        function Point() {
            _classCallCheck(this, Point);

            /**
             * x-coordinate (float number)
             * @type {number}
             */
            this.x = 0;
            /**
             * y-coordinate (float number)
             * @type {number}
             */
            this.y = 0;

            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            if (args.length === 0) {
                return;
            }

            if (args.length === 1 && args[0] instanceof Array && args[0].length === 2) {
                var arr = args[0];
                if (typeof arr[0] == "number" && typeof arr[1] == "number") {
                    this.x = arr[0];
                    this.y = arr[1];
                    return;
                }
            }

            if (args.length === 1 && args[0] instanceof Object && args[0].name === "point") {
                var _args$ = args[0],
                    x = _args$.x,
                    y = _args$.y;

                this.x = x;
                this.y = y;
                return;
            }

            if (args.length === 2) {
                if (typeof args[0] == "number" && typeof args[1] == "number") {
                    this.x = args[0];
                    this.y = args[1];
                    return;
                }
            }

            throw Flatten.Errors.ILLEGAL_PARAMETERS;
        }

        /**
         * Returns bounding box of a point
         * @returns {Box}
         */


        _createClass(Point, [{
            key: "clone",


            /**
             * Method clone returns new copied instance of point
             * @returns {Point}
             */
            value: function clone() {
                return new Flatten.Point(this.x, this.y);
            }
        }, {
            key: "equalTo",


            /**
             * Returns true if points are equal up to [Flatten.Utils.DP_TOL]{@link DP_TOL} tolerance
             * @param {Point} pt Query point
             * @returns {boolean}
             */
            value: function equalTo(pt) {
                return Flatten.Utils.EQ(this.x, pt.x) && Flatten.Utils.EQ(this.y, pt.y);
            }

            /**
             * Defines predicate "less than" between points. Returns true if the point is less than query points, false otherwise <br/>
             * By definition point1 < point2 if {point1.y < point2.y || point1.y == point2.y && point1.x < point2.y <br/>
             * Numeric values compared with [Flatten.Utils.DP_TOL]{@link DP_TOL} tolerance
             * @param {Point} pt Query point
             * @returns {boolean}
             */

        }, {
            key: "lessThan",
            value: function lessThan(pt) {
                if (Flatten.Utils.LT(this.y, pt.y)) return true;
                if (Flatten.Utils.EQ(this.y, pt.y) && Flatten.Utils.LT(this.x, pt.x)) return true;
                return false;
            }

            /**
             * Returns new point rotated by given angle around given center point.
             * If center point is omitted, rotates around zero point (0,0).
             * Positive value of angle defines rotation in counter clockwise direction,
             * negative angle defines rotation in clockwise clockwise direction
             * @param {number} angle - angle in radians
             * @param {Point} [center=(0,0)] center
             * @returns {Point}
             */

        }, {
            key: "rotate",
            value: function rotate(angle) {
                var center = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { x: 0, y: 0 };

                var x_rot = center.x + (this.x - center.x) * Math.cos(angle) - (this.y - center.y) * Math.sin(angle);
                var y_rot = center.y + (this.x - center.x) * Math.sin(angle) + (this.y - center.y) * Math.cos(angle);

                return new Flatten.Point(x_rot, y_rot);
            }

            /**
             * Returns new point translated by given vector.
             * Translation vector may by also defined by a pair of numbers.
             * @param {Vector} vector - Translation vector defined as Flatten.Vector or
             * @param {number|number} - Translation vector defined as pair of numbers
             * @returns {Point}
             */

        }, {
            key: "translate",
            value: function translate() {
                for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                    args[_key2] = arguments[_key2];
                }

                if (args.length == 1 && args[0] instanceof Flatten.Vector) {
                    return new Flatten.Point(this.x + args[0].x, this.y + args[0].y);
                }

                if (args.length == 2 && typeof args[0] == "number" && typeof args[1] == "number") {
                    return new Flatten.Point(this.x + args[0], this.y + args[1]);
                }

                throw Flatten.Errors.ILLEGAL_PARAMETERS;
            }

            /**
             * Return new point transformed by affine transformation matrix m
             * @param {Matrix} m - affine transformation matrix (a,b,c,d,tx,ty)
             * @returns {Point}
             */

        }, {
            key: "transform",
            value: function transform(m) {
                // let [x,y] = m.transform([this.x,this.y]);
                return new Flatten.Point(m.transform([this.x, this.y]));
            }

            /**
             * Returns projection point on given line
             * @param {Line} line Line this point be projected on
             * @returns {Point}
             */

        }, {
            key: "projectionOn",
            value: function projectionOn(line) {
                if (this.equalTo(line.pt)) // this point equal to line anchor point
                    return this.clone();

                var vec = new Flatten.Vector(this, line.pt);
                if (Flatten.Utils.EQ_0(vec.cross(line.norm))) // vector to point from anchor point collinear to normal vector
                    return line.pt.clone();

                var dist = vec.dot(line.norm); // signed distance
                var proj_vec = line.norm.multiply(dist);
                return this.translate(proj_vec);
            }

            /**
             * Returns true if point belongs to the "left" semi-plane, which means, point belongs to the same semi plane where line normal vector points to
             * Return false if point belongs to the "right" semi-plane or to the line itself
             * @param {Line} line Query line
             * @returns {boolean}
             */

        }, {
            key: "leftTo",
            value: function leftTo(line) {
                var vec = new Flatten.Vector(line.pt, this);
                var onLeftSemiPlane = Flatten.Utils.GT(vec.dot(line.norm), 0);
                return onLeftSemiPlane;
            }

            /**
             * Calculate distance and shortest segment from point to shape and return as array [distance, shortest segment]
             * @param {Shape} shape Shape of the one of supported types Point, Line, Circle, Segment, Arc, Polygon or Planar Set
             * @returns {number} distance from point to shape
             * @returns {Segment} shortest segment between point and shape (started at point, ended at shape)
             */

        }, {
            key: "distanceTo",
            value: function distanceTo(shape) {
                var Distance = Flatten.Distance;


                if (shape instanceof Point) {
                    var dx = shape.x - this.x;
                    var dy = shape.y - this.y;
                    return [Math.sqrt(dx * dx + dy * dy), new Flatten.Segment(this, shape)];
                }

                if (shape instanceof Flatten.Line) {
                    return Distance.point2line(this, shape);
                }

                if (shape instanceof Flatten.Circle) {
                    return Distance.point2circle(this, shape);
                }

                if (shape instanceof Flatten.Segment) {
                    return Distance.point2segment(this, shape);
                }

                if (shape instanceof Flatten.Arc) {
                    // let [dist, ...rest] = Distance.point2arc(this, shape);
                    // return dist;
                    return Distance.point2arc(this, shape);
                }

                if (shape instanceof Flatten.Polygon) {
                    // let [dist, ...rest] = Distance.point2polygon(this, shape);
                    // return dist;
                    return Distance.point2polygon(this, shape);
                }

                if (shape instanceof Flatten.PlanarSet) {
                    return Distance.shape2planarSet(this, shape);
                }
            }

            /**
             * Returns true if point is on a shape, false otherwise
             * @param {Shape} shape Shape of the one of supported types Point, Line, Circle, Segment, Arc, Polygon
             * @returns {boolean}
             */

        }, {
            key: "on",
            value: function on(shape) {
                if (shape instanceof Flatten.Point) {
                    return this.equalTo(shape);
                }

                if (shape instanceof Flatten.Line) {
                    return shape.contains(this);
                }

                if (shape instanceof Flatten.Circle) {
                    return shape.contains(this);
                }

                if (shape instanceof Flatten.Segment) {
                    return shape.contains(this);
                }

                if (shape instanceof Flatten.Arc) {
                    return shape.contains(this);
                }

                if (shape instanceof Flatten.Polygon) {
                    return shape.contains(this);
                }
            }

            /**
             * Return string to draw point in svg as circle with radius "r" <br/>
             * Accept any valid attributes of svg elements as svg object
             * Defaults attribues are: <br/>
             * {
             *    r:"3",
             *    stroke:"black",
             *    strokeWidth:"1",
             *    fill:"red"
             * }
             * @param {Object} attrs - Any valid attributes of svg circle element, like "r", "stroke", "strokeWidth", "fill"
             * @returns {String}
             */

        }, {
            key: "svg",
            value: function svg() {
                var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                var r = attrs.r,
                    stroke = attrs.stroke,
                    strokeWidth = attrs.strokeWidth,
                    fill = attrs.fill,
                    id = attrs.id,
                    className = attrs.className;
                // let rest_str = Object.keys(rest).reduce( (acc, key) => acc += ` ${key}="${rest[key]}"`, "");

                var id_str = id && id.length > 0 ? "id=\"" + id + "\"" : "";
                var class_str = className && className.length > 0 ? "class=\"" + className + "\"" : "";
                return "\n<circle cx=\"" + this.x + "\" cy=\"" + this.y + "\" r=\"" + (r || 3) + "\" stroke=\"" + (stroke || "black") + "\" stroke-width=\"" + (strokeWidth || 1) + "\" fill=\"" + (fill || "red") + "\" " + id_str + " " + class_str + " />";
            }

            /**
             * Returns JSON object. This method defines how data will be
             * serialized when called JSON.stringify method with this object
             * @returns {Object}
             */

        }, {
            key: "toJSON",
            value: function toJSON() {
                return Object.assign({}, this, { name: "point" });
            }
        }, {
            key: "box",
            get: function get() {
                return new Flatten.Box(this.x, this.y, this.x, this.y);
            }
        }, {
            key: "vertices",
            get: function get() {
                return [this.clone()];
            }
        }]);

        return Point;
    }();

    /**
     * Function to create point equivalent to "new" constructor
     * @param args
     */
    Flatten.point = function () {
        for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            args[_key3] = arguments[_key3];
        }

        return new (Function.prototype.bind.apply(Flatten.Point, [null].concat(args)))();
    };
};

/***/ }),

/***/ "./classes/polygon.js":
/*!****************************!*\
  !*** ./classes/polygon.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Created by Alex Bol on 3/15/2017.
 */



var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

module.exports = function (Flatten) {
    var Edge = Flatten.Edge,
        Face = Flatten.Face,
        PlanarSet = Flatten.PlanarSet,
        Box = Flatten.Box;
    var ray_shoot = Flatten.ray_shoot;
    /**
     * Class representing a polygon.<br/>
     * Polygon in FlattenJS is a multipolygon comprised from a set of [faces]{@link Flatten.Face}. <br/>
     * Face, in turn, is a closed loop of [edges]{@link Flatten.Edge}, where edge may be segment or circular arc<br/>
     * @type {Polygon}
     */

    Flatten.Polygon = function () {
        /**
         * Constructor creates new instance of polygon.<br/>
         * New polygon is empty. Add face to the polygon using method <br/>
         * <code>
         *     polygon.addFace(Points[]|Segments[]|Arcs[])
         * </code>
         */
        function Polygon() {
            _classCallCheck(this, Polygon);

            /**
             * Container of faces (closed loops), may be empty
             * @type {PlanarSet}
             */
            this.faces = new PlanarSet();
            /**
             * Container of edges
             * @type {PlanarSet}
             */
            this.edges = new PlanarSet();
        }

        /**
         * (Getter) Returns bounding box of the polygon
         * @returns {Box}
         */


        _createClass(Polygon, [{
            key: "isEmpty",


            /**
             * Return true is polygon has no edges
             * @returns {boolean}
             */
            value: function isEmpty() {
                return this.edges.size === 0;
            }

            /**
             * Add new face to polygon. Returns added face
             * @param {Points[]|Segments[]|Arcs[]|Circle|Box} args -  new face may be create with one of the following ways: <br/>
             * 1) array of points that describe closed path (edges are segments) <br/>
             * 2) array of shapes (segments and arcs) which describe closed path <br/>
             * 3) circle - will be added as counterclockwise arc <br/>
             * 4) box - will be added as counterclockwise rectangle <br/>
             * You can chain method face.reverse() is you need to change direction of the creates face
             * @returns {Face}
             */

        }, {
            key: "addFace",
            value: function addFace() {
                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }

                var face = new (Function.prototype.bind.apply(Face, [null].concat([this], args)))();
                this.faces.add(face);
                return face;
            }

            /**
             * Delete existing face from polygon
             * @param {Face} face Face to be deleted
             * @returns {boolean}
             */

        }, {
            key: "deleteFace",
            value: function deleteFace(face) {
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = face[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var edge = _step.value;

                        var _deleted = this.edges.delete(edge);
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }

                var deleted = this.faces.delete(face);
                return deleted;
            }

            /**
             * Delete chain of edges from the face.
             * @param {Face} face Face to remove chain
             * @param {Edge} edgeFrom Start of the chain of edges to be removed
             * @param {Edge} edgeTo End of the chain of edges to be removed
             */

        }, {
            key: "removeChain",
            value: function removeChain(face, edgeFrom, edgeTo) {
                // Special case: all edges removed
                if (edgeTo.next === edgeFrom) {
                    this.deleteFace(face);
                    return;
                }
                for (var edge = edgeFrom; edge !== edgeTo.next; edge = edge.next) {
                    face.remove(this.edges, edge);
                    // this.edges.delete(edge);      // delete from PlanarSet of edges and update index
                    if (face.isEmpty()) {
                        this.deleteFace(face); // delete from PlanarSet of faces and update index
                        break;
                    }
                }
            }

            /**
             * Add point as a new vertex and split edge. Point supposed to belong to an edge.
             * When edge is split, new edge created from the start of the edge to the new vertex
             * and inserted before current edge.
             * Current edge is trimmed and updated. Method returns new edge added.
             * @param {Edge} edge Edge to be split with new vertex and then trimmed from start
             * @param {Point} pt Point to be added as a new vertex
             * @returns {Edge}
             */

        }, {
            key: "addVertex",
            value: function addVertex(pt, edge) {
                var shapes = edge.shape.split(pt);
                if (shapes.length < 2) return;
                var newEdge = new Flatten.Edge(shapes[0]);
                var edgeBefore = edge.prev;

                /* Insert first split edge into linked list after edgeBefore */
                edge.face.insert(this.edges, newEdge, edgeBefore);

                // Remove old edge from edges container and 2d index
                this.edges.delete(edge);

                // Update edge shape with second split edge keeping links
                edge.shape = shapes[1];

                // Add updated edge to the edges container and 2d index
                this.edges.add(edge);

                return newEdge;
            }
        }, {
            key: "reverse",
            value: function reverse() {
                var _iteratorNormalCompletion2 = true;
                var _didIteratorError2 = false;
                var _iteratorError2 = undefined;

                try {
                    for (var _iterator2 = this.faces[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                        var face = _step2.value;

                        face.reverse();
                    }
                } catch (err) {
                    _didIteratorError2 = true;
                    _iteratorError2 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion2 && _iterator2.return) {
                            _iterator2.return();
                        }
                    } finally {
                        if (_didIteratorError2) {
                            throw _iteratorError2;
                        }
                    }
                }

                return this;
            }

            /**
             * Create new copied instance of the polygon
             * @returns {Polygon}
             */

        }, {
            key: "clone",
            value: function clone() {
                var polygon = new Polygon();
                var _iteratorNormalCompletion3 = true;
                var _didIteratorError3 = false;
                var _iteratorError3 = undefined;

                try {
                    for (var _iterator3 = this.faces[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                        var face = _step3.value;

                        var shapes = [];
                        var _iteratorNormalCompletion4 = true;
                        var _didIteratorError4 = false;
                        var _iteratorError4 = undefined;

                        try {
                            for (var _iterator4 = face[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                                var edge = _step4.value;

                                shapes.push(edge.shape.clone());
                            }
                        } catch (err) {
                            _didIteratorError4 = true;
                            _iteratorError4 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion4 && _iterator4.return) {
                                    _iterator4.return();
                                }
                            } finally {
                                if (_didIteratorError4) {
                                    throw _iteratorError4;
                                }
                            }
                        }

                        polygon.addFace(shapes);
                    }
                } catch (err) {
                    _didIteratorError3 = true;
                    _iteratorError3 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion3 && _iterator3.return) {
                            _iterator3.return();
                        }
                    } finally {
                        if (_didIteratorError3) {
                            throw _iteratorError3;
                        }
                    }
                }

                return polygon;
            }

            /**
             * Returns area of the polygon. Area of an island will be added, area of a hole will be subtracted
             * @returns {number}
             */

        }, {
            key: "area",
            value: function area() {
                var signedArea = [].concat(_toConsumableArray(this.faces)).reduce(function (acc, face) {
                    return acc + face.signedArea();
                }, 0);
                return Math.abs(signedArea);
            }

            /**
             * Returns true if polygon contains point, including polygon boundary, false otherwise
             * Point in polygon test based on ray shooting algorithm
             * @param {Point} point - test point
             * @returns {boolean}
             */

        }, {
            key: "contains",
            value: function contains(point) {
                var rel = ray_shoot(this, point);
                return rel == Flatten.INSIDE || rel == Flatten.BOUNDARY ? true : false;
            }

            /**
             * Return distance and shortest segment between polygon and other shape as array [distance, shortest_segment]
             * @param {Shape} shape Shape of one of the types Point, Circle, Line, Segment, Arc or Polygon
             * @returns {Number | Segment}
             */

        }, {
            key: "distanceTo",
            value: function distanceTo(shape) {
                var Distance = Flatten.Distance;


                if (shape instanceof Flatten.Point) {
                    var _Distance$point2polyg = Distance.point2polygon(shape, this),
                        _Distance$point2polyg2 = _slicedToArray(_Distance$point2polyg, 2),
                        dist = _Distance$point2polyg2[0],
                        shortest_segment = _Distance$point2polyg2[1];

                    shortest_segment = shortest_segment.reverse();
                    return [dist, shortest_segment];
                }

                if (shape instanceof Flatten.Circle || shape instanceof Flatten.Line || shape instanceof Flatten.Segment || shape instanceof Flatten.Arc) {
                    var _Distance$shape2polyg = Distance.shape2polygon(shape, this),
                        _Distance$shape2polyg2 = _slicedToArray(_Distance$shape2polyg, 2),
                        _dist = _Distance$shape2polyg2[0],
                        _shortest_segment = _Distance$shape2polyg2[1];

                    _shortest_segment = _shortest_segment.reverse();
                    return [_dist, _shortest_segment];
                }

                /* this method is bit faster */
                if (shape instanceof Flatten.Polygon) {
                    var min_dist_and_segment = [Number.POSITIVE_INFINITY, new Flatten.Segment()];
                    var _dist2 = void 0,
                        _shortest_segment2 = void 0;

                    var _iteratorNormalCompletion5 = true;
                    var _didIteratorError5 = false;
                    var _iteratorError5 = undefined;

                    try {
                        for (var _iterator5 = this.edges[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                            var edge = _step5.value;

                            // let [dist, shortest_segment] = Distance.shape2polygon(edge.shape, shape);
                            var min_stop = min_dist_and_segment[0];

                            var _Distance$shape2plana = Distance.shape2planarSet(edge.shape, shape.edges, min_stop);

                            var _Distance$shape2plana2 = _slicedToArray(_Distance$shape2plana, 2);

                            _dist2 = _Distance$shape2plana2[0];
                            _shortest_segment2 = _Distance$shape2plana2[1];

                            if (Flatten.Utils.LT(_dist2, min_stop)) {
                                min_dist_and_segment = [_dist2, _shortest_segment2];
                            }
                        }
                    } catch (err) {
                        _didIteratorError5 = true;
                        _iteratorError5 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion5 && _iterator5.return) {
                                _iterator5.return();
                            }
                        } finally {
                            if (_didIteratorError5) {
                                throw _iteratorError5;
                            }
                        }
                    }

                    return min_dist_and_segment;
                }
            }

            /**
             * Return array of intersection points between polygon and other shape
             * @param shape Shape of the one of supported types <br/>
             * @returns {Point[]}
             */

        }, {
            key: "intersect",
            value: function intersect(shape) {
                if (shape instanceof Flatten.Point) {
                    return this.contains(shape) ? [shape] : [];
                }

                if (shape instanceof Flatten.Line) {
                    return Polygon.intersectLine2Polygon(shape, this);
                }

                if (shape instanceof Flatten.Circle || shape instanceof Flatten.Segment || shape instanceof Flatten.Arc) {
                    return Polygon.intersectShape2Polygon(shape, this);
                }

                if (shape instanceof Flatten.Polygon) {
                    return Polygon.intersectPolygon2Polygon(shape, this);
                }
            }

            /**
             * Return true if polygon is valid for boolean operations
             * Polygon is valid if <br/>
             * 1. All faces are simple polygons (there are no self-intersected polygons) <br/>
             * 2. All faces are orientable and there is no island inside island or hole inside hole - TODO <br/>
             * 3. There is no intersections between faces (excluding touching) - TODO <br/>
             * @returns {boolean}
             */

        }, {
            key: "isValid",
            value: function isValid() {
                var valid = true;
                // 1. Polygon is invalid if at least one face is not simple
                var _iteratorNormalCompletion6 = true;
                var _didIteratorError6 = false;
                var _iteratorError6 = undefined;

                try {
                    for (var _iterator6 = this.faces[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                        var face = _step6.value;

                        if (!face.isSimple(this.edges)) {
                            valid = false;
                            break;
                        }
                    }
                    // 2. TODO: check if no island inside island and no hole inside hole
                    // 3. TODO: check the there is no intersection between faces
                } catch (err) {
                    _didIteratorError6 = true;
                    _iteratorError6 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion6 && _iterator6.return) {
                            _iterator6.return();
                        }
                    } finally {
                        if (_didIteratorError6) {
                            throw _iteratorError6;
                        }
                    }
                }

                return valid;
            }

            /**
             * Returns new polygon translated by vector vec
             * @param {Vector} vec
             * @returns {Polygon}
             */

        }, {
            key: "translate",
            value: function translate(vec) {
                var newPolygon = new Polygon();
                var _iteratorNormalCompletion7 = true;
                var _didIteratorError7 = false;
                var _iteratorError7 = undefined;

                try {
                    for (var _iterator7 = this.faces[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
                        var face = _step7.value;

                        var shapes = [];
                        var _iteratorNormalCompletion8 = true;
                        var _didIteratorError8 = false;
                        var _iteratorError8 = undefined;

                        try {
                            for (var _iterator8 = face[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
                                var edge = _step8.value;

                                shapes.push(edge.shape.translate(vec));
                            }
                        } catch (err) {
                            _didIteratorError8 = true;
                            _iteratorError8 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion8 && _iterator8.return) {
                                    _iterator8.return();
                                }
                            } finally {
                                if (_didIteratorError8) {
                                    throw _iteratorError8;
                                }
                            }
                        }

                        newPolygon.addFace(shapes);
                    }
                } catch (err) {
                    _didIteratorError7 = true;
                    _iteratorError7 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion7 && _iterator7.return) {
                            _iterator7.return();
                        }
                    } finally {
                        if (_didIteratorError7) {
                            throw _iteratorError7;
                        }
                    }
                }

                return newPolygon;
            }

            /**
             * Return new polygon rotated by given angle around given point
             * If point omitted, rotate around origin (0,0)
             * Positive value of angle defines rotation counter clockwise, negative - clockwise
             * @param {number} angle - rotation angle in radians
             * @param {Point} center - rotation center, default is (0,0)
             * @returns {Polygon} - new rotated polygon
             */

        }, {
            key: "rotate",
            value: function rotate() {
                var angle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                var center = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Flatten.Point();

                var newPolygon = new Polygon();
                var _iteratorNormalCompletion9 = true;
                var _didIteratorError9 = false;
                var _iteratorError9 = undefined;

                try {
                    for (var _iterator9 = this.faces[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
                        var face = _step9.value;

                        var shapes = [];
                        var _iteratorNormalCompletion10 = true;
                        var _didIteratorError10 = false;
                        var _iteratorError10 = undefined;

                        try {
                            for (var _iterator10 = face[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
                                var edge = _step10.value;

                                shapes.push(edge.shape.rotate(angle, center));
                            }
                        } catch (err) {
                            _didIteratorError10 = true;
                            _iteratorError10 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion10 && _iterator10.return) {
                                    _iterator10.return();
                                }
                            } finally {
                                if (_didIteratorError10) {
                                    throw _iteratorError10;
                                }
                            }
                        }

                        newPolygon.addFace(shapes);
                    }
                } catch (err) {
                    _didIteratorError9 = true;
                    _iteratorError9 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion9 && _iterator9.return) {
                            _iterator9.return();
                        }
                    } finally {
                        if (_didIteratorError9) {
                            throw _iteratorError9;
                        }
                    }
                }

                return newPolygon;
            }

            /**
             * Return new polygon transformed using affine transformation matrix
             * @param {Matrix} matrix - affine transformation matrix
             * @returns {Polygon} - new polygon
             */

        }, {
            key: "transform",
            value: function transform() {
                var matrix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Flatten.Matrix();

                var newPolygon = new Polygon();
                var _iteratorNormalCompletion11 = true;
                var _didIteratorError11 = false;
                var _iteratorError11 = undefined;

                try {
                    for (var _iterator11 = this.faces[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
                        var face = _step11.value;

                        var shapes = [];
                        var _iteratorNormalCompletion12 = true;
                        var _didIteratorError12 = false;
                        var _iteratorError12 = undefined;

                        try {
                            for (var _iterator12 = face[Symbol.iterator](), _step12; !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
                                var edge = _step12.value;

                                shapes.push(edge.shape.transform(matrix));
                            }
                        } catch (err) {
                            _didIteratorError12 = true;
                            _iteratorError12 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion12 && _iterator12.return) {
                                    _iterator12.return();
                                }
                            } finally {
                                if (_didIteratorError12) {
                                    throw _iteratorError12;
                                }
                            }
                        }

                        newPolygon.addFace(shapes);
                    }
                } catch (err) {
                    _didIteratorError11 = true;
                    _iteratorError11 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion11 && _iterator11.return) {
                            _iterator11.return();
                        }
                    } finally {
                        if (_didIteratorError11) {
                            throw _iteratorError11;
                        }
                    }
                }

                return newPolygon;
            }
        }, {
            key: "svg",


            /**
             * Return string to draw polygon in svg
             * @param attrs  - json structure with attributes for svg path element,
             * like "stroke", "strokeWidth", "fill", "fillRule", "fillOpacity"
             * Defaults are stroke:"black", strokeWidth:"1", fill:"lightcyan", fillRule:"evenodd", fillOpacity: "1"
             * @returns {string}
             */
            value: function svg() {
                var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                var stroke = attrs.stroke,
                    strokeWidth = attrs.strokeWidth,
                    fill = attrs.fill,
                    fillRule = attrs.fillRule,
                    fillOpacity = attrs.fillOpacity,
                    id = attrs.id,
                    className = attrs.className;
                // let restStr = Object.keys(rest).reduce( (acc, key) => acc += ` ${key}="${rest[key]}"`, "");

                var id_str = id && id.length > 0 ? "id=\"" + id + "\"" : "";
                var class_str = className && className.length > 0 ? "class=\"" + className + "\"" : "";

                var svgStr = "\n<path stroke=\"" + (stroke || "black") + "\" stroke-width=\"" + (strokeWidth || 1) + "\" fill=\"" + (fill || "lightcyan") + "\" fill-rule=\"" + (fillRule || "evenodd") + "\" fill-opacity=\"" + (fillOpacity || 1.0) + "\" " + id_str + " " + class_str + " d=\"";
                var _iteratorNormalCompletion13 = true;
                var _didIteratorError13 = false;
                var _iteratorError13 = undefined;

                try {
                    for (var _iterator13 = this.faces[Symbol.iterator](), _step13; !(_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done); _iteratorNormalCompletion13 = true) {
                        var face = _step13.value;

                        svgStr += face.svg();
                    }
                } catch (err) {
                    _didIteratorError13 = true;
                    _iteratorError13 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion13 && _iterator13.return) {
                            _iterator13.return();
                        }
                    } finally {
                        if (_didIteratorError13) {
                            throw _iteratorError13;
                        }
                    }
                }

                svgStr += "\" >\n</path>";
                return svgStr;
            }

            /**
             * Returns JSON object. This method defines how data will be
             * serialized when called JSON.stringify method with this object
             * @returns {Object}
             */

        }, {
            key: "toJSON",
            value: function toJSON() {
                return [].concat(_toConsumableArray(this.faces)).map(function (face) {
                    return face.toJSON();
                });
            }
        }, {
            key: "box",
            get: function get() {
                return [].concat(_toConsumableArray(this.faces)).reduce(function (acc, face) {
                    return acc.merge(face.box);
                }, new Box());
            }

            /**
             * (Getter) Returns array of vertices
             * @returns {Array}
             */

        }, {
            key: "vertices",
            get: function get() {
                return [].concat(_toConsumableArray(this.edges)).map(function (edge) {
                    return edge.start;
                });
            }
        }], [{
            key: "intersectShape2Polygon",
            value: function intersectShape2Polygon(shape, polygon) {
                var ip = [];

                if (polygon.isEmpty() || shape.box.not_intersect(polygon.box)) {
                    return ip;
                }

                var resp_edges = polygon.edges.search(shape.box);

                var _iteratorNormalCompletion14 = true;
                var _didIteratorError14 = false;
                var _iteratorError14 = undefined;

                try {
                    for (var _iterator14 = resp_edges[Symbol.iterator](), _step14; !(_iteratorNormalCompletion14 = (_step14 = _iterator14.next()).done); _iteratorNormalCompletion14 = true) {
                        var edge = _step14.value;
                        var _iteratorNormalCompletion15 = true;
                        var _didIteratorError15 = false;
                        var _iteratorError15 = undefined;

                        try {
                            for (var _iterator15 = shape.intersect(edge.shape)[Symbol.iterator](), _step15; !(_iteratorNormalCompletion15 = (_step15 = _iterator15.next()).done); _iteratorNormalCompletion15 = true) {
                                var pt = _step15.value;

                                ip.push(pt);
                            }
                        } catch (err) {
                            _didIteratorError15 = true;
                            _iteratorError15 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion15 && _iterator15.return) {
                                    _iterator15.return();
                                }
                            } finally {
                                if (_didIteratorError15) {
                                    throw _iteratorError15;
                                }
                            }
                        }
                    }
                } catch (err) {
                    _didIteratorError14 = true;
                    _iteratorError14 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion14 && _iterator14.return) {
                            _iterator14.return();
                        }
                    } finally {
                        if (_didIteratorError14) {
                            throw _iteratorError14;
                        }
                    }
                }

                return ip;
            }
        }, {
            key: "intersectLine2Polygon",
            value: function intersectLine2Polygon(line, polygon) {
                var ip = [];

                if (polygon.isEmpty()) {
                    return ip;
                }

                var _iteratorNormalCompletion16 = true;
                var _didIteratorError16 = false;
                var _iteratorError16 = undefined;

                try {
                    for (var _iterator16 = polygon.edges[Symbol.iterator](), _step16; !(_iteratorNormalCompletion16 = (_step16 = _iterator16.next()).done); _iteratorNormalCompletion16 = true) {
                        var edge = _step16.value;
                        var _iteratorNormalCompletion17 = true;
                        var _didIteratorError17 = false;
                        var _iteratorError17 = undefined;

                        try {
                            for (var _iterator17 = line.intersect(edge.shape)[Symbol.iterator](), _step17; !(_iteratorNormalCompletion17 = (_step17 = _iterator17.next()).done); _iteratorNormalCompletion17 = true) {
                                var pt = _step17.value;

                                ip.push(pt);
                            }
                        } catch (err) {
                            _didIteratorError17 = true;
                            _iteratorError17 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion17 && _iterator17.return) {
                                    _iterator17.return();
                                }
                            } finally {
                                if (_didIteratorError17) {
                                    throw _iteratorError17;
                                }
                            }
                        }
                    }
                } catch (err) {
                    _didIteratorError16 = true;
                    _iteratorError16 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion16 && _iterator16.return) {
                            _iterator16.return();
                        }
                    } finally {
                        if (_didIteratorError16) {
                            throw _iteratorError16;
                        }
                    }
                }

                return ip;
            }
        }, {
            key: "intersectPolygon2Polygon",
            value: function intersectPolygon2Polygon(polygon1, polygon2) {
                var ip = [];

                if (polygon1.isEmpty() || polygon2.isEmpty()) {
                    return ip;
                }

                if (polygon1.box.not_intersect(polygon2.box)) {
                    return ip;
                }

                var _iteratorNormalCompletion18 = true;
                var _didIteratorError18 = false;
                var _iteratorError18 = undefined;

                try {
                    for (var _iterator18 = polygon1.edges[Symbol.iterator](), _step18; !(_iteratorNormalCompletion18 = (_step18 = _iterator18.next()).done); _iteratorNormalCompletion18 = true) {
                        var edge1 = _step18.value;
                        var _iteratorNormalCompletion19 = true;
                        var _didIteratorError19 = false;
                        var _iteratorError19 = undefined;

                        try {
                            for (var _iterator19 = Polygon.intersectShape2Polygon(edge1.shape, polygon2)[Symbol.iterator](), _step19; !(_iteratorNormalCompletion19 = (_step19 = _iterator19.next()).done); _iteratorNormalCompletion19 = true) {
                                var pt = _step19.value;

                                ip.push(pt);
                            }
                        } catch (err) {
                            _didIteratorError19 = true;
                            _iteratorError19 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion19 && _iterator19.return) {
                                    _iterator19.return();
                                }
                            } finally {
                                if (_didIteratorError19) {
                                    throw _iteratorError19;
                                }
                            }
                        }
                    }
                } catch (err) {
                    _didIteratorError18 = true;
                    _iteratorError18 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion18 && _iterator18.return) {
                            _iterator18.return();
                        }
                    } finally {
                        if (_didIteratorError18) {
                            throw _iteratorError18;
                        }
                    }
                }

                return ip;
            }
        }]);

        return Polygon;
    }();
};

/***/ }),

/***/ "./classes/ray.js":
/*!************************!*\
  !*** ./classes/ray.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

module.exports = function (Flatten) {
    var Point = Flatten.Point,
        Segment = Flatten.Segment,
        Line = Flatten.Line,
        Circle = Flatten.Circle,
        Arc = Flatten.Arc,
        Box = Flatten.Box,
        Vector = Flatten.Vector;
    /**
     * Class representing a horizontal ray, used by ray shooting algorithm
     * @type {Ray}
     */

    Flatten.Ray = function () {
        /**
         * Construct ray by setting start point
         * @param {Point} pt - start point
         */
        function Ray() {
            _classCallCheck(this, Ray);

            this.pt = new Point();

            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            if (args.length == 0) {
                return;
            }

            if (args.length == 1 && args[0] instanceof Point) {
                this.pt = args[0].clone();
                return;
            }

            if (args.length == 2 && typeof args[0] == "number" && typeof args[1] == "number") {
                this.pt = new Point(args[0], args[1]);
                return;
            }

            throw Flatten.Errors.ILLEGAL_PARAMETERS;
        }

        /**
         * Returns copied instance of the ray object
         * @returns {Ray}
         */


        _createClass(Ray, [{
            key: "clone",
            value: function clone() {
                return new Ray(this.pt);
            }

            /**
             * Returns half-infinite bounding box of the ray
             * @returns {Box} - bounding box
             */

        }, {
            key: "intersect",


            /**
             * Returns array of intersection points between ray and segment or arc
             * @param {Segment|Arc} - Shape to intersect with ray
             * @returns {Array} array of intersection points
             */
            value: function intersect(shape) {
                if (shape instanceof Segment) {
                    return this.intersectRay2Segment(this, shape);
                }

                if (shape instanceof Arc) {
                    return this.intersectRay2Arc(this, shape);
                }
            }
        }, {
            key: "intersectRay2Segment",
            value: function intersectRay2Segment(ray, segment) {
                var ip = [];

                if (ray.box.not_intersect(segment.box)) {
                    return ip;
                }

                var line = new Line(ray.start, ray.norm);
                var ip_tmp = line.intersect(segment);

                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = ip_tmp[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var pt = _step.value;

                        if (Flatten.Utils.GE(pt.x, ray.start.x)) {
                            ip.push(pt);
                        }
                    }

                    /* If there were two intersection points between line and ray,
                    and now there is exactly one left, it means ray starts between these points
                    and there is another intersection point - start of the ray */
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }

                if (ip_tmp.length == 2 && ip.length == 1 && ray.start.on(line)) {
                    ip.push(ray.start);
                }

                return ip;
            }
        }, {
            key: "intersectRay2Arc",
            value: function intersectRay2Arc(ray, arc) {
                var ip = [];

                if (ray.box.not_intersect(arc.box)) {
                    return ip;
                }

                var line = new Line(ray.start, ray.norm);
                var ip_tmp = line.intersect(arc);

                var _iteratorNormalCompletion2 = true;
                var _didIteratorError2 = false;
                var _iteratorError2 = undefined;

                try {
                    for (var _iterator2 = ip_tmp[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                        var pt = _step2.value;

                        if (Flatten.Utils.GE(pt.x, ray.start.x)) {
                            ip.push(pt);
                        }
                    }
                } catch (err) {
                    _didIteratorError2 = true;
                    _iteratorError2 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion2 && _iterator2.return) {
                            _iterator2.return();
                        }
                    } finally {
                        if (_didIteratorError2) {
                            throw _iteratorError2;
                        }
                    }
                }

                return ip;
            }
        }, {
            key: "box",
            get: function get() {
                return new Box(this.pt.x, this.pt.y, Number.POSITIVE_INFINITY, this.pt.y);
            }

            /**
             * Return ray start point
             * @returns {Point} - ray start point
             */

        }, {
            key: "start",
            get: function get() {
                return this.pt;
            }

            /**
             * Return ray normal vector (0,1) - horizontal ray
             * @returns {Vector} - ray normal vector
             */

        }, {
            key: "norm",
            get: function get() {
                return new Vector(0, 1);
            }
        }]);

        return Ray;
    }();

    Flatten.ray = function () {
        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
        }

        return new (Function.prototype.bind.apply(Flatten.Ray, [null].concat(args)))();
    };
};

/***/ }),

/***/ "./classes/segment.js":
/*!****************************!*\
  !*** ./classes/segment.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Created by Alex Bol on 3/10/2017.
 */



var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

module.exports = function (Flatten) {
    /**
     * Class representing a segment
     * @type {Segment}
     */
    Flatten.Segment = function () {
        /**
         *
         * @param {Point} ps - start point
         * @param {Point} pe - end point
         */
        function Segment() {
            _classCallCheck(this, Segment);

            /**
             * Start point
             * @type {Point}
             */
            this.ps = new Flatten.Point();
            /**
             * End Point
             * @type {Point}
             */
            this.pe = new Flatten.Point();

            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            if (args.length == 0) {
                return;
            }

            if (args.length == 1 && args[0] instanceof Array && args[0].length == 4) {
                var coords = args[0];
                this.ps = new Flatten.Point(coords[0], coords[1]);
                this.pe = new Flatten.Point(coords[2], coords[3]);
                return;
            }

            if (args.length == 1 && args[0] instanceof Object && args[0].name === "segment") {
                var _args$ = args[0],
                    ps = _args$.ps,
                    pe = _args$.pe;

                this.ps = new Flatten.Point(ps.x, ps.y);
                this.pe = new Flatten.Point(pe.x, pe.y);
                return;
            }

            if (args.length == 2 && args[0] instanceof Flatten.Point && args[1] instanceof Flatten.Point) {
                this.ps = args[0].clone();
                this.pe = args[1].clone();
                return;
            }

            if (args.length == 4) {
                this.ps = new Flatten.Point(args[0], args[1]);
                this.pe = new Flatten.Point(args[2], args[3]);
                return;
            }

            throw Flatten.Errors.ILLEGAL_PARAMETERS;
        }

        /**
         * Method clone copies segment and returns a new instance
         * @returns {Segment}
         */


        _createClass(Segment, [{
            key: "clone",
            value: function clone() {
                return new Flatten.Segment(this.start, this.end);
            }

            /**
             * Start point
             * @returns {Point}
             */

        }, {
            key: "equalTo",


            /**
             * Returns true if equals to query segment, false otherwise
             * @param {Seg} seg - query segment
             * @returns {boolean}
             */
            value: function equalTo(seg) {
                return this.ps.equalTo(seg.ps) && this.pe.equalTo(seg.pe);
            }

            /**
             * Returns true if segment contains point
             * @param {Point} pt Query point
             * @returns {boolean}
             */

        }, {
            key: "contains",
            value: function contains(pt) {
                return Flatten.Utils.EQ_0(this.distanceToPoint(pt));
            }

            /**
             * Returns array of intersection points between segment and other shape
             * @param {Shape} shape - Shape of the one of supported types <br/>
             * @returns {Point[]}
             */

        }, {
            key: "intersect",
            value: function intersect(shape) {
                if (shape instanceof Flatten.Point) {
                    return this.contains(shape) ? [shape] : [];
                }

                if (shape instanceof Flatten.Line) {
                    return Segment.intersectSegment2Line(this, shape);
                }

                if (shape instanceof Flatten.Segment) {
                    return Segment.intersectSegment2Segment(this, shape);
                }

                if (shape instanceof Flatten.Circle) {
                    return Segment.intersectSegment2Circle(this, shape);
                }

                if (shape instanceof Flatten.Arc) {
                    return Segment.intersectSegment2Arc(this, shape);
                }

                if (shape instanceof Flatten.Polygon) {
                    return Flatten.Polygon.intersectShape2Polygon(this, shape);
                }
            }

            /**
             * Calculate distance and shortest segment from segment to shape and return as array [distance, shortest segment]
             * @param {Shape} shape Shape of the one of supported types Point, Line, Circle, Segment, Arc, Polygon or Planar Set
             * @returns {number} distance from segment to shape
             * @returns {Segment} shortest segment between segment and shape (started at segment, ended at shape)
             */

        }, {
            key: "distanceTo",
            value: function distanceTo(shape) {
                var Distance = Flatten.Distance;


                if (shape instanceof Flatten.Point) {
                    var _Distance$point2segme = Distance.point2segment(shape, this),
                        _Distance$point2segme2 = _slicedToArray(_Distance$point2segme, 2),
                        dist = _Distance$point2segme2[0],
                        shortest_segment = _Distance$point2segme2[1];

                    shortest_segment = shortest_segment.reverse();
                    return [dist, shortest_segment];
                }

                if (shape instanceof Flatten.Circle) {
                    var _Distance$segment2cir = Distance.segment2circle(this, shape),
                        _Distance$segment2cir2 = _slicedToArray(_Distance$segment2cir, 2),
                        _dist = _Distance$segment2cir2[0],
                        _shortest_segment = _Distance$segment2cir2[1];

                    return [_dist, _shortest_segment];
                }

                if (shape instanceof Flatten.Line) {
                    var _Distance$segment2lin = Distance.segment2line(this, shape),
                        _Distance$segment2lin2 = _slicedToArray(_Distance$segment2lin, 2),
                        _dist2 = _Distance$segment2lin2[0],
                        _shortest_segment2 = _Distance$segment2lin2[1];

                    return [_dist2, _shortest_segment2];
                }

                if (shape instanceof Flatten.Segment) {
                    var _Distance$segment2seg = Distance.segment2segment(this, shape),
                        _Distance$segment2seg2 = _slicedToArray(_Distance$segment2seg, 2),
                        _dist3 = _Distance$segment2seg2[0],
                        _shortest_segment3 = _Distance$segment2seg2[1];

                    return [_dist3, _shortest_segment3];
                }

                if (shape instanceof Flatten.Arc) {
                    var _Distance$segment2arc = Distance.segment2arc(this, shape),
                        _Distance$segment2arc2 = _slicedToArray(_Distance$segment2arc, 2),
                        _dist4 = _Distance$segment2arc2[0],
                        _shortest_segment4 = _Distance$segment2arc2[1];

                    return [_dist4, _shortest_segment4];
                }

                if (shape instanceof Flatten.Polygon) {
                    var _Distance$shape2polyg = Distance.shape2polygon(this, shape),
                        _Distance$shape2polyg2 = _slicedToArray(_Distance$shape2polyg, 2),
                        _dist5 = _Distance$shape2polyg2[0],
                        _shortest_segment5 = _Distance$shape2polyg2[1];

                    return [_dist5, _shortest_segment5];
                }

                if (shape instanceof Flatten.PlanarSet) {
                    var _Distance$shape2plana = Distance.shape2planarSet(this, shape),
                        _Distance$shape2plana2 = _slicedToArray(_Distance$shape2plana, 2),
                        _dist6 = _Distance$shape2plana2[0],
                        _shortest_segment6 = _Distance$shape2plana2[1];

                    return [_dist6, _shortest_segment6];
                }
            }

            /**
             * Returns unit vector in the direction from start to end
             * @returns {Vector}
             */

        }, {
            key: "tangentInStart",
            value: function tangentInStart() {
                var vec = new Flatten.Vector(this.start, this.end);
                return vec.normalize();
            }

            /**
             * Return unit vector in the direction from end to start
             * @returns {Vector}
             */

        }, {
            key: "tangentInEnd",
            value: function tangentInEnd() {
                var vec = new Flatten.Vector(this.end, this.start);
                return vec.normalize();
            }

            /**
             * Returns new segment with swapped start and end points
             * @returns {Segment}
             */

        }, {
            key: "reverse",
            value: function reverse() {
                return new Segment(this.end, this.start);
            }

            /**
             * When point belongs to segment, return array of two segments split by given point,
             * if point is inside segment. Returns clone of this segment if query point is incident
             * to start or end point of the segment. Returns empty array if point does not belong to segment
             * @param {Point} pt Query point
             * @returns {Segment[]}
             */

        }, {
            key: "split",
            value: function split(pt) {
                if (!this.contains(pt)) return [];

                if (this.start.equalTo(this.end)) return [this.clone()];

                if (this.start.equalTo(pt) || this.end.equalTo(pt)) return [this];

                return [new Flatten.Segment(this.start, pt), new Flatten.Segment(pt, this.end)];
            }

            /**
             * Return middle point of the segment
             * @returns {Point}
             */

        }, {
            key: "middle",
            value: function middle() {
                return new Flatten.Point((this.start.x + this.end.x) / 2, (this.start.y + this.end.y) / 2);
            }
        }, {
            key: "distanceToPoint",
            value: function distanceToPoint(pt) {
                var _Flatten$Distance$poi = Flatten.Distance.point2segment(pt, this),
                    _Flatten$Distance$poi2 = _toArray(_Flatten$Distance$poi),
                    dist = _Flatten$Distance$poi2[0],
                    rest = _Flatten$Distance$poi2.slice(1);

                return dist;
            }
        }, {
            key: "definiteIntegral",
            value: function definiteIntegral() {
                var ymin = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0.0;

                var dx = this.end.x - this.start.x;
                var dy1 = this.start.y - ymin;
                var dy2 = this.end.y - ymin;
                return dx * (dy1 + dy2) / 2;
            }

            /**
             * Returns new segment translated by vector vec
             * @param {Vector} vec
             * @returns {Segment}
             */

        }, {
            key: "translate",
            value: function translate() {
                var _ps, _pe;

                return new Segment((_ps = this.ps).translate.apply(_ps, arguments), (_pe = this.pe).translate.apply(_pe, arguments));
            }

            /**
             * Return new segment rotated by given angle around given point
             * If point omitted, rotate around origin (0,0)
             * Positive value of angle defines rotation counter clockwise, negative - clockwise
             * @param {number} angle - rotation angle in radians
             * @param {Point} center - center point, default is (0,0)
             * @returns {Segment}
             */

        }, {
            key: "rotate",
            value: function rotate() {
                var angle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                var center = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Flatten.Point();

                var m = new Flatten.Matrix();
                m = m.translate(center.x, center.y).rotate(angle).translate(-center.x, -center.y);
                return this.transform(m);
            }

            /**
             * Return new segment transformed using affine transformation matrix
             * @param {Matrix} matrix - affine transformation matrix
             * @returns {Segment} - transformed segment
             */

        }, {
            key: "transform",
            value: function transform() {
                var matrix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Flatten.Matrix();

                return new Segment(this.ps.transform(matrix), this.pe.transform(matrix));
            }

            /**
             * Returns true if segment start is equal to segment end up to DP_TOL
             * @returns {boolean}
             */

        }, {
            key: "isZeroLength",
            value: function isZeroLength() {
                return this.ps.equalTo(this.pe);
            }
        }, {
            key: "svg",


            /**
             * Return string to draw segment in svg
             * @param {Object} attrs - Object with attributes for svg path element,
             * like "stroke", "strokeWidth" <br/>
             * Defaults are stroke:"black", strokeWidth:"1"
             * @returns {string}
             */
            value: function svg() {
                var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                var stroke = attrs.stroke,
                    strokeWidth = attrs.strokeWidth,
                    id = attrs.id,
                    className = attrs.className;
                // let rest_str = Object.keys(rest).reduce( (acc, key) => acc += ` ${key}="${rest[key]}"`, "");

                var id_str = id && id.length > 0 ? "id=\"" + id + "\"" : "";
                var class_str = className && className.length > 0 ? "class=\"" + className + "\"" : "";

                return "\n<line x1=\"" + this.start.x + "\" y1=\"" + this.start.y + "\" x2=\"" + this.end.x + "\" y2=\"" + this.end.y + "\" stroke=\"" + (stroke || "black") + "\" stroke-width=\"" + (strokeWidth || 1) + "\" " + id_str + " " + class_str + " />";
            }

            /**
             * Returns JSON object. This method defines how data will be
             * serialized when called JSON.stringify method with this object
             * @returns {Object}
             */

        }, {
            key: "toJSON",
            value: function toJSON() {
                return Object.assign({}, this, { name: "segment" });
            }
        }, {
            key: "start",
            get: function get() {
                return this.ps;
            }

            /**
             * End point
             * @returns {Point}
             */

        }, {
            key: "end",
            get: function get() {
                return this.pe;
            }

            /**
             * Returns array of start and end point
             * @returns [Point,Point]
             */

        }, {
            key: "vertices",
            get: function get() {
                return [this.ps.clone(), this.pe.clone()];
            }

            /**
             * Length of a segment
             * @returns {number}
             */

        }, {
            key: "length",
            get: function get() {
                return this.start.distanceTo(this.end)[0];
            }

            /**
             * Slope of the line - angle to axe x in radians from 0 to 2PI
             * @returns {number}
             */

        }, {
            key: "slope",
            get: function get() {
                var vec = new Flatten.Vector(this.start, this.end);
                return vec.slope;
            }

            /**
             * Bounding box
             * @returns {Box}
             */

        }, {
            key: "box",
            get: function get() {
                return new Flatten.Box(Math.min(this.start.x, this.end.x), Math.min(this.start.y, this.end.y), Math.max(this.start.x, this.end.x), Math.max(this.start.y, this.end.y));
            }
        }], [{
            key: "intersectSegment2Line",
            value: function intersectSegment2Line(seg, line) {
                var ip = [];

                // Boundary cases
                if (seg.ps.on(line)) {
                    ip.push(seg.ps);
                }
                // If both ends lay on line, return two intersection points
                if (seg.pe.on(line) && !seg.isZeroLength()) {
                    ip.push(seg.pe);
                }

                if (ip.length > 0) {
                    return ip; // done, intersection found
                }

                // If zero-length segment and nothing found, return no intersections
                if (seg.isZeroLength()) {
                    return ip;
                }

                // Not a boundary case, check if both points are on the same side and
                // hence there is no intersection
                if (seg.ps.leftTo(line) && seg.pe.leftTo(line) || !seg.ps.leftTo(line) && !seg.pe.leftTo(line)) {
                    return ip;
                }

                // Calculate intersection between lines
                var line1 = new Flatten.Line(seg.ps, seg.pe);
                return line1.intersect(line);
            }
        }, {
            key: "intersectSegment2Segment",
            value: function intersectSegment2Segment(seg1, seg2) {
                var ip = [];

                // quick reject
                if (seg1.box.not_intersect(seg2.box)) {
                    return ip;
                }

                // Special case of seg1 zero length
                if (seg1.isZeroLength()) {
                    if (seg1.ps.on(seg2)) {
                        ip.push(seg1.ps);
                    }
                    return ip;
                }

                // Special case of seg2 zero length
                if (seg2.isZeroLength()) {
                    if (seg2.ps.on(seg1)) {
                        ip.push(seg2.ps);
                    }
                    return ip;
                }

                // Neither seg1 nor seg2 is zero length
                var line1 = new Flatten.Line(seg1.ps, seg1.pe);
                var line2 = new Flatten.Line(seg2.ps, seg2.pe);

                // Check overlapping between segments in case of incidence
                // If segments touching, add one point. If overlapping, add two points
                if (line1.incidentTo(line2)) {
                    if (seg1.ps.on(seg2)) {
                        ip.push(seg1.ps);
                    }
                    if (seg1.pe.on(seg2)) {
                        ip.push(seg1.pe);
                    }
                    if (seg2.ps.on(seg1) && !seg2.ps.equalTo(seg1.ps) && !seg2.ps.equalTo(seg1.pe)) {
                        ip.push(seg2.ps);
                    }
                    if (seg2.pe.on(seg1) && !seg2.pe.equalTo(seg1.ps) && !seg2.pe.equalTo(seg1.pe)) {
                        ip.push(seg2.pe);
                    }
                } else {
                    /* not incident - parallel or intersect */
                    // Calculate intersection between lines
                    var new_ip = line1.intersect(line2);
                    if (new_ip.length > 0 && new_ip[0].on(seg1) && new_ip[0].on(seg2)) {
                        ip.push(new_ip[0]);
                    }
                }

                return ip;
            }
        }, {
            key: "intersectSegment2Circle",
            value: function intersectSegment2Circle(segment, circle) {
                var ips = [];

                if (segment.box.not_intersect(circle.box)) {
                    return ips;
                }

                // Special case of zero length segment
                if (segment.isZeroLength()) {
                    var _segment$ps$distanceT = segment.ps.distanceTo(circle.pc),
                        _segment$ps$distanceT2 = _slicedToArray(_segment$ps$distanceT, 2),
                        dist = _segment$ps$distanceT2[0],
                        shortest_segment = _segment$ps$distanceT2[1];

                    if (Flatten.Utils.EQ(dist, circle.r)) {
                        ips.push(segment.ps);
                    }
                    return ips;
                }

                // Non zero-length segment
                var line = new Flatten.Line(segment.ps, segment.pe);

                var ips_tmp = line.intersect(circle);

                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = ips_tmp[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var ip = _step.value;

                        if (ip.on(segment)) {
                            ips.push(ip);
                        }
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }

                return ips;
            }
        }, {
            key: "intersectSegment2Arc",
            value: function intersectSegment2Arc(segment, arc) {
                var ip = [];

                if (segment.box.not_intersect(arc.box)) {
                    return ip;
                }

                // Special case of zero-length segment
                if (segment.isZeroLength()) {
                    if (segment.ps.on(arc)) {
                        ip.push(segment.ps);
                    }
                    return ip;
                }

                // Non-zero length segment
                var line = new Flatten.Line(segment.ps, segment.pe);
                var circle = new Flatten.Circle(arc.pc, arc.r);

                var ip_tmp = line.intersect(circle);

                var _iteratorNormalCompletion2 = true;
                var _didIteratorError2 = false;
                var _iteratorError2 = undefined;

                try {
                    for (var _iterator2 = ip_tmp[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                        var pt = _step2.value;

                        if (pt.on(segment) && pt.on(arc)) {
                            ip.push(pt);
                        }
                    }
                } catch (err) {
                    _didIteratorError2 = true;
                    _iteratorError2 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion2 && _iterator2.return) {
                            _iterator2.return();
                        }
                    } finally {
                        if (_didIteratorError2) {
                            throw _iteratorError2;
                        }
                    }
                }

                return ip;
            }
        }]);

        return Segment;
    }();

    /**
     * Shortcut method to create new segment
     */
    Flatten.segment = function () {
        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
        }

        return new (Function.prototype.bind.apply(Flatten.Segment, [null].concat(args)))();
    };
};

/***/ }),

/***/ "./classes/vector.js":
/*!***************************!*\
  !*** ./classes/vector.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Created by Alex Bol on 2/19/2017.
 */



var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

module.exports = function (Flatten) {
    /**
     * Class representing a vector
     * @type {Vector}
     */
    Flatten.Vector = function () {
        /**
         * Vector may be constructed by two points, or by two float numbers,
         * or by array of two numbers
         * @param {Point} ps - start point
         * @param {Point} pe - end point
         */
        function Vector() {
            _classCallCheck(this, Vector);

            /**
             * x-coordinate of a vector (float number)
             * @type {number}
             */
            this.x = 0;
            /**
             * y-coordinate of a vector (float number)
             * @type {number}
             */
            this.y = 0;

            /* return zero vector */

            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            if (args.length === 0) {
                return;
            }

            if (args.length === 1 && args[0] instanceof Array && args[0].length === 2) {
                var arr = args[0];
                if (typeof arr[0] == "number" && typeof arr[1] == "number") {
                    this.x = arr[0];
                    this.y = arr[1];
                    return;
                }
            }

            if (args.length === 1 && args[0] instanceof Object && args[0].name === "vector") {
                var _args$ = args[0],
                    x = _args$.x,
                    y = _args$.y;

                this.x = x;
                this.y = y;
                return;
            }

            if (args.length === 2) {
                var a1 = args[0];
                var a2 = args[1];

                if (typeof a1 == "number" && typeof a2 == "number") {
                    this.x = a1;
                    this.y = a2;
                    return;
                }

                if (a1 instanceof Flatten.Point && a2 instanceof Flatten.Point) {
                    this.x = a2.x - a1.x;
                    this.y = a2.y - a1.y;
                    return;
                }
            }

            throw Flatten.Errors.ILLEGAL_PARAMETERS;
        }

        /**
         * Method clone returns new instance of Vector
         * @returns {Vector}
         */


        _createClass(Vector, [{
            key: "clone",
            value: function clone() {
                return new Vector(this.x, this.y);
            }

            /**
             * Slope of the vector in radians from 0 to 2PI
             * @returns {number}
             */

        }, {
            key: "equalTo",


            /**
             * Returns true if vectors are equal up to [DP_TOL]{@link http://localhost:63342/flatten-js/docs/global.html#DP_TOL}
             * tolerance
             * @param {Vector} v
             * @returns {boolean}
             */
            value: function equalTo(v) {
                return Flatten.Utils.EQ(this.x, v.x) && Flatten.Utils.EQ(this.y, v.y);
            }

            /**
             * Returns new vector multiplied by scalar
             * @param {number} scalar
             * @returns {Vector}
             */

        }, {
            key: "multiply",
            value: function multiply(scalar) {
                return new Vector(scalar * this.x, scalar * this.y);
            }

            /**
             * Returns scalar product (dot product) of two vectors <br/>
             * <code>dot_product = (this * v)</code>
             * @param {Vector} v Other vector
             * @returns {number}
             */

        }, {
            key: "dot",
            value: function dot(v) {
                return this.x * v.x + this.y * v.y;
            }

            /**
             * Returns vector product (cross product) of two vectors <br/>
             * <code>cross_product = (this x v)</code>
             * @param {Vector} v Other vector
             * @returns {number}
             */

        }, {
            key: "cross",
            value: function cross(v) {
                return this.x * v.y - this.y * v.x;
            }

            /**
             * Returns unit vector.<br/>
             * Throw error if given vector has zero length
             * @returns {Vector}
             */

        }, {
            key: "normalize",
            value: function normalize() {
                if (!Flatten.Utils.EQ_0(this.length)) {
                    return new Vector(this.x / this.length, this.y / this.length);
                }
                throw Flatten.Errors.ZERO_DIVISION;
            }

            /**
             * Returns new vector rotated by given angle,
             * positive angle defines rotation in counter clockwise direction,
             * negative - in clockwise direction
             * @param {number} angle - Angle in radians
             * @returns {Vector}
             */

        }, {
            key: "rotate",
            value: function rotate(angle) {
                var point = new Flatten.Point(this.x, this.y);
                var rpoint = point.rotate(angle);
                return new Flatten.Vector(rpoint.x, rpoint.y);
            }

            /**
             * Returns vector rotated 90 degrees counter clockwise
             * @returns {Vector}
             */

        }, {
            key: "rotate90CCW",
            value: function rotate90CCW() {
                return new Flatten.Vector(-this.y, this.x);
            }
        }, {
            key: "rotate90CW",


            /**
             * Returns vector rotated 90 degrees clockwise
             * @returns {Vector}
             */
            value: function rotate90CW() {
                return new Flatten.Vector(this.y, -this.x);
            }
        }, {
            key: "invert",


            /**
             * Return inverted vector
             * @returns {Vector}
             */
            value: function invert() {
                return new Flatten.Vector(-this.x, -this.y);
            }

            /**
             * Return result of addition of other vector to this vector as a new vector
             * @param {Vector} v Other vector
             * @returns {Vector}
             */

        }, {
            key: "add",
            value: function add(v) {
                return new Flatten.Vector(this.x + v.x, this.y + v.y);
            }

            /**
             * Return result of subtraction of other vector from current vector as a new vector
             * @param {Vector} v Another vector
             * @returns {Vector}
             */

        }, {
            key: "subtract",
            value: function subtract(v) {
                return new Flatten.Vector(this.x - v.x, this.y - v.y);
            }

            /**
             * Return angle between this vector and other vector. <br/>
             * Angle is measured from 0 to 2*PI in the counter clockwise direction
             * from current vector to other.
             * @param {Vector} v Another vector
             * @returns {number}
             */

        }, {
            key: "angleTo",
            value: function angleTo(v) {
                var norm1 = this.normalize();
                var norm2 = v.normalize();
                var angle = Math.atan2(norm1.cross(norm2), norm1.dot(norm2));
                if (angle < 0) angle += 2 * Math.PI;
                return angle;
            }

            /**
             * Return vector projection of the current vector on another vector
             * @param {Vector} v Another vector
             * @returns {Vector}
             */

        }, {
            key: "projectionOn",
            value: function projectionOn(v) {
                var n = v.normalize();
                var d = this.dot(n);
                return n.multiply(d);
            }

            /**
             * Returns JSON object. This method defines how data will be
             * serialized when called JSON.stringify method with this object
             * @returns {Object}
             */

        }, {
            key: "toJSON",
            value: function toJSON() {
                return Object.assign({}, this, { name: "vector" });
            }
        }, {
            key: "slope",
            get: function get() {
                var angle = Math.atan2(this.y, this.x);
                if (angle < 0) angle = 2 * Math.PI + angle;
                return angle;
            }

            /**
             * Length of vector
             * @returns {number}
             */

        }, {
            key: "length",
            get: function get() {
                return Math.sqrt(this.dot(this));
            }
        }]);

        return Vector;
    }();

    /**
     * Function to create vector equivalent to "new" constructor
     * @param args
     */
    Flatten.vector = function () {
        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
        }

        return new (Function.prototype.bind.apply(Flatten.Vector, [null].concat(args)))();
    };
};

/***/ }),

/***/ "./data_structures/planar_set.js":
/*!***************************************!*\
  !*** ./data_structures/planar_set.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Created by Alex Bol on 3/12/2017.
 */



// require("babel-polyfill");

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IntervalTree = __webpack_require__(/*! flatten-interval-tree */ "./node_modules/flatten-interval-tree/index.js");

module.exports = function (Flatten) {
    /**
     * Class representing a planar set - a generic container with ability to keep and retrieve shapes and
     * perform spatial queries. Planar set is an extension of Set container, so it supports
     * Set properties and methods
     */
    Flatten.PlanarSet = function (_Set) {
        _inherits(PlanarSet, _Set);

        /**
         * Create new empty instance of PlanarSet
         */
        function PlanarSet() {
            _classCallCheck(this, PlanarSet);

            var _this = _possibleConstructorReturn(this, (PlanarSet.__proto__ || Object.getPrototypeOf(PlanarSet)).call(this));

            _this.index = new IntervalTree();
            return _this;
        }

        /**
         * Add new shape to planar set and to its spatial index.<br/>
         * If shape already exist, it will not be added again.
         * This happens with no error, it is possible to use <i>size</i> property to check if
         * a shape was actually added.<br/>
         * Method returns planar set object updated and may be chained
         * @param {Shape} shape - shape to be added, should have valid <i>box</i> property
         * @returns {PlanarSet}
         */


        _createClass(PlanarSet, [{
            key: "add",
            value: function add(shape) {
                var size = this.size;
                _get(PlanarSet.prototype.__proto__ || Object.getPrototypeOf(PlanarSet.prototype), "add", this).call(this, shape);
                // size not changed - item not added, probably trying to add same item twice
                if (this.size > size) {
                    var node = this.index.insert(shape.box, shape);
                }
                return this; // in accordance to Set.add interface
            }

            /**
             * Delete shape from planar set. Returns true if shape was actually deleted, false otherwise
             * @param {Shape} shape - shape to be deleted
             * @returns {boolean}
             */

        }, {
            key: "delete",
            value: function _delete(shape) {
                var deleted = _get(PlanarSet.prototype.__proto__ || Object.getPrototypeOf(PlanarSet.prototype), "delete", this).call(this, shape);
                if (deleted) {
                    this.index.remove(shape.box, shape);
                }
                return deleted;
            }

            /**
             * Clear planar set
             */

        }, {
            key: "clear",
            value: function clear() {
                _get(PlanarSet.prototype.__proto__ || Object.getPrototypeOf(PlanarSet.prototype), "clear", this).call(this);
                this.index = new IntervalTree();
            }

            /**
             * 2d range search in planar set.<br/>
             * Returns array of all shapes in planar set which bounding box is intersected with query box
             * @param {Box} box - query box
             * @returns {Shapes[]}
             */

        }, {
            key: "search",
            value: function search(box) {
                var resp = this.index.search(box);
                return resp;
            }

            /**
             * Point location test. Returns array of shapes which contains given point
             * @param {Point} point - query point
             * @returns {Array}
             */

        }, {
            key: "hit",
            value: function hit(point) {
                var box = new Flatten.Box(point.x - 1, point.y - 1, point.x + 1, point.y + 1);
                var resp = this.index.search(box);
                return resp.filter(function (shape) {
                    return point.on(shape);
                });
            }

            /**
             * Returns svg string to draw all shapes in planar set
             * @returns {String}
             */

        }, {
            key: "svg",
            value: function svg() {
                var svgcontent = [].concat(_toConsumableArray(this)).reduce(function (acc, shape) {
                    return acc + shape.svg();
                }, "");
                return svgcontent;
            }
        }]);

        return PlanarSet;
    }(Set);
};

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Created by Alex Bol on 2/18/2017.
 */


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Utils = __webpack_require__(/*! ./utils/utils */ "./utils/utils.js");
var Errors = __webpack_require__(/*! ./utils/errors */ "./utils/errors.js");

/**
 * FlattenJS - library for 2d geometry
 * @type {Flatten}
 */
var Flatten = function Flatten() {
    _classCallCheck(this, Flatten);

    this.DP_TOL = Utils.DP_TOL;
    this.CCW = true;
    this.CW = false;
    this.ORIENTATION = { CCW: -1, CW: 1, NOT_ORIENTABLE: 0 };
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
};

var f = new Flatten();

__webpack_require__(/*! ./classes/matrix */ "./classes/matrix.js")(f);
__webpack_require__(/*! ./data_structures/planar_set */ "./data_structures/planar_set.js")(f);
__webpack_require__(/*! ./classes/point */ "./classes/point.js")(f);
__webpack_require__(/*! ./classes/vector */ "./classes/vector.js")(f);
__webpack_require__(/*! ./classes/line */ "./classes/line.js")(f);
__webpack_require__(/*! ./classes/circle */ "./classes/circle.js")(f);
__webpack_require__(/*! ./classes/segment */ "./classes/segment.js")(f);
__webpack_require__(/*! ./classes/arc */ "./classes/arc.js")(f);
__webpack_require__(/*! ./classes/box */ "./classes/box.js")(f);
__webpack_require__(/*! ./classes/edge */ "./classes/edge.js")(f);
__webpack_require__(/*! ./classes/face */ "./classes/face.js")(f);
__webpack_require__(/*! ./classes/ray */ "./classes/ray.js")(f);
__webpack_require__(/*! ./algorithms/ray_shooting */ "./algorithms/ray_shooting.js")(f);
__webpack_require__(/*! ./classes/polygon */ "./classes/polygon.js")(f);
__webpack_require__(/*! ./algorithms/distance */ "./algorithms/distance.js")(f);

module.exports = f;

/***/ }),

/***/ "./node_modules/flatten-interval-tree/classes/interval.js":
/*!****************************************************************!*\
  !*** ./node_modules/flatten-interval-tree/classes/interval.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by Alex Bol on 4/1/2017.
 */

var Interval = function () {
    function Interval(low, high) {
        _classCallCheck(this, Interval);

        this.low = low;
        this.high = high;
    }

    _createClass(Interval, [{
        key: "interval",
        value: function interval(low, high) {
            return new Interval(low, high);
        }
    }, {
        key: "clone",
        value: function clone() {
            return new Interval(this.low, this.high);
        }
    }, {
        key: "less_than",
        value: function less_than(other_interval) {
            return this.low < other_interval.low || this.low == other_interval.low && this.high < other_interval.high;
        }
    }, {
        key: "equal_to",
        value: function equal_to(other_interval) {
            return this.low == other_interval.low && this.high == other_interval.high;
        }
    }, {
        key: "intersect",
        value: function intersect(other_interval) {
            return !this.not_intersect(other_interval);
        }
    }, {
        key: "not_intersect",
        value: function not_intersect(other_interval) {
            return this.high < other_interval.low || other_interval.high < this.low;
        }
    }, {
        key: "output",
        value: function output() {
            return [this.low, this.high];
        }
    }, {
        key: "maximal_val",
        value: function maximal_val(val1, val2) {
            return Math.max(val1, val2);
        }
    }, {
        key: "val_less_than",
        value: function val_less_than(val1, val2) {
            // trait to compare max property with item ?
            return val1 < val2;
        }
    }, {
        key: "max",
        get: function get() {
            return this.high;
        }
    }]);

    return Interval;
}();

module.exports = Interval;

/***/ }),

/***/ "./node_modules/flatten-interval-tree/classes/node.js":
/*!************************************************************!*\
  !*** ./node_modules/flatten-interval-tree/classes/node.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Created by Alex Bol on 4/1/2017.
 */



// let defaultTraits = require('../utils/numeric_traits');

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Interval = __webpack_require__(/*! ../classes/interval */ "./node_modules/flatten-interval-tree/classes/interval.js");

var _require = __webpack_require__(/*! ../utils/constants */ "./node_modules/flatten-interval-tree/utils/constants.js"),
    RB_TREE_COLOR_RED = _require.RB_TREE_COLOR_RED,
    RB_TREE_COLOR_BLACK = _require.RB_TREE_COLOR_BLACK;

var Node = function () {
    function Node() {
        var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
        var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
        var left = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        var right = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
        var parent = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
        var color = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : RB_TREE_COLOR_BLACK;

        _classCallCheck(this, Node);

        this.left = left; // reference to left child node
        this.right = right; // reference to right child node
        this.parent = parent; // reference to parent node
        this.color = color;

        this.item = { key: key, value: value }; // key is supposed to be       instance of Interval

        /* If not, this should by an array of two numbers */
        if (key && key instanceof Array && key.length == 2) {
            if (!Number.isNaN(key[0]) && !Number.isNaN(key[1])) {
                this.item.key = new Interval(Math.min(key[0], key[1]), Math.max(key[0], key[1]));
            }
        }
        this.max = this.item.key ? this.item.key.max : undefined;
    }

    _createClass(Node, [{
        key: 'isNil',
        value: function isNil() {
            return this.item.key === undefined && this.item.value === undefined && this.left === null && this.right === null && this.color === RB_TREE_COLOR_BLACK;
        }
    }, {
        key: 'less_than',
        value: function less_than(other_node) {
            return this.item.key.less_than(other_node.item.key);
        }
    }, {
        key: 'equal_to',
        value: function equal_to(other_node) {
            var value_equal = true;
            if (this.item.value && other_node.item.value) {
                value_equal = this.item.value.equal_to ? this.item.value.equal_to(other_node.item.value) : this.item.value == other_node.item.value;
            }
            return this.item.key.equal_to(other_node.item.key) && value_equal;
        }
    }, {
        key: 'intersect',
        value: function intersect(other_node) {
            return this.item.key.intersect(other_node.item.key);
        }
    }, {
        key: 'copy_data',
        value: function copy_data(other_node) {
            this.item.key = other_node.item.key.clone();
            this.item.value = other_node.item.value;
        }
    }, {
        key: 'update_max',
        value: function update_max() {
            // use key (Interval) max property instead of key.high
            this.max = this.item.key ? this.item.key.max : undefined;
            if (this.right && this.right.max) {
                var maximal_val = this.item.key.maximal_val;
                this.max = maximal_val(this.max, this.right.max);
            }
            if (this.left && this.left.max) {
                var _maximal_val = this.item.key.maximal_val;
                this.max = _maximal_val(this.max, this.left.max);
            }
        }

        // Other_node does not intersect any node of left subtree, if this.left.max < other_node.item.key.low

    }, {
        key: 'not_intersect_left_subtree',
        value: function not_intersect_left_subtree(search_node) {
            var val_less_than = this.item.key.val_less_than;
            var high = this.left.max.high ? this.left.max.high : this.left.max;
            return val_less_than(high, search_node.item.key.low);
        }

        // Other_node does not intersect right subtree if other_node.item.key.high < this.right.key.low

    }, {
        key: 'not_intersect_right_subtree',
        value: function not_intersect_right_subtree(search_node) {
            var val_less_than = this.item.key.val_less_than;
            var low = this.right.max.low ? this.right.max.low : this.right.item.key.low;
            return val_less_than(search_node.item.key.high, low);
        }
    }]);

    return Node;
}();

module.exports = Node;

/***/ }),

/***/ "./node_modules/flatten-interval-tree/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/flatten-interval-tree/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Created by Alex Bol on 3/31/2017.
 */


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Node = __webpack_require__(/*! ./classes/node */ "./node_modules/flatten-interval-tree/classes/node.js");

var _require = __webpack_require__(/*! ./utils/constants */ "./node_modules/flatten-interval-tree/utils/constants.js"),
    RB_TREE_COLOR_RED = _require.RB_TREE_COLOR_RED,
    RB_TREE_COLOR_BLACK = _require.RB_TREE_COLOR_BLACK;

var nil_node = new Node();

/**
 * Implementation of interval binary search tree <br/>
 * Interval tree may store items which are couples of {key:interval, value: value} <br/>
 * Interval is an object with high and low properties or simply array of numeric [low,high] values <br />
 * If interval is an object, it should implement and expose methods less_than, equals_to, intersect and others,
 * see documentation {link}
 * @type {IntervalTree}
 */
var IntervalTree = function () {
    /**
     * Construct new empty instance of IntervalTree
     */
    function IntervalTree() {
        _classCallCheck(this, IntervalTree);

        this.root = null;
    }

    /**
     * Returns number of items stored in the interval tree
     * @returns {number}
     */


    _createClass(IntervalTree, [{
        key: 'insert',


        /**
         * Insert new item into interval tree
         * @param key - interval object or array of two numbers [low, high]
         * @param value - value representing any object (optional)
         * @returns {Node} - returns reference to inserted node as an object {key:interval, value: value}
         */
        value: function insert(key) {
            var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : key;

            if (key === undefined) return;
            var insert_node = new Node(key, value, nil_node, nil_node, null, RB_TREE_COLOR_RED);
            this.tree_insert(insert_node);
            this.recalc_max(insert_node);
            return insert_node;
        }

        /**
         * Returns true if item {key,value} exist in the tree
         * @param key - interval correspondent to keys stored in the tree
         * @param value - value object to be checked
         * @returns {boolean} - true if item {key, value} exist in the tree, false otherwise
         */

    }, {
        key: 'exist',
        value: function exist(key, value) {
            var search_node = new Node(key, value);
            return this.tree_search(this.root, search_node) ? true : false;
        }

        /**
         * Remove entry {key, value} from the tree
         * @param key - interval correspondent to keys stored in the tree
         * @param value - - value object
         * @returns {boolean} - true if item {key, value} deleted, false if not found
         */

    }, {
        key: 'remove',
        value: function remove(key, value) {
            var search_node = new Node(key, value);
            var delete_node = this.tree_search(this.root, search_node);
            if (delete_node) {
                this.tree_delete(delete_node);
            }
            return delete_node;
        }

        /**
         * Returns array of entry values which keys intersect with given interval <br/>
         * If no values stored in the tree, returns array of keys which intersect given interval
         * @param interval - search interval, or array [low, high]
         * @returns {Array}
         */

    }, {
        key: 'search',
        value: function search(interval) {
            var search_node = new Node(interval);
            var resp_nodes = [];
            this.tree_search_interval(this.root, search_node, resp_nodes);
            var resp = [];
            resp_nodes.forEach(function (node) {
                if (node.item.value) {
                    // if there are values, return only values
                    resp.push(node.item.value);
                } else {
                    // otherwise, return keys
                    resp.push(node.item.key.output());
                }
            }, []);
            return resp;
        }

        /**
         * Tree visitor. For each node implement a callback function. <br/>
         * Method calls a callback function with two parameters (key, value)
         * @param visitor(key,value) - function to be called for each tree item
         */

    }, {
        key: 'forEach',
        value: function forEach(visitor) {
            this.tree_walk(this.root, function (node) {
                return visitor(node.item.key, node.item.value);
            });
        }
    }, {
        key: 'recalc_max',
        value: function recalc_max(node) {
            var node_current = node;
            while (node_current.parent != null) {
                node_current.parent.update_max();
                node_current = node_current.parent;
            }
        }
    }, {
        key: 'tree_insert',
        value: function tree_insert(insert_node) {
            var current_node = this.root;
            var parent_node = null;

            if (this.root == null || this.root == nil_node) {
                this.root = insert_node;
            } else {
                while (current_node != nil_node) {
                    parent_node = current_node;
                    if (insert_node.less_than(current_node)) {
                        current_node = current_node.left;
                    } else {
                        current_node = current_node.right;
                    }
                }

                insert_node.parent = parent_node;

                if (insert_node.less_than(parent_node)) {
                    parent_node.left = insert_node;
                } else {
                    parent_node.right = insert_node;
                }
            }

            this.insert_fixup(insert_node);
        }

        // After insertion insert_node may have red-colored parent, and this is a single possible violation
        // Go upwords to the root and re-color until violation will be resolved

    }, {
        key: 'insert_fixup',
        value: function insert_fixup(insert_node) {
            var current_node = void 0;
            var uncle_node = void 0;

            current_node = insert_node;
            while (current_node != this.root && current_node.parent.color == RB_TREE_COLOR_RED) {
                if (current_node.parent == current_node.parent.parent.left) {
                    // parent is left child of grandfather
                    uncle_node = current_node.parent.parent.right; // right brother of parent
                    if (uncle_node.color == RB_TREE_COLOR_RED) {
                        // Case 1. Uncle is red
                        // re-color father and uncle into black
                        current_node.parent.color = RB_TREE_COLOR_BLACK;
                        uncle_node.color = RB_TREE_COLOR_BLACK;
                        current_node.parent.parent.color = RB_TREE_COLOR_RED;
                        current_node = current_node.parent.parent;
                    } else {
                        // Case 2 & 3. Uncle is black
                        if (current_node == current_node.parent.right) {
                            // Case 2. Current if right child
                            // This case is transformed into Case 3.
                            current_node = current_node.parent;
                            this.rotate_left(current_node);
                        }
                        current_node.parent.color = RB_TREE_COLOR_BLACK; // Case 3. Current is left child.
                        // Re-color father and grandfather, rotate grandfather right
                        current_node.parent.parent.color = RB_TREE_COLOR_RED;
                        this.rotate_right(current_node.parent.parent);
                    }
                } else {
                    // parent is right child of grandfather
                    uncle_node = current_node.parent.parent.left; // left brother of parent
                    if (uncle_node.color == RB_TREE_COLOR_RED) {
                        // Case 4. Uncle is red
                        // re-color father and uncle into black
                        current_node.parent.color = RB_TREE_COLOR_BLACK;
                        uncle_node.color = RB_TREE_COLOR_BLACK;
                        current_node.parent.parent.color = RB_TREE_COLOR_RED;
                        current_node = current_node.parent.parent;
                    } else {
                        if (current_node == current_node.parent.left) {
                            // Case 5. Current is left child
                            // Transform into case 6
                            current_node = current_node.parent;
                            this.rotate_right(current_node);
                        }
                        current_node.parent.color = RB_TREE_COLOR_BLACK; // Case 6. Current is right child.
                        // Re-color father and grandfather, rotate grandfather left
                        current_node.parent.parent.color = RB_TREE_COLOR_RED;
                        this.rotate_left(current_node.parent.parent);
                    }
                }
            }

            this.root.color = RB_TREE_COLOR_BLACK;
        }
    }, {
        key: 'tree_delete',
        value: function tree_delete(delete_node) {
            var cut_node = void 0; // node to be cut - either delete_node or successor_node  ("y" from 14.4)
            var fix_node = void 0; // node to fix rb tree property   ("x" from 14.4)

            if (delete_node.left == nil_node || delete_node.right == nil_node) {
                // delete_node has less then 2 children
                cut_node = delete_node;
            } else {
                // delete_node has 2 children
                cut_node = this.tree_successor(delete_node);
            }

            // fix_node if single child of cut_node
            if (cut_node.left != nil_node) {
                fix_node = cut_node.left;
            } else {
                fix_node = cut_node.right;
            }

            // remove cut_node from parent
            /*if (fix_node != nil_node) {*/
            fix_node.parent = cut_node.parent;
            /*}*/

            if (cut_node == this.root) {
                this.root = fix_node;
            } else {
                if (cut_node == cut_node.parent.left) {
                    cut_node.parent.left = fix_node;
                } else {
                    cut_node.parent.right = fix_node;
                }
                cut_node.parent.update_max(); // update max property of the parent
            }

            this.recalc_max(fix_node); // update max property upward from fix_node to root

            // COPY DATA !!!
            // Delete_node becomes cut_node, it means that we cannot hold reference
            // to node in outer structure and we will have to delete by key, additional search need
            if (cut_node != delete_node) {
                delete_node.copy_data(cut_node);
                delete_node.update_max(); // update max property of the cut node at the new place
                this.recalc_max(delete_node); // update max property upward from delete_node to root
            }

            if ( /*fix_node != nil_node && */cut_node.color == RB_TREE_COLOR_BLACK) {
                this.delete_fixup(fix_node);
            }
        }
    }, {
        key: 'delete_fixup',
        value: function delete_fixup(fix_node) {
            var current_node = fix_node;
            var brother_node = void 0;

            while (current_node != this.root && current_node.parent != null && current_node.color == RB_TREE_COLOR_BLACK) {
                if (current_node == current_node.parent.left) {
                    // fix node is left child
                    brother_node = current_node.parent.right;
                    if (brother_node.color == RB_TREE_COLOR_RED) {
                        // Case 1. Brother is red
                        brother_node.color = RB_TREE_COLOR_BLACK; // re-color brother
                        current_node.parent.color = RB_TREE_COLOR_RED; // re-color father
                        this.rotate_left(current_node.parent);
                        brother_node = current_node.parent.right; // update brother
                    }
                    // Derive to cases 2..4: brother is black
                    if (brother_node.left.color == RB_TREE_COLOR_BLACK && brother_node.right.color == RB_TREE_COLOR_BLACK) {
                        // case 2: both nephews black
                        brother_node.color = RB_TREE_COLOR_RED; // re-color brother
                        current_node = current_node.parent; // continue iteration
                    } else {
                        if (brother_node.right.color == RB_TREE_COLOR_BLACK) {
                            // case 3: left nephew red, right nephew black
                            brother_node.color = RB_TREE_COLOR_RED; // re-color brother
                            brother_node.left.color = RB_TREE_COLOR_BLACK; // re-color nephew
                            this.rotate_right(brother_node);
                            brother_node = current_node.parent.right; // update brother
                            // Derive to case 4: left nephew black, right nephew red
                        }
                        // case 4: left nephew black, right nephew red
                        brother_node.color = current_node.parent.color;
                        current_node.parent.color = RB_TREE_COLOR_BLACK;
                        brother_node.right.color = RB_TREE_COLOR_BLACK;
                        this.rotate_left(current_node.parent);
                        current_node = this.root; // exit from loop
                    }
                } else {
                    // fix node is right child
                    brother_node = current_node.parent.left;
                    if (brother_node.color == RB_TREE_COLOR_RED) {
                        // Case 1. Brother is red
                        brother_node.color = RB_TREE_COLOR_BLACK; // re-color brother
                        current_node.parent.color = RB_TREE_COLOR_RED; // re-color father
                        this.rotate_right(current_node.parent);
                        brother_node = current_node.parent.left; // update brother
                    }
                    // Go to cases 2..4
                    if (brother_node.left.color == RB_TREE_COLOR_BLACK && brother_node.right.color == RB_TREE_COLOR_BLACK) {
                        // case 2
                        brother_node.color = RB_TREE_COLOR_RED; // re-color brother
                        current_node = current_node.parent; // continue iteration
                    } else {
                        if (brother_node.left.color == RB_TREE_COLOR_BLACK) {
                            // case 3: right nephew red, left nephew black
                            brother_node.color = RB_TREE_COLOR_RED; // re-color brother
                            brother_node.right.color = RB_TREE_COLOR_BLACK; // re-color nephew
                            this.rotate_left(brother_node);
                            brother_node = current_node.parent.left; // update brother
                            // Derive to case 4: right nephew black, left nephew red
                        }
                        // case 4: right nephew black, left nephew red
                        brother_node.color = current_node.parent.color;
                        current_node.parent.color = RB_TREE_COLOR_BLACK;
                        brother_node.left.color = RB_TREE_COLOR_BLACK;
                        this.rotate_right(current_node.parent);
                        current_node = this.root; // force exit from loop
                    }
                }
            }

            current_node.color = RB_TREE_COLOR_BLACK;
        }
    }, {
        key: 'tree_search',
        value: function tree_search(node, search_node) {
            if (node == null || node == nil_node) return undefined;

            if (search_node.equal_to(node)) {
                return node;
            }
            if (search_node.less_than(node)) {
                return this.tree_search(node.left, search_node);
            } else {
                return this.tree_search(node.right, search_node);
            }
        }

        // Original search_interval method; container res support push() insertion
        // Search all intervals intersecting given one

    }, {
        key: 'tree_search_interval',
        value: function tree_search_interval(node, search_node, res) {
            if (node != null && node != nil_node) {
                // if (node->left != nil_node && node->left->max >= low) {
                if (node.left != nil_node && !node.not_intersect_left_subtree(search_node)) {
                    this.tree_search_interval(node.left, search_node, res);
                }
                // if (low <= node->high && node->low <= high) {
                if (node.intersect(search_node)) {
                    res.push(node);
                }
                // if (node->right != nil_node && node->low <= high) {
                if (node.right != nil_node && !node.not_intersect_right_subtree(search_node)) {
                    this.tree_search_interval(node.right, search_node, res);
                }
            }
        }
    }, {
        key: 'local_minimum',
        value: function local_minimum(node) {
            var node_min = node;
            while (node_min.left != null && node_min.left != nil_node) {
                node_min = node_min.left;
            }
            return node_min;
        }

        // not in use

    }, {
        key: 'local_maximum',
        value: function local_maximum(node) {
            var node_max = node;
            while (node_max.right != null && node_max.right != nil_node) {
                node_max = node_max.right;
            }
            return node_max;
        }
    }, {
        key: 'tree_successor',
        value: function tree_successor(node) {
            var node_successor = void 0;
            var current_node = void 0;
            var parent_node = void 0;

            if (node.right != nil_node) {
                node_successor = this.local_minimum(node.right);
            } else {
                current_node = node;
                parent_node = node.parent;
                while (parent_node != null && parent_node.right == current_node) {
                    current_node = parent_node;
                    parent_node = parent_node.parent;
                }
                node_successor = parent_node;
            }
            return node_successor;
        }

        //           |            right-rotate(T,y)       |
        //           y            ---------------.       x
        //          / \                                  / \
        //         x   c          left-rotate(T,x)      a   y
        //        / \             <---------------         / \
        //       a   b                                    b   c

    }, {
        key: 'rotate_left',
        value: function rotate_left(x) {
            var y = x.right;

            x.right = y.left; // b goes to x.right

            if (y.left != nil_node) {
                y.left.parent = x; // x becomes parent of b
            }
            y.parent = x.parent; // move parent

            if (x == this.root) {
                this.root = y; // y becomes root
            } else {
                // y becomes child of x.parent
                if (x == x.parent.left) {
                    x.parent.left = y;
                } else {
                    x.parent.right = y;
                }
            }
            y.left = x; // x becomes left child of y
            x.parent = y; // and y becomes parent of x

            if (x != null && x != nil_node) {
                x.update_max();
            }

            y = x.parent;
            if (y != null && y != nil_node) {
                y.update_max();
            }
        }
    }, {
        key: 'rotate_right',
        value: function rotate_right(y) {
            var x = y.left;

            y.left = x.right; // b goes to y.left

            if (x.right != nil_node) {
                x.right.parent = y; // y becomes parent of b
            }
            x.parent = y.parent; // move parent

            if (y == this.root) {
                // x becomes root
                this.root = x;
            } else {
                // y becomes child of x.parent
                if (y == y.parent.left) {
                    y.parent.left = x;
                } else {
                    y.parent.right = x;
                }
            }
            x.right = y; // y becomes right child of x
            y.parent = x; // and x becomes parent of y

            if (y != null && y != nil_node) {
                y.update_max();
            }

            x = y.parent;
            if (x != null && x != nil_node) {
                x.update_max();
            }
        }
    }, {
        key: 'tree_walk',
        value: function tree_walk(node, action) {
            if (node != null && node != nil_node) {
                this.tree_walk(node.left, action);
                // arr.push(node.toArray());
                action(node);
                this.tree_walk(node.right, action);
            }
        }

        /* Return true if all red nodes have exactly two black child nodes */

    }, {
        key: 'testRedBlackProperty',
        value: function testRedBlackProperty() {
            var res = true;
            this.tree_walk(this.root, function (node) {
                if (node.color == RB_TREE_COLOR_RED) {
                    if (!(node.left.color == RB_TREE_COLOR_BLACK && node.right.color == RB_TREE_COLOR_BLACK)) {
                        res = false;
                    }
                }
            });
            return res;
        }

        /* Throw error if not every path from root to bottom has same black height */

    }, {
        key: 'testBlackHeightProperty',
        value: function testBlackHeightProperty(node) {
            var height = 0;
            var heightLeft = 0;
            var heightRight = 0;
            if (node.color == RB_TREE_COLOR_BLACK) {
                height++;
            }
            if (node.left != nil_node) {
                heightLeft = this.testBlackHeightProperty(node.left);
            } else {
                heightLeft = 1;
            }
            if (node.right != nil_node) {
                heightRight = this.testBlackHeightProperty(node.right);
            } else {
                heightRight = 1;
            }
            if (heightLeft != heightRight) {
                throw new Error('Red-black height property violated');
            }
            height += heightLeft;
            return height;
        }
    }, {
        key: 'size',
        get: function get() {
            var count = 0;
            this.tree_walk(this.root, function () {
                return count++;
            });
            return count;
        }
    }, {
        key: 'keys',
        get: function get() {
            var res = [];
            this.tree_walk(this.root, function (node) {
                return res.push(node.item.key.output());
            });
            return res;
        }
    }, {
        key: 'isEmpty',
        get: function get() {
            return this.root == null || this.root == nil_node;
        }
    }]);

    return IntervalTree;
}();

module.exports = IntervalTree;

/***/ }),

/***/ "./node_modules/flatten-interval-tree/utils/constants.js":
/*!***************************************************************!*\
  !*** ./node_modules/flatten-interval-tree/utils/constants.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Created by Alex Bol on 3/28/2017.
 */



module.exports = {
  RB_TREE_COLOR_RED: 0,
  RB_TREE_COLOR_BLACK: 1
};

/***/ }),

/***/ "./utils/errors.js":
/*!*************************!*\
  !*** ./utils/errors.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Created by Alex Bol on 2/19/2017.
 */
module.exports = {
  ILLEGAL_PARAMETERS: new ReferenceError('Illegal Parameters'),
  ZERO_DIVISION: new Error('Zero division')
};

/***/ }),

/***/ "./utils/utils.js":
/*!************************!*\
  !*** ./utils/utils.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Created by Alex Bol on 2/18/2017.
 */

/**
 * Global constant DP_TOL is used for comparison of floating point numbers.
 * It is set to 0.000001.
 * @type {number}
 */
var DP_TOL = 0.000001;
var DECIMALS = 3;

module.exports = {
  DP_TOL: DP_TOL,
  /**
   * Returns *true* if value comparable to zero
   * @return {boolean}
   */
  EQ_0: function EQ_0(x) {
    return x < DP_TOL && x > -DP_TOL;
  },
  /**
   * Returns *true* if two values are equal up to DP_TOL
   * @return {boolean}
   */
  EQ: function EQ(x, y) {
    return x - y < DP_TOL && x - y > -DP_TOL;
  },
  /**
   * Returns *true* if first argument greater than second argument up to DP_TOL
   * @return {boolean}
   */
  GT: function GT(x, y) {
    return x - y > DP_TOL;
  },
  /**
   * Returns *true* if first argument greater than or equal to second argument up to DP_TOL
   * @return {boolean}
   */
  GE: function GE(x, y) {
    return x - y > -DP_TOL;
  },
  /**
   * Returns *true* if first argument less than second argument up to DP_TOL
   * @return {boolean}
   */
  LT: function LT(x, y) {
    return x - y < -DP_TOL;
  },
  /**
   * Returns *true* if first argument less than or equal to second argument up to DP_TOL
   * @return {boolean}
   */
  LE: function LE(x, y) {
    return x - y < DP_TOL;
  }
};

/***/ })

/******/ });
//# sourceMappingURL=flatten.commonjs2.js.map