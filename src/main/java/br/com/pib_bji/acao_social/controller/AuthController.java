package br.com.pib_bji.acao_social.controller;

import br.com.pib_bji.acao_social.model.Usuario;
import br.com.pib_bji.acao_social.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class AuthController {

    @Autowired
    private AuthService authService;

    @GetMapping("/login")
    public String login() {
        return "login";
    }

    @GetMapping("/register")
    public String register() {
        return "register";
    }

    @PostMapping("/register")
    public String registerUser(String username, String password, String role, Model model) {
        if (authService.findUserByUsername(username) != null) {
            model.addAttribute("error", "Username already exists");
            return "register";
        }
        authService.registerUser(username, password, role);
        return "redirect:/login";
    }
}
