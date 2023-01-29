const { createCanvas } = require('canvas')

function createAvatar(user) {
    const canvas = createCanvas(200, 200);
    const ctx = canvas.getContext('2d')
    ctx.fillText(user.username, 50, 100)
    return canvas.toDataURL();
}

module.exports = {
    createAvatar
}