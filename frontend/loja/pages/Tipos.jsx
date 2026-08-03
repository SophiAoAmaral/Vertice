import React from 'react'
import { useState } from 'react';
import { useParams } from 'react-router';

export const Tipos = ({dados, setDados}) => {
   const { categoria } = useParams();

  const itensFiltrados = dados.filter(
    item => item.categoria === categoria
  );

    console.log(itensFiltrados)
  return (
    <div>
        {itensFiltrados.map((item)=>(
            <p>{item.nome}</p>
        ))}
    </div>
  )
}
