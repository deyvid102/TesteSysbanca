package com.sysbanca.teste.repositorio;

import org.springframework.data.repository.CrudRepository;

import com.sysbanca.teste.modelo.ModeloBanca;

public interface RepositorioBanca extends CrudRepository<ModeloBanca, Long>{
    
}
