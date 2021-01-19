import produce from 'immer';

export default function legislation(
  state = [
    {
      current: '',
      occupation: '',
      division: '',
      details: '',
      charge: '',
      area: '',
      height: '',
      situation: '',
      collapse: false,
      username: '',
      response: '',
      loading: false,
    },
  ],
  action
) {
  switch (action.type) {
    case 'CHANGE_STATE':
      return produce(state, draft => {
        switch (action.name) {
          case 'occupation':
            draft[0].occupation = action.p;
            break;
          case 'division':
            draft[0].division = action.p;
            break;
          case 'height':
            draft[0].height = action.p;
            break;
          case 'situation':
            draft[0].situation = action.p;
            break;
          case 'charge':
            draft[0].charge = action.p;
            break;
          case 'details':
            draft[0].details = action.p;
            break;
          case 'area':
            draft[0].area = action.p;
            break;
          default:
            break;
        }
      });

    case 'MODEL_CURRENT':
      return produce(state, draft => {
        draft[0].current = action.current;
      });
    case 'LOAD':
      return produce(state, draft => {
        draft[0].loading = action.loading;
      });
    case 'USER':
      return produce(state, draft => {
        draft[0].username = action.user;
      });
    case 'DATA':
      return produce(state, draft => {
        draft[0].response = action.response;
      });

    default:
      return state;
  }
}
