import { con } from "./connection.js";

export default async function LoginUsuario(email, senha) {
    const comando = `select id_usuario 	as	 id,
                        nm_usuario	as	nome,
                        ds_email as email
                    from tb_usuario
                    where ds_email = ? and
                        ds_senha = ?`;
    const [resposta] = await (await con).query(comando, [email, senha]);
    return resposta[0];
};

export const CadastroUsuario = async (infoClient) => {
    const comando = `insert into tb_usuario (nm_usuario, ds_email, ds_cpf, dt_nascimento, ds_telefone, ds_senha)
                            value (? , ?, ?, ?, ?, ?)`;
    const [resposta] = await (await con).query(comando, [infoClient.nome, infoClient.email, infoClient.cpf, infoClient.nascimento, infoClient.telefone, infoClient.senha]);
    infoClient.id = resposta.insertId;
    return resposta;
}

export const CadastroEnderecoUsuario = async (idUsuario ,infoEndereco) =>{
    const comando = `
        insert into tb_endereco_usuario(id_usuario, ds_cep, ds_endereco,ds_pt_referencia, ds_bairro, ds_estado, ds_cidade, nr_casa)
                values(?, ?, ?, ?, ?, ?, ?, ?)`;
    const [resposta] = await (await con).query(comando, [idUsuario, infoEndereco.cep, infoEndereco.endereco, infoEndereco.ptReferencia, infoEndereco.bairro, infoEndereco.estado, infoEndereco.cidade, infoEndereco.nrCasa ]);
    infoEndereco.id = resposta.insertId;
    return resposta;
};

export const BuscaUsuarioId = async id =>{
    const comando = `
                select id_usuario as id,
                    nm_usuario as nome,
                    ds_email as email,
                    ds_cpf as cpf,
                    dt_nascimento as nascimento,
                    ds_telefone as telefone
            from tb_usuario
                where id_usuario = ?`;
    const [linhas] = await (await con).query(comando, [id]);
    return linhas[0];
};

export async function listarEndereco(idUsuario) {
    const comando = `
                select id_usuario as iduser,
                ds_cep as cep,
                ds_endereco as endereco,
                ds_pt_referencia as pontoReferencia,
                ds_bairro as bairro,
                ds_estado as estado,
                ds_cidade as cidade,
                nr_casa as casa
            from tb_endereco_usuario 
            where id_usuario = ?`
    const [registros] = await (await con).query(comando, [idUsuario]);
    return registros;
}

export async function salvarEndereco(idusuario ,cep ,endereco ,casa , referencia){
    const comando = `
    insert into tb_endereco_usuario (id_usuario, ds_cep, ds_endereco, nr_casa, ds_pt_referencia)
						value (?, ?, ?, ?, ?)
    `
}

export const ListarDepoimentos = async ()=> { 
    const comando = `select id_depoimento as id,
                        nm_usuario as nome,
                        ds_comentario as comentario,
                        vl_depoimento as avaliacao,
                        ds_email as email
                        from tb_depoimento
                        inner join tb_usuario on tb_depoimento.id_usuario = tb_usuario.id_usuario`;
    const [linhas] = await (await con).query(comando);
    return linhas;
};

export const ComentarUmDepoimento = async (dados) =>{
    const comando = `insert into tb_depoimento(id_usuario, vl_depoimento, ds_comentario)
                                    values(?, ?, ?)`;
    const [linhas] = await (await con).query(comando, [dados.idUsuario, dados.avaliacao, dados.comentario]);
    dados.idDepoimento = linhas.insertId;
    return linhas;
};