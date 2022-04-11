import { Injectable } from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';

@Injectable({
  providedIn: 'root'
})
export class GeneralResource {
  modal: any;

  constructor(private modalService: NzModalService) { }

  handleError(error: string): void {
    this.modal = this.modalService.error({
      nzTitle: 'Erro',
      nzContent: error,
      nzFooter: [
        {
          label: 'Ok',
          onClick: () => this.modal.destroy()
        },
      ],
    });
  }
}
