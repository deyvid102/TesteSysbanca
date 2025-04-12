package com.sysbanca.teste.servico;

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

    //Método para cadastrar e alterar
        public ResponseEntity <?> cadastrarAlterar(ModeloBanca mb, String acao){

            if(mb.getDescricao().equals("") ){
            rm.setMensagem("A descrição é obrigatória!");
            return new ResponseEntity<RespostaModelo>(rm, HttpStatus.BAD_REQUEST);
            }else if(mb.getHorario().equals("")){
                rm.setMensagem("O horário é obrigatória!");
            return new ResponseEntity<RespostaModelo>(rm, HttpStatus.BAD_REQUEST);
            }else if(mb.getBloqueio().equals("")){
                rm.setMensagem("O Bloqueio é obrigatória!");
            return new ResponseEntity<RespostaModelo>(rm, HttpStatus.BAD_REQUEST);
            }
            else{
                if(acao.equals("cadastrar")){
                    return new ResponseEntity<ModeloBanca>(rb.save(mb), HttpStatus.CREATED);
                }else{
                    return new ResponseEntity<ModeloBanca>(rb.save(mb), HttpStatus.OK);
                }
            }
        }

        //Metodo para deletar
        public ResponseEntity <RespostaModelo> deletar(long codigo){
            rb.deleteById(codigo);
            rm.setMensagem("Removido com sucesso!");
            return new ResponseEntity<RespostaModelo>(rm, HttpStatus.OK);
        }
    }


