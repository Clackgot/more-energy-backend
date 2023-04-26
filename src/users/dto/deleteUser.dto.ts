import { ApiProperty } from '@nestjs/swagger';

export class DeleteUserDto {
  @ApiProperty({
    description: 'Идентификатор пользователя для удаления',
    example: 1,
  })
  readonly id: number;
}
