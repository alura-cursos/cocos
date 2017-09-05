"use strict";
cc._RF.push(module, '141bfnG/QBBiYpcfJo4hnpr', 'Tiro');
// Tiro.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {

        direcao: cc.Vec2,
        velocidade: 10
    },

    // use this for initialization
    onLoad: function onLoad() {
        this.direcao = this.direcao.normalize();
    },

    onCollisionEnter: function onCollisionEnter(outro, eu) {
        console.log("colidiu");
        outro.node.destroy();
        eu.node.destroy();
    },

    // called every frame, uncomment this function to activate update callback
    update: function update(dt) {
        var deslocamento = this.direcao.mul(this.velocidade * dt);
        this.node.position = this.node.position.add(deslocamento);
    }
});

cc._RF.pop();