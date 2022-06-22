import React from "react";
import { TextField } from '@mui/material';
import { inputLabelClasses } from "@mui/material/InputLabel";
import { FilledInput } from '@mui/material';


import "./InputForm.css"

const Inputform = (props) => {

  const styles = () => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    cssLabel: {
      '&$cssFocused': {
        color: 'purple',
      },
    },
    cssFocused: {},
    cssUnderline: {
      '&:after': {
        borderBottomColor: 'purple',
      },
    },
    cssOutlinedInput: {
      '&$cssFocused $notchedOutline': {
        borderColor: 'purple',
      },
    },
    notchedOutline: {},
      
  });

  

  
return <div className="inputform">
    <TextField
      // InputLabelProps={{
        sx = {{
          input: {
            color: "white",
            //  "green"
          },
          label:{
            color: "white"
          },
          [`&.${inputLabelClasses.focused}`]: {
            //   // set the color of the label when shrinked (usually when the TextField is focused)
              label:{
                color: "white"
              }
            },
            [`&.${inputLabelClasses.filled}`]: {
            // set the color of the label when shrinked (usually when the TextField is focused)
            color: "white"
          },
          
          "& .MuiFilledInput-root:after": {
              borderColor: "#673FD7"
            },
          "& .MuiInputLabel-root.Mui-focused": {
              color: "#673FD7"
            }

        }}

    value = {props.value}
    onChange={(e) => props.setSearch(e.target.value)}
    variant="filled"
    fullWidth
    placeholder="Try Doublelift..."
    onKeyUp = {props.checkEnter}

  />
      <div>
    <button className='button-36' onClick ={props.submitChange}> 
    Go
        </button>
        </div> 
   
   

</div>

}
export default Inputform