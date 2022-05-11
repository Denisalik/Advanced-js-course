import React from "react";
import { store } from "../../../redux/store";
import { Game } from "../../../lib/socket/types";

interface CanvasProps {
  move: () => () => Promise<void>;
}

const Canvas: React.FC<CanvasProps> = ({ move: movePlayer }) => {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const drawCanvas = (game: Game) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;
    context.clearRect(0, 0, canvas.width, canvas.height);
    // Draw player 1
    context.fillRect(
      game.state.p1.x,
      game.state.p1.y,
      game.env.paddleWidth,
      game.env.paddleHeight
    );
    // Draw player 2
    context.fillRect(
      game.state.p2.x,
      game.state.p2.y,
      game.env.paddleWidth,
      game.env.paddleHeight
    );
    //Draw a line
    context.beginPath();
    context.setLineDash([10, 30]);
    context.moveTo(1100 / 2, 0);
    context.lineTo(1100 / 2, 600);
    context.stroke();

    // Draw Ball
    context.beginPath();
    context.arc(
      game.state.ball.x,
      game.state.ball.y,
      game.env.ballRadius,
      0,
      2 * Math.PI
    );
    context.fill();
  };
  React.useEffect(() => {
    const rate = 10;
    setInterval(() => {
      const { game } = store.getState();
      movePlayer();
      drawCanvas(game.game);
    }, rate);
  }, []);
  // drawCanvas();
  return (
    <canvas
      ref={canvasRef}
      height={600}
      width={1100}
      style={{
        height: 600,
        width: 1100,
        backgroundColor: "white",
      }}
    />
  );
};
export default Canvas;
