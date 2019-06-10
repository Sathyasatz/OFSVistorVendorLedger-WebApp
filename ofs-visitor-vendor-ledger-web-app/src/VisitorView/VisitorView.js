import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    margin: 50,
    width: 150,
    height: 150,
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  dense: {
    marginTop: theme.spacing(2),
  },
  menu: {
    width: 200,
  },
}));

function VisitorView(props) {

  const guestDetail = props.guestDetail;
  const classes = useStyles();
  const [values, setValues] = React.useState({
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <div>
        <span><Avatar alt="Remy Sharp" src="https://firebasestorage.googleapis.com/v0/b/visitorledger.appspot.com/o/1559572008749.jpg?alt=media&token=4fe404e5-212d-4296-9ec2-f3a061491248" className={classes.bigAvatar} /></span>
    <form className={classes.container} noValidate autoComplete="off">
      <TextField
        id="outlined-name"
        label="Name"
        disabled
        className={classes.textField}
        value={guestDetail.name}
        margin="normal"
        variant="outlined"
      />
      <TextField
        id="outlined-employee_id"
        label="Employee ID"
        disabled
        className={classes.textField}
        value={guestDetail.employee_id}
        margin="normal"
        variant="outlined"
      />
      <TextField
        id="outlined-location"
        label="Location"
        disabled
        className={classes.textField}
        value={guestDetail.location}
        margin="normal"
        variant="outlined"
      />
      <TextField
        disabled
        className={classes.textField}
        value={guestDetail.mobile}
        id="outlined-mobile"
        label="Mobile"
        margin="normal"
        variant="outlined"
      />
        <TextField
            disabled
            id="outlined-temporary_id"
            label="Temporary ID"
            className={classes.textField}
            value={guestDetail.temporary_id}
            margin="normal"
            variant="outlined"
        />
      <TextField
        disabled
        id="outlined-entry_type"
        label="Entry Type"
        className={classes.textField}
        value={guestDetail.entry_type}
        margin="normal"
        variant="outlined"
      />
      {/* <TextField
        disabled
        id="outlined-disabled"
        label="Disabled"
        defaultValue="Hello World"
        className={classes.textField}
        value={values.name}
        margin="normal"
        variant="outlined"
      />
      <TextField
        disabled
        id="outlined-disabled"
        label="Disabled"
        defaultValue="Hello World"
        className={classes.textField}
        value={values.name}
        margin="normal"
        variant="outlined"
      />
      <TextField
        disabled
        id="outlined-disabled"
        label="Disabled"
        defaultValue="Hello World"
        className={classes.textField}
        value={values.name}
        margin="normal"
        variant="outlined"
      />
      <TextField
        disabled
        id="outlined-disabled"
        label="Disabled"
        defaultValue="Hello World"
        className={classes.textField}
        value={values.name}
        margin="normal"
        variant="outlined"
      />
      <TextField
        disabled
        id="outlined-disabled"
        label="Disabled"
        defaultValue="Hello World"
        className={classes.textField}
        value={values.name}
        margin="normal"
        variant="outlined"
      />
      <TextField
        disabled
        id="outlined-disabled"
        label="Disabled"
        defaultValue="Hello World"
        className={classes.textField}
        value={values.name}
        margin="normal"
        variant="outlined"
      />
      <TextField
        disabled
        id="outlined-disabled"
        label="Disabled"
        defaultValue="Hello World"
        className={classes.textField}
        value={values.name}
        margin="normal"
        variant="outlined"
      />
      <TextField
        disabled
        id="outlined-disabled"
        label="Disabled"
        defaultValue="Hello World"
        className={classes.textField}
        value={values.name}
        margin="normal"
        variant="outlined"
      />
      <TextField
        disabled
        id="outlined-disabled"
        label="Disabled"
        defaultValue="Hello World"
        className={classes.textField}
        value={values.name}
        margin="normal"
        variant="outlined"
      />
      <TextField
        disabled
        id="outlined-disabled"
        label="Disabled"
        defaultValue="Hello World"
        className={classes.textField}
        value={values.name}
        margin="normal"
        variant="outlined"
      /> */}
    </form>
    </div>
  );
}

export default VisitorView;