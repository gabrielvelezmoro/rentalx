import { IUsersRepository } from "../../repositories/IUserRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({
    name,
    username,
    email,
    password,
    driver_license,
  }: ICreateUserDTO): Promise<void> {
    await this.usersRepository.create({
      driver_license,
      name,
      email,
      password,
      username,
    });
  }
}

export { CreateUserUseCase };
