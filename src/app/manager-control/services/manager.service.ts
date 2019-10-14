import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { Observable, from } from 'rxjs';
import { Manager } from '../models/manager';
import { ManagerListItem } from '../models/manager-list-item';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {
  private url = environment.apiUrl + 'api/managers';

  constructor(private http: HttpClient) { }

  getMamagers(): Observable<Array<ManagerListItem>> {
    return this.http.get<Array<ManagerListItem>>(this.url);
  }

  getManager(managerId: number): Observable<Manager> {
    return this.http.get<Manager>(`${this.url}/${managerId}`);
  }

  addManager(manager: Manager): Observable<Manager> {
    return this.http.post<Manager>(`${this.url}`, manager);
  }

  updateManager(manager: Manager): Observable<Object> {
    return this.http.put<Object>(`${this.url}/${manager.id}`, manager);
  }

  deleteManager(managerId: number): Observable<Object> {
    return this.http.delete<Object>(`${this.url}/${managerId}`);
  }

  setManagerStatus(managerId: number, deletedStatus: boolean): Observable<Object> {
    return this.http.put<Object>(`${this.url}/${managerId}/status/${deletedStatus}`, null);
  }

  uploadNewImageFile(managerId: number, file: File) {
    const fd = new FormData();
    fd.append('image', file, file.name);
    return this.http.post<Object>(`${this.url}/${managerId}/uploadImage`, fd);
  }
}
