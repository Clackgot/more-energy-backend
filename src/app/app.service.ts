import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
    getUsers() {
        return [{ id: 1, name: "qe" }, { id: 2, name: "asdasd" }]
    }
}
