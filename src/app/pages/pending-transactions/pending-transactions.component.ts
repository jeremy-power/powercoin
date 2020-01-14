import { Component, OnInit } from '@angular/core';
import { BlockchainService } from 'src/app/services/blockchain.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pending-transactions',
  templateUrl: './pending-transactions.component.html',
  styleUrls: ['./pending-transactions.component.scss']
})
export class PendingTransactionsComponent implements OnInit {
  public pendingTransactions = [];
  constructor(private blockChainService: BlockchainService, private router: Router) { 
    this.pendingTransactions = blockChainService.getPendingTransactions();
  }

  ngOnInit() {
  }

  minePendingTransactions(){
    this.blockChainService.minePendingTransactions();
    this.router.navigate(['/']);
  }

}
