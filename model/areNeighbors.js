const areNeighbors = (cell1, cell2) => {
  if (
    cell1.position.x === cell2.position.x - 1 &&
    (cell1.position.y === cell2.position.y + 1 ||
      cell1.position.y === cell2.position.y ||
      cell1.position.y === cell2.position.y - 1)
  ) {
    return true;
  }

  if (
    cell1.position.x === cell2.position.x &&
    (cell1.position.y === cell2.position.y + 1 ||
      cell1.position.y === cell2.position.y - 1)
  ) {
    return true;
  }

  if (
    cell1.position.x === cell2.position.x + 1 &&
    (cell1.position.y === cell2.position.y + 1 ||
      cell1.position.y === cell2.position.y ||
      cell1.position.y === cell2.position.y - 1)
  ) {
    return true;
  }

  return false;
};

export default areNeighbors;
