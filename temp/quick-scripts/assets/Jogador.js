(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Jogador.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '708fcUTuIJLuJQFnqcFGhqJ', 'Jogador', __filename);
// Jogador.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
        _acelerando: false,
        _direcao: cc.Vec2
    },

    // use this for initialization
    onLoad: function onLoad() {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.teclaPressionada, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.teclaSolta, this);

        var canvas = cc.find("Canvas");
        canvas.on("mousemove", this.mudarDirecao, this);
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
        if (this._acelerando) this.node.position = this.node.position.add(this._direcao);
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
        