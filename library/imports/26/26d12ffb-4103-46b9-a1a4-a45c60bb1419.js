"use strict";
cc._RF.push(module, '26d12/7QQNGuaGkpFxguxQZ', 'Personagem');
// Personagem.js

"use strict";

var Personagem = cc.Class({
    extends: cc.Component,

    properties: {
        tiroPrefab: cc.Prefab,
        _direcao: cc.Vec2

    },

    // use this for initialization
    onLoad: function onLoad() {},

    atirar: function atirar() {
        var disparo = cc.instantiate(this.tiroPrefab);
        disparo.parent = this.node.parent;
        disparo.position = this.node.position;
        disparo.group = this.node.group;

        var componenteTiro = disparo.getComponent("Tiro");
        componenteTiro.direcao = this._direcao;
    },

    tomarDano: function tomarDano() {}

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});

module.exports = Personagem;

cc._RF.pop();