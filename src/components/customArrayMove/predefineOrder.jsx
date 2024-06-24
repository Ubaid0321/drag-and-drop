import React from "react";

function predefineOrder(array, fromIndex, toIndex) {
  let order = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  //5th  special condition for fix widget
  if (fromIndex === 4 || toIndex === 4) {
    order = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  }

  //1st widget try to move
  if (fromIndex === 0 && toIndex === 1) {
    order = [1, 0, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  } else if (fromIndex === 0 && toIndex === 2) {
    order = [2, 1, 0, 3, 4, 5, 6, 7, 8, 9, 10];
  } else if (fromIndex === 0 && toIndex === 5) {
    order = [2, 1, 5, 3, 4, 0, 6, 7, 8, 9, 10];
  } else if (fromIndex === 0 && toIndex === 7) {
    order = [2 , 1, 5, 3, 4, 7, 6, 0, 8, 9, 10];
  } else if (fromIndex === 0 && toIndex === 9) {
    order = [2 , 1, 5, 3, 4, 7, 6, 9, 8, 0, 10];
  }
  // 2th widget try to move over the place
  else if (fromIndex === 1 && toIndex === 0) {
    order = [1, 0, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  } else if (fromIndex === 1 && toIndex === 3) {
    order = [0, 3, 2, 1, 4, 5, 6, 7, 8, 9, 10];
  } else if (fromIndex === 1 && toIndex === 6) {
    order = [0, 3, 2, 6, 4, 5, 1, 7, 8, 9, 10];
  } else if (fromIndex === 1 && toIndex === 8) {
    order = [0, 3, 2, 6, 4, 5, 8, 7, 1, 9, 10];
  } else if (fromIndex === 1 && toIndex === 10) {
    order = [0, 3, 2, 6, 4, 5, 8, 7, 10, 9, 1];
  }
  // when 3rd widget try to move
  else if (fromIndex === 2 && toIndex === 0) {
    order = [2, 1, 0, 3, 4, 5, 6, 7, 8, 9, 10];
  } else if (fromIndex === 2 && toIndex === 5) {
    order = [0, 1, 5, 3, 4, 2, 6, 7, 8, 9, 10];
  } else if (fromIndex === 2 && toIndex === 7) {
    order = [0, 1, 5, 3, 4, 7, 6, 2, 8, 9, 10];
  } else if (fromIndex === 2 && toIndex === 9) {
    order = [0, 1, 5, 3, 4, 7, 6, 9, 8, 2, 10];
  }

  //  4rth widget try to move
  else if (fromIndex === 3 && toIndex === 1) {
    order = [0, 3, 2, 1, 4, 5, 6, 7, 8, 9, 10];
  } else if (fromIndex === 3 && toIndex === 6) {
    order = [0, 1, 2, 6, 4, 5, 3, 7, 8, 9, 10];
  } else if (fromIndex === 3 && toIndex === 8) {
    order = [0, 1, 2, 6, 4, 5, 8, 7, 3, 9, 10];
  } else if (fromIndex === 3 && toIndex === 10) {
    order = [0, 1, 2, 6, 4, 5, 8, 7, 10, 9, 3];
  }
  // 6th widget try to move
  else if (fromIndex === 5 && toIndex === 0) {
    order = [5, 1, 0, 3, 4, 2, 6, 7, 8, 9, 10];
  } else if (fromIndex === 5 && toIndex === 2) {
    order = [0, 1, 5, 3, 4, 2, 6, 7, 8, 9, 10];
  } else if (fromIndex === 5 && toIndex === 7) {
    order = [0, 1, 2, 3, 4, 7, 6, 5, 8, 9, 10];
  } else if (fromIndex === 5 && toIndex === 9) {
    order = [0, 1, 2, 3, 4, 7, 6, 9, 8, 5, 10];
  }

  //  7 th widget  try to move
  else if (fromIndex === 6 && toIndex === 1) {
    order = [0, 6, 2, 1, 4, 5, 3, 7, 8, 9, 10];
  } else if (fromIndex === 6 && toIndex === 3) {
    order = [0, 1, 2, 6, 4, 5, 3, 7, 8, 9, 10];
  } else if (fromIndex === 6 && toIndex === 8) {
    order = [0, 1, 2, 3, 4, 5, 8, 7, 6, 9, 10];
  } else if (fromIndex === 6 && toIndex === 10) {
    order = [0, 1, 2, 3, 4, 5, 8, 7, 10, 9, 6];
  }
  // 8th widget try to  move
  else if (fromIndex === 7 && toIndex === 0) {
    order = [7, 1, 0, 3, 4, 2, 6, 5, 8, 9, 10];
  } else if (fromIndex === 7 && toIndex === 2) {
    order = [0, 1, 7, 3, 4, 2, 6, 5, 8, 9, 10];
  } else if (fromIndex === 7 && toIndex === 5) {
    order = [0, 1, 2, 3, 4, 7, 6, 5, 8, 9, 10];
  } else if (fromIndex === 7 && toIndex === 9) {
    order = [0, 1, 2, 3, 4, 5, 6, 9, 8, 7, 10];
  }

  // 9th widget try to move
  else if (fromIndex === 8 && toIndex === 1) {
    order = [0, 8, 2, 1, 4, 5, 3, 7, 6, 9, 10];
  } else if (fromIndex === 8 && toIndex === 3) {
    order = [0, 1, 2, 8, 4, 5, 3, 7, 6, 9, 10];
  } else if (fromIndex === 8 && toIndex === 6) {
    order = [0, 1, 2, 3, 4, 5, 8, 7, 6, 9, 10];
  } else if (fromIndex === 8 && toIndex === 10) {
    order = [0, 1, 2, 3, 4, 5, 6, 7, 10, 9, 8];
  }

  //10th widget try to move
  else if (fromIndex === 9 && toIndex === 0) {
    order = [9, 1, 0, 3, 4, 2, 6, 5, 8, 7, 10];
  } else if (fromIndex === 9 && toIndex === 2) {
    order = [0, 1, 9, 3, 4, 2, 6, 5, 8, 7, 10];
  } else if (fromIndex === 9 && toIndex === 5) {
    order = [0, 1, 2, 3, 4, 9, 6, 5, 8, 7, 10];
  } else if (fromIndex === 9 && toIndex === 7) {
    order = [0, 1, 2, 3, 4, 5, 6, 9, 8, 7, 10];
  }
  // 11 th widget try to move
  else if (fromIndex === 10 && toIndex === 1) {
    order = [0, 10, 2, 1, 4, 5, 3, 7, 6, 9, 8];
  } else if (fromIndex === 10 && toIndex === 3) {
    order = [0, 1, 2, 10, 4, 5, 3, 7, 6, 9, 8];
  } else if (fromIndex === 10 && toIndex === 6) {
    order = [0, 1, 2, 3, 4, 5, 10, 7, 6, 9, 8];
  } else if (fromIndex === 10 && toIndex === 8) {
    order = [0, 1, 2, 3, 4, 5, 6, 7, 10, 9, 8];
  }

  const reorderedArray = new Array(array.length);
  for (let i = 0; i < order.length; i++) {
    reorderedArray[i] = array[order[i]];
  }
  return reorderedArray;
}

export default predefineOrder;
