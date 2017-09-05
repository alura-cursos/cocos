"use strict";
cc._RF.push(module, 'a928aV+BwxFx42IviGc56Ob', 'Inimigo');
// Inimigo.js

"use strict";

var Personagem = require("Personagem");
cc.Class({
    extends: Personagem,

    properties: {

        _alvo: cc.Node,
        velocidade: 50,
        tempoAtaque: 1

    },

    // use this for initialization
    onLoad: function onLoad() {
        this._alvo = cc.find("hero");
        this.schedule(this.atirar, this.tempoAtaque);
    },

    tomarDano: function tomarDano() {
        var jogador = this._alvo.getComponent("Jogador");
        jogador.adicionarPonto(10);
        this.node.destroy();
    },

    atirar: function atirar() {
        var disparo = cc.instantiate(this.tiroPrefab);
        disparo.parent = this.node.parent;
        disparo.position = this.node.position;
        disparo.group = this.node.group;
        var componenteTiro = disparo.getComponent("Tiro");
        componenteTiro.direcao = this._direcao;
    },

    mudarDirecao: function mudarDirecao() {
        var direcao = this._alvo.position.sub(this.node.position);
        direcao = direcao.normalize();
        this._direcao = direcao;
    },

    // called every frame, uncomment this function to activate update callback
    update: function update(dt) {
        this.mudarDirecao();
        var deslocamento = this._direcao.mul(this.velocidade * dt);
        this.node.position = this.node.position.add(deslocamento);
    }
});

cc._RF.pop();