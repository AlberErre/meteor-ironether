// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by ironether.js.
import { name as packageName } from "meteor/albererre:ironether";

// Write your tests here!
// Here is an example.
Tinytest.add('ironether - example', function (test) {
  test.equal(packageName, "ironether");
});
