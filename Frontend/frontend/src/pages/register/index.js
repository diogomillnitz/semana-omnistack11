import React from "react";
import './styles.css'
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import Lock from "@material-ui/icons/Lock";
import People from "@material-ui/icons/People";
import LocalPhone from "@material-ui/icons/LocalPhone";
import AccountBox from "@material-ui/icons/AccountBox";
// core components

import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Button from "../../components/CustomButtons/Button.js";
import Card from "../../components/Card/Card.js";
import CardBody from "../../components/Card/CardBody.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardFooter from "../../components/Card/CardFooter.js";
import CustomInput from "../../components/CustomInput/CustomInput.js";

import styles from "../../assets/jss/material-kit-react/views/RegisterPage.js";

import image from "../../assets/img/pms.png";

const useStyles = makeStyles(styles);

export default function LoginPage(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function() {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const { ...rest } = props;
  return (
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={10} sm={12} md={6}>
              <Card className={classes[cardAnimaton]}>
                <form className={classes.form}>
                  <CardHeader color="primary" className={classes.cardHeader}>
                   <img className="imagem" src={image}/>
                  </CardHeader>
                  
                  <h4 className={classes.divider}>Cadastro</h4>
                  <CardBody>
                  <GridContainer>
            <GridItem xs={12} sm={4} md={4} lg={8}>
            <CustomInput
                labelText="Nome"
                id="material"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                      <People />
                    </InputAdornment>
                  )
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4} lg={4}>
            <CustomInput
                labelText="Matricula"
                id="material"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                      <AccountBox />
                    </InputAdornment>
                  )
                }}
               
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4} lg={8}>
            <CustomInput
                labelText="Email"
                id="material"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                      <Email />
                    </InputAdornment>
                  )
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4} lg={4}>
            <CustomInput
                labelText="Ramal"
                id="material"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                      <LocalPhone />
                    </InputAdornment>
                  )
                }}
               
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4} lg={6}>
            <CustomInput
                labelText="Área"
                id="material"
                formControlProps={{
                  fullWidth: true
                }}
               
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4} lg={6}>
            <CustomInput
                labelText="Função"
                id="material"
                formControlProps={{
                  fullWidth: true
                }}
               
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4} lg={6}>
            <CustomInput
                      labelText="Senha"
                      id="pass"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "password",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Lock className={classes.inputIconsColor}>
                              
                            </Lock>
                          </InputAdornment>
                        ),
                        autoComplete: "off"
                      }}
                    /> 

            </GridItem>
            <GridItem xs={12} sm={4} md={4} lg={6}>
            <CustomInput
                      labelText="Confirme a senha"
                      id="pass"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "password",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Lock className={classes.inputIconsColor}>
                              
                              </Lock>
                          </InputAdornment>
                        ),
                        autoComplete: "off"
                      }}
                    /> 

            </GridItem>
            
            
          </GridContainer>
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Button simple color="primary">
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
