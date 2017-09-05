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

        let personagem = outro.getComponent("Personagem");
        if(personagem != null)
        {
            personagem.tomarDano(2);
        }
        else{
            outro.node.destroy();
        }

        eu.node.destroy();
    },

    // called every frame, uncomment this function to activate update callback
    update: function (dt) {
        let deslocamento = this.direcao.mul(this.velocidade * dt);
        this.node.position = this.node.position.add(deslocamento);
    },
});
