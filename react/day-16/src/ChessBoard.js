"use strict"
import './ChessBoard.css';
import ChessBoardRow from "./ChessBoardRow";

function ChessBoard() {
    return (
        <div className="chess-board">
            <ChessBoardRow/>
            <ChessBoardRow/>
            <ChessBoardRow/>
            <ChessBoardRow/>
            <ChessBoardRow/>
            <ChessBoardRow/>
            <ChessBoardRow/>
            <ChessBoardRow/>
        </div>
    );
}

export default ChessBoard;
