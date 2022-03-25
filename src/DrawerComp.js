import React, { useState } from 'react';
import {Drawer,List, ListItemButton, ListItemText,ListItemIcon,IconButton} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

const Pages = ["SignUp","Login","Logout"];

const DrawerComp = () => {
    const [openDrawer, setOpenDrawer] = useState(false);
  return (
       <React.Fragment>
         
         <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
            <List>
                {
                   Pages.map((page,index)=>(
                    <ListItemButton onClick={()=> setOpenDrawer(false)} key={index}>
                      <ListItemIcon>
                       <ListItemText>
                         {page}
                       </ListItemText>
                      </ListItemIcon>
                    </ListItemButton>
                   ))
                }

            </List>
         </Drawer>
         <IconButton
            sx={{ color: "white", marginLeft: "auto" }}
            onClick={() => setOpenDrawer(!openDrawer)}
          > 

            <MenuIcon color="secondary"/>
         </IconButton>
       </React.Fragment>
  );
};

export default DrawerComp;
