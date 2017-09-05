cc.Class({
    extends: cc.Component,

    properties: {
        _acelerando:false,
        _direcao: cc.Vec2,
        
        tiroPrefab: cc.Prefab,
        velocidade: 10,
    },

    // use this for initialization
    onLoad: function () {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.teclaPressionada, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.teclaSolta, this);
        
        let canvas = cc.find("Canvas");
        canvas.on("mousemove", this.mudarDirecao, this);
        canvas.on("mousedown", this.atirar, this);
        
        cc.director.getCollisionManager().enabled = true;
        
    },
    
    atirar: function(event)
    {
        let tiro = cc.instantiate(this.tiroPrefab);
        tiro.parent = this.node.parent;
        tiro.position = this.node.position;
        
        let componenteTiro = tiro.getComponent("Tiro");
        componenteTiro.direcao = this._direcao;
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
            {
                let deslocamento = this._direcao.mul(this.velocidade * dt)
                this.node.position  = this.node.position.add(deslocamento);
            }
                
            
            
    },
});
