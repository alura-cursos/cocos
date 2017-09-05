let Personagem = cc.Class({
    extends: cc.Component,

    properties: {
       tiroPrefab: cc.Prefab,
        _direcao : cc.Vec2,
        
    },

    // use this for initialization
    onLoad: function () {

    },
    
    atirar:function()
    {
        let disparo = cc.instantiate(this.tiroPrefab);
        disparo.parent = this.node.parent;
        disparo.position = this.node.position;
        disparo.group = this.node.group;
        
        let componenteTiro = disparo.getComponent("Tiro");
        componenteTiro.direcao = this._direcao;
        
    },
    
    tomarDano:function()
    {
        
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});

module.exports = Personagem;














