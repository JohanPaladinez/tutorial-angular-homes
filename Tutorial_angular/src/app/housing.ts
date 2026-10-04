import {Service} from '@angular/core';
import {HousingLocationInfo} from './housinglocation';

@Service()
export class Housing {
  url = 'http://localhost:3000/locations';

  async getAllHousingLocations(): Promise<HousingLocationInfo[]> {
    const response = await fetch(this.url);
    return (await response.json()) ?? [];
  }

  async getHousingLocationById(
    id: number
  ): Promise<HousingLocationInfo | undefined> {
    const response = await fetch(`${this.url}/${id}`);

    if (!response.ok) {
      return undefined;
    }

    return (await response.json()) ?? undefined;
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(
      `Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`
    );
  }
}