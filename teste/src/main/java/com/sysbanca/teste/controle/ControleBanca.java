package com.sysbanca.teste.controle;

import org.springframework.web.bind.annotation.RestController;

import com.sysbanca.teste.controle.servico.ServicoBanca;
import com.sysbanca.teste.modelo.ModeloBanca;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;



@RestController
public class ControleBanca {

    @Autowired
    private ServicoBanca ps;

    @GetMapping("/listar")
        public Iterable<ModeloBanca> listar(){
            return ps.listar();
        }
    

    @GetMapping("/")
    public String rota(){
        return "Funcionando...";
    }
}
