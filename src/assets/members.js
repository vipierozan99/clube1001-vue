var members = [
  "Adalberto Pillar Tolentino ",
  "Ademir Balbinot ",
  "Adir Nardino ",
  "Ailton Machado  ",
  "Antonio Rocha Gonçalves ",
  "Arnaldo Lermann",
  "Artemio Chiarello ",
  "Claudio Raup",
  "Edson Luiz Vicente ",
  "Fabio Machado Colla",
  "Gelson Jose Rodrigues ",
  "Hilda Balbinot",
  "Irno Ivo Glaeser ",
  "Jean Carlos Conceição ",
  "João Antônio Pierozan",
  "João Carlos Petersen",
  "João Luiz Francisco ",
  "Joel de Almeida Carvalho",
  "Joel Rogério Pires Junior",
  "José Aparecido Navachi ",
  "José Carlos Hasmann Neto ",
  "Lauri Pavan ",
  "Leonel Arcângelo Pavan ",
  "Luiz Antonio Gonçalves ",
  "Luiz Fernando Benvenutti  ",
  "Marcus Vinicius de Camargo ",
  "Nivaldo Vieira ",
  "Olvi Pavan",
  "Ricieri Boscatto Pierozan",
  "Pedro Batista Santana ",
  "Pedro Francez",
  "Pedro Rovaris ",
  "Rafael Kowalski Rosar ",
  "Rafael Pierozan",
  "Raulino Raul Rosar ",
  "Renan Rosa Rosar ",
  "Ricieri Boscatto Pierozan",
  "Roberto D'Avila ",
  "Roberto Oliani ",
  "Silas Pierozan",
  "Valdoci Luiz Brustolin ",
  "Vilmar dos Santos ",
  "Wilson Luiz Batista ",
  "william Casarotto Balbinot",
  "Trac Adm. de Bens Ltda"
];

var members1 = ["Adalberto Pillar Tolentino "];
var members2 = [];

for (var i = 1; i < members.length; i++) {
  if (i % 2 == 0) {
    members1.push(members[i]);
  } else {
    members2.push(members[i]);
  }
}

members = [members1, members2];

export default members;
