import React from "react";
import { Grid } from "@material-ui/core";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { Box } from "@material-ui/core";

export default function Footer() {

    return (<>
        <div className="footer-box">
            <Grid container>
                <Grid item md={3}>
                    <List>
                        <ListItem >
                            <Box fontWeight="fontWeightBold" mb={4}>PAWS</Box>
                        </ListItem>
                        <ListItem>3192 Terry Francisco Street</ListItem>
                        <ListItem>San Francisco, CN 54158</ListItem>
                        <ListItem>516-214-7861</ListItem>
                        <ListItem>info@paws.com</ListItem>
                    </List>
                </Grid>
                <Grid item md={3}>

                    <List>
                        <ListItem><Box fontWeight="fontWeightBold" mb={4}>Visit</Box></ListItem>
                        <ListItem>Shop</ListItem>
                        <ListItem>About</ListItem>
                        <ListItem>Contact</ListItem>
                        <ListItem>Blabla</ListItem>
                    </List>
                </Grid>
                <Grid item md={3}>

                    <List>
                        <ListItem><Box fontWeight="fontWeightBold" mb={4}>Information</Box></ListItem>
                        <ListItem>FAQ</ListItem>
                        <ListItem>Shipping and Returns</ListItem>
                        <ListItem>Store Policy</ListItem>
                        <ListItem>Payment Methods</ListItem>
                    </List>
                </Grid>
                <Grid item md={3}>
                    <List>
                        <ListItem><Box fontWeight="fontWeightBold" mb={4}>Social</Box></ListItem>
                        <ListItem>Facebook</ListItem>
                        <ListItem>Twitter</ListItem>
                        <ListItem>Instagram</ListItem>
                        <ListItem>Pinterest</ListItem>
                    </List>
                </Grid>

            </Grid>
            <Grid container>
                <Grid item md={4}>
                    <Box fontWeight="fontWeightBold">Keep playing</Box>
                    <Box>join our newsletter</Box>
                </Grid>
                <Grid item md={8}></Grid>
            </Grid>
        </div></>)
}