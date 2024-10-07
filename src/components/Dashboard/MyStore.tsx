import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';

interface AddStoreModalProps {
  open: boolean;
  handleClose: () => void;
  handleAdd: (storeData: { name: string; location: string }) => void;
}

const AddStoreModal: React.FC<AddStoreModalProps> = ({ open, handleClose, handleAdd }) => {
  const [storeName, setStoreName] = useState<string>('');
  const [storeLocation, setStoreLocation] = useState<string>('');

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Add Store</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="storeName"
          label="Store name"
          type="text"
          fullWidth
          variant="outlined"
          value={storeName}
          onChange={(e) => setStoreName(e.target.value)}
        />
        <TextField
          margin="dense"
          id="storeLocation"
          label="Store Location"
          type="text"
          fullWidth
          variant="outlined"
          value={storeLocation}
          onChange={(e) => setStoreLocation(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <button onClick={handleClose}className=" text-gray-700 px-4 py-2 rounded-lg flex items-center space-x-2 mb-4 hover:bg-gray-300 transition duration-300">
          <span>Close</span>
        </button>
       <button
           onClick={() => {
            handleAdd({ name: storeName, location: storeLocation });
            setStoreName('');
            setStoreLocation('');
            handleClose();
          }}
        className="bg-indigo-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 mb-4 hover:bg-indigo-700 transition duration-300">
          <span>Save Changes</span>
        </button>
      </DialogActions>
    </Dialog>
  );
};

const MyStorePage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <div className='p-8'>
      <h1 className='mb-4'>MY STORE</h1>
      <button onClick={() => setIsModalOpen(true)} className="bg-indigo-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 mb-4 hover:bg-indigo-700 transition duration-300">
          <Plus size={20} />
          <span>Add Store</span>
        </button>

      <div style={{ overflowX: 'auto' }}>
        <table style={{ minWidth: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={tableHeaderStyle}>Store Name</th>
              <th style={tableHeaderStyle}>Store Location</th>
              <th style={tableHeaderStyle}>Date Done</th>
              <th style={tableHeaderStyle}>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={4} style={tableCellStyle}>No data available in table</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div style={{ marginTop: '20px' }}>
        <span>Showing 0 to 0 of 0 entries</span>
        <div style={{ float: 'right' }}>
          <Button variant="outlined" disabled style={{ marginRight: '10px' }}>Previous</Button>
          <Button variant="outlined" disabled>Next</Button>
        </div>
      </div>

      <AddStoreModal
        open={isModalOpen}
        handleClose={() => setIsModalOpen(false)}
        handleAdd={(storeData) => {
          console.log('Adding store:', storeData);
        }}
      />
    </div>
  );
};

// Styles for table elements
const tableHeaderStyle: React.CSSProperties = {
  padding: '12px',
  textAlign: 'left',
  backgroundColor: '#f2f2f2',
  borderBottom: '1px solid #ddd',
};

const tableCellStyle: React.CSSProperties = {
  padding: '12px',
  borderBottom: '1px solid #ddd',
  textAlign: 'center',
};

export default MyStorePage;
