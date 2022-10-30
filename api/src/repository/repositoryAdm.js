import { con } from './connection.js';

export async function LoginAdm(email, senha) {
    const comando = `select id_adm 	as	 id,
                        nm_adm	as	nome,
                        ds_email as email
                    from tb_adm
                    where ds_email = ? and
                        ds_senha = ?`
    const [resposta] = await (await con).query(comando, [email, senha]);
    return resposta[0]
};

export async function ExcluirDepoimentos(id) {
    const comando = `delete from tb_depoimento where id_depoimento = ?`;

    const [linhas] = await (await con).query(comando, [id]);
    return linhas[0];
};

export async function AdicionarOfertas(dados) {
    const comando = `insert into tb_ofertas(id_produto, ds_preco_novo)
                            values(?, ?)`;
    const [linhas] = await (await con).query(comando, [dados.idUsuario, dados.NovoPreco]);
    dados.idOfertas = linhas.insertId;
    return linhas[0];
};