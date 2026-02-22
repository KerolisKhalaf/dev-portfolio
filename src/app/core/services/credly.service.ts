import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Certification } from '../data/certifications.data';
import { CERTIFICATIONS } from '../data/certifications.data';

const CREDLY_PROFILE = 'https://www.credly.com/users/kiroles-khalaf/badges';

@Injectable({ providedIn: 'root' })
export class CredlyService {
  /**
   * Returns certifications. Credly has no public API for user badges;
   * uses static data from certifications.data.ts. Update that file to add badges.
   */
  getCertifications(): Observable<Certification[]> {
    return of(CERTIFICATIONS);
  }

  getCredlyProfileUrl(): string {
    return CREDLY_PROFILE;
  }
}
