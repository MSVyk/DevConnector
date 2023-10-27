import axios from "axios";
import { setAlert } from "./alert";

import {
  GET_PROFILE,
  PROFILE_ERROR,
  UPDATE_PROFILE
} from './types'

// Get current users profile
export const getCurrentProfile = () => async dispatch => {
  try {
    const res = await axios.get('/api/profile/me');
    console.log('>>> profile.js res from /api/profile/me', { res })
    dispatch({
      type: GET_PROFILE,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status
      }
    });
  }
};

// Create or Update Profile

export const createProfile = (formData, edit = false) => async (dispatch) => {

  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const res = await axios.post('/api/profile', formData, config);

    dispatch({
      type: GET_PROFILE,
      payload: res.data
    });
    console.log('>>> createProfile Action:', {edit})
    dispatch(setAlert(edit ? 'Profile Updated' : 'Profile Created', 'success'));

  } catch (err) {
    const errors = err.response.data.errors;

    if(errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }
    dispatch({
      type: PROFILE_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status
      }
    });
  }
};

// Add experience
export const addExperience = (formData, navigate) => async (dispatch) => {
  try {
    const res = await axios.put('/api/profile/experience', formData);
    console.log('>>> from Add experience:', {res})
    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data
    });

    dispatch(setAlert('Experience Added', 'success'));

    // return res.data;
    navigate('/dashboard');
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Add education
export const addEducation = (formData, navigate) => async dispatch => {
  try {
    console.log('>>> from Add education before:', {formData})

    const res = await axios.put('/api/profile/education', formData);
    console.log('>>> from Add education after:', {res})

    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data
    });

    dispatch(setAlert('Education Added', 'success'));
    navigate('/dashboard');
    // return res.data;
  } catch (err) {
    const errors = err.response.data.errors;

    if(errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText,
        status: err.response.status }
    });
  }
}