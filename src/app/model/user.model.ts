export class User {
    id: number | undefined;
    username: string | undefined;
    password: string | undefined;
    firstName: string | undefined;
    lastName: string | undefined;
    email: string | undefined;
    gender: string | undefined;
    phone: string | undefined;
    profile: string | undefined;
    enabled: boolean | undefined;
    authorities: Array<any> = [{ authority: '' }];
  }
  