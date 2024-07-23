package br.com.pib_bji.acao_social.repository;

import br.com.pib_bji.acao_social.model.Usuario;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UsuarioRepository extends MongoRepository<Usuario, String> {
    Usuario findByUsername(String username);
}
