const formatMessage = require('format-message');
var path = require('path');

// const block =  require('./arduino_uno_blocks');
// const code =  require('./arduino_uno_code');
// const xml = require('./arduino_xml');
// const language = require('./language');

// const icon = require('./asset/DTH11.jpg');
const staticPath = path.relative(__dirname + '/../../src', __dirname);

const demo = {
    name: "OLED",
    extensionId: 'oled',
    version: "0.0.1",
    supportDevice: ['arduinoUno', 'arduinoNano'],
    author: 'Yang',
    iconURL: staticPath + '/asset/OLED.png',
    description: formatMessage({
        id: 'Demo.description',
        default: 'I2c oled display',
        description: 'Description description of oled'
    }),
    featured: true,
    blocks: staticPath + 'block.js',
    generator:  staticPath + './generator.js',
    xml:  staticPath + './toolbox.xml',
    msg: staticPath + './language',
    // arduino_lib: "lib",
    location: 'local',
    link: 'https://www.baidu.com',
}

module.exports = demo;
