import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TasklistService {

  baseUrl="http://localhost:3000";

  constructor(public http: HttpClient ) { }

  getTaskList(url: any) {
    return this.http.get<any>(this.baseUrlUpdate(url), {
        headers: new HttpHeaders({
            'Content-Type': 'application/json; charset=utf-8',
            'Access-Control-Allow-Origin': this.baseUrlUpdate(url)
        }),
    });
  }

  createTask(url: any, data: any) {
    return this.http.post<any>(this.baseUrlUpdate(url), data, {
        headers: new HttpHeaders({
            'Content-Type': 'application/json; charset=utf-8',
            'Access-Control-Allow-Origin': this.baseUrlUpdate(url)
        }),
    });
  }

  deleteTaskList(url: any, id:any) {
    return this.http.delete<any>(this.baseUrlUpdate(url)+`/${id}`, {
        headers: new HttpHeaders({
            'Content-Type': 'application/json; charset=utf-8',
            'Access-Control-Allow-Origin': this.baseUrlUpdate(url)
        }),
    });
  }

  doneTask(url: any, data: any) {
    return this.http.put<any>(this.baseUrlUpdate(url) +`/${data.id}`, data, {
        headers: new HttpHeaders({
            'Content-Type': 'application/json; charset=utf-8',
            'Access-Control-Allow-Origin': this.baseUrlUpdate(url)
        }),
    });
  }

  protected baseUrlUpdate(url: string): string {
    return (url.startsWith('/')) ? this.baseUrl + url : url;
  }
}
