import { Component, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NGXLogger } from 'ngx-logger';
import { BrowserModule, Title } from '@angular/platform-browser';
import { NotificationService } from 'src/app/core/services/notification.service';
import { AuthenticationService } from 'src/app/core/services/auth.service';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css']
})
export class IconsComponent {

  ELEMENT_DATA: any;
  displayedColumns: string[] = ['fullName', 'datecreation', 'telephone', 'email', 'quantite', 'action'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatSort, { static: true })
  sort: MatSort = new MatSort;

  constructor(
    private logger: NGXLogger,
    private notificationService: NotificationService,
    private titleService: Title,
    private authenticationService: AuthenticationService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.titleService.setTitle('Stocks');
    this.logger.log('Customers loaded');
    this.initData();
    // this.notificationService.openSnackBar('Customers loaded');
  }

  initData() {
    setTimeout(() => {
      this.authenticationService.getAllStock().subscribe(data => {
        this.ELEMENT_DATA = data;
        this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
        this.dataSource.sort = this.sort;
      });
    }, 100);
    
  }

  async editStock(action: any, produit: any) {
    console.log('editStock: ', produit);
    
    if (action == 'delete') {
      await this.authenticationService.removeStock(produit).subscribe(result => {
        console.log('result:', result);
      });
      this.initData();
      this.notificationService.openSnackBar('Produit est supprimé');
    } else if (action == 'add') {
      const dialogRef =this.dialog.open(DialogAnimationsExampleDialog, {
        width: '500px',
        data: {
          "produit": "",
          "description": "",
          "fornisseur": "",
          "contactFornisseur": "",
          "quantite": "0"
      }
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('edit: ', result);
        this.authenticationService.addStock(result).subscribe(r => {
          console.log('result:', r);
          this.initData();
          this.notificationService.openSnackBar('Produit est enregistré');
        });
      });

    } else if (action == 'edit') {
      const dialogRef =this.dialog.open(DialogAnimationsExampleDialog, {
        width: '500px',
        data: produit
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('edit: ', result);
        this.authenticationService.addStock(result).subscribe(r => {
          console.log('result:', r);
          this.initData();
          this.notificationService.openSnackBar('La quantité est modifier');
        });
      });
    }

  }
}


@Component({
  selector: 'edit-produit-dialog',
  templateUrl: './edit-produit-dialog.html',
  standalone: true,
  imports: [MatDialogModule,CommonModule, MatButtonModule, FormsModule, MatInputModule],
})
export class DialogAnimationsExampleDialog implements OnInit {
  data: any;
  quantite: any;
  constructor(public dialogRef: MatDialogRef<DialogAnimationsExampleDialog>, @Inject(MAT_DIALOG_DATA) public produit: any) {
    this.data = produit;
    this.quantite = produit.quantite;
  }
  ngOnInit(): void {
  }


  saveAndClose(): void {
    // Save the edited data and close the dialog with the edited data
    this.dialogRef.close(this.data);
  }
}
