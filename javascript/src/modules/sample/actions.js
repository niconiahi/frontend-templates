/* Actions types */
export const SampleActions = {
  SAMPLE_REQUEST: 'SAMPLE_REQUEST',
  SAMPLE_SUCCESS: 'SAMPLE_SUCCESS',
  SAMPLE_FAILURE: 'SAMPLE_FAILURE',
};

/* Action creators */
export const sampleRequest = (data1, data2) => ({
  type: SampleActions.SAMPLE_REQUEST,
  payload: {
    data1,
    data2,
  },
});

export const sampleSuccess = (response) => ({
  type: SampleActions.SAMPLE_SUCCESS,
  payload: response,
});

export const sampleFailure = (response) => ({
  type: SampleActions.SAMPLE_FAILURE,
  payload: response,
});
