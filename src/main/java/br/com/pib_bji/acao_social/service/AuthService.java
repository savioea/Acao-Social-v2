package br.com.pib_bji.acao_social.service;

import br.com.pib_bji.acao_social.model.Usuario;
import br.com.pib_bji.acao_social.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public Usuario registerUser(String username, String password, String role) {
        Usuario usuario = new Usuario();
        usuario.setUsername(username);
        usuario.setPassword(passwordEncoder.encode(password));
        usuario.setRole(role);
        return usuarioRepository.save(usuario);
    }

    public Usuario findUserByUsername(String username) {
        return usuarioRepository.findByUsername(username);
    }
}
