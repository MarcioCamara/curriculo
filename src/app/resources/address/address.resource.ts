import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Observable } from 'rxjs';
import { Address } from '../../models/Address';
import { GeneralResource } from '../general/general.resource';

@Injectable({
  providedIn: 'root'
})
export class AddressResource extends GeneralResource {
  constructor(
    private httpClient: HttpClient,
    modalService: NzModalService,
  ) {
    super(modalService);
  }

  get(cep: string): Observable<Address> {
    return this.httpClient.get<Address>(`https://viacep.com.br/ws/${cep}/json/`);
  }
}
