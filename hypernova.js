const hypernova = require('hypernova/server');
const renderReact = require('hypernova-react').renderReact;

hypernova({
  getComponent(name) {
    return require(`./public/packs-server/${name.toLowerCase()}.js`).default;
  },
  port: 3030
});
