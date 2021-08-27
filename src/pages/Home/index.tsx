import React from 'react';
import { Typography } from '@material-ui/core';
import { AssignmentTurnedInSharp, CheckCircleSharp, AssignmentSharp, IndeterminateCheckBoxSharp, GitHub, DnsSharp, WebSharp } from '@material-ui/icons';

import useStyles from './styles';


const Home: React.FC = () => {
  const classes = useStyles();


  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <Typography className={classes.title} variant="h3">Bem-vindo(a)!</Typography>
      </div>
      <div className={classes.content}>
        <div className={classes.firstContact}>
          <div>
            <Typography variant="h5">Desafio realizado para a empresa
            <Typography className={classes.link} component="a" href="https://medcloud.link" target="_blank" color="primary" variant="h6"> MedCloud </Typography>
             para nivelamento nas tecnologias: React JS, NodeJS e AWS serverless.</Typography>
          </div>
          <div className={classes.repos}>
            <div className={classes.functionalities}>
              <GitHub style={{ fontSize: 35 }} />
              <Typography variant="h4">Repositórios:</Typography>
            </div>
            <div className={classes.checkList}>
              <div className={classes.itemCheck}>
                <WebSharp />
                <Typography className={classes.link} component="a" href="https://github.com/HERuppel/frontend-medcloud-challenge" target="_blank" color="textPrimary" variant="h6">Front-end</Typography>
              </div>
              <div className={classes.itemCheck}>
                <DnsSharp />
                <Typography className={classes.link} component="a" href="https://github.com/HERuppel/backend-medcloud-challenge" target="_blank" color="textPrimary" variant="h6">Back-end</Typography>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.functionalities}>
          <AssignmentTurnedInSharp style={{ fontSize: 40 }} />
          <Typography variant="h4">Funcionalidades:</Typography>
        </div>
        <div className={classes.checkList}>
          <div className={classes.itemCheck}>
            <CheckCircleSharp />
            <Typography color="textPrimary" variant="h6">Formulário para criação de registro de paciente.</Typography>
          </div>
          <div className={classes.itemCheck}>
            <CheckCircleSharp />
            <Typography color="textPrimary" variant="h6">Listagem das informações.</Typography>
          </div>
          <div className={classes.itemCheck}>
            <CheckCircleSharp />
            <Typography color="textPrimary" variant="h6">Backend feito em NodeJS e serverless.</Typography>
          </div>
          <div className={classes.itemCheck}>
            <CheckCircleSharp />
            <Typography color="textPrimary" variant="h6">AWS Lambda e API Gateway.</Typography>
          </div>
          <div className={classes.itemCheck}>
            <CheckCircleSharp />
            <Typography color="textPrimary" variant="h6">DynamoDB como banco de dados em nuvem.</Typography>
          </div>
        </div>
        <div className={classes.functionalities}>
          <AssignmentSharp style={{ fontSize: 40 }} />
          <Typography variant="h4">Extras:</Typography>
        </div>
        <div className={classes.checkList}>
          <div className={classes.itemCheck}>
            <CheckCircleSharp />
            <Typography color="textPrimary" variant="h6">Edição e exclusão de paciente.</Typography>
          </div>
          <div className={classes.itemCheck}>
            <CheckCircleSharp />
            <Typography color="textPrimary" variant="h6">Context API para gerenciamento de estado global.</Typography>
          </div>
          <div className={classes.itemCheck}>
            <IndeterminateCheckBoxSharp />
            <Typography color="textPrimary" variant="h6">Ordenação e paginação da lista</Typography>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;
