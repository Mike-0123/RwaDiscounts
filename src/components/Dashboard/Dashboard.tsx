import React from 'react';
import { Home, Store, Package, ShoppingCart, ChevronDown } from 'lucide-react';
import { Avatar, Button, MenuItem } from '@mui/material';
import { MdMenu } from 'react-icons/md';

import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuList from '@mui/material/MenuList';
import MyStorePage from './MyStore';
import ProductsPage from './Products';
import OrderPage from './Orders';


const Dashboard: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const [activeContent, setActiveContent] = React.useState("home");
  const anchorRef = React.useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div className="flex h-screen bg-[#f3f4f9]">
      {/* Sidebar */}
      <div className="bg-[#1e2139] text-white w-64 h-screen p-6">
        <h1 className="text-2xl font-bold mb-10 text-[#5a67d8]">Rwa Discounts</h1>
        <nav>
          <p className="text-gray-400 text-xs uppercase tracking-wider mb-4">Dashboard</p>
          <ul className="space-y-8">
            <li onClick ={()=>setActiveContent("home")} className="flex items-center space-x-3 text-gray-300 hover:text-white cursor-pointer">
              <Home size={20} />
              <span>Home</span>
            </li>
            <li onClick ={()=>setActiveContent("store")} className="flex items-center space-x-3 text-gray-300 hover:text-white cursor-pointer">
              <Store size={20} />
              <span>My Store</span>
            </li>
            <li onClick ={()=>setActiveContent("products")}  className="flex items-center space-x-3 text-gray-300 hover:text-white cursor-pointer">
              <Package size={20} />
              <span>My Products</span>
            </li>
            <li onClick ={()=>setActiveContent("orders")} className="flex items-center space-x-3 text-gray-300 hover:text-white cursor-pointer">
              <ShoppingCart size={20} />
              <span>Orders</span>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-white shadow-sm p-4 flex justify-between items-center">
          <MdMenu size={24} className="text-gray-500 cursor-pointer" />
          <div className="flex items-center space-x-2">
            <Button
               ref={anchorRef}
               id="composition-button"
               aria-controls={open ? 'composition-menu' : undefined}
               aria-expanded={open ? 'true' : undefined}
               aria-haspopup="true"
               onClick={handleToggle}
              className="capitalize"
            >
              <Avatar src="/api/placeholder/32/32" alt="User avatar" className="rounded-full" />
              <span className="text-gray-700 capitalize">Dusengimana</span>
              <ChevronDown size={16} className="text-gray-500" />
            </Button>
            <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom-start' ? 'left top' : 'left bottom',
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList sx={{width:'150px'}}
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                  >
                  <MenuItem sx={{ fontWeight: '200', fontSize: '0.85rem' }} onClick={handleClose}>My account</MenuItem>
                  <MenuItem sx={{ fontWeight: '200', fontSize: '0.85rem' }} onClick={handleClose}>Profile</MenuItem>
                  <MenuItem sx={{ fontWeight: '200', fontSize: '0.85rem' }} onClick={handleClose}>Settings</MenuItem>
                  <MenuItem sx={{ fontWeight: '200', fontSize: '0.85rem', marginTop:4, color: 'red'}} onClick={handleClose}>Logout</MenuItem>

                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
          </div>
        </div>

        {/* Dashboard Items */}
        {activeContent==="home" &&(<main className="flex-1 p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded-lg shadow">
              <h2 className="text-sm font-semibold text-gray-500">Gross Sales</h2>
              <p className="text-xl font-bold text-gray-800 mt-1">No Gross Sales</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h2 className="text-sm font-semibold text-gray-500">Total Products</h2>
              <p className="text-xl font-bold text-gray-800 mt-1">0</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h2 className="text-sm font-semibold text-gray-500">Total Customers</h2>
              <p className="text-xl font-bold text-gray-800 mt-1">0 Customers</p>
            </div>
          </div>
        </main>)}
        {activeContent==="store" &&(
          <MyStorePage/>
        )}
          {activeContent==="products" &&(
          <ProductsPage/>
        )}
        {activeContent==="orders" &&(
          <OrderPage/>
        )}
        {/* Footer */}
        <footer className="p-4 text-center text-sm text-gray-500">
          2024 &copy; Rwa Discounts. Design & Develop by Rwa Discounts
        </footer>
      </div>
    </div>
  );
};

export default Dashboard;
