import { AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';

const passwordValidator = (): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {
    const value: string = control.value || ''; // אם הערך אינו מוגדר, נשתמש במחרוזת ריקה

    // בדיקת אורך הסיסמה
    if (value.length < 4) {
      return { minLength: true }; // אם הסיסמה קצרה מ-6 תווים, נחזיר הודעת שגיאה
    }

    // בדיקת תווים בסיסמה
    const hasUpperCase = /[A-Z]/.test(value); // בדיקה אם קיים אות גדולה
    const hasLowerCase = /[a-z]/.test(value); // בדיקה אם קיים אות קטנה
    const hasNumber = /[0-9]/.test(value);    // בדיקה אם קיים מספר

   
    // אם יש חסרים מהדרישות
    if (!hasUpperCase || !hasLowerCase || !hasNumber) {
      return { invalidPassword: true }; // נחזיר הודעת שגיאה על הדרישות החסרות
    }

    return null; // הסיסמה תקינה
  };
};

export const passwordValidatorFn = passwordValidator();
