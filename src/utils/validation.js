import {ERROR_MESSAGE, NUM_RULE} from './constants.js';
import {showErrorMessage} from './util.js';

const isEmptyInput = (nameArr) => nameArr.includes('');

const isValidCarNameLength = (nameArr) => {
  return nameArr.every((name) => name.length <= NUM_RULE.NAME_LIMIT);
};

const isDuplicatedNames = (nameArr) => {
  const nameSet = new Set(nameArr);

  return nameArr.length !== nameSet.size;
};

export const isValidNamesInput = ($target, names) => {
  if (isEmptyInput(names)) {
    showErrorMessage($target, ERROR_MESSAGE.EMPTY_INPUT);
    return false;
  }
  if (isDuplicatedNames(names)) {
    showErrorMessage($target, ERROR_MESSAGE.DUPLICATED_NAME);
    return false;
  }
  if (!isValidCarNameLength(names)) {
    showErrorMessage($target, ERROR_MESSAGE.OVERLENGTH_NAME);
    return false;
  }

  return true;
};

export const isValidRacingCount = ($target, count) => {
  if (Number.isNaN(count) || Number.isInteger(count) || count <= 0) {
    showErrorMessage($target, ERROR_MESSAGE.NEGATIVE_NUMBER);
    return false;
  }

  return true;
};
