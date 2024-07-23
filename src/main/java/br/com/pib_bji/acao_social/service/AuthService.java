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
        Usuario user = new Usuario();
        user.setUsername(username);
        user.setPassword(passwordEncoder.encode(password));
        user.setRole(role);
        return usuarioRepository.save(user);
    }

    public Usuario findUserByUsername(String username) {
        return usuarioRepository.findByUsername(username);
    }
}
