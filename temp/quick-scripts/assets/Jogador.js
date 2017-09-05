(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Jogador.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '708fcUTuIJLuJQFnqcFGhqJ', 'Jogador', __filename);
// Jogador.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        _acelerando: false,
        _direcao: cc.Vec2,

        tiroPrefab: cc.Prefab,
        velocidade: 10
    },

    // use this for initialization
    onLoad: function onLoad() {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.teclaPressionada, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.teclaSolta, this);

        var canvas = cc.find("Canvas");
        canvas.on("mousemove", this.mudarDirecao, this);
        canvas.on("mousedown", this.atirar, this);

        cc.director.getCollisionManager().enabled = true;
    },

    atirar: function atirar(event) {
        var tiro = cc.instantiate(this.tiroPrefab);
        tiro.parent = this.node.parent;
        tiro.position = this.node.position;

        var componenteTiro = tiro.getComponent("Tiro");
        componenteTiro.direcao = this._direcao;
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
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=Jogador.js.map
        