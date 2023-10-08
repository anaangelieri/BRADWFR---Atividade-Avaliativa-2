// Para fazer cada quadrado separadamente, devemos ter um botão que com o clique, vai ser atribuído um valor à ele, nesse caso os caracteres da vaca e o pintinho
export default function Square({ value, onSquareClick }) {
    return (
      <button className="square" onClick={onSquareClick}>
        {value}
      </button>
    );
  }