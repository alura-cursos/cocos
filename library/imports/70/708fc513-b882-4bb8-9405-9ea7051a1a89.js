"use strict";
cc._RF.push(module, '708fcUTuIJLuJQFnqcFGhqJ', 'Jogador');
// Jogador.js

"use strict";

var Personagem = require("Personagem");
cc.Class({
    extends: Personagem,

    properties: {
        _acelerando: false,
        _vidaAtual: 0,
        vidaMaxima: 100,
        velocidade: 10,
        barraVida: cc.ProgressBar,
        pontuacao: 0,
        label: cc.Label

    },

    // use this for initialization
    onLoad: function onLoad() {

        this._vidaAtual = this.vidaMaxima;
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.teclaPressionada, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.teclaSolta, this);

        var canvas = cc.find("Canvas");
        canvas.on("mousemove", this.mudarDirecao, this);
        canvas.on("mousedown", this.atirar, this);

        cc.director.getCollisionManager().enabled = true;

        this.barraVida.progress = 1;
    },

    adicionarPonto: function adicionarPonto(pontos) {
        this.pontuacao += pontos;
        this.label.string = "Pontos: " + this.pontuacao;
    },

    tomarDano: function tomarDano(dano) {
        this._vidaAtual -= dano;

        var porcentagemVida = this._vidaAtual / this.vidaMaxima;

        this.barraVida.progress = porcentagemVida;

        if (this._vidaAtual < 0) {
            cc.director.loadScene("GameOver");
        }
    },

    mudarDirecao: function mudarDirecao(event) {
        var posicaoMouse = event.getLocation();
        posicaoMouse = new cc.Vec2(posicaoMouse.x, posicaoMouse.y);

        var direcao = posicaoMouse.sub(this.node.position);
        direcao = direcao.normalize();
        this._direcao = direcao;
    },

    teclaPressionada: function teclaPressionada(event) {
        if (event.keyCode == cc.KEY.a) {
            this._acelerando = true;
        }
    },

    teclaSolta: function teclaSolta(event) {
        if (event.keyCode == cc.KEY.a) {
            this._acelerando = false;
        }
    },

    // called every frame, uncomment this function to activate update callback
    update: function update(dt) {
        if (this._acelerando) {
            var deslocamento = this._direcao.mul(this.velocidade * dt);
            this.node.position = this.node.position.add(deslocamento);
        }
    }
});

cc._RF.pop();