import sketch from 'sketch/dom';
import UI from 'sketch/ui';
import WebUI from 'sketch-module-web-view';

// const Panel = isDev ? 'http://localhost:8080' : 'index.html';
const Panel = `http://localhost:8000#${Math.random()}`;

export default context => {
    const document = sketch.getSelectedDocument();
    const panelID = 'sketch-TEMPLATE.panel';

    const panelUI = new WebUI(context, Panel, {
        identifier: panelID,
        x: 0,
        y: 0,
        width: 340,
        height: 624,
        title: 'Sketch TEMPLATE',
        onlyShowCloseButton: true,
        hideTitleBar: false,
        shouldKeepAround: true,
        resizable: false,
    });
};
