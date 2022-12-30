import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


const initialState = {
  value: 0,
  status: 'idle',
};

export const mailSlice = createSlice({
  name: 'mail',
  initialState : {
    sendMessageIsOpened : false,
    selectedMail : null
  },
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    selectMail:(state,action) => {
       state.selectedMail = action.payload;
    },
    openSendMessage: (state) => {
      state.sendMessageIsOpened = true;
    },
    closeSendMesssage: (state) => {
      state.sendMessageIsOpened = false;
    }
  },

});

export const {selectMail,openSendMessage, closeSendMesssage } = mailSlice.actions;

export const selectSendMessageIsOpened = (state) => state.mail.sendMessageIsOpened;
export const selectOpenMail = (state) => state.mail.selectedMail;

export default mailSlice.reducer;
