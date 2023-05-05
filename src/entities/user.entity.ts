import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, nullable: false })
  email: string;

  @Column({nullable:false})

  password: string;

  @Column({nullable:false})
  username: string;

  @Column({ type: 'timestamp', nullable: true, default: null })
  lastLoginAt: Date | null;

  @Column({nullable:true})
  refreshToken: string;
}
