"use strict";
cc._RF.push(module, '708fcUTuIJLuJQFnqcFGhqJ', 'Jogador');
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
        _acelerando: false
    },

    // use this for initialization
    onLoad: function onLoad() {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.teclaPressionada, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.teclaSolta, this);

        var canvas = cc.find("Canvas");
        canvas.on("mousemove", this.mudarDirecao, this);
    },

    mudarDirecao: function mudarDirecao(event) {
        console.log(event);
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
        if (this._acelerando) this.node.x += 1;
    }
});

cc._RF.pop();