import { ErrorHandler } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

// @Injectable()
export class ApiErrorhandler implements ErrorHandler {

    handleError(error: any): any {
        if (error instanceof HttpErrorResponse) {
            console.log('ERROR-status:' + error.status + ' message:' + error.message);
            console.log(error);
        } else {
            console.log('ERROR-cliente-angular:' + error);
            console.log(error);
        }
    }
}
