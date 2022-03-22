// Load all the channels within this directory and all subdirectories.
// Channel files must be named *_channel.js.

const channels = require.context('.', true, /_channel\.js$/)
channels.keys().forEach(channels)

$('#button-container').click(function(evento){
    var pokemon = evento.target.dataset.pokemon;
});
