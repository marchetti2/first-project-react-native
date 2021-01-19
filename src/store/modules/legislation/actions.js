export function modelCurrent(current: string) {
  return {
    type: 'MODEL_CURRENT',
    current,
  };
}
export function stateUser(user: string) {
  return {
    type: 'USER',
    user,
  };
}

export function load(loading: boolean) {
  return {
    type: 'LOAD',
    loading,
  };
}

export function addData(response: string) {
  return {
    type: 'DATA',
    response,
  };
}

export function changeState(current: string, p: string) {
  switch (current) {
    case 'occupation':
      return { type: 'CHANGE_STATE', p, name: 'occupation' };
    case 'division':
      return { type: 'CHANGE_STATE', p, name: 'division' };
    case 'details':
      return { type: 'CHANGE_STATE', p, name: 'details' };
    case 'charge':
      return { type: 'CHANGE_STATE', p, name: 'charge' };
    case 'area':
      return { type: 'CHANGE_STATE', p, name: 'area' };
    case 'height':
      return { type: 'CHANGE_STATE', p, name: 'height' };
    case 'situation':
      return { type: 'CHANGE_STATE', p, name: 'situation' };
    default:
      break;
  }
}
