"use strict";
cc._RF.push(module, 'e2e01V+VzVLV4RvJLZhwTOc', 'Gerador');
// Gerador.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        inimigoPrefab: cc.Prefab,
        area: 10,
        tempo: 2,
        espera: 3
    },

    // use this for initialization
    onLoad: function onLoad() {
        this.scheduleOnce(this.iniciarGeracao, this.espera);
    },

    iniciarGeracao: function iniciarGeracao() {
        this.schedule(this.gerar, this.tempo);
    },

    gerar: function gerar() {
        var inimigo = cc.instantiate(this.inimigoPrefab);
        inimigo.parent = this.node.parent;

        var posicao = new cc.Vec2(Math.random() - .5, Math.random() - .5);
        posicao = posicao.normalize();
        posicao = posicao.mul(this.area);
        posicao = this.node.position.add(posicao);

        inimigo.position = posicao;
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});

cc._RF.pop();