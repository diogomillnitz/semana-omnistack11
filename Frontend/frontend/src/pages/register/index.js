import React, {useState} from "react";
import {useHistory} from "react-router-dom"
import './styles.css'
import api from '../../../src/services/api.js';
//var bycrypt = require("bycrypt");
import bcrypt from "bcryptjs";


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
  
  const [nome, setNome] = useState('');
  const [matricula, setMatricula] = useState('');
  const [email, setEmail] = useState('');
  const [ramal, setRamal] = useState('');
  const [area, setArea] = useState('');
  const [funcao, setFuncao] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmSenha, setConfirmSenha] = useState('');

  const history = useHistory();
  
  async function handleRegister(e) {
    e.preventDefault();


    const data= {
      nome, 
      matricula,
      email,
      ramal,
      area,
      funcao,
      senha,
    };

    if(nome !== '' || matricula !== '' || email !== '' || ramal !== '' || area !== '' || funcao !== ''){
      if(senha === confirmSenha){
      //  var salt = bcrypt.genSaltSync(10);
       // var hash = bcrypt.hashSync(senha, salt);
      //  console.log(hash,data);
      
        try{
          api.post('/register', {data});
        //  alert(`${hash}`);
          alert('Seu cadastro foi realizado com sucesso!');
          history.push('/');
          
        }
         catch{
          alert('Erro no cadastro, tente novamente!');
        }
      }else{
        alert('As senhas digitadas não coincidem.');
        senha.valueOf('');
        confirmSenha.valueOf('');
      }
    }

    else{
      alert('Erro no cadastro, todos os campos devem ser preenchidos!');
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
            <GridItem xs={10} sm={12} md={6}>
              <Card className={classes[cardAnimaton]}>
                <form className={classes.form} onSubmit={handleRegister}> 
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
                value={nome}
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  onChange: e => setNome(e.target.value),
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
                value={matricula}
                
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  onChange: e => setMatricula(e.target.value),
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
                value={email}
               
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  onChange: e => setEmail(e.target.value),
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
                value={ramal}
                
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  onChange: e => setRamal(e.target.value),
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
                value={area}
            
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  onChange: e => setArea(e.target.value),
                }}
               
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4} lg={6}>
            <CustomInput
                labelText="Função"
                id="material"
                value={funcao}
                
                formControlProps={{
                  fullWidth: true
                }}

                inputProps={{
                  onChange: e => setFuncao(e.target.value),
                }}
               
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4} lg={6}>
            
            <CustomInput
                      labelText="Senha"
                      id="senha"
                      value={senha}
                  
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        onChange: e => setSenha(e.target.value),
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
                      id="confirmsenha"
                      value={confirmSenha}
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        onChange: e => setConfirmSenha(e.target.value),
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
                    <Button simple color="primary" onClick={handleRegister}>
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
