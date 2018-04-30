/***************************************************************** */
/* Author: Gregory R. Flowers Jr. */
/* Date: March 23, 2018 */
/* Description: This DataGraph.js file retrieves fact table data,
    which is aggregated using the driver's license attribute, and
    shapes the data into a graphing model with nodes and edges. */

/***************************************************************** */

// Include libraries
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');


