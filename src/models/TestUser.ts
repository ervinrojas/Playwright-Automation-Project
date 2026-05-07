
export class TestUser {
  private readonly email: string;
  private readonly role: string;
  private readonly firstName: string;
  private readonly lastName: string;

  constructor(email: string, role: string, firstName: string, lastName: string) {
    this.email = email;
    this.role = role;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  public fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  public getEmail(): string {
    return this.email;
  }

  public getRole(): string {
    return this.role;
  }
}
