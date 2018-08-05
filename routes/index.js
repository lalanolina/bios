var express = require('express');
var router = express.Router();

const bios = {
  helicopterson: {
    id: 'helicopterson',
    name: 'Helicopterson dos Santos',
    role: 'Escritor, poeta',
    birth: '1870',
    death: '1950',
    background: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus varius nec arcu vel consectetur. Sed at semper velit. Nam tincidunt lorem quis diam varius, sed ultrices velit tincidunt. Nullam vehicula ex purus, in egestas augue rutrum at. Donec cursus mi vitae justo varius, ut euismod arcu accumsan. Vivamus convallis mi nec metus cursus, non commodo sem egestas. Mauris in dictum sem. Sed semper varius finibus.',
    photo: '/images/helicopterson.png',
    quote: 'Se não for pra voar, eu nem desço pro play',
    highlights: ['Nasceu', 'Voou', 'Voou mais alto', 'Primeiro homem a pisar na lua', 'Sumiu'],
  },
  lincoln: {
    id: 'lincoln',
    name: 'Abraham Lincoln',
    role: 'Ex-presidente, advogado',
    birth: '1809',
    death: '1865',
    photo: '/images/lincoln.png',
    background: 'Abraham Lincoln foi um político norte-americano que serviu como o 16° presidente dos Estados Unidos, posto que ocupou de 4 de março de 1861 até seu assassinato em 15 de abril de 1865. Lincoln liderou o país de forma bem-sucedida durante sua maior crise interna, a Guerra Civil Americana, preservando a União e abolindo a escravidão, fortalecendo o governo nacional. Lincoln tem sido consistentemente considerado por estudiosos e pelo povo como um dos três maiores presidentes dos Estados Unidos.',
    quote: 'Governo das pessoas, pelas pessoas, para as pessoas, nunca deixará de existir na Terra.',
    highlights: ['Aprovou a Lei da Propriedade Rural', 'Emitiu a Proclamação de Emancipação, que levou à abolição da escravatura nos EUA', 'Liderou a União à vitória da Guerra Civil'],
  },

};


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {bios: bios});
});

/* GET bio page using character id. */
router.get('/:id', function(req, res, next) {
  const id = req.params.id;
  res.render('bio', bios[id]);
});


module.exports = router;