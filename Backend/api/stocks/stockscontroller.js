const SG = require("./SGmodel");
const CL = require("./CLmodel");

const _ = require("lodash");

const axios = require("axios");

/**
 * Get list of all posts confirmed by the blockchain
 * @returns {Tweet[]}
 */

const getSearch = async (req, res) => {
  //console.log(req)
  console.log("get Search ref or 82 87 isda" + req.body.search);

  //06997FXJ1327904K

  try {
    const Restrants = await SG.aggregate([
      {
        $match: {
          $or: [
            { _20: req.body.search },
            { _30T: req.body.search },
            { _82A: { $regex: req.body.search, $options: "i" } },
            { _77H: req.body.search }
          ]
        }
      },
      {
        $lookup: {
          from: "cl",
          let: {
            partyb: "$_87A",
            schemaBId: "$_77H",
            cdate: "$_30T",

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
    ]);

    res.send(Restrants);
  } catch (err) {
    console.error(err);
  }
};

const getAll = async (req, res) => {
  //console.log(req)

  try {
    const Restrants = await SG.aggregate([
      {
        $lookup: {
          from: "cl",
          let: {
            partyb: "$_87A",
            schemaBId: "$_77H",
            cdate: "$_30T",
            
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
    ]);

    res.send(Restrants);
  } catch (err) {
    console.error(err);
  }
};

module.exports = { getAll, getSearch };
