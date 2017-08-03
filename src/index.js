import './styles/game.css';
import Game from './partials/Game'

// create a game instance
const game = new Game('game', 512, 256);

// iife that 1. immeidiately calls itself and then is recursively calling itself forever in an infinite loop with the global method of requestAnimationFrame() 
(function gameLoop() {
    game.render();
    requestAnimationFrame(gameLoop);
})();
