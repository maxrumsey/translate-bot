const {Translate} = require('@google-cloud/translate');
const translate = new Translate({projectId: 'blissful-axiom-250110'});
//blissful-axiom-250110
module.exports = async (txt) => {
  console.log(txt)
  const [translation] = await translate.translate(txt, 'en');
  return translation
}
