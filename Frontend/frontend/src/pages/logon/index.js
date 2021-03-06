import React, {useState} from 'react';
import './styles.css';

import { makeStyles } from "@material-ui/core/styles";
import { FiLogIn} from 'react-icons/fi';
import InputAdornment from "@material-ui/core/InputAdornment";

import api from '../../services/api'

// @material-ui/icons
import Email from "@material-ui/icons/Email";
import Lock from "@material-ui/icons/Lock";

// react-icons

import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Button from "../../components/CustomButtons/Button.js";
import Card from "../../components/Card/Card.js";
import CardBody from "../../components/Card/CardBody.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardFooter from "../../components/Card/CardFooter.js";
import CustomInput from "../../components/CustomInput/CustomInput.js";
import styles from "../../assets/jss/material-kit-react/views/loginPage.js";

import image from "../../assets/img/pms.png";
const useStyles = makeStyles(styles);


export default function Login(props){

  const [email,setEmail]= useState('');
  const [senha,setSenha]= useState('');

  async function handleLogin() {

    try{
      bcrypt.compareSync("B4c0/\/", hash);
    }catch{
      
    }

  }

  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function() {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const { ...rest } = props;
  return (
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={5}>
              <Card className={classes[cardAnimaton]}>
                <form className={classes.form}>
                  <CardHeader color="primary" className={classes.cardHeader}>
                  <img className="imagem" src={image}/>
                  </CardHeader>
                  
                  <h3 className={classes.divider}>Login</h3>
                  <CardBody>
                    
                    <CustomInput
                      labelText="Email"
                      id="email"
                      value={email}
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        onChange: e => setEmail(e.target.value),
                        type: "email",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Email className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                    />
                    <CustomInput
                      labelText="Senha"
                      id="password"
                      value={senha}
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        onChange: e => setSenha(e.target.value),
                        type: "Lock",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Lock className={classes.inputIconsColor}/>
                          </InputAdornment>
                        ),
                        autoComplete: "off"
                      }}
                    />
                    <a href ="/register" className="cadastro">
                    <FiLogIn size={14} color= "#616161"/>
                    Não tenho cadastro
                    </a>
                    
                  </CardBody>
                  
                  <CardFooter className={classes.cardFooter}>
                    <Button simple color="primary" size="lg" onClick={handleLogin}>
                      entrar
                    </Button>
                  </CardFooter>

                      
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        
    
  );
}