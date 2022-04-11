import { Injectable } from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { LoadComponent } from '../components/load-component/load.component';

@Injectable({
  providedIn: 'root'
})
export class LoadService {
  modal: any;

  constructor(
    private modalService: NzModalService,
  ) { }

  present(): void {
    this.modal = this.modalService.success({
      nzTitle: 'Modal Title',
      nzContent: LoadComponent,
      // nzViewContainerRef: this.viewContainerRef,
    });
  }

  destroy(): void {
    this.modal.destroy();
  }
}
