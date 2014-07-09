var load_state = {  
    preload: function() { 
        this.game.load.image('background', 'assets/bg.jpg');  
        this.game.stage.backgroundImage = 'background';
        this.game.load.image('bird', 'assets/donut.png');  
        this.game.load.image('pipe', 'assets/pipe.png');  
        this.game.load.audio('jump', 'assets/jump.wav');
    },

    create: function() {
        // When all assets are loaded, go to the 'menu' state
        this.game.state.start('menu');
    }
};