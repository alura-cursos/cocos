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
        _acelerando:false,
        _direcao: cc.Vec2,
    },

    // use this for initialization
    onLoad: function () {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.teclaPressionada, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.teclaSolta, this);
        
        let canvas = cc.find("Canvas");
        canvas.on("mousemove", this.mudarDirecao, this);
        
    },
    
    mudarDirecao: function(event)
    {
        let posicaoMouse = event.getLocation();
        posicaoMouse = new cc.Vec2(posicaoMouse.x, posicaoMouse.y);
        
        let direcao = posicaoMouse.sub(this.node.position);
        direcao = direcao.normalize();
        this._direcao = direcao;
    },
    
    teclaPressionada: function(event)
    { 
        if(event.keyCode == cc.KEY.a)
        {
            this._acelerando = true;
        }
    },

    teclaSolta:function(event)
    {
        if(event.keyCode == cc.KEY.a)
        {
            this._acelerando = false;
        }

    },

    // called every frame, uncomment this function to activate update callback
    update: function (dt) {
        if(this._acelerando)
            this.node.position  = this.node.position.add(this._direcao);    
            
            
    },
});
