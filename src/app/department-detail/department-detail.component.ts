import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { HrService } from '../hr.service';

@Component({
  selector: 'app-department-detail',
  template: `
    <h2>Thank for selecting the department</h2>
    <h3>You selected Department with ID = {{departmentId}}</h3>
    <div>
    <table>
    <thead>
        <tr>
            <th scope="col">Name</th>
            <th scope="col">Salary</th>
            <th scope="col">Age</th>
        </tr>
    </thead>
    <tbody>
        <tr *ngFor="let values of _details">
            <td>{{values.Name}}</td>
            <td>{{values.Salary}}</td>
            <td>{{values.Age}}</td>
        </tr>
    </tbody>
</table>
</div>
<!--<ul *ngFor = "let value of _details">
<li>
    {{value.Name}} - {{value.Salary}} - {{value.Age}}
</li>
</ul>-->
    <router-outlet></router-outlet>
    
    <div>
      <button (click)="gotoDepartments()">Back</button>
    </div>
  `,
  styles: [`.table, th , td {
    border: 1px solid grey;
    border-collapse: collapse;
    padding: 5px;
    }`]
})
export class DepartmentDetailComponent implements OnInit {

  public departmentId : any;
  public _details : any = [];
  constructor(private route: ActivatedRoute, private router: Router, private _hr: HrService) { }

  ngOnInit() 
  {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id')!);
      this.departmentId = id;

    });

    this._hr.getDetails(this.departmentId).subscribe(data=>this._details=data)
  }

  gotoDepartments() 
  {
    let selectedId = this.departmentId ? this.departmentId : null;
    this.router.navigate(['../', { id: selectedId }], { relativeTo: this.route });
  }
}
