db.produtos.updateMany({}, { $set: { avaliacao: 3 } });
db.produtos.updateMany({ tags: "bovino" }, { $set: { avaliacao: 3 } });
db.produtos.updateMany({ tags: "ave" }, { $set: { avaliacao: 3 } });
db.produtos.find({}, { _id: 0, nome: 1, avaliacao: 1 });
db.produtos.find({}, { _id: 0, nome: 1, avaliacao: 1 });
