(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Tiro.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '141bfnG/QBBiYpcfJo4hnpr', 'Tiro', __filename);
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
        //# sourceMappingURL=Tiro.js.map
        