import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  constructor() { }

  public loaderStatus: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);


    public pendingRequests = 0;
    public showLoading = false;
    
    /**
     * 
     * @param value
     */
    displayLoader(value: boolean) {
        this.loaderStatus.next(value);
    }
    
     /**
      * Metodo para activar el spinner, cuenta con un contador para saber cuando detenerse.
      */
    public turnOnSpinner() {
        this.pendingRequests++;
        if (!this.showLoading) {
            this.showLoading = true;
            this.displayLoader(this.showLoading);
        }
        
       
    }
    
    /**
     * Metodo para desactivar el spinner, hace uso de un contador para saber cuando detenerse.
     */
    public turnOffSpinner() {
        this.pendingRequests--;
        if (this.pendingRequests <= 0) {
            if (this.showLoading) {
                this.showLoading = false;
                this.displayLoader(this.showLoading);
            }
           
        }
    }
    
    /**
     * 
     */
    public restart(){
        this.pendingRequests = 0;
        this.showLoading = false;
        this.displayLoader(this.showLoading);
    }
}
