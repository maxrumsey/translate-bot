const {Translate} = require('@google-cloud/translate');
const translate = new Translate({projectId: process.env.PROJECTID});

module.exports = async (txt) => {
  const [translation] = await translate.translate(txt, 'en');
  return translation
}
