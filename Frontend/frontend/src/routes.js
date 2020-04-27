import React from 'react';
import { BrowserRouter, Rout, Switch} from 'react-router-dom';

import Logon from './pages/logon';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path= "/" exact component={Logon} />
            </Switch>
        </BrowserRouter>
    );
}