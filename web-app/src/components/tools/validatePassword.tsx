import { showToast } from './../tools/toast';

export function validatePassword(password: string): boolean {
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  
    const missing = [];
  
    if (!hasUppercase) {
      missing.push("Majuscule");
    }
    if (!hasLowercase) {
      missing.push("Minuscule");
    }
    if (!hasNumber) {
      missing.push("Chiffre");
    }
    if (!hasSpecialCharacter) {
      missing.push("Caractere spécial");
    }
  
    if (missing.length === 0) {
      return true;
    } else {
      showToast('error', `Votre mot de passe requiert les éléments suivants: ${missing.join(", ")}.`);
      return false;
    }
}