package com.sysbanca.teste.controle.servico;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.sysbanca.teste.modelo.ModeloBanca;
import com.sysbanca.teste.modelo.RespostaModelo;
import com.sysbanca.teste.repositorio.RepositorioBanca;

@Service
public class ServicoBanca {

    @Autowired
    private RepositorioBanca rb;
    
    @Autowired
    private RespostaModelo rm;

    //Método de listagem
    public Iterable <ModeloBanca> listar(){
        return rb.findAll();
    }

    //Método para cadastro
    public ResponseEntity <?> cadastrar(ModeloBanca mb){
        return new ResponseEntity<ModeloBanca>(rb.save(mb), HttpStatus.CREATED);
    }


}
