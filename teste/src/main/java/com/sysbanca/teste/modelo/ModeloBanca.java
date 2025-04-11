package com.sysbanca.teste.modelo;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotNull;

import java.sql.Time;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "tb_extracao")
@Getter
@Setter
public class ModeloBanca {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long codigo;
    
    @NotNull
    private String descricao;
    @NotNull
    private String horario;
    @NotNull
    private String bloqueio;
    
    private int premiacao;

    private String segunda;
    private String terca;
    private String quarta;
    private String quinta;
    private String sexta;
    private String sabado;
    private String domingo;

}

