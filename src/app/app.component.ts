import { Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit
{
  registerForm: FormGroup;
  submitted = false;
  title = 'task';
  jobtitle:any = ['Software Engineer','Executive Assistant','Administrative Assistant'];
  country:any = ['INDIA','USA','AUSTRALIA','LONDON'];
  empno:any = ['Below 50','Above 50','Below 500','Above 500','Above 1000',' More then 1000'];
  constructor(private formBuilder: FormBuilder) { }
  ngOnInit()
  {
    this.registerForm = this.formBuilder.group({    
      FirstName:['',Validators.required],
      LastName:['',Validators.required],
      WorkEmail:['',[Validators.required, Validators.email]],
      JobTitle:['',[Validators.required]],
      Company:['',Validators.required],
      NoOfEmployees:['',[Validators.required]],
      CTIVendor:['',Validators.required],
      CRMVendor:['',Validators.required],
      PhoneNumber:['',Validators.required],
      Country:['',[Validators.required]],
      AcceptTerms: [false, Validators.requiredTrue]
    },
    );
  }
  get f() {
    return this.registerForm.controls;
  }
  changejob(e) 
  {
    console.log(e.value)
    this.JobTitle.setValue(e.target.value, 
    {
      onlySelf: true
    })
  }
  get JobTitle() 
  {
    return this.registerForm.get('JobTitle');
  }
 
  changecny(h) 
  {
    console.log(h.value)
    this.Country.setValue(h.target.value, 
    {
      onlySelf: true
    })
  }
  get Country() 
  {
    return this.registerForm.get('Country');
  }
  changeemp(g) 
  {
    console.log(g.value)
    this.NoOfEmployees.setValue(g.target.value, 
    {
      onlySelf: true
    })
  }
  get NoOfEmployees() 
  {
    return this.registerForm.get('NoOfEmployees');
  }
  
  onSubmit() 
  {
    this.submitted = true;

    // stop here if form is invalid
    if (!this.registerForm.invalid) 
    {
      return false;
    }
  console.log('SUCCESS!!:-)\n\n' +JSON.stringify(this.registerForm.value))
}

}
