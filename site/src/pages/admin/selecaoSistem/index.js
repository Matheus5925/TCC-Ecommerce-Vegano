import './index.scss';
import { CardsSistems } from '../../../components/CardsSistem/index.js';
import storage from 'local-storage';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import CabecalhoAdmin from '../../../components/cabecalho-admin';

export const PageSelection = () => {


    const conteudoCard = [
        {
            id: 1,
            nome: "Cadastrar um novo produto",
            link: "/cadastrarprodutos",
            image: "/assets/images/img2.png"
        },
        {
            id: 2,
            nome: "Ver Pedidos",
            link: "/pedidospedents",
            image: "image/image 33.png"
        },
        {
            id: 3,
            nome: "Depoimentos",
            link: "/",
            image: "image/image 33.png"
        },
        {
            id: 4,
            nome: "Estoque",
            link: "/estoque",
            image: "image/image 33.png"
        },
        {
            id: 5,
            nome: "Adicionar Ofertas",
            link: "/",
            image: "image/image 33.png"
        },
        {
            id: 6,
            nome: "Histórico de compras",
            link: "/historicocompras",
            image: "./image/image33.png"
        }
    ]


    return (
        <main className='pagina-selecao'>
            <CabecalhoAdmin />
            <h1>Menu de adiministrador</h1>
            <section className='cards'>
                <div className='secao-cards'>
                    {conteudoCard.map(item => <CardsSistems
                        key={item.id}
                        nome={item.nome}
                        link={item.link}
                        image={item.image}
                    />)}
                </div>
            </section>
        </main>
    );
}