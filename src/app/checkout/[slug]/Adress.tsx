"use client"

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from 'react'
const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export default function Adress () {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <h1 className="px-4 mt-2 mx-44 font-bold">Billing Information</h1>
            <div className="bg-slate-300 rounded p-4 mb-8  mt-4 mx-44 drop-shadow-lg">
                <h1>Adress</h1>
                <input type="text" />
                <h1>Suburbs</h1>
                <input type="text" />
                <h1>State</h1>
                <input type="text" />
                <h1>Postcode</h1>
                <input type="text" />
                <h1>Card Number</h1>
                <input type="text" />
                <h1>Name on card:</h1>
                <input type="text" />
                <h1>Expiring Date:</h1>
                <input type="text" />
                <h1 className="block">Last Digits</h1>
                <input type="text" className="block"/>
                <input type="checkbox"/>
                <h1 className="inline"> <p className="inline font-bold">IMPORTANT NOTICE RE: UPDATED TERMS OF USE:</p> Effective 1 July 2017, the Services (as defined below) will be provided to you by Jacaranda Tree AU Pty Ltd, which is part of the same corporate family as Marktplaats B.V, the company currently providing the site to you. Jacaranda Tree AU Pty Ltd will also be the applicable data controller from 1 July 2017.</h1>
                <button onClick={handleOpen} className="block bg-emerald-500 h-8 w-28 text-white rounded drop-shadow m-2" >Place Order</button>
            </div>

            <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" className='text-green-700'>
           Payment Complete
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Thanks for shopping with JacarandaTree.
          </Typography>
        </Box>
      </Modal>
    </div>
        </>
    )
}
