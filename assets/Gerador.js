cc.Class({
    extends: cc.Component,

    properties: {
        inimigoPrefab : cc.Prefab,
        area: 10,
        tempo: 2,
        espera:3,
    },

    // use this for initialization
    onLoad: function () {
        this.scheduleOnce(this.iniciarGeracao, this.espera);
    },
    
    iniciarGeracao:function()
    {
      this.schedule(this.gerar, this.tempo);  
    },
    
    gerar:function()
    {
      let inimigo = cc.instantiate(this.inimigoPrefab); 
        inimigo.parent = this.node.parent;
        
        let posicao = new cc.Vec2(Math.random() -.5 , Math.random() - .5);
        posicao = posicao.normalize();
        posicao = posicao.mul(this.area);
        posicao = this.node.position.add(posicao);
        
        inimigo.position = posicao;
        
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});












