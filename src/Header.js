import React, { useState } from "react";
import { AppBar,Typography,Toolbar,Button,useMediaQuery,useTheme} from "@mui/material";
import DrawerComp from "./DrawerComp";

const Header = () => {
   const [value, setValue] = useState();
   const theme = useTheme();
   console.log(theme);
   const isMatch = useMediaQuery(theme.breakpoints.down("md"));
   console.log(isMatch);

    return(
       <React.Fragment>
           <AppBar sx={{background: "#FFFFFF"}}>
              <Toolbar>
              <Typography sx={{fontsize:"1.5rem",paddingLeft:"2%"}} color="secondary">LOGO</Typography>
                 {isMatch ? (
                    <>
                    <DrawerComp />
                    </>
                   ) : (
                    <>
                    <Button sx={{marginLeft:'auto'}}  color="secondary"> 
                     Login{" "}
                    </Button>
                    <Button sx={{marginLeft: '10px'}} variant="contained" color="secondary">
                     SignUp{" "}  
                    </Button>
                    </>
                 )}
              </Toolbar>
           </AppBar>
       </React.Fragment>
    );
};

export default Header;
