export const DOM_ID = Object.freeze({
  APP: 'app',
  CAR_NAMES_INPUT: 'car-names-input',
  CAR_NAMES_SUBMIT: 'car-names-submit',
  RACING_COUNT_INPUT: 'racing-count-input',
  RACING_COUNT_SUBMIT: 'racing-count-submit',
  RACING_WINNERS: 'racing-winners'
});

export const NUM_RULE = Object.freeze({
  NAME_LIMIT: 5,
  MIN_NUM: 0,
  MAX_NUM: 9,
  AVAILABLE_MOVE: 4
});

export const ERROR_MESSAGE = Object.freeze({
  OVERLENGTH_NAME: '이름은 5자 이하로 입력해주세요.',
  EMPTY_INPUT: '값을 입력해주세요.',
  DUPLICATED_NAME: '중복된 이름이 존재합니다.',
  NEGATIVE_NUMBER: '게임 횟수는 양수를 입력해주세요.'
});