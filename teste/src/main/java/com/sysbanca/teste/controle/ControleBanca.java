package com.sysbanca.teste.controle;

import org.springframework.web.bind.annotation.RestController;

import com.sysbanca.teste.servico.ServicoBanca;
import com.sysbanca.teste.modelo.ModeloBanca;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;


@CrossOrigin("*")
@RestController
public class ControleBanca {

    @Autowired
    private ServicoBanca sb;

    //Rota para cadastrar
    @PostMapping("/cadastrar")
    public ResponseEntity<?> cadastrar(@RequestBody ModeloBanca mb){
        return sb.cadastrarAlterar(mb, "cadastrar");   
    }

    //Rota para alterar
      @PutMapping("/alterar")
    public ResponseEntity<?> alterar(@RequestBody ModeloBanca mb){
        return sb.cadastrarAlterar(mb, "alterar");
    }
        
    //Rota para deletar
    @DeleteMapping("/deletar")
    public ResponseEntity<?> deletar(@RequestBody ModeloBanca mb){
        return sb.deletar(mb.getCodigo());
    }
    
    //Rota para listar
    @GetMapping("/listar")
        public Iterable<ModeloBanca> listar(){
            return sb.listar();
        }
    
    @GetMapping("/")
    public String rota(){
        return "Funcionando...";
    }
}
