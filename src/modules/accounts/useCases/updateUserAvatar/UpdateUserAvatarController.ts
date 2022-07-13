import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateUserAvatarUsaCase } from "./UpdateUserAvatarUseCase";

class UpdateUserAvatarController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;
    const avatar_file = request.file.filename;

    const updateUserAvatarUsaCase = container.resolve(UpdateUserAvatarUsaCase);

    await updateUserAvatarUsaCase.execute({ user_id: id, avatar_file });

    return response.status(204).send();
  }
}

export { UpdateUserAvatarController };
