package com.sysbanca.teste.controle;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.sysbanca.teste.servico.ServicoBanca;
import com.sysbanca.teste.modelo.ModeloBanca;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;


@CrossOrigin("*")
@RestController
public class ControleBanca {

    @Autowired
    private ServicoBanca sb;

    //metodo de postagem
    /*@PostMapping("/cadastrar")
    public ResponseEntity<?> cadastrar(@RequestBody ModeloBanca mb){
        
        System.out.println("oi");
        return sb.cadastrar(mb);
        
     
        
    }*/
    @PostMapping(path = "/cadastrar", consumes = { MediaType.ALL_VALUE })
    public String postMethodName( @RequestBody String teste1) {
        System.out.println(teste1);
        return teste1;
    }
    

    //metodo de alterar
    /*
      @PutMapping("/alterar")
    public ResponseEntity<?> alterar(@RequestBody ModeloBanca mb){
        return sb.cadastrar(mb, "cadastrar");

    //metodo de deletar
    @DeleteMapping("/deletar")
    public ResponseEntity<?> deletar(@RequestBody ModeloBanca mb){
        return sb.deletar(mb.getCodigo());
    }
    }
     */
   

    

    @GetMapping("/listar")
        public Iterable<ModeloBanca> listar(){
            return sb.listar();
        }
    

    @GetMapping("/")
    public String rota(){
        return "Funcionando...";
    }
}
