import { Component, OnInit } from '@angular/core';
import { BlockchainService } from 'src/app/services/blockchain.service';
import { TransactionsTableComponent } from 'src/app/components/transactions-table/transactions-table.component';
import { Transaction } from 'blockchain-test/src/blockchain';
@Component({
  selector: 'app-create-transaction',
  templateUrl: './create-transaction.component.html',
  styleUrls: ['./create-transaction.component.scss']
})
export class CreateTransactionComponent implements OnInit {

  public newTx;
  public walletKey;

  constructor(private blockChainService: BlockchainService) {
    this.walletKey = blockChainService.walletKeys[0];
   }

  ngOnInit() {
    this.newTx = new Transaction();
  }

  createTransaction(){
    this.newTx.fromAddress = this.walletKey.publicKey;
    this.newTx.signTransaction(this.walletKey.keyObj);

    this.blockChainService.addTransaction(this.newTx);

    this.newTx = new Transaction();
  }
}
