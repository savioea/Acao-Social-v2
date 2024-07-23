package br.com.pib_bji.acao_social.repository;

import br.com.pib_bji.acao_social.model.Beneficiario;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface BeneficiarioRepository extends MongoRepository<Beneficiario, String> {
}
