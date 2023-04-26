import { ApiProperty } from '@nestjs/swagger';

export class TokenDto {
  @ApiProperty({
    description: 'Токен',
    example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJ0ZXN0MkBleGFtcGxlLmNvbSIsImlhdCI6MTY4MjUxOTkwOCwiZXhwIjoxNjgyNTE5OTExfQ.kh5IITskPcp_oUzvrbZUrMMLeJ9GWbEZbwbaJmUhYkA',
  })
  public readonly token: string;
}
