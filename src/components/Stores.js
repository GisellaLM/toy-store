import React from "react";
import { Grid } from "@material-ui/core";
import Pointer from "../assets/images/pinpointer.png";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Store from "../assets/images/building-store.jpg";


export default function Stores() {
    return (<>
        <Grid container >
            <Grid item><h2>STORE LOCATION</h2></Grid></Grid>
        <Grid container style={{ border: '2px  solid #d59d76', borderRadius: '35px', marginBottom: '50px' }}>
            <Grid item sm={2} md={2} lg={2} xl={2}>
                <div style={{ display: 'flex', height: '100%' }}>
                    <div style={{ margin: 'auto' }}>
                        <img src={Pointer} style={{ width: '50px' }} />
                    </div>

                </div>
            </Grid>
            <Grid item sm={4} md={4} lg={4} xl={4}>
                <div style={{ display: 'inlineFlex' }}>

                    <div style={{ margin: 'auto' }}><List>
                        <ListItem>4828 Jones Avenue </ListItem>
                        <ListItem>Winston Salem,NC,27101</ListItem>
                        <ListItem>336-702-0296</ListItem>
                        <ListItem>info@paws.com</ListItem>
                    </List>
                    </div>

                </div>
            </Grid>
            <Grid item sm={6} md={6} lg={6} xl={6}>
                <div><img src={Store} style={{ width: '50%', }} /></div>
            </Grid>
        </Grid>

        <Grid container style={{ border: '2px  solid #d59d76', borderRadius: '35px', marginBottom: '50px' }}>
            <Grid item sm={2} md={2} lg={2} xl={2}>
                <div style={{ display: 'flex', height: '100%' }}>
                    <div style={{ margin: 'auto' }}>
                        <img src={Pointer} style={{ width: '50px' }} />
                    </div>

                </div>
            </Grid>
            <Grid item sm={4} md={4} lg={4} xl={4}>
                <div style={{ display: 'inlineFlex' }}>

                    <div style={{ margin: 'auto' }}><List>
                        <ListItem>4828 Jones Avenue </ListItem>
                        <ListItem>Winston Salem,NC,27101</ListItem>
                        <ListItem>336-702-0296</ListItem>
                        <ListItem>info@paws.com</ListItem>
                    </List>
                    </div>

                </div>
            </Grid>
            <Grid item sm={6} md={6} lg={6} xl={6}>
                <div><img src={Store} style={{ width: '50%', }} /></div>
            </Grid>
        </Grid>

        <Grid container style={{ border: '2px  solid #d59d76', borderRadius: '35px' }}>
            <Grid item sm={2} md={2} lg={2} xl={2}>
                <div style={{ display: 'flex', height: '100%' }}>
                    <div style={{ margin: 'auto' }}>
                        <img src={Pointer} style={{ width: '50px' }} />
                    </div>

                </div>
            </Grid>
            <Grid item sm={4} md={4} lg={4} xl={4}>
                <div style={{ display: 'inlineFlex' }}>

                    <div style={{ margin: 'auto' }}><List>
                        <ListItem>4828 Jones Avenue </ListItem>
                        <ListItem>Winston Salem,NC,27101</ListItem>
                        <ListItem>336-702-0296</ListItem>
                        <ListItem>info@paws.com</ListItem>
                    </List>
                    </div>

                </div>
            </Grid>
            <Grid item sm={6} md={6} lg={6} xl={6}>
                <div><img src={Store} style={{ width: '50%', }} /></div>
            </Grid>
        </Grid>

    </>)
}