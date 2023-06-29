import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

export default function BasicPopover() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div className='filt'>
      <Button aria-describedby={id} sx={{ backgroundColor: '#cccccc4a', color: 'black' }} onClick={handleClick}>
        Filter
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <div className='filter'>
          <div className='filter-title'>
            <h3>Filter</h3>
            <div className='line-1'></div>
            <p className='tex' >Type</p>
            <div className='sub'>
              <span>
                <input className='sub' type="checkbox" name="Subscription" id="" />
                <label htmlFor="">Subscription</label>
              </span>
              <span>
                <input className='sub' type="checkbox" name="Subscription" id="" />
                <label htmlFor="">Burner</label>
              </span>
            </div>
            <div className='line-1'></div>
            <p className='tex' >Cardholder</p>
            <Drop />

            <div>
            <button type="button" className="btn btn-danger buttonfil">Apply</button>
            <button type="button" className="btn btn-light buttonfil">Clear</button>
            </div>
          </div>
          <div>

          </div>

        </div>
      </Popover>
    </div>
  );
}



function Drop() {
  return (
    <>
      <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Select Cardholder
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </div>
    </>
  );
}
