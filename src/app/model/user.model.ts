export class User {
    id: number | undefined;
    username: string | undefined;
    fullName: string | undefined;
    password: string | undefined;
    address: string | undefined;
    crewName: string | undefined;
    post: string | undefined;
    // firstName: string | undefined;
    // lastName: string | undefined;
    email: string | undefined;
    // gender: string | undefined;
    phone: string | undefined;
    profile: string | undefined;
    enabled: boolean | undefined;
    authorities: Array<any> = [{ authority: '' }];
  }
  