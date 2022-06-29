import React, { useState, setState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddRounded from '@material-ui/icons/AddCircleOutlineRounded';
import RemoveRoundedIcon from '@material-ui/icons/RemoveRounded';
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({

}));


export default function ItemCount({ max, initial, onChange }) {

  const classes = useStyles();
  const [count, setCount] = useState(initial)

  useEffect(() => { onChange(count) }, [count])

  const handleIncrement = () => {
    if (!max || count < max) {
      setCount(prevCount => prevCount + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(prevCount => prevCount - 1);
    }

  };

  return (<>
    <Box alignItems="center" justifyContent="center">
      <Box display="inline-flex" borderColor={"#ffff"} marginTop={3} marginBottom={3}>
        <Button size="small" color="primary" onClick={handleDecrement}>
          <RemoveRoundedIcon />
        </Button>
        <Box paddingLeft={2} paddingRight={2}>{count}</Box>
        <Button size="small" color="primary" onClick={handleIncrement}>
          <AddRounded />
        </Button>
      </Box>

    </Box>
  </>)
}