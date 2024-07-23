package br.com.pib_bji.acao_social.config;

import br.com.pib_bji.acao_social.model.Usuario;
import br.com.pib_bji.acao_social.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.security.crypto.password.PasswordEncoder;

/**
 * Classe que inicializa um usuário padrão se ele não existir
 */
@Configuration
public class DataLoader implements ApplicationListener<ContextRefreshedEvent> {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public void onApplicationEvent(ContextRefreshedEvent event) {
        if (usuarioRepository.findByUsername("admin") == null) {
            Usuario usuario = new Usuario();
            usuario.setUsername("admin");
            usuario.setPassword(passwordEncoder.encode("password"));
            usuario.setRole("ADMIN");
            usuarioRepository.save(usuario);
        }
    }
}
