import { Injectable } from '@angular/core';
import { Class,URl_API,timetable} from './Data';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Observable, of} from 'rxjs';
import { tap,catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConnectAPIService {
  URL=URl_API;

  constructor(
    private _httpClient :HttpClient
  ) { }
  getAllClass(){
    return this._httpClient.get(`${this.URL}/read_class.php`);
  }
  insertClass_class_name(class_name){
    return this._httpClient.get(`${this.URL}/insert_class.php?class_name=${class_name}`);
  }
  gettkb_class(id_class){
    return this._httpClient.get(`${this.URL}/read_timetable.php?id_class=${id_class}`);
  }
  getAllDay(){
    return this._httpClient.get(`${this.URL}/read_day.php`);
  }

  insert_tkb(timetable){
    return this._httpClient.get(`${this.URL}/insert_timetable.php?id_class=${timetable.id_class}&&id_day=${timetable.id_day}&&content=${timetable.content}`);
  }
  update_tkb(timetable){
    return this._httpClient.get(`${this.URL}/update_timetable.php?id_class=${timetable.id_class}&&id_day=${timetable.id_day}&&content=${timetable.content}`);
  }
  delete_tkb(id_class,id_day){
    return this._httpClient.get(`${this.URL}/delete_timetable.php?id_class=${id_class}&&id_day=${id_day}`);
  }

  check_day_in_tkb(id_class,id_day){
    return this._httpClient.get(`${this.URL}/read_timetable_where_id_class_id_day.php?id_class=${id_class}&&id_day=${id_day}`);
  }
}
