package test.sarafan.repo;

import test.sarafan.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserDetailsRepo extends JpaRepository<User, String> {

}
