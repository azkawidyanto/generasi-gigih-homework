import { createSlice } from '@reduxjs/toolkit'
// interface Track {
//   tracks:  Array<string>;
//   selectedTracks: Array<string>;
//   form: {
//     title: string,
//     description: string,
//   };
// }

const initialState = {
  tracks: [],
  selectedTracks: [],
  form: {
    title: '',
    description: '',
  },
}

const playlistSlice = createSlice({
  name: 'playlist',
  initialState,
  reducers: {
    setTracks: (state, action) => {
      state.tracks = action.payload
    },
    addSelectedTracks: (state, action) => {
      state.selectedTracks.push(action.payload)
    },
    substractSelectedTracks: (state, action) => {
      const index = state.selectedTracks.indexOf(action.payload)
      state.selectedTracks.splice(index, 1)
    },
    setForm: (state, action) => {
      const [key, value] = Object.entries(action.payload)[0]
      state.form[key] = value
    },
    clearForm: state => {
      state.form = initialState.form
    },
    clearSelectedTracks: state => {
      state.selectedTracks = []
    },

  },
})

export const {
  setTracks,
  addSelectedTracks,
  substractSelectedTracks,
  clearSelectedTracks,
  setForm
} = playlistSlice.actions

export default playlistSlice.reducer
