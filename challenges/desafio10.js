db.produtos.updateMany(
    {},
    { $push: {
        vendasPorDia: {
            $each: [0, 0, 0, 0, 0, 0, 0],
        },
      },
    },
    { upsert: true },
);
db.produtos.updateOne(
    { nome: "Big Mac" },
    { $inc: { "vendasPorDia.3": 60 } },
);
db.produtos.updateOne(
    { tags: ["bovino", "pão"] },
    { $inc: { "vendasPorDia.6": 120 } },
);
db.produtos.find({}, { _id: 0, nome: 1, vendasPorDia: 1 });
