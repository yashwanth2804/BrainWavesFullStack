var mongoose = require("mongoose");
var os = require("os");
var Map = require("collections/map");

//a.split(os.EOL);

var fs = require("fs");
var path = require("path");

var myArgs = process.argv.slice(2);
let db_ = myArgs[0];
let collection_ = myArgs[1];
let path_ = myArgs[2];

// make a connection
mongoose.connect("mongodb://localhost:27017/" + db_);

// get reference to database
var db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));

db.once("open", function() {
  console.log("Connection Successful!");

  // define Schema
  var BookSchema = mongoose.Schema({}, { strict: false });

  // compile schema to model
  var Book = mongoose.model("Book", BookSchema, collection_);

  var recursiveSearch = function(directoryPath) {
    fs.readdir(directoryPath, function(err, list) {
      if (err) {
        return;
      }

      list.forEach(function(file) {
        console.log("reading file " + file);
        file = path.resolve(directoryPath, file);

        fs.stat(file, function(err, stat) {
          if (stat && stat.isDirectory()) {
            recursiveSearch(file);
          } else {
            fs.readFile(file, { encoding: "utf-8" }, function(err, data) {
              // read file contents here and
              console.log(file);
              console.log();

              let json = JSON.stringify(data);

              const spl = json.split("\\n");

              console.log("length is" + spl.length);

              var obj = {};

              for (var i = 0; i < spl.length; i++) {
                if (i === 0 || i === spl.length - 1) {
                  console.log("-----");
                } else {
                  let tokens = spl[i].split(":").slice(1);

                  obj["_" + tokens[0]] = tokens[1];
                }
              }

              var book1 = new Book(obj);

              //console.log(obj);
              book1.save(function(err, book) {
                if (err) return console.error(err);
                console.log(book.name + " saved to bookstore collection.");
              });
            });
          }
        });
      });
    });
  };

  recursiveSearch(path_);

  // a document instance
  //   var book1 = new Book({
  //     "20": "KTPP27663063",
  //     "36": "3.59609",
  //     "56": "CHASUS33XXX",
  //     "22A": "NEWT",
  //     "22C": "NEWGL1113SOGEPP",
  //     "30T": "14/0col3/2019",
  //     "52A": "NEWGGB2L",
  //     "82A": "NEWGGB2L",
  //     "87A": "SOGEFRPPHCM",
  //     "77H": "ISDA 01/06/2001",
  //     "30V": "15/03/2019",
  //     "32B": "ILS 1908000.02",
  //     "57A": "POALILITXXX",
  //     "33B": "USD 530576.27",
  //     "53A": "BCMRMXMMXXX",
  //     "57D": "BCMRMXMMXXX",
  //     "58A": "SOGEFRPPHCM",
  //     "24D": "BROK"
  //   });

  // save model to database
});
