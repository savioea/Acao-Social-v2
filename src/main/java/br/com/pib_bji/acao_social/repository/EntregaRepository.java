package br.com.pib_bji.acao_social.repository;

import br.com.pib_bji.acao_social.model.Entrega;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface EntregaRepository extends MongoRepository<Entrega, String> {
}
