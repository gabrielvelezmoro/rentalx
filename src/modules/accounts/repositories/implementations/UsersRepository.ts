import { getRepository, Repository } from "typeorm";
import { User } from "../../entities/User";
import { IUsersRepository } from "../ICategoriesRepository";

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create({
    username,
    driver_license,
    email,
    name,
    password,
  }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      username,
      driver_license,
      email,
      name,
      password,
    });

    await this.repository.save(user);
  }
}

export { UsersRepository };
