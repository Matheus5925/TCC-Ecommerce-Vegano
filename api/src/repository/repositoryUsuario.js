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
}