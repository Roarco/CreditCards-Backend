import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CreditCardsService } from 'src/app/services/credit-cards.service';

@Component({
  selector: 'app-credit-cards',
  templateUrl: './credit-cards.component.html',
  styleUrls: ['./credit-cards.component.css']
})
export class CreditCardsComponent implements OnInit {
  cardList: any[] = [];
  accion = 'Agregar';
  form: FormGroup;
  id: any | undefined;

  constructor(private fb: FormBuilder, private toastr: ToastrService, private _creditCardsService: CreditCardsService) {
    this.form = this.fb.group({
      titular: ['', Validators.required],
      numero: ['', [Validators.required, Validators.maxLength(16), Validators.minLength(16)]],
      expiracion: ['', [Validators.required, Validators.maxLength(5), Validators.minLength(5)]],
      cvv: ['', [Validators.required, Validators.maxLength(3), Validators.minLength(3)]]
    });
  }

  ngOnInit(): void {
    this.getCards();
  }

  getCards() {
    this._creditCardsService.getCreditCards().subscribe(
      (data) => {
        this.cardList = data;
      }, error => {
        console.log(error);
      }
    );
  };

  addCard() {
    const card: any = {
      titular: this.form.get('titular')?.value,
      numero: this.form.get('numero')?.value,
      expiracion: this.form.get('expiracion')?.value,
      cvv: this.form.get('cvv')?.value
    }

    if (this.id === undefined){
      this._creditCardsService.addCreditCard(card).subscribe(
        (data) => {
          this.toastr.success('The card has been added successfully', 'added card');
          this.getCards();
          this.form.reset();
        }, error => {
          console.log(error);
        }
      );
    }else {
      card._id = this.id;
      this._creditCardsService.updateCreditCard(this.id, card).subscribe(
        (data) => {
          this.form.reset();
          this.accion = 'Agregar';
          this.id = undefined;
          this.toastr.success('The card has been updated successfully', 'updated card');
          this.getCards();
        }, error => {
          console.log(error);
        });
      }
  }

  deleteCard(id: any) {
    this._creditCardsService.deleteCreditCard(id).subscribe(
      (data) => {
        this.toastr.success('the card was deleted successfully', 'deleted card');
        this.getCards();
      }, error => {
        console.log(error);
      }
    );
  }

  editCard(card: any) {
    this.accion = 'Editar';
    this.id = card._id;

    this.form.patchValue({
      titular: card.titular,
      numero: card.numero,
      expiracion: card.expiracion,
      cvv: card.cvv
    });
  }
}
