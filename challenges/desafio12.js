// 12 - Ordene em todos os documentos os elementos do array valoresNutricionais pelo campo percentual de forma descendente.
// use("commerce");
db.produtos.updateMany(
  { },
  {
    $push: {
      valoresNutricionais: {
      $each: [],
      $sort: { percentual: -1 },
    },
    },
  },
);
db.produtos.find(
  {},
  { _id: 0, nome: 1, valoresNutricionais: 1 },
);
