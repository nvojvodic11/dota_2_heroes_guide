import { Component, Input, OnInit, ViewChild } from "@angular/core";
import { ControlValueAccessor, FormControl, FormControlDirective, FormGroup, ValidationErrors, ValidatorFn } from "@angular/forms";
import { BaseComponent } from "./base-component";

@Component({
    template: ''
})

export abstract class BaseFormComponent extends BaseComponent implements ControlValueAccessor{
    @Input() formGroup: FormGroup;
    @Input() formControlName: string;
    @Input() appearance: 'legacy' | 'standard' | 'fill' | 'outline' = 'outline';
    @Input() isVisible = true;
    @Input() required = false;

    @ViewChild(FormControlDirective, {static: true}) formControlDirective: FormControlDirective;

    ID = 'id';

    constructor(){
      super();
    }

    get control(): FormControl{
      return this.formGroup?.controls[this.formControlName] as FormControl;
    }

    isControlInvalid(): boolean{
      return this.control?.invalid || this.hasFormErrors();
    }

    hasFormErrors(): boolean {
      return this.formGroup?.errors == null;
    }

    getErrorMessage(): any{

      if(!this.isControlInvalid()){
        return null;
      }

      const errors = this.control?.errors;

      if(errors){
        const firstErrorKey = Object.keys(errors)[0];

        if(firstErrorKey){
          return errors;
        }

        if(this.formGroup.errors && this.formGroup.hasValidator?.length){
            this.getFormValidatorsErros(this.formGroup.errors, this.formGroup.validator)
        }
      }
    }

    getFormValidatorsErros(errors: ValidationErrors, validators: any): string{
      let errorMessage;

      for(const key in Object.keys(errors)){
        if(validators.indexOf(key) !== -1){
          errorMessage = errors[key]
        }
      }

      return errorMessage;
    }
    
    writeValue(value: string) {
        this.formControlDirective?.valueAccessor?.writeValue(value);
      }
    
      registerOnChange(fn: any) {
        this.formControlDirective?.valueAccessor?.registerOnChange(fn);
      }
    
      registerOnTouched(fn: any) {
        this.formControlDirective?.valueAccessor?.registerOnTouched(fn);
      }
    
      setDisabledState(isDisabled: boolean) {
        this.formControlDirective?.valueAccessor?.setDisabledState?.(isDisabled);
      }
}
