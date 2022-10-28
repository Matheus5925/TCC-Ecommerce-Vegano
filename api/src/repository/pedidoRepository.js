import { con } from "./connection.js";

export async function listarEndereco(idUsuario) {
    const comando = `
    select  id_endereco_usuario		id,
		ds_cep					cep,
        ds_endereco				endereco,
        nr_casa					casa
	    from tb_endereco_usuario
    where id_usuario = ?;   
    `
    const [registros] = await con.query(comando, [idUsuario]);
    return registros[0] 
}

export async function salvarEndereco(idusuario ,cep ,endereco ,casa , referencia){
    const comando = `
    insert into tb_endereco_usuario (id_usuario, ds_cep, ds_endereco, nr_casa, ds_pt_referencia)
						value (?, ?, ?, ?, ?)
    `

    const [info] = await con.query(comando, [idusuario ,cep ,endereco ,casa , referencia]);
    return info.insertId;
}

export async function inserirPedido(novoPedido) {
    const comando = `
    insert into tb_compra(
        id_usuario, 
        nr_valor_final, 
        ds_status, 
        ds_tipo_pagamento
    )
        value (?, ?, ?, ?)
    `

    const [info] = await con.query(comando, [
        novoPedido.idUsuario,
        novoPedido.idEndereco,
        novoPedido.valor,
        novoPedido.status,
        novoPedido.tipo
    ]);
    return info.insertId;
}





