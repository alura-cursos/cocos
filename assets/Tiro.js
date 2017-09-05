cc.Class({
    extends: cc.Component,

    properties: {
      
        direcao: cc.Vec2,
        velocidade : 10,
    },

    // use this for initialization
    onLoad: function () {
        this.direcao = this.direcao.normalize();
    },
    
    onCollisionEnter:function(outro, eu)
    {
      console.log("colidiu"); 
        outro.node.destroy();
        eu.node.destroy();
    },

    // called every frame, uncomment this function to activate update callback
     update: function (dt) {
         let deslocamento = this.direcao.mul(this.velocidade * dt);
         this.node.position = this.node.position.add(deslocamento);
     },
});
