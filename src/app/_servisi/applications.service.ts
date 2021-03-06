import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Application } from '../_tipovi/application';

@Injectable({
  providedIn: 'root'
})
export class ApplicationsService {

  constructor(private http:HttpClient) { }

  public getApplicationsByStudentId(id:number){ 
    return this.http.get<Application[]>("http://localhost:8080/applications/student/"+id);
  }

  public getApplicationsByCompanyId(id:number,status:string){
    return this.http.get<Application[]>("http://localhost:8080/applications/"+id+"?state="+status.toUpperCase());
  }

  public putApplication(internshipId:number,studentId:number, status:string,data:any = {}){
    return this.http.put<any>("http://localhost:8080/applications/"+internshipId+"/"+studentId+"/"+status.toUpperCase(),data);
  }

}
