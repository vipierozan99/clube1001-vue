const diretorias = [];
const nameRegex = /(([^,: "])+)( ([^,: "])+)*( ([^,: "])+)*:/g;
const contRegex = /: *(([^,: "])+)( ([^,: "])+)( ([^,: "])+)*/g;

function replaceDiacritics(str) {
  var diacritics = [
    { char: "A", base: /[\300-\306]/g },
    { char: "a", base: /[\340-\346]/g },
    { char: "E", base: /[\310-\313]/g },
    { char: "e", base: /[\350-\353]/g },
    { char: "I", base: /[\314-\317]/g },
    { char: "i", base: /[\354-\357]/g },
    { char: "O", base: /[\322-\330]/g },
    { char: "o", base: /[\362-\370]/g },
    { char: "U", base: /[\331-\334]/g },
    { char: "u", base: /[\371-\374]/g },
    { char: "N", base: /[\321]/g },
    { char: "n", base: /[\361]/g },
    { char: "C", base: /[\307]/g },
    { char: "c", base: /[\347]/g }
  ];

  diacritics.forEach(function(letter) {
    str = str.replace(letter.base, letter.char);
  });

  return str;
}

function fixStringForJSON(string) {
  string = string.replace(nameRegex, match => {
    match = match
      .toLowerCase()
      .split(" ")
      .join("_");

    return replaceDiacritics(match);
  });
  string = string.replace(contRegex, match => {
    match = '"' + match.slice(1).trim();
    return ":" + match + '"';
  });
  string = string.replace(/:/g, '":');
  string = string.replace(/,/g, ',"');
  string = '{"' + string + "}";
  string = string.replace(/-/g, "_");
  return string;
}

var d00 =
  "Presidente: Leonel Arcângelo Pavan,Vice-Presidente: Arnaldo Lermen,Secretário: Demétrius Ubiratan Hintz,Tesoureiro: Wilson da Silva,Diretor de Patrimônio: Pedro Edu Floriani,Diretor de Esportes: Roque Ângelo Ogliari,Diretor Social: Célio Bernardino,Diretor cultural: Jairo Graça Pinto,Orador Oficial: Antonio Manoel Soares Santa";
d00 = fixStringForJSON(d00);

diretorias[8] = JSON.parse(d00);
diretorias[8].title = "2000/2002";

var d02 =
  "Presidente de Honra: Leonel A. Pavan,Presidente: Demétrius Ubiratan Hintz,Vice-Presidente: João Luiz Francisco,Secretário: João Olindino Koedermann,Tesoureiro: Roque Ângelo Ogliari,Diretor de Patrimônio: Egon Neuwirth,Diretor de Esportes: João Antonio Pierozan,Diretor social: Célio Bernardino,Diretor cultural: Arnaldo Lermenn,Orador Oficial: Antonio Manoel Soares Santa";
d02 = fixStringForJSON(d02);
diretorias[7] = JSON.parse(d02);
diretorias[7].title = "2002/2004";

var d04 =
  "Presidente de Honra: Leonel A. Pavan,Presidente: Roque Angelo Ogliari,Vice_Presidente: Egon Neuwirth,Tesoureiro: Renaldo Kormann,Secretário: Carlos Roberto Soares,Diretor de Patrimônio: João A. Pierozan,Diretor de Esportes: Alessando Fondini,Diretor social: Pedro Francez,Diretor cultural: Demétrius Ubiratan Hintz,Orador Oficial: Roberto Gonçalves Dàvila";
d04 = fixStringForJSON(d04);
diretorias[6] = JSON.parse(d04);
diretorias[6].title = "2004/2006";

var d06 =
  "Presidente de Honra:Leonel A. Pavan,Presidente:Roque Ângelo Ogliari,Vice-Presidente:Demétrius Ubiratan Hintz,Diretor de Patrimônio:João Antônio Pierozan,Tesoureiro:Renaldo Kormann,Secretário:Cláudio Raupp,Diretor de Esportes:Adalberto P. Tolentino,Diretor social:Pedro Francez,Diretor Cultural:Egon Neuwirt,Orador Oficial:Roberto Gonçalves Dávila";
d06 = fixStringForJSON(d06);
diretorias[5] = JSON.parse(d06);
diretorias[5].title = "2006/2008";

var d08 =
  "PRESIDENTE DE HONRA: Leonel A. Pavan,PRESIDENTE: João Antônio Pierozan,VICE-PRESiDENTE: Roque Ângelo Ogliari,TESOUREIRO: Adelcio Bernardino,SECRETÁRIO:Pedro Francez,DIRETOR DE ESPORTES: Adalberto Tolentino,DIRETOR SOCIAL: Irno Glaeser,DIRETOR DE PATRIMÔNIO: Claudio Raupp,DIRETOR cultural: Egon Neuwirt,ORADOR oficial: Demétrius Hintz";
d08 = fixStringForJSON(d08);
diretorias[4] = JSON.parse(d08);
diretorias[4].title = "2008/2010";

var d10 =
  "PRESIDENTE DE HONRA: Leonel A. Pavan,PRESIDENTE: João Antônio Pierozan,VICE-PRESidENTE: Raulino Raul Rosar,TESOUREIRO: Rui Rosar,SECRETÁRIO: Roque Ângelo Ogliari,DIRETOR DE ESPORTES: Valdoci Brustolin,DIRETOR SOCIAL: Pedro Francez,DIRETOR DE PATRIMÔNIO: Irno Ivo Glaeser,DIRETOR CULTURAL: Adalberto P.Tolentino,ORADOR oficial: João Olindino Koeddermann";
d10 = fixStringForJSON(d10);
diretorias[3] = JSON.parse(d10);
diretorias[3].title = "2010/2014";

var d12 =
  "Presidente de Honra: Leonel A. Pavan,Presidente: Roque Ângelo Ogliari,Vice-Presidente: Raulino Raul Rosar,Diretor de Patrimônio: João A. Pierozan,Tesoureiro: Darius Pereira,Secretário: Pedro Francez,Diretor de Esportes: Valdoci Brustolin,Diretor Social: Irno Ivo Glaeser,Diretor Cultural: Pedro Rovaris,Orador Oficial: Luiz Antonio Gonçalves";
d12 = fixStringForJSON(d12);
diretorias[2] = JSON.parse(d12);
diretorias[2].title = "2012/2014";

var d14 =
  "Presidente de Honra: Leonel A. Pavan,Presidente: Raulino Raul Rosar,Vice-Presidente: Wilson Luiz Batista,Diretor de Patrimônio: João A. Pierozan,Tesoureiro: Darius Inácio Pereira,Secretário: Valdoci Brustolin,Diretor de Esportes: Adalberto Pilar Tolentino,Diretor Social: Irno Ivo Glaeser,Diretor Cultural: Pedro Rovaris,Orador Oficial: Pedro Francez";
d14 = fixStringForJSON(d14);
diretorias[1] = JSON.parse(d14);
diretorias[1].title = "2014/2016";

var d16 =
  "Presidente de Honra: Leonel A. Pavan,Presidente: Adalberto Pillar Tolentino,Vice-Presidente: Valdoci Brustolin,Diretor de Patrimônio: Antonio R. Gonçalves ,Tesoureiro: Vilmar dos Santos,Secretário: Renan Rosa Rosar,Diretor de Esportes: José Aparecido Navachi ,Diretor Social: Luiz Antonio Gonçalves,Diretor Cultural: Adir Nardino,Orador Oficial: João Luiz Francisco";
d16 = fixStringForJSON(d16);
diretorias[0] = JSON.parse(d16);
diretorias[0].title = "2016/2018";
export default diretorias;
