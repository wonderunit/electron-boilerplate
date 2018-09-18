const { ipcRenderer, shell } = require('electron')
const { app } = require('electron').remote

const electronUtil = require('electron-util')

const init = async () => {
  electronUtil.disableZoom()
}

ipcRenderer.on('ready', () => {})

init()