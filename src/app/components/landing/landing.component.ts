import { HttpClient} from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from '../../services/product.service';
import { FooterComponent } from '../footer/footer.component';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { CheckboxModule } from 'primeng/checkbox';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-loading',
  imports: [RouterOutlet, FooterComponent, FormsModule, CommonModule, CheckboxModule, DialogModule, ConfirmDialogModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})

export class LandingComponent  implements OnInit{
  @ViewChild('loginFrm') loginFrm!: NgForm;
  productList: any[] = [];
  displayModalLogin: boolean = false;
  isApiCallInProgress: boolean = false;
  showLoginPassword:boolean=false;
  phonePattern: string = "^((\\+91-?)|0)?[0-9]{10}$";
  passwordPattern: any = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[\#?!@$%^&*\-])/;

  constructor(private prodSrv: ProductService, private router: Router, private http: HttpClient,
    private toastr: ToastrService,private confirmationService: ConfirmationService, private messageService: MessageService) {
      
  }

  ngOnInit(): void {
     this.getAllProducts();
  }
  navigateToProducts(id: number) {
    this.router.navigate(['/products', id]);
  }
  getAllProducts() {
    this.prodSrv.getProducts().subscribe((res: any) => {
      if (res.result) {
        this.productList = res.data;
      }
    });
  }

  openLoginModal() {
    this.displayModalLogin = true;
  }
  closeLoginModal() {
    this.displayModalLogin = false;
    this.loginFrm.resetForm();
  }
  onEyeClick() {
    this.showLoginPassword = !this.showLoginPassword;
  }

  confirm1(event: Event) {
    this.confirmationService.confirm({
        target: event.target as EventTarget,
        message: 'Are you sure that you want to proceed?',
        header: 'Confirmation',
        closable: true,
        closeOnEscape: true,
        icon: 'pi pi-exclamation-triangle',
        rejectButtonProps: {
            label: 'Cancel',
            severity: 'secondary',
            outlined: true,
        },
        acceptButtonProps: {
            label: 'Save',
        },
        accept: () => {
            this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted' });
        },
        reject: () => {
            this.messageService.add({
                severity: 'error',
                summary: 'Rejected',
                detail: 'You have rejected',
                life: 3000,
            });
        },
    });
}
}
