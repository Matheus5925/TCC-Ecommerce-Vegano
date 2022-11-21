import './index.scss';
import { CardsSistems } from '../../../components/CardsSistem/index.js';
import storage from 'local-storage';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import CabecalhoAdmin from '../../../components/cabecalho-admin';
import NovoProduto from '../../../assets/images/image33.png';
import Pedido from '../../../assets/images/image40.png';
import Depoimento from '../../../assets/images/image39.png';
import Estoque from '../../../assets/images/image38.png';

export const PageSelection = () => {


    const conteudoCard = [
        {
            id: 1,
            nome: "Cadastrar um novo produto",
            link: "/cadastrarprodutos",
            image: NovoProduto
        },
        {
            id: 2,
            nome: "Ver Pedidos",
            link: "/pedidospedents",
            image: Pedido
        },
        {
            id: 3,
            nome: "Depoimentos",
            link: "/listadedepoimentos",
            image: Depoimento
        },
        {
            id: 4,
            nome: "Estoque",
            link: "/estoque",
            image: Estoque
        },
        {
            id: 5,
            nome: "Voltar para o inicio",
            link: "/",
        },
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