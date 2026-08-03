import React from 'react'
import { useState } from 'react';
import { Link, useParams } from 'react-router';

export const Tipos = ({dados, setDados}) => {
   const { categoria } = useParams();

  const itensFiltrados = dados.filter(
    item => item.categoria === categoria
  );

    console.log(itensFiltrados)
  return (
    <div>
        {itensFiltrados.map((item)=>(
            <Link to={`/produto/${item._id}`} key={item._id}>
                <div>
                    <h3>{item.nome}</h3>
                </div>
            </Link>
        ))}
    </div>
  )
}
