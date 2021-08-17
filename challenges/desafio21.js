// Retorne o nome dos sanduíches em que o número de curtidas é maior que o número de sanduíches vendidos.

db.produtos.find(
  { 
    $expr: { $gt: ["$curtidas", "$vendidos"] }, 
  },
  {
    _id: false,
    nome: true,
  },
);
