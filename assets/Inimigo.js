let Personagem = require("Personagem");
cc.Class({
    extends: Personagem,

    properties: {

        _alvo:cc.Node,
        velocidade : 50,
        tempoAtaque: 1,

    },

    // use this for initialization
    onLoad: function () {
        this._alvo = cc.find("hero");
        this.schedule(this.atirar, this.tempoAtaque);

    },
    
    tomarDano:function()
    {
        this.node.destroy();    
    },
    
    atirar: function()
    {
        let disparo = cc.instantiate(this.tiroPrefab);
        disparo.parent = this.node.parent;
        disparo.position = this.node.position;
        disparo.group = this.node.group;
        let componenteTiro = disparo.getComponent("Tiro");
        componenteTiro.direcao = this._direcao;
    },

    mudarDirecao : function()
    {
        let direcao = this._alvo.position.sub(this.node.position);
        direcao = direcao.normalize();
        this._direcao = direcao;
    },

    // called every frame, uncomment this function to activate update callback
     update: function (dt) {
         this.mudarDirecao();
         let deslocamento = this._direcao.mul(this.velocidade * dt);
         this.node.position = this.node.position.add(deslocamento);
     },
});
