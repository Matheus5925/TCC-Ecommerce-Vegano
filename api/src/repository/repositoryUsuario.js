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

export const CadastroUsuario = async (infoClient)=>{
    const comando = `insert into tb_usuario (nm_usuario, ds_email, ds_cpf, dt_nascimento, ds_telefone, ds_senha)
                            value (? , ?, ?, ?, ?, ?)`;
    const [resposta] = await (await con).query(comando,[infoClient.nome, infoClient.email,infoClient.cpf,infoClient.nascimento,infoClient.telefone,infoClient.senha]);
    infoClient.id = resposta.insertId;
    return resposta;
}