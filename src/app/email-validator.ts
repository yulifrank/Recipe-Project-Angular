import { AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';

// תבנית לאימייל
const emailRegEx =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// פונקציית ValidatorFn המבצעת את הבדיקה
const emailPatternValidator = (): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {
    // בדיקת תקינות האימייל
    return control.value && !control.value.match(emailRegEx)
      ? {
          invalidEmail: true, // הוספת הודעת שגיאה אם האימייל אינו תקין
        }
      : null;
  };
};

// יצירת אובייקט המייצג את הודעת השגיאה
export const emailValidator = emailPatternValidator();
