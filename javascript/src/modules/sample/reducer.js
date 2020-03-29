import { SampleActions } from './actions';

const INITIAL_STATE = {
  data: '',
};

function sampleReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SampleActions.SAMPLE_REQUEST: {
      return {
        ...state,
      };
    }

    case SampleActions.SAMPLE_SUCCESS: {
      return {
        ...state,
      };
    }

    case SampleActions.SAMPLE_FAILURE: {
      return {
        ...state,
      };
    }

    default: {
      return state;
    }
  }
}

export default sampleReducer;
