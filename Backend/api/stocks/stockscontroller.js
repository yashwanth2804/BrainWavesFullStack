const SG = require("./SGmodel");
const CL = require("./CLmodel");

const _ = require("lodash");

const axios = require("axios");

/**
 * Get list of all posts confirmed by the blockchain
 * @returns {Tweet[]}
 */

// const getStockHistory = async (req, res) => {
//   //console.log(req)
//   console.log("get stocks" + req.params.symbol);

//   try {
//     const Restrants = await Stocks.find({ symbol: req.params.symbol })
//       .sort({ date: -1 })
//       .exec();

//     res.send(Restrants);
//   } catch (err) {
//     console.error(err);
//   }
// };

const getAll = async (req, res) => {
  //console.log(req)
  console.log("get stocks" + req.params.symbol);

  try {
    // const Restrants = await SG.find({}).exec();
    // console.log(Restrants);
    // res.send(Restrants);

    // const Restrants = await SG.aggregate([
    //   { $limit: 10 },
    //   {
    //     $lookup: {
    //       from: "cl", // collection name in db
    //       localField: "_82A",
    //       foreignField: "_87A",
    //       as: "party"
    //     }
    //   }
    // ]).exec();

    const Restrants = await SG.aggregate([
      {
        $lookup: {
          from: "cl",
          let: {
            partyb: "$_87A",
            schemaBId: "$_77H",
            cdate: "$_30T",
            // vdate: "$_30V",
            // excrate: "$_36",
            // webuy: "$_32B",
            // wesel: "$_33B",

            inteD: "$_56D",

            setelD: "$_57D",

            beniD: "$_58D"
          },
          pipeline: [
            {
              $match: {
                //  $expr: { $eq: ["$_77H", "$$schemaBId"] }
                $expr: {
                  $and: [
                    { $eq: ["$_82A", "$$partyb"] },
                    { $eq: ["$_77H", "$$schemaBId"] },
                    { $eq: ["$_30T", "$$cdate"] },

                    // { $eq: ["$_30V", "$$vdate"] },
                    // { $eq: ["$_36", "$$excrate"] },

                    // { $eq: ["$_33B", "$$webuy"] },
                    // { $eq: ["$_32B", "$$wesel"] },

                    { $eq: ["$_56A", "$$inteD"] },
                    { $eq: ["$_57A", "$$setelD"] },

                    { $eq: ["$_58A", "$$beniD"] }
                  ]
                }
              }
            }
          ],
          as: "schemasC"
        }
      },
      { $unwind: "$schemasC" }
      // {
      //   $lookup: {
      //     from: "cl",
      //     let: { isda: "$_77H" },
      //     pipeline: [
      //       {
      //         $match: {
      //           $expr: {
      //             $and: [{ $eq: ["$_77H", "$$isda"] }]
      //           }
      //         }
      //       },
      //       { $project: { _77H: 0, _id: 0 } }
      //     ],
      //     as: "collection2_doc"
      //   }
      // }

      // { $unwind: "$collection2_doc" }
      // { $match: { $_77H: $collection2_doc._77H } }
      // {
      //   $match: {
      //     $and: [{ _77H: { $in: $$collection2_doc._77H } }]
      //   }
      // }
    ]);

    res.send(Restrants);
  } catch (err) {
    console.error(err);
  }
};

module.exports = { getAll };
