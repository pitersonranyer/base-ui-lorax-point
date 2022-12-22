import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiPixService } from 'src/app/core/service/api.pix';

@Component({
  selector: 'app-pix',
  templateUrl: './pix.component.html',
  styleUrls: ['./pix.component.scss']
})
export class PixComponent implements OnInit {
  hide = true;
  valorPix = '';
  valorDB = 0;
  descPix: any;
  qrcodeTela = '';
  pixCopyPaste = '';
  form: FormGroup;

    breadscrums = [
    {
      title: 'Dashboad',
      items: ['Home'],
      active: 'Dashboard'
    }
  ];

  constructor(private gerarQrCodeService: ApiPixService, fb: FormBuilder) {
    this.form = fb.group({
      valorPixCurrency: [''],
      descPixCr: ['']
    })
    
  }

  ngOnInit() { }

 
  gerarQrCode() {

      console.log(this.valorPix);
      this.valorDB = parseInt(this.valorPix);
      console.log(this.valorDB.toFixed(2));
      console.log(this.descPix);


     this.gerarQrCodeService.gerarQrCode(this.valorDB, this.descPix).subscribe((pixResponse: any) => {
       this.qrcodeTela = pixResponse.imagemQrcode;
       this.pixCopyPaste = pixResponse.copyPaste
       console.log(pixResponse);
 
     });

  }


  copiarTextPix() {

    var copyText = this.pixCopyPaste;

    navigator.clipboard.writeText(copyText);

    // Alert the copied text
    alert("Copied the text: " + copyText);

  }

  gerarCobranca() {
    this.gerarQrCode();
  }


}
